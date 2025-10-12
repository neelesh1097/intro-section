 const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileSidebar = document.querySelector('.mobile-sidebar');
  const closeBtn = document.querySelector('.close-btn');
  const dropdowns = document.querySelectorAll('.mobile-dropdown');

  // Open sidebar
  mobileMenuToggle.addEventListener('click', () => {
    mobileSidebar.classList.add('active');
  });

  // Close sidebar
  closeBtn.addEventListener('click', () => {
    mobileSidebar.classList.remove('active');
  });

  // Dropdown toggle
  dropdowns.forEach(drop => {
    drop.addEventListener('click', () => {
      drop.classList.toggle('active');
    });
  });