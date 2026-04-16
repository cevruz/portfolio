document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA & CONFIGURATION
       ========================================= */
    const translations = {
        it: {
            "nav.about": "Chi Sono",
            "nav.education": "Formazione",
            "nav.experience": "Esperienze",
            "nav.projects": "Progetti",
            "nav.skills": "Competenze",
            "nav.certifications": "Certificazioni",
            "nav.contacts": "Contatti",
            "header.greeting": "Ciao, sono Ciro Luca Cozzolino!",
            "header.role": "Ingegnere Meccanico per l'Energia e l'Ambiente",
            "header.tagline": "Benvenuto nel mio portfolio personale.",
            "about.title": "Chi Sono",
            "about.text": "Ingegnere Meccanico per l'Energia e l'Ambiente.<br><br>Appassionato di tematiche energetiche, sostenibilità e sviluppo software. Mi definisco una persona curiosa e proattiva, sempre orientata al problem solving e all'apprendimento continuo.",
            "about.download_cv": "Scarica CV",
            "education.title": "Formazione",
            "education.master.title": "LAUREA MAGISTRALE IN INGEGNERIA MECCANICA PER L'ENERGIA E L'AMBIENTE",
            "education.master.place": "Università degli Studi di Napoli Federico II (2021-2025)",
            "education.master.thesis": "Sintesi tesi di laurea magistrale: <em>Analisi e ottimizzazione energetica tramite approccio BIM-2-BEM</em>.",
            "education.master.exams": "<ul><li>Trasmissione del Calore</li><li>Termofluidodinamica delle Macchine</li><li>Energetica</li><li>Impianti di Generazione Termica</li><li>Impianti di Climatizzazione</li><li>Tecnologie Avanzate per l’Energia</li><li>Combustione</li><li>Tecniche e Modelli per la Refrigerazione</li><li>Energy Sustainability for Smart Transportations and Infrastructures</li><li>Sperimentazione e Impatto Ambientale delle Macchine</li></ul>",
            "education.bachelor.title": "LAUREA TRIENNALE IN INGEGNERIA MECCANICA",
            "education.bachelor.place": "Università degli Studi di Napoli Federico II (2015-2020)",
            "education.bachelor.thesis": "Sintesi tesi di laurea triennale: <em>Studio e analisi di impianti a ciclo Rankine organico (ORC)</em>.",
            "education.bachelor.exams": "<ul><li>Meccanica Applicata</li><li>Termodinamica</li><li>Scienza dei Materiali</li><li>Macchine a fluido</li><li>Tecnologie ed Impianti Meccanici</li><li>Elementi di informatica</li><li>Fisica generale</li></ul>",
            "experience.title": "Esperienze Lavorative",
            "experience.nhp.title": "NHP S.r.l. - Junior Energy Manager / Operatore Control Room",
            "experience.nhp.date": "Set 2025 - Oggi",
            "experience.nhp.desc": "<li>Analisi consumi per impianti terziari e industriali;</li><li>Redazione diagnosi energetiche e audit;</li><li>Controllo e monitoraggio impianti da remoto;</li>",
            "experience.yokohama.title": "Yokohama Sekai S.r.l. - Ingegnere Ufficio Tecnico: 2021 - 2023",
            "experience.yokohama.desc": "<li>Efficientamento energetico civile (HVAC, VRV/VRF, solare termico);</li><li>Supporto tecnico in loco e da remoto;</li>",
            "experience.sc.title": "Servizio Civile - UICI Napoli: 2019 - 2021",
            "experience.sc.desc": "Attività di supporto e inclusione sociale per non vedenti e ipovedenti.",
            "projects.title": "Progetti Universitari",
            "projects.read_more": "Scopri di più",
            "projects.p1.title": "Simulazione bruciatore LUCY",
            "projects.p1.desc": "Simulazione di una combustione non premiscelata in un bruciatore tipo LUCY con analisi comparativa di modelli di turbolenza e combustione.",
            "projects.p2.title": "Studio Comunità Montana Ivrea",
            "projects.p2.desc": "Strategie per l'autonomia energetica locale e risorse rinnovabili.",
            "projects.p3.title": "Riqualificazione edificio Portici",
            "projects.p3.desc": "Retrofit energetico con analisi costi-benefici e simulazioni dinamiche.",
            "projects.p4.title": "Ottimizzazione Aeroporto Capodichino",
            "projects.p4.desc": "Approccio efficiency-first per riduzione consumi e sostenibilità.",
            "projects.p1.long_desc": "Questo progetto riguarda la simulazione fluidodinamica computazionale (CFD) della combustione in un bruciatore industriale di tipo LUCY. L'obiettivo principale è stato confrontare diversi modelli di turbolenza e combustione per ottimizzare l'efficienza e ridurre le emissioni inquinanti.",
            "projects.p2.long_desc": "Lo studio analizza il potenziale energetico della Comunità Montana di Ivrea, valutando l'integrazione di biomasse, solare ed eolico per raggiungere l'autonomia energetica del territorio.",
            "projects.p3.long_desc": "Progetto di retrofit energetico per un edificio situato a Portici. Attraverso simulazioni dinamiche, sono stati definiti interventi sull'involucro e sugli impianti per massimizzare il risparmio energetico.",
            "projects.p4.long_desc": "Analisi dei consumi energetici dell'Aeroporto di Capodichino con proposte di efficientamento tramite l'uso di trigenerazione e integrazione di sistemi smart per la gestione dei carichi.",
            "skills.title": "Competenze",
            "skills.technical": "Competenze Tecniche e Settoriali",
            "skills.technical.list": "<li>• Efficienza Energetica e Sostenibilità</li><li>• Progettazione e Analisi Impianti HVAC</li><li>• Energie Rinnovabili (Fotovoltaico, Eolico, Geotermico)</li><li>• Modellazione Energetica Edifici (BEM/BIM)</li><li>• Analisi Termodinamica e Fluidodinamica</li><li>• Diagnosi Energetiche e Audit</li><li>• Gestione Progetti Energetici</li><li>• Analisi Dati</li>",
            "skills.software": "Software",
            "skills.software.list": "<li>• AutoCAD, Revit</li><li>• MATLAB</li><li>• TRNSYS, EnergyPlus, DesignBuilder</li><li>• PVSyst, PVGis</li><li>• Microsoft Office Suite (Excel, Word, PowerPoint)</li>",
            "skills.languages": "Lingue",
            "skills.languages.list": "<li>• Italiano (Madrelingua)</li><li>• Inglese (Livello B2)</li>",
            "timeline.education": "Formazione",
            "timeline.work": "Esperienza",
            "certifications.title": "Certificazioni",
            "certifications.toeic.desc": "Certificazione inglese internazionale. Punteggio Listening & Reading: 895/945 (B2.2 avanzato).",
            "certifications.trinity.desc": "Certificazione lingua inglese livello B2.2 con merito.",
            "certifications.bigdata.title": "Operatore BIG DATA & CNC",
            "certifications.bigdata.desc": "Corso su automazione, CNC, IoT e progettazione 3D (CAD/CATIA).",
            "contacts.title": "Contatti",
            "contacts.email": "Email:",
            "contacts.phone": "Telefono:",
            "contacts.linkedin": "LinkedIn:",
            "contacts.linkedin_profile": "Profilo LinkedIn",
            "contacts.location": "Località:",
            "contacts.connect": "Connettiamoci!",
            "footer.credit": "&copy; 2026 - Designed & Built by Ciro Luca Cozzolino",
            "modal.download_pdf": "Scarica PDF",
            "modal.view_pdf": "Visualizza Documento PDF"
        },
        en: {
            "nav.about": "About Me",
            "nav.education": "Education",
            "nav.experience": "Experience",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.certifications": "Certifications",
            "nav.contacts": "Contacts",
            "header.greeting": "Hi, I'm Ciro Luca Cozzolino!",
            "header.role": "Mechanical Engineer for Energy & Environment",
            "header.tagline": "Welcome to my personal portfolio.",
            "about.title": "About Me",
            "about.text": "Mechanical Engineer specialized in Energy and Environment.<br><br>Passionate about energy topics, sustainability, and software development. I am curious, proactive, and always oriented towards problem-solving and continuous learning.",
            "about.download_cv": "Download CV",
            "education.title": "Education",
            "education.master.title": "M.SC. IN MECHANICAL ENGINEERING FOR ENERGY AND ENVIRONMENT",
            "education.master.place": "University of Naples Federico II (2021-2025)",
            "education.master.thesis": "Thesis: <em>Energy analysis and optimization via BIM-2-BEM approach</em>.",
            "education.master.exams": "Relevant exams: Fluid Machines, Energy Management, Refrigeration Technology.",
            "education.bachelor.title": "B.Sc. in Mechanical Engineering",
            "education.bachelor.place": "University of Naples Federico II (2015-2020)",
            "education.bachelor.thesis": "Thesis: <em>Study and analysis of Organic Rankine Cycle (ORC) plants</em>.",
            "education.bachelor.exams": "<ul><li>Applied Mechanics</li><li>Thermodynamics</li><li>Materials Science</li><li>Fluid Machines</li><li>Mechanical Technologies & Systems</li><li>Computer Science Basics</li><li>General Physics</li></ul>",
            "education.master.exams": "<ul><li>Heat Transfer</li><li>Thermofluid Dynamics of Machines</li><li>Energy Engineering</li><li>Thermal Power Plants</li><li>HVAC Systems</li><li>Advanced Energy Technologies</li><li>Combustion</li><li>Techniques & Models for Refrigeration</li><li>Energy Sustainability for Smart Transportations & Infrastructures</li><li>Experimental Methods & Environmental Impact of Machines</li></ul>",
            "experience.title": "Work Experience",
            "experience.nhp.title": "NHP S.r.l. - Junior Energy Manager / Control Room Operator",
            "experience.nhp.date": "Sep 2025 - Present",
            "experience.nhp.desc": "<li>Energy consumption analysis for tertiary and industrial plants;</li><li>Drafting energy diagnoses and audits;</li><li>Remote plant control and monitoring;</li>",
            "experience.yokohama.title": "Yokohama Sekai S.r.l. - Technical Office Engineer: 2021 - 2023",
            "experience.yokohama.desc": "<li>Civil energy efficiency (HVAC, VRV/VRF, thermal solar);</li><li>Technical support on-site and remote;</li>",
            "experience.sc.title": "Civil Service - UICI Napoli: 2019 - 2021",
            "experience.sc.desc": "Support and social inclusion activities for blind and visually impaired people.",
            "projects.title": "University Projects",
            "projects.read_more": "Read More",
            "projects.p1.title": "LUCY burner simulation",
            "projects.p1.desc": "Simulation of non-premixed combustion in a LUCY-type burner with comparative analysis of turbulence and combustion models.",
            "projects.p2.title": "Ivrea Mountain Community Feasibility",
            "projects.p2.desc": "Assessment of renewable resources and strategies for local energy autonomy.",
            "projects.p3.title": "Building Retrofit in Portici",
            "projects.p3.desc": "Energy retrofit project with cost-benefit analysis and dynamic simulations.",
            "projects.p4.title": "Capodichino Airport Optimization",
            "projects.p4.desc": "Efficiency-first approach for consumption reduction and sustainability.",
            "projects.p1.long_desc": "This project involves Computational Fluid Dynamics (CFD) simulation of combustion in a LUCY-type industrial burner. The main goal was to compare different turbulence and combustion models to optimize efficiency and reduce pollutant emissions.",
            "projects.p2.long_desc": "This study analyzes the energy potential of the Ivrea Mountain Community, evaluating the integration of biomass, solar, and wind power to achieve regional energy autonomy.",
            "projects.p3.long_desc": "Energy retrofit project for a building located in Portici. Through dynamic simulations, interventions on the envelope and systems were defined to maximize energy savings.",
            "projects.p4.long_desc": "Analysis of energy consumption at Capodichino Airport with efficiency proposals through the use of trigeneration and the integration of smart load management systems.",
            "skills.title": "Skills",
            "skills.technical": "Technical & Sector Skills",
            "skills.technical.list": "<li>• Energy Efficiency & Sustainability</li><li>• HVAC System Design & Analysis</li><li>• Renewables (PV, Wind, Geothermal)</li><li>• Building Energy Modeling (BEM/BIM)</li><li>• Thermodynamics & Fluid Dynamics</li><li>• Energy Audits</li><li>• Energy Project Management</li><li>• Data Analysis</li>",
            "skills.software": "Software",
            "skills.software.list": "<li>• AutoCAD, Revit</li><li>• MATLAB</li><li>• TRNSYS, EnergyPlus, DesignBuilder</li><li>• PVSyst, PVGis</li><li>• Microsoft Office Suite</li>",
            "skills.languages": "Languages",
            "skills.languages.list": "<li>• Italian (Native)</li><li>• English (B2 Level)</li>",
            "timeline.education": "Education",
            "timeline.work": "Experience",
            "certifications.title": "Certifications",
            "certifications.toeic.desc": "International English certification. Listening & Reading score: 895/945 (Advanced B2.2).",
            "certifications.trinity.desc": "English certification B2.2 level with Merit.",
            "certifications.bigdata.title": "BIG DATA & CNC Operator",
            "certifications.bigdata.desc": "Training on automation, CNC programming, IoT diagnostics, and 3D design (CAD/CATIA).",
            "contacts.title": "Contacts",
            "contacts.email": "Email:",
            "contacts.phone": "Phone:",
            "contacts.linkedin": "LinkedIn:",
            "contacts.linkedin_profile": "LinkedIn Profile",
            "contacts.location": "Location:",
            "contacts.connect": "Connect with me!",
            "footer.credit": "&copy; 2026 - Designed & Built by Ciro Luca Cozzolino",
            "modal.download_pdf": "Download PDF",
            "modal.view_pdf": "View PDF Document"
        }
    };

    const projectsData = {
        p1: {
            pdf: "assets/tesina_combustione.pdf",
            slides: [
                "images/progetti/p1_slide1.jpg",
                "images/progetti/p1_slide2.jpg",
                "images/progetti/p1_slide3.jpg",
                "images/progetti/p1_slide4.jpg"
            ]
        },
        p2: {
            pdf: "assets/tesina_tae.pdf",
            slides: [
                "images/progetti/p2_slide1.jpg",
                "images/progetti/p2_slide2.jpg",
                "images/progetti/p2_slide3.jpg",
                "images/progetti/p2_slide4.jpg"
            ]
        },
        p3: {
            pdf: "assets/casa_portici.pdf",
            slides: [
                "images/progetti/p3_slide1.jpg",
                "images/progetti/p3_slide2.jpg",
                "images/progetti/p3_slide3.jpg",
                "images/progetti/p3_slide4.jpg",
                "images/progetti/p3_slide5.jpg"
            ]
        },
        p4: {
            pdf: "assets/aeroporto_capodichino.pdf",
            slides: [
                "images/progetti/p4_slide1.jpg",
                "images/progetti/p4_slide2.jpg",
                "images/progetti/p4_slide3.jpg",
                "images/progetti/p4_slide4.jpg"
            ]
        }
    };

    /* =========================================
       2. LANGUAGE LOGIC
       ========================================= */
    let currentLang = localStorage.getItem('lang') || 'it';
    const langToggleBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // If it's a list or complex HTML, use innerHTML
                if (key.includes('list') || key.includes('text') || key.includes('desc') || key.includes('thesis') || key.includes('credit') || key.includes('exams')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update the visible language label to indicate the target language
        if (langLabel) {
            langLabel.textContent = lang === 'it' ? 'EN' : 'IT';
        }

        // Update CV Button Link based on language (Optional: if we had an EN CV)
        // For now, keep the same PDF but maybe change text
    }

    // Initialize Language
    updateLanguage(currentLang);

    function doHaptic(duration = 10) {
        try {
            if (navigator.vibrate) navigator.vibrate(duration);
        } catch (e) {
            // ignore
        }
    }

    // Add tactile + visual feedback when toggling language
    langToggleBtn.addEventListener('click', (ev) => {
        doHaptic(10);
        langToggleBtn.classList.add('pressed');
        setTimeout(() => langToggleBtn.classList.remove('pressed'), 160);
        const newLang = currentLang === 'it' ? 'en' : 'it';
        updateLanguage(newLang);
    });

    // Also trigger haptic feedback on touchstart/pointerdown for immediacy
    ['touchstart', 'pointerdown'].forEach(evt => {
        langToggleBtn.addEventListener(evt, () => doHaptic(8), { passive: true });
    });

    // Theme Toggle (Dark/Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIconMoon = document.getElementById('theme-icon-moon');
    const themeIconSun = document.getElementById('theme-icon-sun');
    let isDarkMode = localStorage.getItem('theme') === 'light' ? false : true;

    // Apply saved theme on page load
    if (!isDarkMode) {
        document.body.classList.add('light-mode');
        themeIconMoon.style.display = 'block';  // Luna quando light mode
        themeIconSun.style.display = 'none';
    } else {
        document.body.classList.remove('light-mode');
        themeIconSun.style.display = 'block';   // Sole quando dark mode
        themeIconMoon.style.display = 'none';
    }

    themeToggleBtn.addEventListener('click', () => {
        doHaptic(10);
        themeToggleBtn.classList.add('pressed');
        setTimeout(() => themeToggleBtn.classList.remove('pressed'), 160);

        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
            themeIconSun.style.display = 'block';   // Sole in dark mode
            themeIconMoon.style.display = 'none';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            themeIconMoon.style.display = 'block';  // Luna in light mode
            themeIconSun.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
    });

    // Also trigger haptic on theme toggle touchstart
    ['touchstart', 'pointerdown'].forEach(evt => {
        themeToggleBtn.addEventListener(evt, () => doHaptic(8), { passive: true });
    });


    /* =========================================
       3. ANIMATIONS & UI (Existing)
       ========================================= */

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
        // Lock body scroll when nav is open to avoid background scrolling issues on mobile
        if (navLinks.classList.contains('active')) {
            document.body.classList.add('nav-open');
        } else {
            document.body.classList.remove('nav-open');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
            document.body.classList.remove('nav-open');
        });
    });

    // Logo Click -> Refresh
    const logo = document.getElementById('logo-click');
    logo.addEventListener('click', () => {
        location.reload();
    });

    // Profile Photo Tooltip
    const profilePhoto = document.getElementById('profile-photo');
    const profileTooltip = document.getElementById('profile-tooltip');

    if (profilePhoto && profileTooltip) {
        profilePhoto.addEventListener('click', () => {
            profileTooltip.classList.add('show');
            setTimeout(() => {
                profileTooltip.classList.remove('show');
            }, 2500);
        });
    }

    // Scroll Reveal
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const qsSections = document.querySelectorAll('section');
    qsSections.forEach((section, index) => {
        section.classList.add('scroll-reveal');
        section.style.transitionDelay = `${index * 0.03}s`;
        revealObserver.observe(section);
    });

    // Project Cards Stagger
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.05}s`;
    });

    // Skill Bars Animation with IntersectionObserver
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillObserverOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 100);
                skillObserver.unobserve(bar);
            }
        });
    }, skillObserverOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Cert Bars Animation with IntersectionObserver
    const certBars = document.querySelectorAll('.cert-bar-fill');
    const certObserverOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const certObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 100);
                certObserver.unobserve(bar);
            }
        });
    }, certObserverOptions);

    certBars.forEach(bar => {
        certObserver.observe(bar);
    });

    // Timeline Animation with IntersectionObserver
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserverOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, timelineObserverOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // --- MODAL PROGETTI LOGIC ---
    const modal = document.getElementById('project-modal');
    if (modal) {
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = modal.querySelector('.modal-overlay');
        const projectCardsModal = document.querySelectorAll('.project-card');

        let currentSlideIndex = 0;
        let currentProjectSlides = [];

        function openProjectModal(projectId) {
            const project = projectsData[projectId];
            if (!project) return;

            // Title & Description from translations
            const titleKey = `projects.${projectId}.title`;
            const descKey = `projects.${projectId}.long_desc`;

            document.getElementById('modal-title').textContent = translations[currentLang][titleKey] || "";
            document.getElementById('modal-description').innerHTML = translations[currentLang][descKey] || "";

            // PDF Link
            const downloadBtn = document.getElementById('modal-download');
            downloadBtn.href = project.pdf;

            // Slides
            currentProjectSlides = project.slides || [];
            currentSlideIndex = 0;
            renderSlides();

            // Show Modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevents background scroll
        }

        function closeProjectModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function renderSlides() {
            const wrapper = document.getElementById('slides-wrapper');
            wrapper.innerHTML = '';

            if (currentProjectSlides.length === 0) {
                document.querySelector('.slideshow-container').style.display = 'none';
                return;
            } else {
                document.querySelector('.slideshow-container').style.display = 'block';
            }

            currentProjectSlides.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.className = 'slide';
                img.loading = 'lazy';
                wrapper.appendChild(img);
            });

            updateSlidePosition();
        }

        function updateSlidePosition() {
            const wrapper = document.getElementById('slides-wrapper');
            wrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % currentProjectSlides.length;
            updateSlidePosition();
        }

        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + currentProjectSlides.length) % currentProjectSlides.length;
            updateSlidePosition();
        }

        // Event Listeners for Cards
        projectCardsModal.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                openProjectModal(projectId);
            });
        });

        // Close Modal
        modalClose.addEventListener('click', closeProjectModal);
        modalOverlay.addEventListener('click', closeProjectModal);

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeProjectModal();
            }
        });

        // Slideshow Nav
        const nextSlideBtn = document.getElementById('next-slide');
        const prevSlideBtn = document.getElementById('prev-slide');

        if (nextSlideBtn) {
            nextSlideBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextSlide();
            });
        }
        if (prevSlideBtn) {
            prevSlideBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevSlide();
            });
        }
    }

    console.log("Portfolio v4.6 Loaded: Modali Progetti attive con Slideshow.");
});
