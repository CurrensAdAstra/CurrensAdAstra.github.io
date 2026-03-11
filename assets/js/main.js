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

  const headers = content.querySelectorAll('h2, h3');
  const ul = document.createElement('ul');

  let lastH2Li = null;
  let subUl = null;

  headers.forEach(function (header) {
    if (!header.id) {
      return;
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + header.id;
    a.textContent = header.textContent;
    li.appendChild(a);

    if (header.tagName.toLowerCase() === 'h2') {
      ul.appendChild(li);
      lastH2Li = li;
      subUl = null;
      return;
    }

    // h3
    if (lastH2Li) {
      if (!subUl) {
        subUl = document.createElement('ul');
        subUl.classList.add('toc-sub-list');
        lastH2Li.appendChild(subUl);
      }
      subUl.appendChild(li);
      return;
    }

    // 선행 h2가 없는 h3는 최상위로 처리
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
