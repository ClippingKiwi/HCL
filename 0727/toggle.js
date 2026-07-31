document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleIcon = toggleBtn.querySelector('.toggle-icon');
  const toggleText = toggleBtn.querySelector('.toggle-text');

  // 1. 저장된 테마 불러오기 (없으면 기기/시스템 설정 확인)
  const savedTheme = localStorage.getItem('theme');

  // 초기 테마 설정
  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    enableLightMode();
  } else {
    enableDarkMode();
  }

  // 2. 버튼 클릭 이벤트
  toggleBtn.addEventListener('click', () => {
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (isLightMode) {
      enableDarkMode();
      localStorage.setItem('theme', 'dark');
    } else {
      enableLightMode();
      localStorage.setItem('theme', 'light');
    }
  });

  // 💡 라이트 모드일 때: 현재 상태인 '☀️ 주간 모드'로 표시
  function enableLightMode() {
    document.body.classList.add('light-mode');
    if (toggleIcon) toggleIcon.textContent = '☀️';
    if (toggleText) toggleText.textContent = '낮 테마';
  }

  // 💡 다크 모드일 때: 현재 상태인 '🌙 야간 모드'로 표시
  function enableDarkMode() {
    document.body.classList.remove('light-mode');
    if (toggleIcon) toggleIcon.textContent = '🌙';
    if (toggleText) toggleText.textContent = '밤 테마';
  }
});