/* Re-upload fix */

/**
 * Experience Section Content Loader
 * Academic experience, internships, and research positions
 */

// Your academic and research experience data
const experienceData = [
    {
        id: 1,
        title: "Research Assistant",
        organization: "Biomedical Research Lab",
        location: "University of Sindh, Jamshoro",
        startDate: "2023-09",
        endDate: "present",
        type: "research",
        description: "Leading multiple research projects in biomedical data science and precision medicine. Collaborating with faculty on cancer biomarker discovery and developing machine learning models for clinical applications. Mentoring junior students in data analysis techniques.",
        achievements: [
            "Published 2 research papers in international journals",
            "Developed novel biomarker discovery pipeline with 94% accuracy",
            "Presented research at 3 academic conferences",
            "Secured research funding of $5,000 for project expenses",
            "Mentored 5 undergraduate students in research methods"
        ],
        skills: ["Research Design", "Data Analysis", "Scientific Writing", "Mentoring", "Grant Writing"],
        supervisor: "Dr. Research Supervisor",
        projects: ["Multi-Omics Cancer Classification", "Clinical Decision Support System"]
    },
    {
        id: 2,
        title: "Data Science Intern",
        organization: "Healthcare Analytics Company",
        location: "Remote (International Collaboration)",
        startDate: "2023-06",
        endDate: "2023-08",
        type: "internship",
        description: "Summer internship focused on developing AI solutions for precision medicine. Worked on predictive models for treatment response prediction and collaborated with international team of data scientists and medical professionals.",
        achievements: [
            "Developed deep learning model with 89% accuracy for treatment prediction",
            "Reduced model inference time by 40% through optimization",
            "Created interactive dashboard for clinical stakeholders",
            "Contributed to company's precision medicine platform",
            "Received outstanding intern performance rating"
        ],
        skills: ["Deep Learning", "Clinical Data Analysis", "Model Optimization", "Team Collaboration", "Agile Development"],
        supervisor: "Dr. Industry Mentor",
        projects: ["Treatment Response Prediction Model"]
    },
    {
        id: 3,
        title: "Teaching Assistant",
        organization: "Department of Data Science",
        location: "University of Sindh, Jamshoro",
        startDate: "2023-02",
        endDate: "2023-12",
        type: "academic",
        description: "Teaching assistant for undergraduate courses in statistics, machine learning, and biomedical data analysis. Responsible for lab sessions, student mentoring, and curriculum development for biomedical applications.",
        achievements: [
            "Taught 150+ students across multiple courses",
            "Developed biomedical case studies for curriculum",
            "Achieved 95% student satisfaction rating",
            "Created online tutorial materials for remote learning",
            "Assisted in course curriculum modernization"
        ],
        skills: ["Teaching", "Curriculum Development", "Student Mentoring", "Communication", "Educational Technology"],
        supervisor: "Prof. Course Coordinator",
        projects: ["Biomedical Data Science Curriculum", "Online Learning Platform"]
    },
    {
        id: 4,
        title: "Undergraduate Researcher",
        organization: "Precision Medicine Initiative",
        location: "University of Sindh, Jamshoro",
        startDate: "2022-09",
        endDate: "2023-05",
        type: "research",
        description: "Independent research project on AI applications in early disease detection. Focused on developing machine learning algorithms for analyzing neuroimaging data to detect Alzheimer's disease in pre-clinical stages.",
        achievements: [
            "Achieved 92% accuracy in early Alzheimer's detection",
            "Processed 5,000+ brain MRI scans",
            "Presented findings at international neuroscience conference",
            "Collaborated with neurologists and radiologists",
            "Received best undergraduate research award"
        ],
        skills: ["Neuroimaging Analysis", "Deep Learning", "Medical Image Processing", "Research Independence", "Scientific Presentation"],
        supervisor: "Dr. Neuroscience Researcher",
        projects: ["Alzheimer's Early Detection AI"]
    },
    {
        id: 5,
        title: "Data Analysis Volunteer",
        organization: "Public Health Research NGO",
        location: "Sindh, Pakistan",
        startDate: "2022-06",
        endDate: "2022-08",
        type: "volunteer",
        description: "Volunteer data analyst for public health research focused on infectious disease modeling and health policy analysis. Contributed to COVID-19 response efforts through data-driven insights and predictive modeling.",
        achievements: [
            "Analyzed health data from 50+ districts",
            "Developed COVID-19 prediction models",
            "Created public health dashboards for policy makers",
            "Contributed to 2 policy recommendation reports",
            "Provided data literacy training to NGO staff"
        ],
        skills: ["Public Health Analytics", "Epidemiological Modeling", "Policy Analysis", "Community Service", "Data Visualization"],
        supervisor: "Public Health Director",
        projects: ["COVID-19 Modeling Dashboard", "Health Policy Analytics"]
    }
];

window.loadExperienceSection = function(sectionElement) {
    const experienceHTML = `
        <h2 class="section-title">Academic & Research Experience</h2>
        
        <div class="experience-summary">
            <div class="summary-stats">
                <div class="summary-stat">
                    <div class="stat-number">${experienceData.length}</div>
                    <div class="stat-label">Positions</div>
                </div>
                <div class="summary-stat">
                    <div class="stat-number">${calculateTotalExperience()}</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="summary-stat">
                    <div class="stat-number">${experienceData.filter(e => e.type === 'research').length}</div>
                    <div class="stat-label">Research Roles</div>
                </div>
                <div class="summary-stat">
                    <div class="stat-number">${countTotalAchievements()}</div>
                    <div class="stat-label">Key Achievements</div>
                </div>
            </div>
        </div>
        
        <div class="experience-filters">
            <button class="exp-filter-btn active" data-filter="all">All Experience</button>
            <button class="exp-filter-btn" data-filter="research">Research</button>
            <button class="exp-filter-btn" data-filter="internship">Internships</button>
            <button class="exp-filter-btn" data-filter="academic">Academic</button>
            <button class="exp-filter-btn" data-filter="volunteer">Volunteer</button>
        </div>
        
        <div class="timeline">
            ${generateExperienceTimeline(experienceData)}
        </div>
        
        <div class="experience-highlights">
            <h3>🏆 Career Highlights & Achievements</h3>
            <div class="highlights-grid">
                <div class="highlight-item">
                    <div class="highlight-icon">📚</div>
                    <h4>Academic Excellence</h4>
                    <p>Published research papers, conference presentations, and academic awards recognition</p>
                </div>
                <div class="highlight-item">
                    <div class="highlight-icon">🤝</div>
                    <h4>International Collaboration</h4>
                    <p>Worked with researchers and teams across multiple countries and institutions</p>
                </div>
                <div class="highlight-item">
                    <div class="highlight-icon">👨‍🏫</div>
                    <h4>Teaching & Mentoring</h4>
                    <p>Taught 150+ students and mentored multiple undergraduate researchers</p>
                </div>
                <div class="highlight-item">
                    <div class="highlight-icon">💡</div>
                    <h4>Innovation Impact</h4>
                    <p>Developed tools and models currently used by multiple research labs</p>
                </div>
            </div>
        </div>
    `;
    
    sectionElement.innerHTML = experienceHTML;
    
    // Add experience-specific styles
    addExperienceStyles();
    
    // Initialize interactions
    initializeExperienceInteractions();
    
    console.log('Experience section loaded successfully');
};
