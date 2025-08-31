/* Re-upload fix */

/**
 * About Section Content Loader
 * Dynamic content loading for the about section
 */

window.loadAboutSection = function(sectionElement) {
    const aboutContent = `
        <h2 class="section-title">Academic Journey & Research Vision</h2>
        <div class="about-grid">
            <div class="about-content fade-in-left">
                <p>I'm deeply committed to academic excellence and research impact, specializing in <strong>biomedical and healthcare applications of data science</strong>. Though my university may not rank highly globally, I believe in the power of dedication and innovative research to make meaningful contributions to precision medicine and computational healthcare.</p>
                
                <p>My expertise spans the entire data science pipeline - from data collection and preprocessing to model deployment and monitoring. I love solving challenging problems and turning data stories into <strong>actionable healthcare insights</strong>.</p>
                
                <p>As an undergraduate researcher, I'm actively working toward publishing <strong>6-7 impactful research papers</strong> in biomedical data science, with a focus on precision medicine, cancer research, and AI applications in healthcare.</p>
                
                <h3>🎯 Long-term Academic Goals</h3>
                <ul class="goals-list">
                    <li><strong>Research Excellence:</strong> Publish 6-7 high-impact papers in biomedical data science and precision medicine</li>
                    <li><strong>Graduate Studies:</strong> Secure fully funded master's and PhD programs in computational healthcare</li>
                    <li><strong>Innovation Impact:</strong> Contribute to data-driven healthcare innovations that improve patient outcomes</li>
                    <li><strong>Interdisciplinary Bridge:</strong> Connect data science with life sciences through collaborative research</li>
                    <li><strong>Global Collaboration:</strong> Work with top research labs and institutions worldwide</li>
                    <li><strong>Knowledge Sharing:</strong> Mentor future researchers and contribute to open science initiatives</li>
                </ul>
                
                <h3>🔬 Research Philosophy</h3>
                <p>I believe that the future of medicine lies in the intersection of <em>artificial intelligence, big data, and biological understanding</em>. My approach combines rigorous statistical methods with domain expertise in biomedicine to develop interpretable and clinically relevant solutions.</p>
                
                <h3>🌟 What Drives Me</h3>
                <p>Every dataset tells a story, and in healthcare, these stories can save lives. I'm passionate about uncovering hidden patterns in biological data that can lead to earlier diagnoses, more effective treatments, and ultimately, better health outcomes for patients worldwide.</p>
            </div>
            
            <div class="about-visual fade-in-right">
                <div class="academic-highlights">
                    <div class="highlight-card">
                        <div class="highlight-icon">🎓</div>
                        <h4>Current Status</h4>
                        <p>6th Semester Data Science Student<br>University of Sindh, Jamshoro</p>
                    </div>
                    
                    <div class="highlight-card">
                        <div class="highlight-icon">📚</div>
                        <h4>Research Focus</h4>
                        <p>Biomedical Data Science<br>Precision Medicine<br>AI in Healthcare</p>
                    </div>
                    
                    <div class="highlight-card">
                        <div class="highlight-icon">🏆</div>
                        <h4>Publication Goal</h4>
                        <p>6-7 Research Papers<br>High-Impact Journals<br>International Recognition</p>
                    </div>
                    
                    <div class="highlight-card">
                        <div class="highlight-icon">🌍</div>
                        <h4>Global Vision</h4>
                        <p>Graduate Programs in:<br>Singapore, Europe, Australia<br>USA, Canada, Asia-Pacific</p>
                    </div>
                </div>
                
                <div class="research-impact-metrics">
                    <h4>🎯 Research Impact Metrics (Goals)</h4>
                    <div class="metrics-grid">
                        <div class="metric-item">
                            <div class="metric-number">6-7</div>
                            <div class="metric-label">Research Publications</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-number">3</div>
                            <div class="metric-label">Current Papers in Progress</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-number">5+</div>
                            <div class="metric-label">Target Journal Impact Factor</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-number">8+</div>
                            <div class="metric-label">Target Countries for Studies</div>
                        </div>
                    </div>
                </div>
                
                <div class="academic-timeline">
                    <h4>📅 Academic Roadmap</h4>
                    <div class="timeline-compact">
                        <div class="timeline-item-compact">
                            <div class="timeline-date">2024-2025</div>
                            <div class="timeline-content">Complete undergraduate degree<br>Publish 3 research papers</div>
                        </div>
                        <div class="timeline-item-compact">
                            <div class="timeline-date">2025-2027</div>
                            <div class="timeline-content">Master's in Biomedical Data Science<br>International university</div>
                        </div>
                        <div class="timeline-item-compact">
                            <div class="timeline-date">2027-2031</div>
                            <div class="timeline-content">PhD in Precision Medicine<br>Top-tier research institution</div>
                        </div>
                        <div class="timeline-item-compact">
                            <div class="timeline-date">2031+</div>
                            <div class="timeline-content">Research Scientist/Professor<br>Leading biomedical AI innovations</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="about-cta">
            <div class="cta-content">
                <h3>🤝 Let's Collaborate on Cutting-Edge Research</h3>
                <p>I'm always excited to discuss research opportunities, collaborate on biomedical data science projects, or explore potential mentorship opportunities. If you're working in precision medicine, cancer research, or AI applications in healthcare, I'd love to connect!</p>
                <div class="cta-buttons">
                    <a href="#contact" class="btn btn-primary">🔬 Discuss Research</a>
                    <a href="#publications" class="btn btn-secondary">📚 View Publications</a>
                </div>
            </div>
        </div>
    `;
    
    // Add the content to the section
    sectionElement.innerHTML = aboutContent;
    
    // Add custom styles for this section
    addAboutSectionStyles();
    
    // Initialize interactive elements
    initializeAboutInteractions();
    
    // Add scroll animations
    addScrollAnimations();
    
    Utils.log.success('About section loaded successfully');
};

function addAboutSectionStyles() {
    // Check if styles already added
    if (document.querySelector('#about-section-styles')) {
        return;
    }
    
    const styles = `
        <style id="about-section-styles">
            .about-visual {
                display: grid;
                gap: var(--space-8);
            }
            
            .academic-highlights {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: var(--space-4);
            }
            
            .highlight-card {
                background: var(--gradient-card);
                padding: var(--space-6);
                border-radius: var(--radius-xl);
                text-align: center;
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
                transition: all var(--transition-normal);
                position: relative;
                overflow: hidden;
            }
            
            .highlight-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: var(--gradient-primary);
                transform: scaleX(0);
                transition: transform var(--transition-normal);
            }
            
            .highlight-card:hover::before {
                transform: scaleX(1);
            }
            
            .highlight-card:hover {
                transform: translateY(-4px);
                box-shadow: var(--shadow-lg);
            }
            
            .highlight-icon {
                font-size: var(--font-size-3xl);
                margin-bottom: var(--space-3);
                display: block;
            }
            
            .highlight-card h4 {
                color: var(--eth-blue);
                margin-bottom: var(--space-2);
                font-size: var(--font-size-lg);
            }
            
            .highlight-card p {
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                line-height: 1.5;
                margin-bottom: 0;
            }
            
            .research-impact-metrics {
                background: var(--bg-white);
                padding: var(--space-6);
                border-radius: var(--radius-xl);
                border: 1px solid var(--border-light);
                box-shadow: var(--shadow-md);
            }
            
            .research-impact-metrics h4 {
                color: var(--eth-blue);
                margin-bottom: var(--space-4);
                text-align: center;
            }
            
            .metrics-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: var(--space-4);
            }
            
            .metric-item {
                text-align: center;
                padding: var(--space-3);
                background: var(--bg-secondary);
                border-radius: var(--radius-lg);
                transition: all var(--transition-fast);
            }
            
            .metric-item:hover {
                background: rgba(0, 63, 127, 0.05);
                transform: scale(1.05);
            }
            
            .metric-number {
                font-size: var(--font-size-2xl);
                font-weight: 700;
                color: var(--bio-green);
                margin-bottom: var(--space-1);
            }
            
            .metric-label {
                font-size: var(--font-size-xs);
                color: var(--text-secondary);
                font-weight: 500;
            }
            
            .academic-timeline {
                background: var(--bg-white);
                padding: var(--space-6);
                border-radius: var(--radius-xl);
                border: 1px solid var(--border-light);
                box-shadow: var(--shadow-md);
            }
            
            .academic-timeline h4 {
                color: var(--eth-blue);
                margin-bottom: var(--space-4);
                text-align: center;
            }
            
            .timeline-compact {
                display: grid;
                gap: var(--space-4);
            }
            
            .timeline-item-compact {
                display: grid;
                grid-template-columns: 100px 1fr;
                gap: var(--space-3);
                padding: var(--space-3);
                background: var(--bg-secondary);
                border-radius: var(--radius-lg);
                border-left: 3px solid var(--bio-orange);
                transition: all var(--transition-fast);
            }
            
            .timeline-item-compact:hover {
                background: rgba(0, 63, 127, 0.05);
                transform: translateX(var(--space-2));
            }
            
            .timeline-date {
                font-weight: 600;
                color: var(--eth-blue);
                font-size: var(--font-size-sm);
                display: flex;
                align-items: center;
            }
            
            .timeline-content {
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                line-height: 1.4;
            }
            
            .about-cta {
                background: var(--gradient-primary);
                color: var(--neutral-100);
                padding: var(--space-12);
                border-radius: var(--radius-2xl);
                text-align: center;
                margin-top: var(--space-16);
                position: relative;
                overflow: hidden;
            }
            
            .about-cta::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="20" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.06)"/><circle cx="20" cy="80" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
                opacity: 0.5;
            }
            
            .cta-content {
                position: relative;
                z-index: 1;
            }
            
            .about-cta h3 {
                color: var(--neutral-100);
                margin-bottom: var(--space-4);
                font-size: var(--font-size-2xl);
            }
            
            .about-cta p {
                color: rgba(255, 255, 255, 0.9);
                margin-bottom: var(--space-8);
                font-size: var(--font-size-lg);
                line-height: 1.6;
            }
            
            .about-cta .cta-buttons {
                display: flex;
                gap: var(--space-4);
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .about-cta .btn {
                background: rgba(255, 255, 255, 0.15);
                color: var(--neutral-100);
                border: 2px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(10px);
            }
            
            .about-cta .btn:hover {
                background: rgba(255, 255, 255, 0.25);
                border-color: rgba(255, 255, 255, 0.5);
                transform: translateY(-2px);
            }
            
            /* Responsive Design */
            @media (max-width: 768px) {
                .academic-highlights {
                    grid-template-columns: 1fr;
                }
                
                .metrics-grid {
                    grid-template-columns: 1fr;
                }
                
                .timeline-item-compact {
                    grid-template-columns: 1fr;
                    text-align: center;
                }
                
                .about-cta {
                    margin-top: var(--space-8);
                    padding: var(--space-8);
                }
                
                .about-cta .cta-buttons {
                    flex-direction: column;
                    align-items: center;
                }
                
                .about-cta .btn {
                    width: 100%;
                    max-width: 250px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

function initializeAboutInteractions() {
    // Add hover effects for metric items
    const metricItems = document.querySelectorAll('.metric-item');
    metricItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Add click interaction for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item-compact');
    timelineItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Add pulse animation
            this.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
    
    // Add typing animation for the research philosophy section
    const philosophySection = document.querySelector('.about-content h3[text*="Research Philosophy"] + p');
    if (philosophySection) {
        // Implement typing effect on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    addTypingEffect(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(philosophySection);
    }
}

function addScrollAnimations() {
    // Stagger animation for highlight cards
    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('scale-in');
    });
    
    // Fade in animations for sections
    const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    fadeElements.forEach(el => observer.observe(el));
}

function addTypingEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;
    
    const typeInterval = setInterval(() => {
        element.textContent += text[index];
        index++;
        
        if (index >= text.length) {
            clearInterval(typeInterval);
            element.style.borderRight = 'none'; // Remove cursor
        }
    }, 50);
    
    // Add typing cursor effect
    element.style.borderRight = '2px solid var(--eth-blue)';
    element.style.animation = 'blink 1s infinite';
}

// Add CSS for typing animation
const typingStyles = `
    <style>
        @keyframes blink {
            0%, 50% { border-color: var(--eth-blue); }
            51%, 100% { border-color: transparent; }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .highlight-card {
            animation-fill-mode: both;
        }
        
        .metric-item {
            cursor: pointer;
        }
        
        .timeline-item-compact {
            cursor: pointer;
        }
        
        .timeline-item-compact:hover .timeline-date {
            color: var(--bio-green);
        }
        
        .research-impact-metrics {
            position: relative;
        }
        
        .research-impact-metrics::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: var(--gradient-primary);
            border-radius: var(--radius-full);
        }
        
        .academic-timeline {
            position: relative;
        }
        
        .academic-timeline::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: var(--gradient-primary);
            border-radius: var(--radius-full);
        }
        
        /* Enhanced hover effects */
        .about-content strong {
            color: var(--eth-blue);
            position: relative;
            transition: all var(--transition-fast);
        }
        
        .about-content strong:hover {
            color: var(--bio-green);
        }
        
        .goals-list li {
            transition: all var(--transition-fast);
            border-radius: var(--radius-md);
            padding: var(--space-3);
            margin: var(--space-2) 0;
        }
        
        .goals-list li:hover {
            background: rgba(0, 63, 127, 0.05);
            transform: translateX(var(--space-3));
            padding-left: calc(var(--space-8) + var(--space-3));
        }
        
        .goals-list li:hover::before {
            transform: scale(1.2);
        }
        
        /* Loading animation for metrics */
        @keyframes countUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .metric-number {
            animation: countUp 0.8s ease-out;
            animation-fill-mode: both;
        }
        
        .metric-item:nth-child(1) .metric-number { animation-delay: 0.1s; }
        .metric-item:nth-child(2) .metric-number { animation-delay: 0.2s; }
        .metric-item:nth-child(3) .metric-number { animation-delay: 0.3s; }
        .metric-item:nth-child(4) .metric-number { animation-delay: 0.4s; }
        
        /* Progress bar animation for timeline */
        .timeline-item-compact {
            position: relative;
        }
        
        .timeline-item-compact::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            background: var(--bio-orange);
            width: 0;
            transition: width var(--transition-slow);
        }
        
        .timeline-item-compact:hover::after {
            width: 100%;
        }
        
        /* Floating animation for CTA */
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        .about-cta {
            animation: float 6s ease-in-out infinite;
        }
        
        /* Interactive research philosophy */
        .about-content p em {
            color: var(--bio-green);
            font-weight: 600;
            position: relative;
            cursor: help;
        }
        
        .about-content p em::after {
            content: '✨';
            position: absolute;
            top: -5px;
            right: -15px;
            font-size: var(--font-size-xs);
            opacity: 0;
            transition: all var(--transition-fast);
        }
        
        .about-content p em:hover::after {
            opacity: 1;
            transform: scale(1.2);
        }
        
        /* Responsive enhancements */
        @media (max-width: 480px) {
            .highlight-icon {
                font-size: var(--font-size-2xl);
            }
            
            .metric-number {
                font-size: var(--font-size-xl);
            }
            
            .about-cta h3 {
                font-size: var(--font-size-xl);
            }
            
            .about-cta p {
                font-size: var(--font-size-base);
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', typingStyles);