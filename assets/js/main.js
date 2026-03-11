document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content-panel');
  const toc = document.getElementById('toc-panel');
  const sidebarContainer = document.getElementById('sidebar-container');
  const menuToggleButton = document.querySelector('.menu-toggle');

  function linkifyTextUrls(root) {
    const urlRegex = /https?:\/\/[^\s<>"'`]+/g;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.nodeValue.match(urlRegex)) {
          return NodeFilter.FILTER_REJECT;
        }

        const parent = node.parentElement;
        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }

        if (parent.closest('a, code, pre, script, style, textarea')) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes = [];
    let currentNode = walker.nextNode();
    while (currentNode) {
      textNodes.push(currentNode);
      currentNode = walker.nextNode();
    }

    textNodes.forEach(function (textNode) {
      const text = textNode.nodeValue;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      let match;

      while ((match = urlRegex.exec(text)) !== null) {
        const rawUrl = match[0];
        const start = match.index;
        let end = start + rawUrl.length;
        let cleanUrl = rawUrl;

        while (/[),.!?;:]$/.test(cleanUrl)) {
          cleanUrl = cleanUrl.slice(0, -1);
          end -= 1;
        }

        if (start > lastIndex) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex, start)));
        }

        const link = document.createElement('a');
        link.href = cleanUrl;
        link.textContent = cleanUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        fragment.appendChild(link);

        if (end < start + rawUrl.length) {
          fragment.appendChild(document.createTextNode(text.slice(end, start + rawUrl.length)));
        }

        lastIndex = start + rawUrl.length;
      }

      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }

      textNode.parentNode.replaceChild(fragment, textNode);
      urlRegex.lastIndex = 0;
    });
  }

  function getYouTubeVideoId(url) {
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace('www.', '');

      if (host === 'youtu.be') {
        return parsed.pathname.split('/').filter(Boolean)[0] || null;
      }

      if (host === 'youtube.com' || host === 'm.youtube.com') {
        if (parsed.pathname === '/watch') {
          return parsed.searchParams.get('v');
        }

        if (parsed.pathname.startsWith('/shorts/')) {
          return parsed.pathname.split('/')[2] || null;
        }

        if (parsed.pathname.startsWith('/embed/')) {
          return parsed.pathname.split('/')[2] || null;
        }
      }
    } catch (error) {
      return null;
    }

    return null;
  }

  function embedYouTubeLinks(root) {
    const links = root.querySelectorAll('a[href]');

    links.forEach(function (link) {
      if (link.closest('.youtube-embed')) {
        return;
      }

      const href = link.getAttribute('href');
      if (!href) {
        return;
      }

      const videoId = getYouTubeVideoId(href);
      if (!videoId) {
        return;
      }

      const wrapper = document.createElement('div');
      wrapper.className = 'youtube-embed';

      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/' + videoId;
      iframe.title = 'YouTube video player';
      iframe.loading = 'lazy';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;

      wrapper.appendChild(iframe);

      const paragraph = link.closest('p');
      if (paragraph && paragraph.textContent && paragraph.textContent.trim() === link.textContent.trim()) {
        paragraph.replaceWith(wrapper);
        return;
      }

      link.replaceWith(wrapper);
    });
  }

  // 모바일 메뉴 토글
  if (menuToggleButton && sidebarContainer) {
    menuToggleButton.addEventListener('click', function () {
      const isOpen = sidebarContainer.classList.toggle('open');
      menuToggleButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // TOC 생성: 필요한 요소가 없으면 안전하게 종료
  if (!content || !toc) {
    return;
  }

  // 본문 내 일반 텍스트 URL(http/https)을 자동 링크로 변환
  linkifyTextUrls(content);

  // YouTube 링크를 재생 가능한 임베드 박스로 변환
  embedYouTubeLinks(content);

  const headers = content.querySelectorAll('h1, h2');
  const ul = document.createElement('ul');

  headers.forEach(function (header) {
    if (!header.id) {
      return;
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + header.id;
    a.textContent = header.textContent;
    li.appendChild(a);

    ul.appendChild(li);
  });

  if (headers.length > 0) {
    toc.appendChild(ul);
    return;
  }

  const emptyState = document.createElement('div');
  emptyState.className = 'toc-empty';
  emptyState.textContent = 'No outline';
  toc.appendChild(emptyState);
});
