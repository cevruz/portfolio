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
            "header.greeting": "Ciao, sono Ciro Luca Cozzolino",
            "header.role": "Ingegnere Meccanico per l'Energia e l'Ambiente",
            "header.tagline": "Benvenuto nel mio portfolio personale.",
            "about.title": "Chi Sono",
            "about.text": "Ingegnere Meccanico per l'Energia e l'Ambiente.<br><br>Appassionato di tematiche energetiche, sostenibilità e sviluppo software. Mi definisco una persona curiosa e proattiva, sempre orientata al problem solving e all'apprendimento continuo.",
            "about.download_cv": "Scarica CV",
            "education.title": "Formazione",
            "education.master.title": "Laurea Magistrale in Ingegneria Meccanica",
            "education.master.place": "Università degli Studi di Napoli Federico II (2021-2025)",
            "education.master.thesis": "Sintesi Tesi: <em>Analisi e ottimizzazione energetica tramite approccio BIM-2-BEM</em>.",
            "education.master.exams": "Esami rilevanti: Macchine a Fluido, Gestione dell'Energia, Tecnica del Freddo.",
            "education.bachelor.title": "Laurea Triennale in Ingegneria Meccanica",
            "education.bachelor.place": "Università degli Studi di Napoli Federico II (2015-2020)",
            "education.bachelor.thesis": "Sintesi Tesi: <em>Studio e analisi di impianti a ciclo Rankine organico (ORC)</em>.",
            "education.bachelor.exams": "Esami principali: Termodinamica, Fluidodinamica, Meccanica Applicata.",
            "experience.title": "Esperienze Lavorative",
            "experience.nhp.title": "NHP S.r.l. - Junior Energy Manager: set 2025 - oggi",
            "experience.nhp.desc": "<li>Analisi consumi per impianti terziari e industriali;</li><li>Redazione diagnosi energetiche e audit;</li><li>Controllo e monitoraggio impianti da remoto;</li>",
            "experience.yokohama.title": "Yokohama Sekai S.r.l. - Ingegnere Ufficio Tecnico: 2021 - 2023",
            "experience.yokohama.desc": "<li>Efficientamento energetico civile (HVAC, VRV/VRF, solare termico);</li><li>Supporto tecnico in loco e da remoto;</li><li>Valutazione rischi e azioni correttive;</li>",
            "experience.sc.title": "Servizio Civile - UICI Napoli: 2019 - 2021",
            "experience.sc.desc": "Attività di supporto e inclusione sociale per non vedenti e ipovedenti.",
            "projects.title": "Progetti Universitari",
            "projects.read_more": "Scopri di più",
            "projects.p1.title": "Ottimizzazione solaio laterocemento",
            "projects.p1.desc": "Analisi prestazioni termiche e miglioramento efficienza involucro.",
            "projects.p2.title": "Studio Comunità Montana Ivrea",
            "projects.p2.desc": "Strategie per l'autonomia energetica locale e risorse rinnovabili.",
            "projects.p3.title": "Riqualificazione edificio Portici",
            "projects.p3.desc": "Retrofit energetico con analisi costi-benefici e simulazioni dinamiche.",
            "projects.p4.title": "Ottimizzazione Aeroporto Capodichino",
            "projects.p4.desc": "Approccio efficiency-first per riduzione consumi e sostenibilità.",
            "skills.title": "Competenze",
            "skills.technical": "Competenze Tecniche",
            "skills.technical.list": "<li>• Efficienza Energetica e Sostenibilità</li><li>• Progettazione e Analisi Impianti HVAC</li><li>• Energie Rinnovabili (Fotovoltaico, Eolico, Geotermico)</li><li>• Modellazione Energetica Edifici (BEM/BIM)</li><li>• Analisi Termodinamica e Fluidodinamica</li><li>• Diagnosi Energetiche e Audit</li><li>• Gestione Progetti Energetici</li><li>• Analisi Dati</li>",
            "skills.software": "Software",
            "skills.software.list": "<li>• AutoCAD, Revit</li><li>• MATLAB</li><li>• TRNSYS, EnergyPlus, DesignBuilder</li><li>• PVSyst, PVGis</li><li>• Microsoft Office Suite (Excel, Word, PowerPoint)</li>",
            "skills.languages": "Lingue",
            "skills.languages.list": "<li>• Italiano (Madrelingua)</li><li>• Inglese (Livello B2)</li>",
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
            "footer.credit": "&copy; 2025 - Designed & Built by Ciro Luca Cozzolino",
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
            "header.greeting": "Hi, I'm Ciro Luca Cozzolino",
            "header.role": "Mechanical Engineer for Energy & Environment",
            "header.tagline": "Welcome to my personal portfolio.",
            "about.title": "About Me",
            "about.text": "Mechanical Engineer specialized in Energy and Environment.<br><br>Passionate about energy topics, sustainability, and software development. I am curious, proactive, and always oriented towards problem-solving and continuous learning.",
            "about.download_cv": "Download CV",
            "education.title": "Education",
            "education.master.title": "M.Sc. in Mechanical Engineering for Energy",
            "education.master.place": "University of Naples Federico II (2021-2025)",
            "education.master.thesis": "Thesis: <em>Energy analysis and optimization via BIM-2-BEM approach</em>.",
            "education.master.exams": "Relevant exams: Fluid Machines, Energy Management, Refrigeration Technology.",
            "education.bachelor.title": "B.Sc. in Mechanical Engineering",
            "education.bachelor.place": "University of Naples Federico II (2015-2020)",
            "education.bachelor.thesis": "Thesis: <em>Study and analysis of Organic Rankine Cycle (ORC) plants</em>.",
            "education.bachelor.exams": "Main exams: Thermodynamics, Fluid Dynamics, Applied Mechanics.",
            "experience.title": "Work Experience",
            "experience.nhp.title": "NHP S.r.l. - Junior Energy Manager: Sep 2025 - Present",
            "experience.nhp.desc": "<li>Energy consumption analysis for tertiary and industrial plants;</li><li>Drafting energy diagnoses and audits;</li><li>Remote plant control and monitoring;</li>",
            "experience.yokohama.title": "Yokohama Sekai S.r.l. - Technical Office Engineer: 2021 - 2023",
            "experience.yokohama.desc": "<li>Civil energy efficiency (HVAC, VRV/VRF, thermal solar);</li><li>Technical support on-site and remote;</li><li>Risk assessment and corrective actions;</li>",
            "experience.sc.title": "Civil Service - UICI Napoli: 2019 - 2021",
            "experience.sc.desc": "Support and social inclusion activities for blind and visually impaired people.",
            "projects.title": "University Projects",
            "projects.read_more": "Read More",
            "projects.p1.title": "Energy optimization of a slab",
            "projects.p1.desc": "Thermal performance analysis and envelope efficiency improvements.",
            "projects.p2.title": "Ivrea Mountain Community Feasibility",
            "projects.p2.desc": "Assessment of renewable resources and strategies for local energy autonomy.",
            "projects.p3.title": "Building Retrofit in Portici",
            "projects.p3.desc": "Energy retrofit project with cost-benefit analysis and dynamic simulations.",
            "projects.p4.title": "Capodichino Airport Optimization",
            "projects.p4.desc": "Efficiency-first approach for consumption reduction and sustainability.",
            "skills.title": "Skills",
            "skills.technical": "Technical Skills",
            "skills.technical.list": "<li>• Energy Efficiency & Sustainability</li><li>• HVAC System Design & Analysis</li><li>• Renewables (PV, Wind, Geothermal)</li><li>• Building Energy Modeling (BEM/BIM)</li><li>• Thermodynamics & Fluid Dynamics</li><li>• Energy Audits</li><li>• Energy Project Management</li><li>• Data Analysis</li>",
            "skills.software": "Software",
            "skills.software.list": "<li>• AutoCAD, Revit</li><li>• MATLAB</li><li>• TRNSYS, EnergyPlus, DesignBuilder</li><li>• PVSyst, PVGis</li><li>• Microsoft Office Suite</li>",
            "skills.languages": "Languages",
            "skills.languages.list": "<li>• Italian (Native)</li><li>• English (B2 Level)</li>",
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
            "footer.credit": "&copy; 2025 - Designed & Built by Ciro Luca Cozzolino",
            "modal.view_pdf": "View PDF Document"
        }
    };

    const projectsData = {
        p1: {
            pdf: "assets/tesina_tae.pdf"
        },
        p2: {
            pdf: "#" // Placeholder
        },
        p3: {
            pdf: "assets/casa_portici.pdf"
        },
        p4: {
            pdf: "assets/aeroporto_capodichino.pdf"
        }
    };

    /* =========================================
       2. LANGUAGE LOGIC
       ========================================= */
    let currentLang = localStorage.getItem('lang') || 'it';
    const langToggleBtn = document.getElementById('lang-toggle');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // If it's a list or complex HTML, use innerHTML
                if (key.includes('list') || key.includes('text') || key.includes('desc') || key.includes('thesis') || key.includes('credit')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update CV Button Link based on language (Optional: if we had an EN CV)
        // For now, keep the same PDF but maybe change text
    }

    // Initialize Language
    updateLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'it' ? 'en' : 'it';
        updateLanguage(newLang);
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
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Logo Tooltip
    const logo = document.getElementById('logo-click');
    const logoTooltip = document.getElementById('logo-tooltip');

    logo.addEventListener('click', () => {
        logoTooltip.classList.add('show');
        setTimeout(() => {
            logoTooltip.classList.remove('show');
        }, 2500);
    });

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

    console.log("Portfolio v2.0 Loaded: i18n + Modals active.");
});
