/**
 * Hero Banner Carousel Controller for Academic Website
 * 华南理工大学化学与化工学院 · 精细化工团队全屏轮播与方向代表作同步引擎
 */

class HeroSlider {
  constructor() {
    this.currentIndex = 0;
    this.totalSlides = 4;
    this.autoPlayInterval = 6000;
    this.timer = null;
    this.isPaused = false;
  }

  init() {
    this.slides = document.querySelectorAll('.hero-slide');
    this.totalSlides = this.slides.length || 4;
    this.navDots = document.querySelectorAll('.hero-pagination .page-node');
    this.prevBtn = document.getElementById('heroPrevBtn');
    this.nextBtn = document.getElementById('heroNextBtn');
    this.sliderContainer = document.getElementById('heroCarousel');
    this.progressTabs = document.querySelectorAll('.progress-tab');
    this.progressPanels = document.querySelectorAll('.progress-panel');
    this.progressContainer = document.querySelector('.progress-panels');

    if (!this.slides.length) return;

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prevSlide();
        this.restartTimer();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.nextSlide();
        this.restartTimer();
      });
    }

    this.navDots.forEach(node => {
      node.addEventListener('click', () => {
        const targetIdx = parseInt(node.getAttribute('data-slide'), 10);
        if (!isNaN(targetIdx)) {
          this.goToSlide(targetIdx);
          this.restartTimer();
        }
      });
    });

    // Synchronized progress tabs: click to switch direction and banner
    this.progressTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetDir = parseInt(tab.getAttribute('data-dir'), 10);
        if (!isNaN(targetDir)) {
          this.goToSlide(targetDir);
          this.restartTimer();
        }
      });
    });

    // Hero action buttons: smooth scroll to progress section and activate corresponding direction
    const scrollButtons = document.querySelectorAll('.btn-scroll-progress');
    scrollButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const dirIndex = parseInt(btn.getAttribute('data-target-dir'), 10);
        if (!isNaN(dirIndex)) {
          this.goToSlide(dirIndex);
          this.restartTimer();
        }
        const targetSection = document.getElementById('home-progress-section');
        if (targetSection) {
          const header = document.querySelector('.site-header');
          const headerHeight = header ? header.offsetHeight : 74;
          const targetY = targetSection.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 10);
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }
      });
    });

    // Pause timer on hover over carousel or progress section for comfortable reading
    if (this.sliderContainer) {
      this.sliderContainer.addEventListener('mouseenter', () => {
        this.isPaused = true;
      });
      this.sliderContainer.addEventListener('mouseleave', () => {
        this.isPaused = false;
      });
    }

    const homeProgressSec = document.getElementById('home-progress-section');
    if (homeProgressSec) {
      homeProgressSec.addEventListener('mouseenter', () => {
        this.isPaused = true;
      });
      homeProgressSec.addEventListener('mouseleave', () => {
        this.isPaused = false;
      });
    } else if (this.progressContainer) {
      this.progressContainer.addEventListener('mouseenter', () => {
        this.isPaused = true;
      });
      this.progressContainer.addEventListener('mouseleave', () => {
        this.isPaused = false;
      });
    }

    // Touch swipe gesture support for mobile devices
    if (this.sliderContainer) {
      let touchStartX = 0;
      let touchEndX = 0;
      let touchStartY = 0;
      let touchEndY = 0;

      this.sliderContainer.addEventListener('touchstart', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          touchStartX = e.changedTouches[0].screenX;
          touchStartY = e.changedTouches[0].screenY;
        }
      }, { passive: true });

      this.sliderContainer.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          touchEndX = e.changedTouches[0].screenX;
          touchEndY = e.changedTouches[0].screenY;
          const diffX = touchEndX - touchStartX;
          const diffY = touchEndY - touchStartY;
          if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
              this.nextSlide();
            } else {
              this.prevSlide();
            }
            this.restartTimer();
          }
        }
      }, { passive: true });
    }

    this.startTimer();
    this.goToSlide(0);
  }

  goToSlide(index) {
    if (index < 0) index = this.totalSlides - 1;
    if (index >= this.totalSlides) index = 0;
    this.currentIndex = index;

    // 1. Update hero slides
    this.slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // 2. Update pagination dots
    this.navDots.forEach((node, idx) => {
      if (idx === index) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    // 3. Update synchronized progress tabs
    if (this.progressTabs && this.progressTabs.length) {
      this.progressTabs.forEach((tab, idx) => {
        if (idx === index) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }

    // 4. Update synchronized progress panels (with crossfade)
    if (this.progressPanels && this.progressPanels.length) {
      this.progressPanels.forEach((panel, idx) => {
        if (idx === index) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    }
  }

  nextSlide() {
    this.goToSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.goToSlide(this.currentIndex - 1);
  }

  startTimer() {
    this.clearTimer();
    this.timer = setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, this.autoPlayInterval);
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  restartTimer() {
    this.clearTimer();
    this.startTimer();
  }
}

window.heroSlider = new HeroSlider();
