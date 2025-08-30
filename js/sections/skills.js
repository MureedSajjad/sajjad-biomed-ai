</div>
        
        <div class="skills-grid">
            ${generateSkillCategories(skillsData)}
        </div>
        
        <div class="skills-progression">
            <h3>📈 Learning Journey & Future Goals</h3>
            <div class="progression-timeline">
                <div class="progression-item">
                    <div class="progression-icon">🎓</div>
                    <div class="progression-content">
                        <h4>Foundation (2021-2022)</h4>
                        <p>Started with Python, statistics, and basic machine learning concepts</p>
                        <div class="progression-skills">Python • Statistics • Pandas • Matplotlib</div>
                    </div>
                </div>
                
                <div class="progression-item">
                    <div class="progression-icon">🚀</div>
                    <div class="progression-content">
                        <h4>Advancement (2022-2023)</h4>
                        <p>Expanded into deep learning, bioinformatics, and cloud computing</p>
                        <div class="progression-skills">TensorFlow • Bioconductor • AWS • Docker</div>
                    </div>
                </div>
                
                <div class="progression-item">
                    <div class="progression-icon">🔬</div>
                    <div class="progression-content">
                        <h4>Specialization (2023-2024)</h4>
                        <p>Focused on biomedical applications and research-grade implementations</p>
                        <div class="progression-skills">PyTorch • GATK • Advanced ML • Research Methods</div>
                    </div>
                </div>
                
                <div class="progression-item future">
                    <div class="progression-icon">🎯</div>
                    <div class="progression-content">
                        <h4>Future Goals (2024-2025)</h4>
                        <p>Advanced computational biology, multi-omics integration, and clinical AI</p>
                        <div class="progression-skills">Multi-omics • Clinical AI • Advanced Statistics • Research Leadership</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="skills-certifications">
            <h3>🏆 Certifications & Achievements</h3>
            <div class="certifications-grid">
                <div class="cert-item">
                    <div class="cert-icon">🏅</div>
                    <h4>Machine Learning Specialization</h4>
                    <p>Stanford University (Coursera) • 2023</p>
                </div>
                <div class="cert-item">
                    <div class="cert-icon">🧬</div>
                    <h4>Bioinformatics Specialization</h4>
                    <p>UC San Diego (Coursera) • 2023</p>
                </div>
                <div class="cert-item">
                    <div class="cert-icon">☁️</div>
                    <h4>AWS Cloud Practitioner</h4>
                    <p>Amazon Web Services • 2023</p>
                </div>
                <div class="cert-item">
                    <div class="cert-icon">📊</div>
                    <h4>Advanced Statistics</h4>
                    <p>Johns Hopkins University • 2022</p>
                </div>
            </div>
        </div>
    `;
    
    sectionElement.innerHTML = skillsHTML;
    
    // Add skills-specific styles
    addSkillsStyles();
    
    // Initialize skills interactions
    initializeSkillsInteractions();
    
    Utils.log.success('Skills section loaded successfully');
};

function generateSkillCategories(skillsData) {
    return Object.entries(skillsData).map(([categoryName, categoryData]) => `
        <div class="skill-category">
            <div class="category-header">
                <h3><span class="category-icon">${categoryData.icon}</span> ${categoryName}</h3>
            </div>
            
            <div class="skills-list">
                ${categoryData.skills.map(skill => `
                    <div class="skill-item" data-level="${skill.level.toLowerCase()}">
                        <div class="skill-info">
                            <div class="skill-name">${skill.name}</div>
                            <div class="skill-description">${skill.description}</div>
                        </div>
                        <div class="skill-meta">
                            <div class="skill-level level-${skill.level.toLowerCase()}">${skill.level}</div>
                            <div class="skill-years">${skill.years}y</div>
                        </div>
                        <div class="skill-progress">
                            <div class="progress-bar" data-width="${getProgressWidth(skill.level)}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function getProgressWidth(level) {
    const levels = {
        'Beginner': 25,
        'Intermediate': 60,
        'Advanced': 85,
        'Expert': 100
    };
    return levels[level] || 0;
}

function calculateAverageExperience() {
    const allSkills = Object.values(skillsData).flatMap(category => category.skills);
    const totalYears = allSkills.reduce((sum, skill) => sum + skill.years, 0);
    return (totalYears / allSkills.length).toFixed(1);
}

function countExpertSkills() {
    return Object.values(skillsData)
        .flatMap(category => category.skills)
        .filter(skill => skill.level === 'Expert').length;
}

function addSkillsStyles() {
    const styles = `
        <style id="skills-styles">
            .skills-overview {
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: var(--space-8);
                margin-bottom: var(--space-12);
                align-items: center;
            }
            
            .overview-text {
                background: var(--bg-white);
                padding: var(--space-8);
                border-radius: var(--radius-2xl);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
            }
            
            .overview-text h3 {
                color: var(--eth-blue);
                margin-bottom: var(--space-4);
                font-size: var(--font-size-xl);
            }
            
            .overview-text p {
                color: var(--text-secondary);
                line-height: 1.7;
                margin-bottom: 0;
            }
            
            .skills-summary {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: var(--space-4);
            }
            
            .skill-metric {
                background: var(--gradient-card);
                padding: var(--space-6);
                border-radius: var(--radius-xl);
                text-align: center;
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
                transition: all var(--transition-normal);
            }
            
            .skill-metric:hover {
                transform: translateY(-4px);
                box-shadow: var(--shadow-lg);
            }
            
            .skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: var(--space-8);
                margin-bottom: var(--space-16);
            }
            
            .skill-category {
                background: var(--bg-white);
                border-radius: var(--radius-2xl);
                padding: var(--space-8);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
                transition: all var(--transition-normal);
                position: relative;
                overflow: hidden;
            }
            
            .skill-category::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: var(--gradient-primary);
                transform: scaleX(0);
                transition: transform var(--transition-normal);
            }
            
            .skill-category:hover::before {
                transform: scaleX(1);
            }
            
            .skill-category:hover {
                transform: translateY(-6px);
                box-shadow: var(--shadow-xl);
            }
            
            .category-header {
                margin-bottom: var(--space-6);
                text-align: center;
            }
            
            .category-header h3 {
                color: var(--eth-blue);
                font-size: var(--font-size-xl);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: var(--space-3);
            }
            
            .category-icon {
                font-size: var(--font-size-2xl);
            }
            
            .skills-list {
                display: grid;
                gap: var(--space-4);
            }
            
            .skill-item {
                padding: var(--space-4);
                background: var(--bg-secondary);
                border-radius: var(--radius-lg);
                border: 1px solid var(--border-light);
                transition: all var(--transition-normal);
                position: relative;
                overflow: hidden;
            }
            
            .skill-item::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 4px;
                background: var(--bio-green);
                transform: scaleY(0);
                transition: transform var(--transition-normal);
            }
            
            .skill-item:hover::before {
                transform: scaleY(1);
            }
            
            .skill-item:hover {
                background: rgba(0, 63, 127, 0.05);
                transform: translateX(var(--space-2));
                border-color: var(--eth-blue);
            }
            
            .skill-info {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: var(--space-3);
            }
            
            .skill-name {
                font-weight: 600;
                color: var(--text-primary);
                font-size: var(--font-size-base);
            }
            
            .skill-meta {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                flex-shrink: 0;
            }
            
            .skill-level {
                padding: var(--space-1) var(--space-3);
                border-radius: var(--radius-full);
                font-size: var(--font-size-xs);
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .level-beginner {
                background: rgba(100, 116, 139, 0.15);
                color: var(--neutral-600);
            }
            
            .level-intermediate {
                background: rgba(255, 204, 0, 0.15);
                color: #b45309;
            }
            
            .level-advanced {
                background: rgba(0, 102, 204, 0.15);
                color: var(--eth-blue);
            }
            
            .level-expert {
                background: rgba(0, 204, 102, 0.15);
                color: var(--bio-green);
            }
            
            .skill-years {
                font-size: var(--font-size-xs);
                color: var(--text-light);
                font-weight: 500;
            }
            
            .skill-description {
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                line-height: 1.4;
            }
            
            .skill-progress {
                height: 6px;
                background: var(--neutral-200);
                border-radius: var(--radius-full);
                overflow: hidden;
                margin-top: var(--space-2);
            }
            
            .progress-bar {
                height: 100%;
                background: var(--gradient-primary);
                border-radius: var(--radius-full);
                width: 0;
                transition: width 1s ease-out;
                position: relative;
            }
            
            .progress-bar::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                animation: shimmer 2s infinite;
            }
            
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            
            .skills-progression {
                background: var(--bg-white);
                padding: var(--space-10);
                border-radius: var(--radius-2xl);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--border-light);
                margin-bottom: var(--space-12);
            }
            
            .skills-progression h3 {
                color: var(--eth-blue);
                text-align: center;
                margin-bottom: var(--space-8);
                font-size: var(--font-size-2xl);
            }
            
            .progression-timeline {
                display: grid;
                gap: var(--space-6);
                position: relative;
            }
            
            .progression-timeline::before {
                content: '';
                position: absolute;
                left: 30px;
                top: 20px;
                bottom: 20px;
                width: 3px;
                background: var(--gradient-primary);
                border-radius: var(--radius-full);
            }
            
            .progression-item {
                display: grid;
                grid-template-columns: 60px 1fr;
                gap: var(--space-4);
                align-items: start;
                position: relative;
            }
            
            .progression-item.future {
                opacity: 0.7;
            }
            
            .progression-icon {
                width: 60px;
                height: 60px;
                background: var(--gradient-primary);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: var(--font-size-xl);
                color: var(--neutral-100);
                box-shadow: var(--shadow-md);
                position: relative;
                z-index: 1;
            }
            
            .progression-content {
                background: var(--bg-secondary);
                padding: var(--space-6);
                border-radius: var(--radius-xl);
                border: 1px solid var(--border-light);
                transition: all var(--transition-normal);
            }
            
            .progression-content:hover {
                background: rgba(0, 63, 127, 0.05);
                transform: translateX(var(--space-2));
            }
            
            .progression-content h4 {
                color: var(--text-primary);
                margin-bottom: var(--space-2);
                font-size: var(--font-size-lg);
            }
            
            .progression-content p {
                color: var(--text-secondary);
                margin-bottom: var(--space-4);
                line-height: 1.5;
            }
            
            .progression-skills {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-2);
            }
            
            .progression-skills::before {
                content: '';
                flex-basis: 100%;
                height: 0;
            }
            
            .progression-skills {
                font-size: var(--font-size-sm);
                color: var(--eth-blue);
                font-weight: 500;
            }
            
            .skills-certifications {
                background: var(--gradient-primary);
                padding: var(--space-10);
                border-radius: var(--radius-2xl);
                color: var(--neutral-100);
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .skills-certifications::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10,10 L90,90 M90,10 L10,90" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
                opacity: 0.3;
            }
            
            .skills-certifications h3 {
                color: var(--neutral-100);
                margin-bottom: var(--space-8);
                font-size: var(--font-size-2xl);
                position: relative;
                z-index: 1;
            }
            
            .certifications-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: var(--space-6);
                position: relative;
                z-index: 1;
            }
            
            .cert-item {
                background: rgba(255, 255, 255, 0.1);
                padding: var(--space-6);
                border-radius: var(--radius-xl);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: all var(--transition-normal);
                text-align: center;
            }
            
            .cert-item:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-4px);
                border-color: rgba(255, 255, 255, 0.4);
            }
            
            .cert-icon {
                font-size: var(--font-size-3xl);
                margin-bottom: var(--space-3);
                display: block;
            }
            
            .cert-item h4 {
                color: var(--neutral-100);
                margin-bottom: var(--space-2);
                font-size: var(--font-size-lg);
            }
            
            .cert-item p {
                color: rgba(255, 255, 255, 0.8);
                font-size: var(--font-size-sm);
                margin-bottom: 0;
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
                .skills-overview {
                    grid-template-columns: 1fr;
                    gap: var(--space-6);
                }
                
                .skills-summary {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                .skills-grid {
                    grid-template-columns: 1fr;
                }
                
                .progression-timeline::before {
                    left: 15px;
                }
                
                .progression-item {
                    grid-template-columns: 30px 1fr;
                    gap: var(--space-3);
                }
                
                .progression-icon/**
 * Technical Skills Section Content Loader
 * Showcase technical expertise and competencies
 */

// Your technical skills data organized by categories
const skillsData = {
    "Programming Languages": {
        icon: "💻",
        skills: [
            { name: "Python", level: "Expert", years: 3, description: "Primary language for data science and ML" },
            { name: "R", level: "Advanced", years: 2, description: "Statistical analysis and bioinformatics" },
            { name: "SQL", level: "Advanced", years: 2, description: "Database queries and data manipulation" },
            { name: "JavaScript", level: "Intermediate", years: 1, description: "Web development and visualization" },
            { name: "MATLAB", level: "Intermediate", years: 1, description: "Signal processing and numerical computing" },
            { name: "Julia", level: "Beginner", years: 0.5, description: "High-performance scientific computing" }
        ]
    },
    "Machine Learning & AI": {
        icon: "🤖",
        skills: [
            { name: "TensorFlow/Keras", level: "Advanced", years: 2, description: "Deep learning model development" },
            { name: "PyTorch", level: "Advanced", years: 2, description: "Neural networks and research" },
            { name: "Scikit-learn", level: "Expert", years: 3, description: "Classical ML algorithms" },
            { name: "Hugging Face", level: "Intermediate", years: 1, description: "NLP and transformer models" },
            { name: "XGBoost/LightGBM", level: "Advanced", years: 2, description: "Gradient boosting methods" },
            { name: "OpenCV", level: "Intermediate", years: 1, description: "Computer vision applications" }
        ]
    },
    "Biomedical & Bioinformatics": {
        icon: "🧬",
        skills: [
            { name: "Bioconductor", level: "Advanced", years: 2, description: "Genomic data analysis in R" },
            { name: "BioPython", level: "Advanced", years: 2, description: "Biological sequence analysis" },
            { name: "GATK", level: "Intermediate", years: 1, description: "Genomic variant calling" },
            { name: "PLINK", level: "Intermediate", years: 1, description: "Genetic association studies" },
            { name: "ImageJ/FIJI", level: "Intermediate", years: 1, description: "Biomedical image analysis" },
            { name: "CellProfiler", level: "Beginner", years: 0.5, description: "Cell image analysis" }
        ]
    },
    "Data Analysis & Visualization": {
        icon: "📊",
        skills: [
            { name: "Pandas/NumPy", level: "Expert", years: 3, description: "Data manipulation and analysis" },
            { name: "Matplotlib/Seaborn", level: "Advanced", years: 2, description: "Statistical visualization" },
            { name: "Plotly/Dash", level: "Advanced", years: 2, description: "Interactive visualizations" },
            { name: "Tableau", level: "Intermediate", years: 1, description: "Business intelligence dashboards" },
            { name: "D3.js", level: "Beginner", years: 0.5, description: "Custom web visualizations" },
            { name: "ggplot2", level: "Advanced", years: 2, description: "R visualization grammar" }
        ]
    },
    "Cloud & DevOps": {
        icon: "☁️",
        skills: [
            { name: "AWS", level: "Intermediate", years: 1, description: "EC2, S3, SageMaker" },
            { name: "Docker", level: "Intermediate", years: 1, description: "Containerization and deployment" },
            { name: "Git/GitHub", level: "Advanced", years: 2, description: "Version control and collaboration" },
            { name: "Jupyter/JupyterLab", level: "Expert", years: 3, description: "Interactive data science" },
            { name: "Google Colab", level: "Advanced", years: 2, description: "Cloud-based ML development" },
            { name: "Streamlit", level: "Advanced", years: 1, description: "ML web application deployment" }
        ]
    },
    "Databases & Big Data": {
        icon: "🗄️",
        skills: [
            { name: "PostgreSQL", level: "Intermediate", years: 1, description: "Relational database management" },
            { name: "MongoDB", level: "Beginner", years: 0.5, description: "NoSQL document storage" },
            { name: "Apache Spark", level: "Beginner", years: 0.5, description: "Big data processing" },
            { name: "Redis", level: "Beginner", years: 0.5, description: "In-memory data structure store" },
            { name: "SQLite", level: "Intermediate", years: 1, description: "Lightweight database solutions" },
            { name: "Neo4j", level: "Beginner", years: 0.5, description: "Graph database for biological networks" }
        ]
    }
};

window.loadSkillsSection = function(sectionElement) {
    const skillsHTML = `
        <h2 class="section-title">Technical Skills & Expertise</h2>
        
        <div class="skills-overview">
            <div class="overview-text">
                <h3>🛠️ Technical Proficiency</h3>
                <p>My technical expertise spans the entire biomedical data science pipeline, from data collection and preprocessing to advanced machine learning model deployment. I continuously expand my skillset to stay current with the latest developments in AI, bioinformatics, and computational biology.</p>
            </div>
            
            <div class="skills-summary">
                <div class="skill-metric">
                    <div class="metric-number">${Object.values(skillsData).reduce((total, category) => total + category.skills.length, 0)}</div>
                    <div class="metric-label">Technical Skills</div>
                </div>
                <div class="skill-metric">
                    <div class="metric-number">${Object.keys(skillsData).length}</div>
                    <div class="metric-label">Skill Categories</div>
                </div>
                <div class="skill-metric">
                    <div class="metric-number">${calculateAverageExperience()}</div>
                    <div class="metric-label">Avg Years Experience</div>
                </div>
                <div class="skill-metric">
                    <div class="metric-number">${countExpertSkills()}</div>
                    <div class="metric-label">Expert Level Skills</div>
                </div>
            </div>