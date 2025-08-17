// All Projects Page JavaScript
class AllProjectsPage {
    constructor() {
        this.projects = [
            { 
                name: "RED-MACHINE", 
                url: "https://red-machine-indian-stock-market-sentiment-analysis.vercel.app/", 
                category: "ai-trading", 
                tag: "AI Trading",
                description: "AI-powered trading model for Indian stock market with sentiment analysis and predictive analytics.",
                tech: ["Python", "TensorFlow", "Next.js", "Pandas", "NumPy", "Scikit-learn"]
            },
            { 
                name: "RED-MACHINE Sentiments", 
                url: "https://red-machine-sentiments-indian-marke-ten.vercel.app/", 
                category: "ai-trading", 
                tag: "AI Trading",
                description: "Advanced AI model analyzing Indian market sentiments using real-time data scraping from Twitter and financial news.",
                tech: ["Python", "NLTK", "TensorFlow", "Tweepy", "MongoDB", "Flask"]
            },
            { 
                name: "Vibrant Shop Motion", 
                url: "https://option-sunsex-v1gf.vercel.app/", 
                category: "webui", 
                tag: "UI Motion",
                description: "A vibrant e-commerce interface with smooth animations and modern design patterns.",
                tech: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"]
            },
            { 
                name: "Bank Nifty Oracle AI", 
                url: "https://bank-nifty-oracle-ai.vercel.app/", 
                category: "finance", 
                tag: "Finance UI",
                description: "AI-powered financial dashboard for Bank Nifty trading with predictive analytics.",
                tech: ["Next.js", "Chart.js", "Python", "Machine Learning"]
            },
            { 
                name: "Portfolio v1", 
                url: "https://my-projects-portfolio12312.vercel.app/", 
                category: "webui", 
                tag: "Portfolio",
                description: "First iteration of my personal portfolio showcasing web development skills.",
                tech: ["React", "CSS3", "JavaScript", "Responsive Design"]
            },
            { 
                name: "Raza Perfume Motion v1", 
                url: "https://raza-perfume-flow-motion-45-vr4c.vercel.app/", 
                category: "webui", 
                tag: "E-comm Motion",
                description: "Luxury perfume e-commerce platform with immersive motion design.",
                tech: ["React", "GSAP", "Three.js", "WebGL"]
            },
            { 
                name: "Raza Perfume Motion v2", 
                url: "https://raza-perfume-flow-motion.vercel.app/", 
                category: "webui", 
                tag: "E-comm Motion",
                description: "Enhanced version of luxury perfume platform with advanced animations.",
                tech: ["Next.js", "Framer Motion", "Tailwind", "React Three Fiber"]
            },
            { 
                name: "Sensex Signal Forge", 
                url: "https://lovable.dev/projects/d3eaa441-6857-4c57-b768-4decb3d305e2", 
                category: "finance", 
                tag: "Finance",
                description: "Advanced trading signal generator for Sensex with real-time analysis.",
                tech: ["Python", "FastAPI", "WebSocket", "Redis"]
            },
            { 
                name: "Architexture Scrollscape", 
                url: "https://architexture-scrollscape-gallery.vercel.app/", 
                category: "gallery", 
                tag: "Gallery",
                description: "Interactive architectural gallery with scroll-based animations.",
                tech: ["Vanilla JS", "CSS Grid", "Intersection Observer", "Parallax"]
            },
            { 
                name: "Webzoo", 
                url: "https://webzoo.in/", 
                category: "client", 
                tag: "Marketing",
                description: "Digital marketing agency website with modern design and SEO optimization.",
                tech: ["WordPress", "PHP", "MySQL", "SEO"]
            },
            { 
                name: "Unicorn Industries", 
                url: "https://unicornindustries.net/", 
                category: "client", 
                tag: "Corporate",
                description: "Corporate website for manufacturing company with product showcase.",
                tech: ["React", "Node.js", "MongoDB", "Express"]
            },
            { 
                name: "The We Shop", 
                url: "https://www.theweshop.in/", 
                category: "client", 
                tag: "E-Commerce",
                description: "Full-featured e-commerce platform with payment integration and inventory management.",
                tech: ["Next.js", "Stripe", "PostgreSQL", "AWS"]
            }
        ];
        
        this.filteredProjects = [...this.projects];
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupFiltering();
        this.renderProjects();
        this.setupAnimations();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    this.smoothScrollTo(href);
                } else {
                    window.location.href = href;
                }
            });
        });
    }

    setupFiltering() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('data-filter');
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                // Filter projects
                this.filterProjects(filter);
                
                // Add click animation
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 150);
            });
        });
    }

    filterProjects(category) {
        if (category === 'all') {
            this.filteredProjects = [...this.projects];
        } else {
            this.filteredProjects = this.projects.filter(project => project.category === category);
        }
        
        this.renderProjects();
    }

    renderProjects() {
        const grid = document.getElementById('all-projects-grid');
        
        if (this.filteredProjects.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h3>No projects found</h3>
                    <p>Try selecting a different category</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = '';
        
        this.filteredProjects.forEach((project, index) => {
            const card = this.createEnhancedProjectCard(project, index);
            grid.appendChild(card);
            
            // Stagger animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    createEnhancedProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card--enhanced';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        const screenshotUrl = `https://image.thum.io/get/width/400/crop/600/noanimate/${encodeURIComponent(project.url)}`;
        
        card.innerHTML = `
            <div class="project-image--large">
                <img src="${screenshotUrl}" alt="${project.name}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                     loading="lazy">
                <div class="project-placeholder" style="display: flex; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, var(--color-bg-1), var(--color-bg-2)); color: var(--color-text-secondary); font-size: 3rem;">
                    ${this.getProjectInitials(project.name)}
                </div>
                <div class="project-overlay">
                    <div class="project-overlay-content">
                        <h3 class="project-overlay-title">${project.name}</h3>
                        <p class="project-overlay-category">${project.tag}</p>
                    </div>
                </div>
            </div>
            <div class="project-content--enhanced">
                <div class="project-header--enhanced">
                    <div>
                        <h3 class="project-title--enhanced">${project.name}</h3>
                        <span class="project-category--enhanced">${project.tag}</span>
                    </div>
                </div>
                <p class="project-description--enhanced">${project.description}</p>
                <div class="project-tech--enhanced">
                    ${project.tech.map(tech => `<span class="tech-tag--enhanced">${tech}</span>`).join('')}
                </div>
                <div class="project-actions--enhanced">
                    <button class="project-btn--enhanced project-btn--live" data-url="${project.url}">
                        🚀 Live Demo
                    </button>
                    <button class="project-btn--enhanced project-btn--share" data-url="${project.url}" data-name="${project.name}">
                        📤 Share
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        setTimeout(() => {
            const liveBtn = card.querySelector('.project-btn--live');
            const shareBtn = card.querySelector('.project-btn--share');
            
            if (liveBtn) {
                liveBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const url = e.target.getAttribute('data-url');
                    window.open(url, '_blank');
                    
                    // Add ripple effect
                    this.addRippleEffect(e.target);
                });
            }
            
            if (shareBtn) {
                shareBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const url = e.target.getAttribute('data-url');
                    const name = e.target.getAttribute('data-name');
                    this.shareProject(name, url);
                    
                    // Add ripple effect
                    this.addRippleEffect(e.target);
                });
            }
        }, 100);
        
        return card;
    }

    getProjectInitials(name) {
        return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
    }

    shareProject(name, url) {
        if (navigator.share) {
            navigator.share({
                title: `${name} - Tushar R. Chandane`,
                text: `Check out this amazing project: ${name}`,
                url: url
            }).catch(console.error);
        } else {
            // Fallback for browsers without Web Share API
            const text = `Check out ${name}: ${url}`;
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('Project link copied to clipboard!');
            });
        }
    }

    addRippleEffect(button) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        button.style.position = 'relative';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-sm);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, { threshold: 0.1 });

        // Observe all project cards
        setTimeout(() => {
            const cards = document.querySelectorAll('.project-card--enhanced');
            cards.forEach(card => observer.observe(card));
        }, 100);
    }

    smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Add CSS animations for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AllProjectsPage();
});