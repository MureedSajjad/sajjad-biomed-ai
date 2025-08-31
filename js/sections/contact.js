/* Re-upload fix */
/**
 * Contact Section Content Loader
 * Professional contact form and collaboration opportunities
 */

window.loadContactSection = function(sectionElement) {
    const contactHTML = `
        <h2 class="section-title">Let's Collaborate on Biomedical Research</h2>
        
        <div class="contact-content">
            <div class="contact-intro">
                <h3>🤝 Research Collaboration & Graduate Opportunities</h3>
                <p>I'm actively seeking research collaboration opportunities, graduate program discussions, and mentorship in biomedical data science. Whether you're a fellow researcher, potential supervisor, or industry professional, I'd love to connect and explore how we can advance precision medicine together!</p>
            </div>
            
            <div class="contact-grid">
                <div class="contact-form-section">
                    <form class="contact-form" id="contactForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Your Name *</label>
                                <input type="text" name="name" class="form-field" placeholder="Dr. John Smith" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email Address *</label>
                                <input type="email" name="email" class="form-field" placeholder="john.smith@university.edu" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Institution/Organization</label>
                                <input type="text" name="institution" class="form-field" placeholder="University/Research Institute">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Inquiry Type *</label>
                                <select name="inquiryType" class="form-field" required>
                                    <option value="">Select inquiry type</option>
                                    <option value="research-collaboration">Research Collaboration</option>
                                    <option value="graduate-program">Graduate Program Discussion</option>
                                    <option value="internship">Internship Opportunity</option>
                                    <option value="mentorship">Mentorship Request</option>
                                    <option value="conference">Conference/Presentation</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Subject *</label>
                            <input type="text" name="subject" class="form-field" placeholder="Research collaboration in precision medicine" required>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Message *</label>
                            <textarea name="message" class="form-field" rows="6" placeholder="I'm interested in discussing potential research collaboration opportunities in biomedical data science. I would like to explore..." required></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-lg">
                            <span class="btn-text">📧 Send Message</span>
                            <span class="btn-spinner" style="display: none;">
                                <span class="spinner"></span> Sending...
                            </span>
                        </button>
                    </form>
                </div>
                
                <div class="contact-info-section">
                    <div class="contact-card">
                        <h4>📍 Location & Status</h4>
                        <div class="info-item">
                            <span class="info-label">Current Location:</span>
                            <span class="info-value">Nawabshah, Sindh, Pakistan</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Academic Status:</span>
                            <span class="info-value">6th Semester Data Science Student</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">University:</span>
                            <span class="info-value">University of Sindh, Jamshoro</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Time Zone:</span>
                            <span class="info-value">PKT (UTC+5)</span>
                        </div>
                    </div>
                    
                    <div class="contact-card">
                        <h4>🔬 Research Interests</h4>
                        <div class="research-areas">
                            <span class="research-area">Biomedical Data Science</span>
                            <span class="research-area">Precision Medicine</span>
                            <span class="research-area">Cancer Research</span>
                            <span class="research-area">AI in Healthcare</span>
                            <span class="research-area">Clinical ML</span>
                            <span class="research-area">Computational Biology</span>
                        </div>
                    </div>
                    
                    <div class="contact-card">
                        <h4>🎯 Seeking Opportunities</h4>
                        <ul class="opportunities-list">
                            <li>🔬 Research collaboration projects</li>
                            <li>🎓 Graduate program discussions</li>
                            <li>🏆 International fellowships (CERN, MITACS, OIST)</li>
                            <li>🧑‍🏫 Mentorship from senior researchers</li>
                            <li>📊 Data science internships</li>
                            <li>🌍 Academic conference presentations</li>
                        </ul>
                    </div>
                    
                    <div class="contact-card">
                        <h4>📧 Direct Contact</h4>
                        <div class="direct-contact">
                            <a href="mailto:mureed.sajjad@example.com" class="contact-method">
                                <span class="contact-icon">✉️</span>
                                <span class="contact-text">mureed.sajjad@example.com</span>
                            </a>
                            <a href="https://linkedin.com/in/mureed-sajjad" class="contact-method">
                                <span class="contact-icon">💼</span>
                                <span class="contact-text">LinkedIn Profile</span>
                            </a>
                            <a href="https://github.com/mureed-sajjad" class="contact-method">
                                <span class="contact-icon">💻</span>
                                <span class="contact-text">GitHub Portfolio</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="social-links">
                <a href="mailto:mureed.sajjad@example.com" class="social-link" title="Email">✉️</a>
                <a href="https://linkedin.com/in/mureed-sajjad" class="social-link" title="LinkedIn" target="_blank">💼</a>
                <a href="https://github.com/mureed-sajjad" class="social-link" title="GitHub" target="_blank">💻</a>
                <a href="https://orcid.org/0000-0000-0000-0000" class="social-link" title="ORCID" target="_blank">🆔</a>
                <a href="https://researchgate.net/profile/mureed-sajjad" class="social-link" title="ResearchGate" target="_blank">🔬</a>
                <a href="https://twitter.com/mureed_sajjad" class="social-link" title="Twitter" target="_blank">🐦</a>
            </div>
            
            <div class="collaboration-note">
                <div class="note-content">
                    <h4>💡 Best Ways to Reach Me</h4>
                    <div class="contact-preferences">
                        <div class="preference-item">
                            <span class="preference-icon">🔬</span>
                            <div class="preference-text">
                                <strong>Research Collaborations:</strong> Email with project details and timeline
                            </div>
                        </div>
                        <div class="preference-item">
                            <span class="preference-icon">🎓</span>
                            <div class="preference-text">
                                <strong>Graduate Programs:</strong> LinkedIn message or email with program information
                            </div>
                        </div>
                        <div class="preference-item">
                            <span class="preference-icon">💻</span>
                            <div class="preference-text">
                                <strong>Technical Discussions:</strong> GitHub issues or direct email
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    sectionElement.innerHTML = contactHTML;
    
    // Add contact-specific styles
    addContactStyles();
    
    // Initialize contact form functionality
    initializeContactForm();
    
    Utils.log.success('Contact section loaded successfully');
};

function addContactStyles() {
    const styles = `
        <style id="contact-styles">
            .contact-content {
                max-width: 1000px;
                margin: 0 auto;
            }
            
            .contact-intro {
                text-align: center;
                margin-bottom: var(--space-12);
                background: var(--bg-white);
                padding: var(--space-8);
                border-radius: var(--radius-2xl);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
            }
            
            .contact-intro h3 {
                color: var(--eth-blue);
                margin-bottom: var(--space-4);
                font-size: var(--font-size-2xl);
            }
            
            .contact-intro p {
                color: var(--text-secondary);
                font-size: var(--font-size-lg);
                line-height: 1.7;
                margin-bottom: 0;
            }
            
            .contact-grid {
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: var(--space-10);
                margin-bottom: var(--space-12);
            }
            
            .contact-form-section {
                background: var(--bg-white);
                padding: var(--space-8);
                border-radius: var(--radius-2xl);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
            }
            
            .contact-info-section {
                display: grid;
                gap: var(--space-6);
                align-content: start;
            }
            
            .contact-card {
                background: var(--gradient-card);
                padding: var(--space-6);
                border-radius: var(--radius-xl);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
                transition: all var(--transition-normal);
            }
            
            .contact-card:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-lg);
            }
            
            .contact-card h4 {
                color: var(--eth-blue);
                margin-bottom: var(--space-4);
                font-size: var(--font-size-lg);
                display: flex;
                align-items: center;
                gap: var(--space-2);
            }
            
            .info-item {
                display: flex;
                justify-content: space-between;
                margin-bottom: var(--space-3);
                padding: var(--space-2) 0;
                border-bottom: 1px solid var(--border-light);
            }
            
            .info-item:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }
            
            .info-label {
                color: var(--text-secondary);
                font-weight: 500;
                font-size: var(--font-size-sm);
            }
            
            .info-value {
                color: var(--text-primary);
                font-weight: 600;
                font-size: var(--font-size-sm);
                text-align: right;
            }
            
            .research-areas {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-2);
            }
            
            .research-area {
                background: rgba(0, 63, 127, 0.1);
                color: var(--eth-blue);
                padding: var(--space-1) var(--space-3);
                border-radius: var(--radius-full);
                font-size: var(--font-size-xs);
                font-weight: 500;
                border: 1px solid rgba(0, 63, 127, 0.2);
            }
            
            .opportunities-list {
                list-style: none;
                padding: 0;
            }
            
            .opportunities-list li {
                padding: var(--space-2) 0;
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                line-height: 1.5;
                border-bottom: 1px solid var(--border-light);
            }
            
            .opportunities-list li:last-child {
                border-bottom: none;
            }
            
            .direct-contact {
                display: grid;
                gap: var(--space-3);
            }
            
            .contact-method {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                padding: var(--space-3);
                background: var(--bg-secondary);
                border-radius: var(--radius-lg);
                text-decoration: none;
                color: var(--text-primary);
                transition: all var(--transition-fast);
                border: 1px solid var(--border-light);
            }
            
            .contact-method:hover {
                background: rgba(0, 63, 127, 0.05);
                border-color: var(--eth-blue);
                transform: translateX(var(--space-2));
            }
            
            .contact-icon {
                font-size: var(--font-size-lg);
                width: 24px;
                text-align: center;
            }
            
            .contact-text {
                font-weight: 500;
                font-size: var(--font-size-sm);
            }
            
            .social-links {
                display: flex;
                justify-content: center;
                gap: var(--space-4);
                margin: var(--space-12) 0;
            }
            
            .collaboration-note {
                background: var(--bg-white);
                padding: var(--space-8);
                border-radius: var(--radius-2xl);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
                margin-top: var(--space-12);
            }
            
            .note-content h4 {
                color: var(--eth-blue);
                margin-bottom: var(--space-6);
                text-align: center;
                font-size: var(--font-size-xl);
            }
            
            .contact-preferences {
                display: grid;
                gap: var(--space-4);
            }
            
            .preference-item {
                display: flex;
                align-items: flex-start;
                gap: var(--space-4);
                padding: var(--space-4);
                background: var(--bg-secondary);
                border-radius: var(--radius-lg);
                transition: all var(--transition-fast);
            }
            
            .preference-item:hover {
                background: rgba(0, 63, 127, 0.05);
                transform: translateX(var(--space-2));
            }
            
            .preference-icon {
                font-size: var(--font-size-xl);
                flex-shrink: 0;
                margin-top: var(--space-1);
            }
            
            .preference-text {
                flex: 1;
            }
            
            .preference-text strong {
                color: var(--text-primary);
                display: block;
                margin-bottom: var(--space-1);
            }
            
            /* Form validation styles */
            .form-field.error {
                border-color: var(--bio-red);
                background: rgba(255, 51, 102, 0.05);
            }
            
            .form-field.success {
                border-color: var(--bio-green);
                background: rgba(0, 204, 102, 0.05);
            }
            
            .form-error {
                color: var(--bio-red);
                font-size: var(--font-size-xs);
                margin-top: var(--space-2);
                display: flex;
                align-items: center;
                gap: var(--space-2);
            }
            
            .form-success {
                background: rgba(0, 204, 102, 0.1);
                color: var(--bio-green);
                padding: var(--space-4);
                border-radius: var(--radius-lg);
                margin-top: var(--space-4);
                display: flex;
                align-items: center;
                gap: var(--space-2);
                border: 1px solid rgba(0, 204, 102, 0.3);
            }
            
            /* Button loading state */
            .btn-primary:disabled {
                opacity: 0.7;
                cursor: not-allowed;
                transform: none;
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
                .contact-grid {
                    grid-template-columns: 1fr;
                    gap: var(--space-6);
                }
                
                .contact-form-section {
                    order: 2;
                }
                
                .contact-info-section {
                    order: 1;
                }
                
                .contact-preferences {
                    gap: var(--space-3);
                }
                
                .preference-item {
                    flex-direction: column;
                    text-align: center;
                    gap: var(--space-2);
                }
                
                .social-links {
                    flex-wrap: wrap;
                    gap: var(--space-3);
                }
            }
            
            /* Accessibility enhancements */
            .form-field:focus + .form-label {
                color: var(--eth-blue);
            }
            
            .contact-method:focus {
                outline: 2px solid var(--eth-blue);
                outline-offset: 2px;
            }
            
            /* Animation for form submission success */
            @keyframes formSuccess {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
                100% {
                    transform: scale(1);
                }
            }
            
            .form-submitted {
                animation: formSuccess 0.6s ease-out;
            }
        </style>
    `;
    
    if (!document.querySelector('#contact-styles')) {
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Form validation rules
    const validationRules = {
        name: { required: true, minLength: 2 },
        email: { required: true, email: true },
        inquiryType: { required: true },
        subject: { required: true, minLength: 5 },
        message: { required: true, minLength: 20 }
    };
    
    // Real-time validation
    form.addEventListener('input', (e) => {
        const field = e.target;
        const fieldName = field.name;
        const value = field.value.trim();
        
        // Clear previous errors
        Utils.form.clearFieldError(field);
        
        // Validate field
        if (validationRules[fieldName]) {
            const validation = validateField(fieldName, value, validationRules[fieldName]);
            
            if (!validation.isValid) {
                field.classList.add('error');
                field.classList.remove('success');
                Utils.form.showFieldError(field, validation.message);
            } else {
                field.classList.remove('error');
                field.classList.add('success');
            }
        }
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate entire form
        const validation = Utils.form.validate(form, validationRules);
        
        if (!validation.isValid) {
            // Show field errors
            Object.entries(validation.errors).forEach(([field, message]) => {
                const fieldElement = form.querySelector(`[name="${field}"]`);
                if (fieldElement) {
                    fieldElement.classList.add('error');
                    Utils.form.showFieldError(fieldElement, message);
                }
            });
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnSpinner = submitBtn.querySelector('.btn-spinner');
        
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnSpinner.style.display = 'inline-flex';
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await submitContactForm(validation.data);
            
            // Show success message
            showFormSuccess();
            form.reset();
            
            // Clear all field states
            form.querySelectorAll('.form-field').forEach(field => {
                field.classList.remove('error', 'success');
            });
            
        } catch (error) {
            console.error('Form submission error:', error);
            showFormError('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline-flex';
            btnSpinner.style.display = 'none';
        }
    });
}

function validateField(fieldName, value, rules) {
    if (rules.required && !value) {
        return { isValid: false, message: 'This field is required' };
    }
    
    if (value && rules.email && !Utils.form.isValidEmail(value)) {
        return { isValid: false, message: 'Please enter a valid email address' };
    }
    
    if (value && rules.minLength && value.length < rules.minLength) {
        return { isValid: false, message: `Minimum ${rules.minLength} characters required` };
    }
    
    if (value && rules.maxLength && value.length > rules.maxLength) {
        return { isValid: false, message: `Maximum ${rules.maxLength} characters allowed` };
    }
    
    return { isValid: true };
}

async function submitContactForm(data) {
    // Simulate API call (replace with your actual endpoint)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success/failure
            if (Math.random() > 0.1) { // 90% success rate
                resolve({ success: true, message: 'Message sent successfully' });
            } else {
                reject(new Error('Network error'));
            }
        }, 2000);
    });
}

function showFormSuccess() {
    const form = document.getElementById('contactForm');
    form.classList.add('form-submitted');
    
    const successMessage = Utils.dom.create('div', { 
        class: 'form-success' 
    }, '✅ Thank you for reaching out! I\'ll get back to you within 24 hours to discuss research collaboration opportunities.');
    
    form.appendChild(successMessage);
    
    setTimeout(() => {
        form.classList.remove('form-submitted');
        if (successMessage.parentNode) {
            successMessage.parentNode.removeChild(successMessage);
        }
    }, 5000);
}

function showFormError(message) {
    const form = document.getElementById('contactForm');
    
    const errorMessage = Utils.dom.create('div', { 
        class: 'alert alert-error' 
    }, `<span class="alert-icon">❌</span><div>${message}</div>`);
    
    form.appendChild(errorMessage);
    
    setTimeout(() => {
        if (errorMessage.parentNode) {
            errorMessage.parentNode.removeChild(errorMessage);
        }
    }, 5000);
}