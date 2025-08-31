/* Re-upload fix */

/**
 * Main Application Logic
 * ETH Zurich Style Portfolio
 * Author: Mureed Sajjad
 */

// Application state
const App = {
    currentSection: 'about',
    isLoading: false,
    observers: {
        intersection: null,
        resize: null
    },
    
    // Initialize the application
    init() {
        console.log('🚀 Initializing Biomedical Portfolio...');
        
        this.setupEventListeners();
        this.initializeObservers();
        this.loadAllSections();
        this.setupSmoothScrolling();
        this.initializeAnimations();
        
        console.log('✅ Portfolio initialized successfully!');
    },
    
    // Set up all event listeners
    setupEventListeners() {
        // Navigation clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link')) {
                e.preventDefault();
                const section = e.target.getAttribute('data-section') || 
                               e.target.getAttribute('href').substring(1);
                this.navigateToSection(section);
            }
        });
        
        // Contact form submission
        document.addEventListener('submit', (e) => {
            if (e.target.matches('#contactForm')) {
                e.preventDefault();
                this.handleContactForm(e.target);
            }
        });
        
        // Handle profile image error
        document.addEventListener('error', (e) => {
            if (e.target.matches('.profile-img img')) {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
            }
        }, true);
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' && e.ctrlKey) {
                this.navigateToNextSection();
            } else if (e.key === 'ArrowUp' && e.ctrlKey) {
                this.navigateToPrevSection();
            }
        });
        
        // Window resize
        window.addEventListener('resize', Utils.debounce(() => {
            this.handleResize();
        }, 250));
        
        // Page visibility change
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.refreshAnimations();
            }
        });
    },
    
    // Initialize intersection observers for animations
    initializeObservers() {
        // Intersection Observer for animations
        this.observers.intersection = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    // Update active navigation
                    if (entry.target.matches('.section')) {
                        this.updateActiveNavigation(entry.target.id);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        // Observe all sections and animated elements
        document.querySelectorAll('.section, .card, .interest-card, .publication-card, .project-card').forEach(el => {
            this.observers.intersection.observe(el);
        });
    },
    
    // Load all section content
    async loadAllSections() {
        const sections = ['about', 'research-interests', 'publications', 'research-projects', 'experience', 'skills', 'contact'];
        
        this.isLoading = true;
        this.showLoadingState();
        
        try {
            // Load sections in parallel for better performance
            await Promise.all(sections.map(section => this.loadSection(section)));
            
            console.log('✅ All sections loaded successfully');
            this.hideLoadingState();
        } catch (error) {
            console.error('❌ Error loading sections:', error);
            this.showErrorState();
        } finally {
            this.isLoading = false;
        }
    },
    
    // Load individual section content
    async loadSection(sectionName) {
        try {
            const sectionElement = document.querySelector(`#${sectionName}`);
            if (!sectionElement) {
                console.warn(`⚠️ Section element not found: ${sectionName}`);
                return;
            }
            
            // Check if section has a loader function
            const loaderFunctionName = `load${Utils.capitalize(sectionName.replace('-', ''))}Section`;
            
            if (typeof window[loaderFunctionName] === 'function') {
                await window[loaderFunctionName](sectionElement);
                console.log(`✅ Loaded section: ${sectionName}`);
            } else {
                console.warn(`⚠️ No loader function found for: ${sectionName}`);
            }
            
        } catch (error) {
            console.error(`❌ Error loading section ${sectionName}:`, error);
            throw error;
        }
    },
    
    // Navigate to specific section
    navigateToSection(sectionId) {
        const target = document.querySelector(`#${sectionId}`);
        if (!target) {
            console.warn(`⚠️ Section not found: ${sectionId}`);
            return;
        }
        
        this.currentSection = sectionId;
        this.updateActiveNavigation(sectionId);
        
        // Smooth scroll to section
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update URL without page reload
        if (history.pushState) {
            history.pushState(null, null, `#${sectionId}`);
        }
    },
    
    // Update active navigation state
    updateActiveNavigation(sectionId) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current section link
        const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"], .nav-link[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        this.currentSection = sectionId;
    },
    
    // Navigate to next section
    navigateToNextSection() {
        const sections = ['about', 'research-interests', 'publications', 'research-projects', 'experience', 'skills', 'contact'];
        const currentIndex = sections.indexOf(this.currentSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        this.navigateToSection(sections[nextIndex]);
    },
    
    // Navigate to previous section
    navigateToPrevSection() {
        const sections = ['about', 'research-interests', 'publications', 'research-projects', 'experience', 'skills', 'contact'];
        const currentIndex = sections.indexOf(this.currentSection);
        const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
        this.navigateToSection(sections[prevIndex]);
    },
    
    // Setup smooth scrolling
    setupSmoothScrolling() {
        // Enable smooth scrolling for all internal links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link && link.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.navigateToSection(targetId);
            }
        });
    },
    
    // Initialize animations
    initializeAnimations() {
        // Add animation classes to elements
        document.querySelectorAll('.section').forEach((section, index) => {
            section.classList.add('fade-in-up');
            section.style.animationDelay = `${index * 0.1}s`;
        });
        
        document.querySelectorAll('.card, .interest-card, .publication-card, .project-card').forEach((card, index) => {
            card.classList.add('scale-in');
            card.style.animationDelay = `${index * 0.05}s`;
        });
    },
    
    // Animate element when it comes into view
    animateElement(element) {
        if (element.classList.contains('animate-on-scroll')) {
            return; // Already animated
        }
        
        element.classList.add('animate-on-scroll');
        
        // Add specific animation based on element type
        if (element.matches('.section')) {
            element.classList.add('visible');
        } else if (element.matches('.card, .interest-card, .publication-card, .project-card')) {
            element.classList.add('visible');
        }
    },
    
    // Handle contact form submission
    async handleContactForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            this.showSuccessMessage('Thank you for reaching out! I\'ll get back to you soon to discuss research collaboration opportunities.');
            form.reset();
            
        } catch (error) {
            console.error('Error submitting form:', error);
            this.showErrorMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    },
    
    // Show success message
    showSuccessMessage(message) {
        this.showNotification(message, 'success');
    },
    
    // Show error message
    showErrorMessage(message) {
        this.showNotification(message, 'error');
    },
    
    // Show notification
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type}`;
        notification.innerHTML = `
            <span class="alert-icon">${this.getNotificationIcon(type)}</span>
            <div>${message}</div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Position notification
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.zIndex = '10000';
        notification.style.maxWidth = '400px';
        notification.style.animation = 'slideInRight 0.3s ease-out';
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    },
    
    // Get notification icon
    getNotificationIcon(type) {
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        return icons[type] || icons.info;
    },
    
    // Handle window resize
    handleResize() {
        // Recalculate animations and layouts
        this.refreshAnimations();
        
        // Update navigation if needed
        const nav = document.querySelector('.nav');
        if (window.innerWidth <= 768) {
            nav.classList.add('mobile');
        } else {
            nav.classList.remove('mobile');
        }
    },
    
    // Refresh animations
    refreshAnimations() {
        // Re-observe elements for animation
        if (this.observers.intersection) {
            document.querySelectorAll('.section, .card, .interest-card, .publication-card, .project-card').forEach(el => {
                if (!el.classList.contains('animate-on-scroll')) {
                    this.observers.intersection.observe(el);
                }
            });
        }
    },
    
    // Show loading state
    showLoadingState() {
        document.body.classList.add('loading');
        
        // Show loading skeletons
        document.querySelectorAll('.section').forEach(section => {
            if (!section.innerHTML.trim()) {
                section.innerHTML = '<div class="loading-skeleton" style="height: 200px;"></div>';
            }
        });
    },
    
    // Hide loading state
    hideLoadingState() {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
        
        // Remove loading skeletons
        document.querySelectorAll('.loading-skeleton').forEach(skeleton => {
            skeleton.remove();
        });
    },
    
    // Show error state
    showErrorState() {
        this.showErrorMessage('Sorry, there was an error loading the portfolio content. Please refresh the page.');
    },
    
    // Cleanup when page unloads
    cleanup() {
        if (this.observers.intersection) {
            this.observers.intersection.disconnect();
        }
        
        // Remove event listeners
        document.removeEventListener('click', this.handleClick);
        document.removeEventListener('submit', this.handleSubmit);
        window.removeEventListener('resize', this.handleResize);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    App.cleanup();
});

// Handle back/forward browser navigation
window.addEventListener('popstate', (e) => {
    const hash = window.location.hash.substring(1);
    if (hash && document.querySelector(`#${hash}`)) {
        App.navigateToSection(hash);
    }
});

// Handle initial hash in URL
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.querySelector(`#${hash}`)) {
        setTimeout(() => {
            App.navigateToSection(hash);
        }, 500); // Wait for sections to load
    }
});

// Export for use in other modules
window.App = App;