/* Re-upload fix */

/**
 * Navigation System
 * Handles all navigation interactions and active states
 */

const Navigation = {
    currentSection: 'about',
    sections: ['about', 'research-interests', 'publications', 'research-projects', 'experience', 'skills', 'contact'],
    isNavigating: false,

    // Initialize navigation system
    init() {
        this.setupScrollSpy();
        this.setupSmoothScrolling();
        this.setupMobileNavigation();
        this.setupKeyboardNavigation();
        this.handleInitialHash();
        
        Utils.log.success('Navigation system initialized');
    },

    // Setup scroll spy for active navigation
    setupScrollSpy() {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            if (this.isNavigating) return;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    this.setActiveSection(sectionId);
                }
            });
        }, observerOptions);

        // Observe all sections
        this.sections.forEach(sectionId => {
            const section = document.querySelector(`#${sectionId}`);
            if (section) {
                observer.observe(section);
            }
        });
    },

    // Setup smooth scrolling for navigation links
    setupSmoothScrolling() {
        document.addEventListener('click', (e) => {
            const navLink = e.target.closest('.nav-link');
            if (!navLink) return;

            e.preventDefault();
            
            const href = navLink.getAttribute('href');
            const sectionId = navLink.getAttribute('data-section') || href?.substring(1);
            
            if (sectionId) {
                this.navigateToSection(sectionId);
            }
        });
    },

    // Setup mobile navigation enhancements
    setupMobileNavigation() {
        // Add mobile menu toggle if needed
        const nav = document.querySelector('.nav');
        
        // Add scroll effect to navigation
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', Utils.throttle(() => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
            
            // Hide nav on scroll down, show on scroll up (mobile)
            if (window.innerWidth <= 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    nav.style.transform = 'translateY(-100%)';
                } else {
                    nav.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollY = currentScrollY;
        }, 100));
    },

    // Setup keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Only handle if no input is focused
            if (document.activeElement.tagName === 'INPUT' || 
                document.activeElement.tagName === 'TEXTAREA') {
                return;
            }

            switch(e.key) {
                case 'ArrowDown':
                case 'j':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.navigateNext();
                    }
                    break;
                    
                case 'ArrowUp':
                case 'k':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.navigatePrevious();
                    }
                    break;
                    
                case 'Home':
                    e.preventDefault();
                    this.navigateToSection('about');
                    break;
                    
                case 'End':
                    e.preventDefault();
                    this.navigateToSection('contact');
                    break;
            }
        });
    },

    // Handle initial hash in URL
    handleInitialHash() {
        const hash = Utils.url.getHash();
        if (hash && this.sections.includes(hash)) {
            // Delay to ensure sections are loaded
            setTimeout(() => {
                this.navigateToSection(hash);
            }, 500);
        }
    },

    // Navigate to specific section
    navigateToSection(sectionId, updateUrl = true) {
        if (!this.sections.includes(sectionId)) {
            Utils.log.warn(`Section not found: ${sectionId}`);
            return;
        }

        const targetElement = document.querySelector(`#${sectionId}`);
        if (!targetElement) {
            Utils.log.warn(`Section element not found: #${sectionId}`);
            return;
        }

        this.isNavigating = true;
        this.currentSection = sectionId;

        // Update active navigation
        this.setActiveSection(sectionId);

        // Smooth scroll to section
        const headerOffset = document.querySelector('.nav').offsetHeight + 20;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Use custom smooth scroll for better control
        this.smoothScrollTo(offsetPosition, 800);

        // Update URL
        if (updateUrl) {
            Utils.url.setHash(sectionId);
        }

        // Reset navigation flag after animation
        setTimeout(() => {
            this.isNavigating = false;
        }, 1000);

        // Analytics (if you add tracking later)
        this.trackNavigation(sectionId);
    },

    // Navigate to next section
    navigateNext() {
        const currentIndex = this.sections.indexOf(this.currentSection);
        const nextIndex = (currentIndex + 1) % this.sections.length;
        const nextSection = this.sections[nextIndex];
        
        this.navigateToSection(nextSection);
    },

    // Navigate to previous section
    navigatePrevious() {
        const currentIndex = this.sections.indexOf(this.currentSection);
        const prevIndex = currentIndex === 0 ? this.sections.length - 1 : currentIndex - 1;
        const prevSection = this.sections[prevIndex];
        
        this.navigateToSection(prevSection);
    },

    // Set active section in navigation
    setActiveSection(sectionId) {
        if (!sectionId || !this.sections.includes(sectionId)) return;

        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current section link
        const activeLink = document.querySelector(
            `.nav-link[data-section="${sectionId}"], .nav-link[href="#${sectionId}"]`
        );
        
        if (activeLink) {
            activeLink.classList.add('active');
            
            // Add ripple effect
            this.addRippleEffect(activeLink);
        }

        this.currentSection = sectionId;
        
        // Update page title
        this.updatePageTitle(sectionId);
    },

    // Custom smooth scroll implementation
    smoothScrollTo(targetPosition, duration = 800) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animateScroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function (ease-in-out-cubic)
            const easeProgress = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * easeProgress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    },

    // Add ripple effect to navigation links
    addRippleEffect(element) {
        // Remove existing ripple
        const existingRipple = element.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        // Create ripple element
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
            z-index: 0;
        `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    },

    // Update page title based on current section
    updatePageTitle(sectionId) {
        const titles = {
            'about': 'About - Mureed Sajjad',
            'research-interests': 'Research Interests - Mureed Sajjad',
            'publications': 'Publications - Mureed Sajjad',
            'research-projects': 'Research Projects - Mureed Sajjad',
            'experience': 'Experience - Mureed Sajjad',
            'skills': 'Technical Skills - Mureed Sajjad',
            'contact': 'Contact - Mureed Sajjad'
        };

        document.title = titles[sectionId] || 'Mureed Sajjad - Biomedical Data Science Researcher';
    },

    // Track navigation for analytics (placeholder)
    trackNavigation(sectionId) {
        // Add Google Analytics or other tracking here if needed
        Utils.log.info(`Navigated to section: ${sectionId}`);
        
        // Example: gtag('event', 'page_view', { page_title: sectionId });
    },

    // Get current section info
    getCurrentSection() {
        return {
            id: this.currentSection,
            element: document.querySelector(`#${this.currentSection}`),
            index: this.sections.indexOf(this.currentSection)
        };
    },

    // Check if section exists
    hasSection(sectionId) {
        return this.sections.includes(sectionId) && 
               document.querySelector(`#${sectionId}`) !== null;
    },

    // Get all navigation links
    getNavLinks() {
        return document.querySelectorAll('.nav-link');
    },

    // Refresh navigation state
    refresh() {
        const currentHash = Utils.url.getHash();
        if (currentHash && this.hasSection(currentHash)) {
            this.setActiveSection(currentHash);
        }
    },

    // Add navigation progress indicator
    addProgressIndicator() {
        const progressBar = document.createElement('div');
        progressBar.className = 'nav-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: var(--gradient-primary);
            z-index: 1001;
            transition: width 0.3s ease;
        `;
        
        document.body.appendChild(progressBar);

        // Update progress on scroll
        window.addEventListener('scroll', Utils.throttle(() => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
        }, 50));
    },

    // Initialize navigation system
    setup() {
        this.init();
        this.addProgressIndicator();
        
        // Add CSS for navigation effects
        this.addNavigationStyles();
    },

    // Add navigation-specific styles
    addNavigationStyles() {
        const styles = `
            <style id="navigation-styles">
                @keyframes ripple-animation {
                    to {
                        width: 100px;
                        height: 100px;
                        opacity: 0;
                    }
                }
                
                .nav-scrolled {
                    background: rgba(248, 250, 252, 0.98);
                    box-shadow: var(--shadow-lg);
                }
                
                .nav-link {
                    position: relative;
                    z-index: 1;
                }
                
                .nav-progress {
                    box-shadow: 0 0 10px var(--eth-blue);
                }
                
                /* Mobile navigation enhancements */
                @media (max-width: 768px) {
                    .nav {
                        transition: transform var(--transition-normal);
                    }
                    
                    .nav-content {
                        padding: var(--space-2) 0;
                    }
                    
                    .nav-link {
                        padding: var(--space-2) var(--space-4);
                        margin: var(--space-1) 0;
                        border-radius: var(--radius-lg);
                        font-size: var(--font-size-sm);
                    }
                }
                
                /* Navigation accessibility */
                .nav-link:focus {
                    outline: 2px solid var(--eth-blue);
                    outline-offset: 2px;
                }
                
                /* Active section indicator */
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20px;
                    height: 3px;
                    background: var(--bio-green);
                    border-radius: var(--radius-full);
                }
                
                /* Hover effects */
                .nav-link:not(.active):hover {
                    background: rgba(0, 63, 127, 0.05);
                }
            </style>
        `;
        
        if (!document.querySelector('#navigation-styles')) {
            document.head.insertAdjacentHTML('beforeend', styles);
        }
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Navigation.setup();
});

// Export for global use
window.Navigation = Navigation;