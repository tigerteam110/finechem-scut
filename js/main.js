/**
 * Main Application Script for Academic Portal
 * 华南理工大学化学与化工学院 · 精细化工团队全局交互与多Part独立视图路由
 */

class AppRouter {
  constructor() {
    this.validViews = ['home', 'pi', 'publications', 'team', 'exam', 'contact'];
    this.defaultView = 'home';
    this.currentView = this.defaultView;
  }

  init() {
    // 1. Listen for hash changes
    window.addEventListener('hashchange', () => {
      this.handleRoute();
    });

    // 2. Intercept nav links with data-view or hash matching
    document.querySelectorAll('[data-view-target]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = link.getAttribute('data-view-target');
        this.navigateTo(targetView);
      });
    });

    // 3. Handle initial route on page load
    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash.replace('#', '').trim();
    const target = this.validViews.includes(hash) ? hash : this.defaultView;
    this.switchView(target);
  }

  navigateTo(viewName) {
    if (!this.validViews.includes(viewName)) viewName = this.defaultView;
    if (window.location.hash === '#' + viewName) {
      this.switchView(viewName);
    } else {
      window.location.hash = '#' + viewName;
    }
  }

  switchView(viewName) {
    this.currentView = viewName;

    // 1. Hide all view-pages and show only current
    document.querySelectorAll('.view-page').forEach(page => {
      page.classList.remove('active');
    });

    const activeEl = document.getElementById('view-' + viewName);
    if (activeEl) {
      activeEl.classList.add('active');
    }

    // 2. Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
      const target = link.getAttribute('data-view-target');
      if (target === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 3. Scroll to top so user never has residual scroll
    window.scrollTo(0, 0);

    // 4. If switching to exam, ensure view state is accurate
    if (viewName === 'exam' && window.safetyEngine) {
      window.safetyEngine.updateViewState();
    }
  }
}

window.appRouter = new AppRouter();

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Localization
  if (window.i18n) {
    window.i18n.init();
  }

  // 2. Initialize Safety Exam Engine (Login Gate & Events)
  if (window.safetyEngine) {
    window.safetyEngine.init();
  }

  // 3. Initialize Hero Banner Slider
  if (window.heroSlider) {
    window.heroSlider.init();
  }

  // 4. Initialize Router (Independent Part-based Navigation)
  if (window.appRouter) {
    window.appRouter.init();
  }

  // 4. Language Switcher Buttons
  const btnZh = document.getElementById('langBtnZh');
  const btnEn = document.getElementById('langBtnEn');
  if (btnZh) {
    btnZh.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.i18n) window.i18n.setLanguage('zh');
    });
  }
  if (btnEn) {
    btnEn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.i18n) window.i18n.setLanguage('en');
    });
  }

  // 5. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('primaryNav');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav-open');
      mobileToggle.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // 6. Exam Submit & Reset Buttons
  const examSubmitBtn = document.getElementById('examSubmitBtn');
  const examResetBtn = document.getElementById('examResetBtn');
  if (examSubmitBtn) {
    examSubmitBtn.addEventListener('click', () => {
      if (window.safetyEngine) {
        window.safetyEngine.submitExam();
      }
    });
  }
  if (examResetBtn) {
    examResetBtn.addEventListener('click', () => {
      if (window.safetyEngine) {
        window.safetyEngine.resetExam();
      }
    });
  }

  // 7. Close Modal on Background Click or Escape Key
  const modal = document.getElementById('examResultModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (window.safetyEngine) window.safetyEngine.closeResultModal();
      }
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (window.safetyEngine) window.safetyEngine.closeResultModal();
    }
  });
});
