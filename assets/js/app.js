(function () {
  const html = document.documentElement;
  const yearEl = document.getElementById('year');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
  const profileBtn = document.getElementById('profileBtn');
  const profileMenu = document.getElementById('profileMenu');
  const notifBtn = document.getElementById('notifBtn');
  const notifMenu = document.getElementById('notifMenu');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  function setYear() {
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
  }

  function isSystemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark' || (theme === 'system' && isSystemDark());
    html.classList.toggle('dark', isDark);
    try { localStorage.setItem('theme', theme); } catch (_) {}
    updateThemeIcon(isDark);
  }

  function updateThemeIcon(isDark) {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  function initTheme() {
    let theme = 'system';
    try {
      theme = localStorage.getItem('theme') || 'system';
    } catch (_) {}
    applyTheme(theme);
  }

  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
  }

  function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
  }

  function toggleMenu(btn, menu) {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('hidden', expanded);
  }

  function clickOutside(targetMenu, targetBtn, evt) {
    if (!targetMenu || !targetBtn) return true;
    const clickInsideMenu = targetMenu.contains(evt.target);
    const clickOnBtn = targetBtn.contains(evt.target);
    return !(clickInsideMenu || clickOnBtn);
  }

  function initMenus() {
    if (profileBtn && profileMenu) {
      profileBtn.addEventListener('click', () => toggleMenu(profileBtn, profileMenu));
    }
    if (notifBtn && notifMenu) {
      notifBtn.addEventListener('click', () => toggleMenu(notifBtn, notifMenu));
    }
    document.addEventListener('click', (evt) => {
      if (profileMenu && profileBtn && clickOutside(profileMenu, profileBtn, evt)) {
        profileMenu.classList.add('hidden');
        profileBtn.setAttribute('aria-expanded', 'false');
      }
      if (notifMenu && notifBtn && clickOutside(notifMenu, notifBtn, evt)) {
        notifMenu.classList.add('hidden');
        notifBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initSidebar() {
    if (sidebarOpenBtn) sidebarOpenBtn.addEventListener('click', openSidebar);
    if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
  }

  function initThemeToggle() {
    if (!themeToggleBtn) return;
    themeToggleBtn.addEventListener('click', () => {
      const isDarkNow = html.classList.contains('dark');
      applyTheme(isDarkNow ? 'light' : 'dark');
    });
  }

  function makeGradient(ctx, baseColor) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, baseColor.replace('1)', '0.3)'));
    gradient.addColorStop(1, baseColor.replace('1)', '0)'));
    return gradient;
  }

  function initCharts() {
    if (!(window.Chart && document.getElementById('lineChart'))) return;

    const isDark = html.classList.contains('dark');
    const axisColor = isDark ? '#9ca3af' : '#6b7280';
    const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineBase = 'rgba(99,102,241,1)';
    const lineGradient = makeGradient(lineCtx, lineBase);

    const lineChart = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
        datasets: [
          {
            label: 'Revenu',
            data: [12, 19, 15, 22, 30, 28, 35, 40, 38, 45, 48, 58],
            fill: true,
            backgroundColor: lineGradient,
            borderColor: 'rgba(99,102,241,1)',
            pointRadius: 3,
            tension: 0.35,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index', intersect: false },
        },
        interaction: { intersect: false, mode: 'index' },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: axisColor },
          },
          y: {
            grid: { color: gridColor },
            ticks: { color: axisColor },
          },
        },
      },
    });

    const doughnutEl = document.getElementById('doughnutChart');
    if (doughnutEl) {
      const doughnutCtx = doughnutEl.getContext('2d');
      new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Desktop', 'Mobile', 'Tablette'],
          datasets: [
            {
              data: [55, 35, 10],
              backgroundColor: ['#6366f1', '#22c55e', '#f59e0b'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { color: axisColor } } },
          cutout: '65%',
        },
      });
    }

    const resizeObserver = new ResizeObserver(() => {
      lineChart.resize();
    });
    resizeObserver.observe(document.body);

    const mo = new MutationObserver(() => {
      const nowDark = html.classList.contains('dark');
      if (nowDark !== isDark) {
        try { window.location.reload(); } catch (_) {}
      }
    });
    mo.observe(html, { attributes: true, attributeFilter: ['class'] });
  }

  function initLucide() {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    } else {
      document.addEventListener('lucide:load', () => window.lucide.createIcons());
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setYear();
    initTheme();
    initThemeToggle();
    initSidebar();
    initMenus();
    initLucide();
    initCharts();
  });
})();