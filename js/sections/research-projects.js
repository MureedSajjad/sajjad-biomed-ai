/* Re-upload fix */

/**
 * Research Projects Section Content Loader
 * Showcase your biomedical research and technical projects
 */

// Your research projects data
const researchProjectsData = [
    {
        id: 1,
        title: "Multi-Omics Cancer Classification Pipeline",
        type: "Research Project",
        category: "cancer-research",
        description: "Developed an end-to-end machine learning pipeline for cancer subtype classification using genomic, transcriptomic, and proteomic data. Achieved 96% accuracy across 5 cancer types with interpretable feature importance rankings. The pipeline integrates data preprocessing, feature selection, ensemble modeling, and visualization components.",
        technologies: ["Python", "scikit-learn", "TensorFlow", "Bioconductor", "Docker", "Pandas", "NumPy", "Matplotlib"],
        duration: "8 months",
        status: "completed",
        impact: "96% classification accuracy, identified 15 novel biomarkers",
        image: "🧬",
        links: {
            github: "https://github.com/mureed-sajjad/multi-omics-cancer-classification",
            demo: "#",
            paper: "#",
            data: "https://zenodo.org/record/xxxxxxx",
            documentation: "#"
        },
        highlights: [
            "Processed 10,000+ patient samples across 5 cancer types",
            "Implemented interpretable AI for clinical relevance",
            "Achieved state-of-the-art performance on benchmark datasets",
            "Open-source pipeline for reproducible research"
        ]
    },
    {
        id: 2,
        title: "Clinical Decision Support System for Oncology",
        type: "Applied ML",
        category: "clinical-ai",
        description: "Built a real-time clinical decision support tool that analyzes patient data to recommend treatment protocols. Integrated with hospital EHR systems and provides explainable AI recommendations for healthcare providers. The system processes multimodal patient data including lab results, imaging, and genetic profiles.",
        technologies: ["FastAPI", "PostgreSQL", "React", "LIME", "SHAP", "AWS", "Docker", "Redis"],
        duration: "6 months",
        status: "in-development",
        impact: "Deployed in 2 hospitals, 89% physician acceptance rate",
        image: "🏥",
        links: {
            demo: "https://clinical-decision-demo.vercel.app",
            github: "https://github.com/mureed-sajjad/clinical-decision-support",
            documentation: "#",
            api: "#"
        },
        highlights: [
            "Real-time patient risk assessment",
            "Explainable AI for clinical transparency",
            "HIPAA-compliant data processing",
            "Integration with major EHR systems"
        ]
    },
    {
        id: 3,
        title: "Biomarker Discovery Platform",
        type: "Research Tool",
        category: "bioinformatics",
        description: "Open-source platform for automated biomarker discovery from high-throughput biological data. Features advanced statistical testing, machine learning algorithms, and integration with major biological databases. Supports multiple data types including genomics, proteomics, and metabolomics.",
        technologies: ["R Shiny", "Bioconductor", "Plotly", "MongoDB", "Python", "Flask", "D3.js"],
        duration: "12 months",
        status: "completed",
        impact: "Used by 3 research labs, 500+ downloads",
        image: "🔍",
        links: {
            webapp: "https://biomarker-discovery.herokuapp.com",
            github: "https://github.com/mureed-sajjad/biomarker-discovery-platform",
            tutorial: "#",
            documentation: "#"
        },
        highlights: [
            "Automated statistical analysis pipeline",
            "Interactive data visualization dashboard",
            "Integration with NCBI and UniProt databases",
            "Publication-ready figure generation"
        ]
    },
    {
        id: 4,
        title: "Neuroimaging AI for Alzheimer's Detection",
        type: "Deep Learning",
        category: "neuroimaging",
        description: "Convolutional neural network for early Alzheimer's detection from MRI scans. Implemented attention mechanisms and achieved 92% sensitivity in pre-clinical stage detection using 3D brain imaging data. The model identifies subtle brain changes years before clinical symptoms appear.",
        technologies: ["PyTorch", "OpenCV", "MONAI", "Weights & Biases", "CUDA", "nibabel", "scikit-image"],
        duration: "10 months",
        status: "completed",
        impact: "92% sensitivity, 88% specificity for early detection",
        image: "🧠",
        links: {
            github: "https://github.com/mureed-sajjad/alzheimer-neuroimaging-ai",
            model: "https://huggingface.co/mureed/alzheimer-detection",
            paper: "#",
            results: "#"
        },
        highlights: [
            "3D CNN with attention mechanisms",
            "Pre-clinical detection capability",
            "Explainable AI for medical interpretation",
            "Validated on ADNI dataset"
        ]
    },
    {
        id: 5,
        title: "Interactive Genomics Dashboard",
        type: "Data Visualization",
        category: "bioinformatics",
        description: "Streamlit-based dashboard for exploring genomic datasets with interactive plots, statistical analysis tools, and automated report generation. Supports multiple file formats and provides publication-ready visualizations for genomics research.",
        technologies: ["Streamlit", "Plotly", "Pandas", "Seaborn", "BioPython", "Matplotlib", "Dash"],
        duration: "4 months",
        status: "completed",
        impact: "Used by 5 research groups, 1000+ analyses performed",
        image: "📊",
        links: {
            webapp: "https://genomics-dashboard.streamlit.app",
            github: "https://github.com/mureed-sajjad/interactive-genomics-dashboard",
            demo: "#",
            tutorial: "#"
        },
        highlights: [
            "Real-time genomic data visualization",
            "Statistical analysis automation",
            "Multi-format data support (VCF, FASTA, etc.)",
            "Collaborative analysis features"
        ]
    },
    {
        id: 6,
        title: "AI-Powered Drug-Target Interaction Predictor",
        type: "Drug Discovery",
        category: "drug-discovery",
        description: "Graph neural network model for predicting drug-target interactions using molecular fingerprints and protein sequences. Trained on 100k+ drug-protein pairs with 89% accuracy for novel drug discovery applications. Incorporates molecular similarity and protein structure information.",
        technologies: ["PyTorch Geometric", "RDKit", "BioPython", "NetworkX", "Scikit-learn", "Jupyter"],
        duration: "7 months",
        status: "completed",
        impact: "89% accuracy, identified 50+ novel drug-target pairs",
        image: "💊",
        links: {
            github: "https://github.com/mureed-sajjad/drug-target-interaction-gnn",
            preprint: "#",
            model: "#",
            results: "#"
        },
        highlights: [
            "Graph neural network architecture",
            "Large-scale molecular data processing",
            "Novel drug discovery insights",
            "Benchmarked against existing methods"
        ]
    }
];

window.loadResearchProjectsSection = function(sectionElement) {
    const projectsHTML = `
        <h2 class="section-title">Research Projects & Technical Work</h2>
        
        <div class="projects-overview">
            <div class="overview-stats">
                <div class="overview-stat">
                    <div class="stat-number">${researchProjectsData.length}</div>
                    <div class="stat-label">Research Projects</div>
                </div>
                <div class="overview-stat">
                    <div class="stat-number">${researchProjectsData.filter(p => p.status === 'completed').length}</div>
                    <div class="stat-label">Completed</div>
                </div>
                <div class="overview-stat">
                    <div class="stat-number">${new Set(researchProjectsData.flatMap(p => p.technologies)).size}</div>
                    <div class="stat-label">Technologies Used</div>
                </div>
                <div class="overview-stat">
                    <div class="stat-number">${new Set(researchProjectsData.map(p => p.category)).size}</div>
                    <div class="stat-label">Research Areas</div>
                </div>
            </div>
        </div>
        
        <div class="projects-filters">
            <button class="project-filter-btn active" data-filter="all">All Projects</button>
            <button class="project-filter-btn" data-filter="cancer-research">Cancer Research</button>
            <button class="project-filter-btn" data-filter="clinical-ai">Clinical AI</button>
            <button class="project-filter-btn" data-filter="bioinformatics">Bioinformatics</button>
            <button class="project-filter-btn" data-filter="neuroimaging">Neuroimaging</button>
            <button class="project-filter-btn" data-filter="drug-discovery">Drug Discovery</button>
        </div>
        
        <div class="projects-grid" id="projectsGrid">
            ${generateProjectCards(researchProjectsData)}
        </div>
        
        <div class="projects-cta">
            <div class="cta-content">
                <h3>🚀 Collaborative Research Opportunities</h3>
                <p>I'm always excited to collaborate on cutting-edge biomedical research projects. If you're working on precision medicine, cancer research, or AI applications in healthcare, let's discuss how we can work together to advance the field!</p>
                <div class="cta-buttons">
                    <a href="#contact" class="btn btn-primary">🤝 Collaborate</a>
                    <a href="https://github.com/mureed-sajjad" class="btn btn-secondary">💻 View All Code</a>
                </div>
            </div>
        </div>
    `;
    
    sectionElement.innerHTML = projectsHTML;
    
    // Add styles
    addProjectsStyles();
    
    // Initialize interactions
    initializeProjectsInteractions();
    
    Utils.log.success('Research projects section loaded successfully');
};

function generateProjectCards(projects) {
    return projects.map(project => `
        <div class="project-card" data-category="${project.category}" data-status="${project.status}">
            <div class="project-image">
                ${project.image}
                <div class="project-overlay">
                    <span class="project-type">${project.type}</span>
                </div>
            </div>
            
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="status-badge status-${project.status}">${formatProjectStatus(project.status)}</span>
                </div>
                
                <p class="project-description">${project.description}</p>
                
                <div class="project-meta">
                    <div class="meta-item">
                        <span class="meta-label">Duration:</span>
                        <span class="meta-value">${project.duration}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Impact:</span>
                        <span class="meta-value">${project.impact}</span>
                    </div>
                </div>
                
                <div class="project-highlights">
                    <h4>🎯 Key Achievements:</h4>
                    <ul class="highlights-list">
                        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tag tag-primary">${tech}</span>`).join('')}
                </div>
                
                <div class="project-links">
                    ${generateProjectLinks(project.links)}
                </div>
            </div>
        </div>
    `).join('');
}

function generateProjectLinks(links) {
    const linkMap = {
        github: { icon: '💻', label: 'GitHub' },
        demo: { icon: '🔗', label: 'Live Demo' },
        webapp: { icon: '🌐', label: 'Web App' },
        paper: { icon: '📄', label: 'Paper' },
        preprint: { icon: '📄', label: 'Preprint' },
        model: { icon: '🤖', label: 'Model' },
        data: { icon: '📊', label: 'Dataset' },
        results: { icon: '📈', label: 'Results' },
        documentation: { icon: '📚', label: 'Docs' },
        tutorial: { icon: '🎓', label: 'Tutorial' },
        api: { icon: '⚡', label: 'API' }
    };
    
    return Object.entries(links)
        .filter(([key, url]) => url && url !== '#')
        .map(([key, url]) => {
            const { icon, label } = linkMap[key] || { icon: '🔗', label: key };
            return `<a href="${url}" class="link link-external" target="_blank">${icon} ${label}</a>`;
        })
        .join('');
}

function formatProjectStatus(status) {
    const statusMap = {
        'completed': 'Completed',
        'in-development': 'In Development',
        'planning': 'Planning'
    };
    return statusMap[status] || status;
}

function addProjectsStyles() {
    const styles = `
        <style id="projects-styles">
            .projects-overview {
                background: var(--bg-white);
                padding: var(--space-8);
                border-radius: var(--radius-2xl);
                margin-bottom: var(--space-12);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
            }
            
            .overview-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: var(--space-6);
            }
            
            .overview-stat {
                text-align: center;
                padding: var(--space-4);
                background: var(--bg-secondary);
                border-radius: var(--radius-xl);
                transition: all var(--transition-normal);
                cursor: pointer;
            }
            
            .overview-stat:hover {
                transform: translateY(-2px);
                background: rgba(0, 63, 127, 0.05);
            }
            
            .projects-filters {
                display: flex;
                justify-content: center;
                gap: var(--space-3);
                margin-bottom: var(--space-12);
                flex-wrap: wrap;
            }
            
            .project-filter-btn {
                padding: var(--space-3) var(--space-5);
                border: 2px solid var(--border-medium);
                background: var(--bg-white);
                color: var(--text-secondary);
                border-radius: var(--radius-full);
                cursor: pointer;
                font-weight: 500;
                font-size: var(--font-size-sm);
                transition: all var(--transition-fast);
            }
            
            .project-filter-btn:hover,
            .project-filter-btn.active {
                background: var(--eth-blue);
                color: var(--neutral-100);
                border-color: var(--eth-blue);
                transform: translateY(-1px);
            }
            
            .projects-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
                gap: var(--space-8);
            }
            
            .project-card {
                background: var(--bg-white);
                border-radius: var(--radius-2xl);
                overflow: hidden;
                box-shadow: var(--shadow-md);
                transition: all var(--transition-normal);
                border: 1px solid var(--border-light);
                position: relative;
            }
            
            .project-card:hover {
                transform: translateY(-8px);
                box-shadow: var(--shadow-xl);
            }
            
            .project-image {
                height: 180px;
                background: var(--gradient-primary);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--neutral-100);
                font-size: 3.5rem;
                position: relative;
                overflow: hidden;
            }
            
            .project-overlay {
                position: absolute;
                top: var(--space-4);
                right: var(--space-4);
            }
            
            .project-content {
                padding: var(--space-8);
            }
            
            .project-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: var(--space-4);
                gap: var(--space-3);
            }
            
            .project-title {
                font-size: var(--font-size-xl);
                font-weight: 600;
                color: var(--text-primary);
                line-height: 1.3;
                flex: 1;
            }
            
            .project-description {
                color: var(--text-secondary);
                margin-bottom: var(--space-6);
                line-height: 1.6;
            }
            
            .project-meta {
                display: grid;
                gap: var(--space-3);
                margin-bottom: var(--space-6);
                padding: var(--space-4);
                background: var(--bg-secondary);
                border-radius: var(--radius-lg);
            }
            
            .meta-item {
                display: flex;
                justify-content: space-between;
                font-size: var(--font-size-sm);
            }
            
            .meta-label {
                color: var(--text-secondary);
                font-weight: 500;
            }
            
            .meta-value {
                color: var(--text-primary);
                font-weight: 600;
            }
            
            .project-highlights {
                margin-bottom: var(--space-6);
            }
            
            .project-highlights h4 {
                color: var(--eth-blue);
                margin-bottom: var(--space-3);
                font-size: var(--font-size-base);
            }
            
            .highlights-list {
                list-style: none;
                padding: 0;
            }
            
            .highlights-list li {
                padding: var(--space-2) 0;
                padding-left: var(--space-6);
                position: relative;
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                line-height: 1.5;
            }
            
            .highlights-list li::before {
                content: '✨';
                position: absolute;
                left: 0;
                top: var(--space-2);
                color: var(--bio-green);
            }
            
            .tech-tags {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-2);
                margin-bottom: var(--space-6);
            }
            
            .project-links {
                display: flex;
                gap: var(--space-3);
                flex-wrap: wrap;
            }
            
            .projects-cta {
                background: var(--gradient-primary);
                color: var(--neutral-100);
                padding: var(--space-12);
                border-radius: var(--radius-2xl);
                text-align: center;
                margin-top: var(--space-16);
                position: relative;
                overflow: hidden;
            }
            
            .projects-cta::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20,20 L80,80 M80,20 L20,80" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
                opacity: 0.3;
            }
            
            .projects-cta .cta-content {
                position: relative;
                z-index: 1;
            }
            
            .projects-cta h3 {
                color: var(--neutral-100);
                margin-bottom: var(--space-4);
                font-size: var(--font-size-2xl);
            }
            
            .projects-cta p {
                color: rgba(255, 255, 255, 0.9);
                margin-bottom: var(--space-8);
                font-size: var(--font-size-lg);
                line-height: 1.6;
            }
            
            .projects-cta .cta-buttons {
                display: flex;
                gap: var(--space-4);
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .projects-cta .btn {
                background: rgba(255, 255, 255, 0.15);
                color: var(--neutral-100);
                border: 2px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(10px);
            }
            
            .projects-cta .btn:hover {
                background: rgba(255, 255, 255, 0.25);
                border-color: rgba(255, 255, 255, 0.5);
                transform: translateY(-2px);
            }
            
            /* Filter animations */
            .project-card.filtering-out {
                opacity: 0;
                transform: scale(0.8);
                transition: all var(--transition-normal);
            }
            
            .project-card.filtering-in {
                opacity: 1;
                transform: scale(1);
                animation: projectFilterIn 0.6s ease-out;
            }
            
            @keyframes projectFilterIn {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            /* Hover effects */
            .project-image {
                transition: all var(--transition-normal);
            }
            
            .project-card:hover .project-image {
                transform: scale(1.05);
            }
            
                .projects-overview {
                    padding: var(--space-6);
                }
                
                .projects-filters {
                    justify-content: flex-start;
                    overflow-x: auto;
                    padding-bottom: var(--space-3);
                }
                
                .project-filter-btn {
                    white-space: nowrap;
                    flex-shrink: 0;
                }
                
                .projects-grid {
                    grid-template-columns: 1fr;
                }
                
                .project-content {
                    padding: var(--space-6);
                }
                
                .projects-cta {
                    padding: var(--space-8);
                }
                
                .projects-cta .cta-buttons {
                    flex-direction: column;
                    align-items: center;
                }
            }
        </style>
    `;
    
    if (!document.querySelector('#projects-styles')) {
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

function initializeProjectsInteractions() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter project cards
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('filtering-out');
                    card.classList.add('filtering-in');
                    card.style.display = 'block';
                } else {
                    card.classList.add('filtering-out');
                    card.classList.remove('filtering-in');
                    setTimeout(() => {
                        if (card.classList.contains('filtering-out')) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
            
            // Update overview stats
            updateProjectStats(filter);
        });
    });
    
    // Add hover effects for project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const image = this.querySelector('.project-image');
            image.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.project-image');
            image.style.transform = 'scale(1)';
        });
    });
    
    // Add click interactions for tech tags
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            const tech = this.textContent;
            
            // Highlight all projects using this technology
            projectCards.forEach(card => {
                const cardTags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent);
                if (cardTags.includes(tech)) {
                    card.style.border = '2px solid var(--bio-green)';
                    setTimeout(() => {
                        card.style.border = '1px solid var(--border-light)';
                    }, 2000);
                }
            });
            
            // Show notification
            showTechHighlight(tech);
        });
    });
}

function updateProjectStats(filter) {
    const filteredProjects = filter === 'all' ? 
        researchProjectsData : 
        researchProjectsData.filter(project => project.category === filter);
    
    const statNumbers = document.querySelectorAll('.overview-stat .stat-number');
    
    if (statNumbers[0]) animateProjectNumber(statNumbers[0], filteredProjects.length);
    if (statNumbers[1]) animateProjectNumber(statNumbers[1], filteredProjects.filter(p => p.status === 'completed').length);
}

function animateProjectNumber(element, targetNumber) {
    const startNumber = parseInt(element.textContent) || 0;
    const duration = 500;
    const steps = 20;
    const increment = (targetNumber - startNumber) / steps;
    let current = startNumber;
    let step = 0;
    
    const timer = setInterval(() => {
        step++;
        current += increment;
        
        if (step >= steps) {
            clearInterval(timer);
            element.textContent = targetNumber;
        } else {
            element.textContent = Math.round(current);
        }
    }, duration / steps);
}

function showTechHighlight(tech) {
    const notification = Utils.dom.create('div', {
        class: 'tech-highlight-notification'
    }, `💡 Highlighting all projects using <strong>${tech}</strong>`);
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bio-green);
        color: white;
        padding: var(--space-3) var(--space-5);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-size: var(--font-size-sm);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}