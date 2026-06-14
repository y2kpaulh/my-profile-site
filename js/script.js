document.addEventListener('DOMContentLoaded', function () {
  // 다크/라이트 모드 토글
  var themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function () {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // 모바일 메뉴 토글
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuIconOpen = document.getElementById('menu-icon-open');
  var menuIconClose = document.getElementById('menu-icon-close');

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', function () {
    var isHidden = mobileMenu.classList.toggle('hidden');
    menuIconOpen.classList.toggle('hidden');
    menuIconClose.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
  });

  // 모바일 메뉴 내 링크 클릭 시 메뉴 닫기
  document.querySelectorAll('#mobile-menu a').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // 스크롤 시 섹션 페이드인
  var sections = document.querySelectorAll('.fade-in-section');
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach(function (section) {
    observer.observe(section);
  });

  // 푸터 연도 자동 갱신
  var currentYear = document.getElementById('current-year');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
