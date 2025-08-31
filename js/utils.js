/* Re-upload fix */

/**
 * Utility Functions
 * Common helper functions for the portfolio
 */

const Utils = {
    
    // Debounce function calls
    debounce(func, wait, immediate = false) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },
    
    // Throttle function calls
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Capitalize first letter
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    
    // Convert string to camelCase
    toCamelCase(str) {
        return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    },
    
    // Format date for display
    formatDate(date, options = {}) {
        const defaultOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
    },
    
    // Create HTML element from string
    createElement(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    },
    
    // Sanitize HTML to prevent XSS
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    },
    
    // Generate unique ID
    generateId(prefix = 'id') {
        return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    },
    
    // Check if element is in viewport
    isInViewport(element, threshold = 0) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        const vertInView = (rect.top <= windowHeight * (1 - threshold)) && 
                          ((rect.top + rect.height) >= windowHeight * threshold);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        
        return vertInView && horInView;
    },
    
    // Smooth scroll to element
    scrollToElement(element, options = {}) {
        const defaultOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        };
        
        if (element && typeof element.scrollIntoView === 'function') {
            element.scrollIntoView({ ...defaultOptions, ...options });
        }
    },
    
    // Get scroll position
    getScrollPosition() {
        return {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        };
    },
    
    // Set scroll position
    setScrollPosition(x, y) {
        window.scrollTo(x, y);
    },
    
    // Check if reduced motion is preferred
    prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },
    
    // Get device type
    getDeviceType() {
        const width = window.innerWidth;
        if (width <= 480) return 'mobile';
        if (width <= 768) return 'tablet';
        if (width <= 1024) return 'laptop';
        return 'desktop';
    },
    
    // Check if touch device
    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    },
    
    // Local storage helpers
    storage: {
        set(key, value, expiry = null) {
            try {
                const item = {
                    value: value,
                    expiry: expiry ? Date.now() + expiry : null
                };
                localStorage.setItem(key, JSON.stringify(item));
                return true;
            } catch (error) {
                console.warn('Failed to save to localStorage:', error);
                return false;
            }
        },
        
        get(key) {
            try {
                const itemStr = localStorage.getItem(key);
                if (!itemStr) return null;
                
                const item = JSON.parse(itemStr);
                
                // Check if expired
                if (item.expiry && Date.now() > item.expiry) {
                    localStorage.removeItem(key);
                    return null;
                }
                
                return item.value;
            } catch (error) {
                console.warn('Failed to get from localStorage:', error);
                return null;
            }
        },
        
        remove(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.warn('Failed to remove from localStorage:', error);
                return false;
            }
        },
        
        clear() {
            try {
                localStorage.clear();
                return true;
            } catch (error) {
                console.warn('Failed to clear localStorage:', error);
                return false;
            }
        }
    },
    
    // URL helpers
    url: {
        getParams() {
            return new URLSearchParams(window.location.search);
        },
        
        getParam(name) {
            return this.getParams().get(name);
        },
        
        setParam(name, value) {
            const params = this.getParams();
            params.set(name, value);
            const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
            window.history.replaceState({}, '', newUrl);
        },
        
        removeParam(name) {
            const params = this.getParams();
            params.delete(name);
            const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
            window.history.replaceState({}, '', newUrl);
        },
        
        getHash() {
            return window.location.hash.substring(1);
        },
        
        setHash(hash) {
            window.location.hash = hash;
        }
    },
    
    // Animation helpers
    animation: {
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        
        easeOutCubic(t) {
            return (--t) * t * t + 1;
        },
        
        easeInCubic(t) {
            return t * t * t;
        },
        
        animate(duration, callback, easing = this.easeInOutCubic) {
            const start = performance.now();
            
            const tick = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easing(progress);
                
                callback(easedProgress);
                
                if (progress < 1) {
                    requestAnimationFrame(tick);
                }
            };
            
            requestAnimationFrame(tick);
        }
    },
    
    // DOM helpers
    dom: {
        ready(callback) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', callback);
            } else {
                callback();
            }
        },
        
        addClass(element, className) {
            if (element && className) {
                element.classList.add(className);
            }
        },
        
        removeClass(element, className) {
            if (element && className) {
                element.classList.remove(className);
            }
        },
        
        toggleClass(element, className) {
            if (element && className) {
                element.classList.toggle(className);
            }
        },
        
        hasClass(element, className) {
            return element && className && element.classList.contains(className);
        },
        
        find(selector, parent = document) {
            return parent.querySelector(selector);
        },
        
        findAll(selector, parent = document) {
            return Array.from(parent.querySelectorAll(selector));
        },
        
        create(tag, attributes = {}, content = '') {
            const element = document.createElement(tag);
            
            Object.entries(attributes).forEach(([key, value]) => {
                if (key === 'class') {
                    element.className = value;
                } else if (key === 'style') {
                    Object.assign(element.style, value);
                } else {
                    element.setAttribute(key, value);
                }
            });
            
            if (content) {
                if (typeof content === 'string') {
                    element.innerHTML = content;
                } else {
                    element.appendChild(content);
                }
            }
            
            return element;
        },
        
        remove(element) {
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        },
        
        empty(element) {
            if (element) {
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
            }
        },
        
        on(element, event, handler, options = {}) {
            if (element && event && handler) {
                element.addEventListener(event, handler, options);
            }
        },
        
        off(element, event, handler) {
            if (element && event && handler) {
                element.removeEventListener(event, handler);
            }
        },
        
        delegate(parent, selector, event, handler) {
            this.on(parent, event, (e) => {
                if (e.target.matches(selector)) {
                    handler.call(e.target, e);
                }
            });
        }
    },
    
    // Form helpers
    form: {
        serialize(form) {
            const formData = new FormData(form);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                if (data[key]) {
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            }
            
            return data;
        },
        
        validate(form, rules = {}) {
            const data = this.serialize(form);
            const errors = {};
            
            Object.entries(rules).forEach(([field, fieldRules]) => {
                const value = data[field];
                
                if (fieldRules.required && (!value || value.toString().trim() === '')) {
                    errors[field] = 'This field is required';
                    return;
                }
                
                if (value && fieldRules.email && !this.isValidEmail(value)) {
                    errors[field] = 'Please enter a valid email address';
                    return;
                }
                
                if (value && fieldRules.minLength && value.length < fieldRules.minLength) {
                    errors[field] = `Minimum ${fieldRules.minLength} characters required`;
                    return;
                }
                
                if (value && fieldRules.maxLength && value.length > fieldRules.maxLength) {
                    errors[field] = `Maximum ${fieldRules.maxLength} characters allowed`;
                    return;
                }
                
                if (value && fieldRules.pattern && !fieldRules.pattern.test(value)) {
                    errors[field] = fieldRules.message || 'Invalid format';
                    return;
                }
            });
            
            return {
                isValid: Object.keys(errors).length === 0,
                errors: errors,
                data: data
            };
        },
        
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        
        showFieldError(field, message) {
            const fieldElement = typeof field === 'string' ? document.querySelector(`[name="${field}"]`) : field;
            if (!fieldElement) return;
            
            // Remove existing error
            this.clearFieldError(fieldElement);
            
            // Add error styling
            fieldElement.classList.add('error');
            
            // Create error message
            const errorElement = document.createElement('div');
            errorElement.className = 'form-error';
            errorElement.textContent = message;
            
            // Insert after field
            fieldElement.parentNode.insertBefore(errorElement, fieldElement.nextSibling);
        },
        
        clearFieldError(field) {
            const fieldElement = typeof field === 'string' ? document.querySelector(`[name="${field}"]`) : field;
            if (!fieldElement) return;
            
            fieldElement.classList.remove('error');
            
            const errorElement = fieldElement.parentNode.querySelector('.form-error');
            if (errorElement) {
                errorElement.remove();
            }
        },
        
        clearAllErrors(form) {
            form.querySelectorAll('.error').forEach(field => {
                this.clearFieldError(field);
            });
        }
    },
    
    // Performance helpers
    performance: {
        measure(name, fn) {
            const start = performance.now();
            const result = fn();
            const end = performance.now();
            console.log(`${name}: ${end - start}ms`);
            return result;
        },
        
        async measureAsync(name, fn) {
            const start = performance.now();
            const result = await fn();
            const end = performance.now();
            console.log(`${name}: ${end - start}ms`);
            return result;
        },
        
        debounceFrame(fn) {
            let frameId;
            return function(...args) {
                cancelAnimationFrame(frameId);
                frameId = requestAnimationFrame(() => fn.apply(this, args));
            };
        }
    },
    
    // String helpers
    string: {
        truncate(str, length, suffix = '...') {
            if (str.length <= length) return str;
            return str.substring(0, length - suffix.length) + suffix;
        },
        
        slug(str) {
            return str
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        },
        
        template(str, data) {
            return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
                return data[key] || match;
            });
        },
        
        escape(str) {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        },
        
        unescape(str) {
            const div = document.createElement('div');
            div.innerHTML = str;
            return div.textContent || div.innerText || '';
        }
    },
    
    // Number helpers
    number: {
        clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        },
        
        lerp(start, end, factor) {
            return start + (end - start) * factor;
        },
        
        format(num, locale = 'en-US', options = {}) {
            return new Intl.NumberFormat(locale, options).format(num);
        },
        
        random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    
    // Color helpers
    color: {
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },
        
        rgbToHex(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        
        rgba(hex, alpha) {
            const rgb = this.hexToRgb(hex);
            return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})` : hex;
        }
    },
    
    // Log with different levels
    log: {
        info(message, ...args) {
            console.log(`ℹ️ ${message}`, ...args);
        },
        
        success(message, ...args) {
            console.log(`✅ ${message}`, ...args);
        },
        
        warn(message, ...args) {
            console.warn(`⚠️ ${message}`, ...args);
        },
        
        error(message, ...args) {
            console.error(`❌ ${message}`, ...args);
        },
        
        debug(message, ...args) {
            if (process.env.NODE_ENV === 'development') {
                console.log(`🐛 ${message}`, ...args);
            }
        }
    }
};

// Export for use in other modules
window.Utils = Utils;