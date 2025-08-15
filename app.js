// Modern Portfolio Application - All Bugs Fixed
class PortfolioApp {
    constructor() {
        this.projects = [
            { name: "Vibrant Shop Motion", url: "https://option-sunsex-v1gf.vercel.app/", category: "WebUI", tag: "UI Motion" },
            { name: "Bank Nifty Oracle AI", url: "https://bank-nifty-oracle-ai.vercel.app/", category: "WebUI", tag: "Finance UI" },
            { name: "Portfolio v1", url: "https://my-projects-portfolio12312.vercel.app/", category: "WebUI", tag: "Portfolio" },
            { name: "Raza Perfume Motion v1", url: "https://raza-perfume-flow-motion-45-vr4c.vercel.app/", category: "WebUI", tag: "E-comm Motion" },
            { name: "Raza Perfume Motion v2", url: "https://raza-perfume-flow-motion.vercel.app/", category: "WebUI", tag: "E-comm Motion" },
            { name: "Sensex Signal Forge", url: "https://lovable.dev/projects/d3eaa441-6857-4c57-b768-4decb3d305e2", category: "WebUI", tag: "Finance" },
            { name: "Architexture Scrollscape", url: "https://architexture-scrollscape-gallery.vercel.app/", category: "WebUI", tag: "Gallery" },
            { name: "Webzoo", url: "https://webzoo.in/", category: "Client", tag: "Marketing" },
            { name: "Unicorn Industries", url: "https://unicornindustries.net/", category: "Client", tag: "Corporate" },
            { name: "The We Shop", url: "https://www.theweshop.in/", category: "Client", tag: "E-Commerce" }
        ];

        this.isInitialized = false;
        this.isPortfolioActive = false;
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        console.log('Initializing Portfolio App...');
        this.setup();
    }

    setup() {
        console.log('Setting up Portfolio App...');
        
        this.setupStartScreen();
        this.setupToast();
        this.isInitialized = true;
        console.log('Portfolio App initialized successfully');
    }

    // Start Screen Functionality - Completely Fixed
    setupStartScreen() {
        console.log('Setting up start screen...');
        
        const startButton = document.getElementById('start-button');
        
        if (!startButton) {
            console.error('Start button not found');
            return;
        }

        // Ensure button is completely reset and properly configured
        startButton.style.pointerEvents = 'auto';
        startButton.style.cursor = 'pointer';
        startButton.disabled = false;
        startButton.tabIndex = 0;
        
        // Remove all existing event listeners by cloning the node
        const newStartButton = startButton.cloneNode(true);
        startButton.parentNode.replaceChild(newStartButton, startButton);

        // Add comprehensive event listeners
        const handleStartClick = (e) => {
            console.log('START button activated!', e.type);
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            this.enterPortfolio();
        };

        // Multiple event types to ensure it works
        newStartButton.addEventListener('click', handleStartClick, { once: true });
        newStartButton.addEventListener('mousedown', (e) => {
            e.preventDefault();
        });
        newStartButton.addEventListener('mouseup', handleStartClick, { once: true });
        newStartButton.addEventListener('touchend', handleStartClick, { once: true });
        
        // Keyboard support
        newStartButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                console.log('START button keyboard triggered!');
                e.preventDefault();
                this.enterPortfolio();
            }
        });

        // Make sure button is focusable and visible
        newStartButton.focus();
        
        console.log('Start screen setup complete with new button');
    }

    enterPortfolio() {
        console.log('Entering portfolio...');
        
        if (this.isPortfolioActive) {
            console.log('Portfolio already active, skipping...');
            return;
        }
        
        this.isPortfolioActive = true;
        
        const startScreen = document.getElementById('start-screen');
        const portfolioContent = document.getElementById('portfolio-content');
        const startButton = document.getElementById('start-button');

        if (!startScreen || !portfolioContent) {
            console.error('Missing elements for portfolio transition');
            return;
        }

        // Update button state
        if (startButton) {
            startButton.disabled = true;
            startButton.innerHTML = '<span>Loading...</span>';
        }

        // Add glass crack animation
        this.showCrackAnimation(startScreen);

        // Start the transition sequence
        setTimeout(() => {
            console.log('Starting fade out...');
            startScreen.classList.add('fade-out');
        }, 600);

        // Show portfolio content
        setTimeout(() => {
            console.log('Switching to portfolio content...');
            
            startScreen.style.display = 'none';
            portfolioContent.classList.remove('hidden');
            portfolioContent.style.display = 'block';
            portfolioContent.style.opacity = '0';
            
            // Set up portfolio functionality
            this.setupPortfolioFeatures();
            
            // Animate portfolio entrance
            requestAnimationFrame(() => {
                portfolioContent.style.transition = 'opacity 0.8s ease';
                portfolioContent.style.opacity = '1';
                
                // Initialize animations after transition
                setTimeout(() => {
                    this.initScrollAnimations();
                }, 300);
            });
        }, 1400);
    }

    setupPortfolioFeatures() {
        console.log('Setting up portfolio features...');
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupProjectCards();
        this.setupContactForm();
        this.setupAnimations();
        this.setupGetAccessButton();
    }

    showCrackAnimation(startScreen) {
        const crackAnimation = startScreen.querySelector('.crack-animation');
        if (crackAnimation) {
            crackAnimation.style.opacity = '1';
            crackAnimation.innerHTML = `
                <svg width="200" height="200" viewBox="0 0 200 200" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                    <g stroke="#08e8de" stroke-width="2" fill="none">
                        <path d="M100 100 L50 50" opacity="0">
                            <animate attributeName="opacity" values="0;1;0" dur="0.6s" begin="0s"/>
                        </path>
                        <path d="M100 100 L150 50" opacity="0">
                            <animate attributeName="opacity" values="0;1;0" dur="0.6s" begin="0.1s"/>
                        </path>
                        <path d="M100 100 L50 150" opacity="0">
                            <animate attributeName="opacity" values="0;1;0" dur="0.6s" begin="0.2s"/>
                        </path>
                        <path d="M100 100 L150 150" opacity="0">
                            <animate attributeName="opacity" values="0;1;0" dur="0.6s" begin="0.3s"/>
                        </path>
                    </g>
                </svg>
            `;
        }
    }

    // Navigation Setup - Fixed
    setupNavigation() {
        console.log('Setting up navigation...');
        
        const navLinks = document.querySelectorAll('.nav-link');
        const footerLinks = document.querySelectorAll('.footer-link');
        const heroActions = document.querySelectorAll('.hero-actions a');

        // Handle navigation clicks with proper event handling
        const handleNavClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetId = e.currentTarget.getAttribute('href');
            console.log('Navigation clicked:', targetId);
            this.smoothScrollTo(targetId);
        };

        [...navLinks, ...footerLinks, ...heroActions].forEach(link => {
            // Remove existing listeners and add new ones
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
            newLink.addEventListener('click', handleNavClick);
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', this.throttle(() => {
            this.updateActiveNavLink();
        }, 100));
        
        console.log('Navigation setup complete');
    }

    smoothScrollTo(targetId) {
        console.log('Smooth scrolling to:', targetId);
        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            console.log('Scrolling to offset:', offsetTop);
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error('Target not found:', targetId);
        }
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section, .hero');
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Mobile Menu Setup
    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenuBtn.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking nav links
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
                    mobileMenuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    }

    // Scroll Effects
    setupScrollEffects() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', this.throttle(() => {
            const scrollY = window.scrollY;
            
            // Update navbar opacity
            if (navbar) {
                if (scrollY > 50) {
                    navbar.style.background = 'rgba(15, 15, 15, 0.98)';
                } else {
                    navbar.style.background = 'rgba(15, 15, 15, 0.95)';
                }
            }

            // Update scroll progress
            this.updateScrollProgress();
        }, 16));
    }

    updateScrollProgress() {
        let progressBar = document.getElementById('scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #08e8de, #ff007f);
                z-index: 9999;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        }

        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${Math.min(progress, 100)}%`;
    }

    // Project Cards Setup - Fixed buttons
    setupProjectCards() {
        console.log('Setting up project cards...');
        
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';

        this.projects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
        
        console.log('Project cards setup complete');
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;

        // Get screenshot URL
        const screenshotUrl = `https://image.thum.io/get/width/400/crop/600/noanimate/${encodeURIComponent(project.url)}`;

        card.innerHTML = `
            <div class="project-image">
                <img src="${screenshotUrl}" alt="${project.name} screenshot" class="project-screenshot" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                     onload="this.nextElementSibling.style.display='none';">
                <div class="project-placeholder" style="display: flex;">
                    ${this.getProjectInitials(project.name)}
                </div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.name}</h3>
                    <span class="project-category">${project.tag}</span>
                </div>
                <p class="project-description">${this.getProjectDescription(project)}</p>
                <div class="project-actions">
                    <button class="project-btn project-btn--live" data-url="${project.url}">
                        LIVE
                    </button>
                    <button class="project-btn project-btn--share" data-url="${project.url}" data-name="${project.name}">
                        SHARE
                    </button>
                </div>
            </div>
        `;

        // Add event listeners to buttons after creating the card
        setTimeout(() => {
            const liveBtn = card.querySelector('.project-btn--live');
            const shareBtn = card.querySelector('.project-btn--share');

            if (liveBtn) {
                liveBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const url = e.currentTarget.getAttribute('data-url');
                    console.log('LIVE button clicked:', url);
                    this.openProject(url);
                });
            }

            if (shareBtn) {
                shareBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const url = e.currentTarget.getAttribute('data-url');
                    const name = e.currentTarget.getAttribute('data-name');
                    console.log('SHARE button clicked:', name, url);
                    this.shareProject(url, name);
                });
            }
        }, 100);

        return card;
    }

    getProjectInitials(name) {
        return name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
    }

    getProjectDescription(project) {
        const descriptions = {
            'Vibrant Shop Motion': 'Dynamic e-commerce interface with smooth animations and modern UI design',
            'Bank Nifty Oracle AI': 'AI-powered financial dashboard for market analysis and trading insights',
            'Portfolio v1': 'Professional portfolio website showcasing projects and skills',
            'Raza Perfume Motion v1': 'Luxury perfume e-commerce with elegant animations and user experience',
            'Raza Perfume Motion v2': 'Enhanced version with improved performance and new features',
            'Sensex Signal Forge': 'Advanced financial trading platform with real-time market data',
            'Architexture Scrollscape': 'Interactive architecture gallery with scroll-triggered animations',
            'Webzoo': 'Digital marketing platform with comprehensive business solutions',
            'Unicorn Industries': 'Corporate website with professional design and CMS integration',
            'The We Shop': 'Multi-vendor e-commerce platform with modern shopping experience'
        };
        
        return descriptions[project.name] || 'Modern web application with cutting-edge features and design';
    }

    // Fixed project actions
    openProject(url) {
        console.log('Opening project in new tab:', url);
        try {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
            if (!newWindow) {
                console.error('Popup blocked, trying alternative method');
                // Fallback if popup is blocked
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (error) {
            console.error('Error opening project:', error);
            this.showToast('Unable to open project');
        }
    }

    shareProject(url, name) {
        console.log('Sharing project:', name, url);
        
        try {
            // Try native share first
            if (navigator.share && navigator.canShare && navigator.canShare({ url, title: name })) {
                navigator.share({
                    title: name,
                    text: `Check out this project: ${name}`,
                    url: url
                }).then(() => {
                    this.showToast('Shared successfully!');
                }).catch((error) => {
                    console.log('Share cancelled or failed:', error);
                    this.fallbackCopyToClipboard(url);
                });
            } else {
                // Fallback to clipboard
                this.fallbackCopyToClipboard(url);
            }
        } catch (error) {
            console.error('Error sharing:', error);
            this.fallbackCopyToClipboard(url);
        }
    }

    fallbackCopyToClipboard(text) {
        console.log('Using fallback clipboard method');
        
        // Try modern clipboard API first
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('Clipboard copy successful');
                this.showToast('Link copied to clipboard!');
            }).catch((error) => {
                console.log('Clipboard API failed, trying fallback:', error);
                this.legacyCopyToClipboard(text);
            });
        } else {
            this.legacyCopyToClipboard(text);
        }
    }

    legacyCopyToClipboard(text) {
        console.log('Using legacy clipboard method');
        
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.cssText = `
                position: fixed;
                top: -9999px;
                left: -9999px;
                opacity: 0;
                pointer-events: none;
            `;
            
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            textArea.setSelectionRange(0, textArea.value.length);
            
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (successful) {
                console.log('Legacy copy successful');
                this.showToast('Link copied to clipboard!');
            } else {
                console.log('Legacy copy failed');
                this.showToast('Unable to copy link');
            }
        } catch (error) {
            console.error('Legacy copy error:', error);
            this.showToast('Unable to copy link');
        }
    }

    // Toast Notification - Fixed
    setupToast() {
        if (!document.getElementById('toast')) {
            const toastElement = document.createElement('div');
            toastElement.id = 'toast';
            toastElement.className = 'toast hidden';
            toastElement.innerHTML = '<span id="toast-message"></span>';
            document.body.appendChild(toastElement);
        }
    }

    showToast(message) {
        console.log('Showing toast:', message);
        
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        
        if (toast && toastMessage) {
            toastMessage.textContent = message;
            toast.classList.remove('hidden');
            toast.classList.add('show');
            
            // Clear any existing timeout
            if (this.toastTimeout) {
                clearTimeout(this.toastTimeout);
            }
            
            this.toastTimeout = setTimeout(() => {
                console.log('Hiding toast');
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.classList.add('hidden');
                }, 300);
            }, 3000);
        } else {
            console.error('Toast elements not found');
        }
    }

    // Contact Form
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactForm(contactForm);
        });

        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    // GET ACCESS Button Functionality
    setupGetAccessButton() {
        // Handle both buttons - red machine and general
        const buttons = [
            document.getElementById('get-access-btn-red-machine'),
            document.getElementById('get-access-btn')
        ].filter(btn => btn !== null);

        // Demo Dashboard Button Animation
        const demoBtn = document.getElementById('demo-dashboard-btn');
        if (demoBtn) {
            demoBtn.addEventListener('click', (e) => {
                // Add ripple effect
                demoBtn.classList.add('clicked');
                
                // Add enhanced vibration effect
                demoBtn.classList.add('vibrating');
                
                // Remove classes after animation
                setTimeout(() => {
                    demoBtn.classList.remove('clicked', 'vibrating');
                }, 600);
                
                // Add sparkle effect
                this.createSparkleEffect(demoBtn);
            });
        }

        buttons.forEach(button => {
            // Create unique message ID based on button ID
            const messageId = button.id.includes('red-machine') ? 'access-message-red-machine' : 'access-message-general';
            
            // Create access message element if it doesn't exist
            let accessMessage = document.getElementById(messageId);
            if (!accessMessage) {
                accessMessage = document.createElement('div');
                accessMessage.id = messageId;
                accessMessage.className = 'access-message denied';
                accessMessage.style.display = 'none';
                accessMessage.style.marginTop = 'var(--space-8)';
                accessMessage.style.textAlign = 'center';
                accessMessage.style.transition = 'opacity 0.3s ease';
                button.parentNode.insertBefore(accessMessage, button.nextSibling);
            }

            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Add enhanced vibration effect
                button.classList.add('vibrating');
                
                // Show message with fade-in effect
                accessMessage.textContent = 'access restricted . get access via admin login';
                accessMessage.style.opacity = '0';
                accessMessage.style.display = 'block';
                
                // Fade in
                setTimeout(() => {
                    accessMessage.style.opacity = '1';
                }, 10);
                
                // Remove vibration effect after animation
                setTimeout(() => {
                    button.classList.remove('vibrating');
                }, 600);
                
                // Hide message after 10 seconds with fade-out
                setTimeout(() => {
                    accessMessage.style.opacity = '0';
                    setTimeout(() => {
                        accessMessage.style.display = 'none';
                    }, 300);
                }, 10000); // 10 seconds
            });
        });
    }

    handleContactForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Validate form
        if (!this.validateForm(data)) {
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            this.showSuccessMessage();
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    validateForm(data) {
        let isValid = true;
        const errors = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
            isValid = false;
        }

        if (!data.email || !this.isValidEmail(data.email)) {
            errors.push('Please enter a valid email address');
            isValid = false;
        }

        if (!data.subject || data.subject.trim().length < 5) {
            errors.push('Subject must be at least 5 characters long');
            isValid = false;
        }

        if (!data.message || data.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
            isValid = false;
        }

        if (!isValid) {
            this.showFormErrors(errors);
        }

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch (field.name) {
            case 'name':
                if (!value || value.length < 2) {
                    isValid = false;
                    errorMessage = 'Name must be at least 2 characters long';
                }
                break;
            case 'email':
                if (!value || !this.isValidEmail(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'subject':
                if (!value || value.length < 5) {
                    isValid = false;
                    errorMessage = 'Subject must be at least 5 characters long';
                }
                break;
            case 'message':
                if (!value || value.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters long';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else {
            this.clearFieldError(field);
        }

        return isValid;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        field.style.borderColor = '#ff007f';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = `
            color: #ff007f;
            font-size: 12px;
            margin-top: 4px;
        `;
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    clearFieldError(field) {
        field.style.borderColor = '';
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    showFormErrors(errors) {
        const form = document.getElementById('contact-form');
        this.removeFormMessages();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.style.cssText = `
            background: rgba(255, 0, 127, 0.1);
            border: 1px solid rgba(255, 0, 127, 0.3);
            color: #ff007f;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
        `;
        
        errorDiv.innerHTML = `
            <strong>Please fix the following errors:</strong>
            <ul style="margin: 8px 0 0 20px; padding: 0;">
                ${errors.map(error => `<li>${error}</li>`).join('')}
            </ul>
        `;

        form.insertBefore(errorDiv, form.firstChild);
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    showSuccessMessage() {
        const form = document.getElementById('contact-form');
        this.removeFormMessages();

        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.style.cssText = `
            background: rgba(8, 232, 222, 0.1);
            border: 1px solid rgba(8, 232, 222, 0.3);
            color: #08e8de;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            text-align: center;
        `;
        
        successDiv.innerHTML = `
            <strong>✓ Message Sent Successfully!</strong><br>
            Thank you for reaching out! I'll get back to you soon.
        `;

        form.insertBefore(successDiv, form.firstChild);
        
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 5000);
    }

    removeFormMessages() {
        const messages = document.querySelectorAll('.form-error, .form-success, .field-error');
        messages.forEach(message => message.remove());
        
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Animation Setup
    setupAnimations() {
        // Add CSS for animations
        if (!document.getElementById('animation-styles')) {
            const style = document.createElement('style');
            style.id = 'animation-styles';
            style.textContent = `
                .animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `;
            document.head.appendChild(style);
        }
    }

    initScrollAnimations() {
        console.log('Initializing scroll animations...');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(`
            .project-card,
            .skill-category,
            .stat-item,
            .timeline-item,
            .contact-card,
            .contact-form-wrapper
        `);

        animateElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(element);
        });

        // Hero elements animation
        setTimeout(() => {
            const heroElements = document.querySelectorAll(`
                .hero-greeting,
                .hero-title,
                .hero-role,
                .hero-description,
                .hero-actions,
                .hero-visual
            `);

            heroElements.forEach((element, index) => {
                if (element) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                    element.style.transition = 'all 0.6s ease';
                    
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        }, 200);
    }

    // Utility Functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Global instance
let portfolioApp;

// Initialize the portfolio app immediately
console.log('Portfolio script loaded, initializing...');

function initPortfolio() {
    console.log('Creating Portfolio App instance');
    if (!portfolioApp) {
        portfolioApp = new PortfolioApp();
        // Make it globally accessible for debugging
        window.portfolioApp = portfolioApp;
    }
}

// Multiple initialization methods to ensure it works
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}

window.addEventListener('load', () => {
    if (!portfolioApp) {
        initPortfolio();
    }
    document.body.style.opacity = '1';
});

// Fallback after 1 second
setTimeout(() => {
    if (!portfolioApp) {
        console.log('Fallback initialization');
        initPortfolio();
    }
}, 1000);