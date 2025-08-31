/* Re-upload fix */

/**
 * Publications Section Content Loader
 * Manage your research publications and papers
 */

// ----------------------
// Publications Data
// ----------------------
const publicationsData = [
    {
        id: 1,
        title: "Machine Learning Approaches for Cancer Biomarker Discovery in Genomic Data",
        authors: ["Mureed Sajjad", "Dr. Research Supervisor", "Dr. Co-Investigator"],
        venue: "Journal of Biomedical Informatics",
        year: 2024,
        status: "published",
        type: "journal",
        abstract: "This study presents a comprehensive machine learning framework for identifying cancer biomarkers from genomic datasets...",
        keywords: ["Cancer Biomarkers", "Machine Learning", "Genomics", "Precision Medicine", "Multi-omics"],
        links: {
            arxiv: "https://arxiv.org/abs/2024.xxxxx",
            pubmed: "https://pubmed.ncbi.nlm.nih.gov/xxxxxxxx",
            doi: "https://doi.org/10.1016/j.jbi.2024.xxxxx",
            code: "https://github.com/mureed-sajjad/cancer-biomarker-ml",
            data: "https://zenodo.org/record/xxxxxxx",
            supplementary: "#"
        },
        impactFactor: 4.5,
        citations: 0
    },
    {
        id: 2,
        title: "Deep Learning for Precision Medicine: Predicting Treatment Response in Cancer Patients",
        authors: ["Mureed Sajjad", "International Collaborator", "Dr. Senior Researcher"],
        venue: "Nature Machine Intelligence",
        year: 2024,
        status: "under-review",
        type: "journal",
        abstract: "We developed a deep learning architecture that integrates clinical, genomic, and imaging data to predict cancer treatment responses...",
        keywords: ["Deep Learning", "Precision Medicine", "Treatment Response", "Multimodal AI", "Clinical Decision Support"],
        links: {
            preprint: "https://www.biorxiv.org/content/10.1101/2024.xx.xx.xxxxxx",
            code: "https://github.com/mureed-sajjad/dl-treatment-response"
        },
        impactFactor: 15.5,
        citations: 0
    },
    {
        id: 3,
        title: "AI-Driven Biomarker Discovery for Early Detection of Alzheimer's Disease Using Multimodal Data",
        authors: ["Mureed Sajjad", "Neuroimaging Expert", "Dr. Alzheimer's Specialist"],
        venue: "Cell Reports Medicine (Target Journal)",
        year: 2024,
        status: "in-preparation",
        type: "journal",
        abstract: "This ongoing research focuses on developing AI algorithms to identify early-stage Alzheimer's biomarkers from multimodal neuroimaging and proteomic data...",
        keywords: ["Alzheimer's Disease", "Early Detection", "Multimodal AI", "Neuroimaging", "Biomarker Discovery"],
        links: {
            code: "https://github.com/mureed-sajjad/alzheimer-early-detection"
        },
        impactFactor: 17.3,
        citations: 0
    }
];

// ----------------------
// Section Loader
// ----------------------
window.loadPublicationsSection = function(sectionElement) {
    const publicationsHTML = `
        <h2 class="section-title">Research Publications & Papers</h2>
        
        <div class="publications-stats">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">${publicationsData.length}</div>
                    <div class="stat-label">Research Papers</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${publicationsData.filter(p => p.status === 'published').length}</div>
                    <div class="stat-label">Published</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${publicationsData.filter(p => p.status === 'under-review').length}</div>
                    <div class="stat-label">Under Review</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${publicationsData.filter(p => p.status === 'in-preparation').length}</div>
                    <div class="stat-label">In Preparation</div>
                </div>
            </div>
        </div>
        
        <div class="publications-filters">
            <button class="filter-btn active" data-filter="all">All Papers</button>
            <button class="filter-btn" data-filter="published">Published</button>
            <button class="filter-btn" data-filter="under-review">Under Review</button>
            <button class="filter-btn" data-filter="in-preparation">In Preparation</button>
        </div>
        
        <div class="publications-grid" id="publicationsGrid">
            ${generatePublicationCards(publicationsData)}
        </div>
        
        <div class="publications-footer">
            <div class="publication-goals">
                <h3>🎯 Publication Goals & Strategy</h3>
                <div class="goals-grid">
                    <div class="goal-item">
                        <div class="goal-icon">📈</div>
                        <h4>Target: 6-7 Papers</h4>
                        <p>High-impact publications in biomedical data science and precision medicine</p>
                    </div>
                    <div class="goal-item">
                        <div class="goal-icon">🏆</div>
                        <h4>Impact Factor 5+</h4>
                        <p>Targeting top-tier journals in computational biology and medical informatics</p>
                    </div>
                    <div class="goal-item">
                        <div class="goal-icon">🌍</div>
                        <h4>International Collaboration</h4>
                        <p>Working with researchers from multiple countries and institutions</p>
                    </div>
                    <div class="goal-item">
                        <div class="goal-icon">🔬</div>
                        <h4>Open Science</h4>
                        <p>Making code and data available for reproducible research</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    sectionElement.innerHTML = publicationsHTML;
    addPublicationsStyles();
    initializePublicationsInteractions();
    console.log('✅ Publications section loaded successfully');
};

// ----------------------
// Helpers
// ----------------------
function generatePublicationCards(publications) {
    return publications.map(pub => `
        <div class="publication-card" data-status="${pub.status}" data-type="${pub.type}">
            <div class="publication-header">
                <h3 class="publication-title">${pub.title}</h3>
                <span class="status-badge status-${pub.status}">${formatStatus(pub.status)}</span>
            </div>
            
            <div class="publication-meta">
                <p class="publication-authors">
                    ${pub.authors.map(author => 
                        author === "Mureed Sajjad" ? `<strong>${author}</strong>` : author
                    ).join(", ")}
                </p>
                <p class="publication-venue">
                    ${pub.venue} • ${pub.year}
                    ${pub.impactFactor ? `<span class="impact-factor">IF: ${pub.impactFactor}</span>` : ''}
                </p>
            </div>
            
            <div class="publication-abstract">
                <strong>Abstract:</strong> ${pub.abstract}
            </div>
            
            <div class="publication-keywords">
                ${pub.keywords.map(keyword => `<span class="tag tag-primary">${keyword}</span>`).join('')}
            </div>
            
            <div class="publication-links">
                ${generatePublicationLinks(pub.links)}
            </div>
        </div>
    `).join('');
}

function generatePublicationLinks(links) {
    const linkMap = {
        arxiv: { icon: '📄', label: 'arXiv' },
        pubmed: { icon: '🔗', label: 'PubMed' },
        doi: { icon: '🌐', label: 'DOI' },
        preprint: { icon: '📄', label: 'Preprint' },
        proposal: { icon: '📋', label: 'Proposal' },
        preliminary: { icon: '📊', label: 'Results' },
        code: { icon: '💻', label: 'Code' },
        data: { icon: '📊', label: 'Data' },
        supplementary: { icon: '📎', label: 'Supplementary' }
    };
    
    return Object.entries(links)
        .filter(([key, url]) => url && url !== '#')
        .map(([key, url]) => {
            const { icon, label } = linkMap[key] || { icon: '🔗', label: key };
            return `<a href="${url}" class="link link-external" target="_blank">${icon} ${label}</a>`;
        })
        .join('');
}

function formatStatus(status) {
    const statusMap = {
        'published': 'Published',
        'under-review': 'Under Review',
        'in-preparation': 'In Preparation'
    };
    return statusMap[status] || status;
}

// ----------------------
// Styles
// ----------------------
function addPublicationsStyles() {
    if (document.getElementById("publications-styles")) return;
    const style = document.createElement("style");
    style.id = "publications-styles";
    style.textContent = `
        .publication-card {
            background: var(--bg-white);
            padding: var(--space-6);
            border-radius: var(--radius-xl);
            border: 1px solid var(--border-light);
            box-shadow: var(--shadow-sm);
            transition: transform var(--transition-fast);
        }
        .publication-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
        }
        .publication-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--space-3);
        }
        .publication-title {
            font-size: var(--font-size-lg);
            font-weight: 600;
            color: var(--text-primary);
        }
        .status-badge {
            padding: var(--space-1) var(--space-3);
            border-radius: var(--radius-full);
            font-size: var(--font-size-xs);
            font-weight: 600;
            text-transform: capitalize;
        }
        .status-published { background: var(--bio-green); color: white; }
        .status-under-review { background: var(--eth-blue); color: white; }
        .status-in-preparation { background: var(--text-secondary); color: white; }
        .publication-meta { margin-bottom: var(--space-4); font-size: var(--font-size-sm); color: var(--text-secondary); }
        .publication-abstract { margin-bottom: var(--space-4); font-size: var(--font-size-sm); line-height: 1.6; }
        .publication-links a {
            display: inline-block;
            margin-right: var(--space-3);
            font-size: var(--font-size-sm);
            text-decoration: none;
            color: var(--eth-blue);
        }
        .goal-item:hover {
            transform: translateY(-3px);
            background: rgba(255,255,255,0.2);
        }
    `;
    document.head.appendChild(style);
}

// ----------------------
// Interactions
// ----------------------
function initializePublicationsInteractions() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.dataset.filter;
            document.querySelectorAll(".publication-card").forEach(card => {
                if (filter === "all" || card.dataset.status === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}
