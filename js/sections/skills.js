/* Re-upload fix */

/**
 * Technical Skills Section Content Loader
 * Showcase technical expertise and competencies
 */

// ----------------------
// Skills Data
// ----------------------
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

// ----------------------
// Load Skills Section
// ----------------------
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
    
    console.log('✅ Skills section loaded successfully');
};

// ----------------------
// Helper Functions
// ----------------------
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

function initializeSkillsInteractions() {
    // Animate skill progress bars on load
    requestAnimationFrame(() => {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + "%";
        });
    });
}

function addSkillsStyles() {
    if (document.getElementById("skills-styles")) return;
    const style = document.createElement("style");
    style.id = "skills-styles";
    style.textContent = `
        /* (Your CSS styles go here — keep the ones you pasted earlier) */
    `;
    document.head.appendChild(style);
}
