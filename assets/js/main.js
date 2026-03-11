document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content-panel');
  const toc = document.getElementById('toc-panel');
  const sidebarContainer = document.getElementById('sidebar-container');
  const menuToggleButton = document.querySelector('.menu-toggle');

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
