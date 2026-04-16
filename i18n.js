// ==========================================
// MULTI-LANGUAGE SUPPORT (i18n)
// ==========================================

const translations = {

    // ── ENGLISH ──────────────────────────────
    en: {
        // Nav
        nav_home: 'Home',
        nav_about: 'About',
        nav_bts: 'BTS SIO',
        nav_skills: 'Skills',
        nav_certs: 'Certifications',
        nav_company: 'Company',
        nav_exams: 'Exams',
        nav_projects: 'Projects',
        nav_tech: 'Tech Watch',
        nav_contact: 'Contact',

        // Home
        greeting: "Hello, I'm",
        home_desc: 'BTS SIO student, specializing in SISR — passionate about networking, cybersecurity, and system administration.',
        download_cv: 'Download CV',
        typing_words: ['Computer Science Student', 'Network Enthusiast', 'Cybersecurity Learner', 'BTS SIO – SISR'],

        // About
        about_heading: 'About',
        about_heading_span: 'Me',
        about_subtitle: 'BTS SIO – SISR Student',
        about_p1: 'My name is Sahed Arshed Ali Khan. I am currently enrolled in the BTS SIO program (IT Services for Organizations), specializing in SISR (Infrastructure, Systems and Networks Solutions).',
        about_p2: 'I am passionate about networking, system administration, and cybersecurity. I enjoy learning new technologies and taking on technical challenges, with the goal of pursuing a career in systems and network administration.',
        about_btn: 'My Academic Journey',

        // Timeline
        timeline_heading: 'My',
        timeline_heading_span: 'Journey',
        tl1_title: 'BTS SIO – SISR',
        tl1_desc: 'Currently pursuing BTS SIO – SISR, focused on system administration, network management, IT infrastructure, and cybersecurity.',
        tl2_title: 'BTS CIEL – Option A',
        tl2_desc: 'First year in BTS CIEL (Cybersecurity) learning fundamentals of information security, network protection, and system administration.',
        tl3_title: 'Bachelor in Physical Measurements',
        tl3_desc: 'Three-year BUT program in Physics. Developed analytical thinking that later guided my reorientation toward IT and networking.',
        tl4_title: 'General Baccalaureate',
        tl4_desc: 'General Baccalaureate with specialization in Mathematics and Physics, building strong analytical and problem-solving skills.',

        // BTS SIO
        bts_heading: 'BTS',
        bts_heading_span: 'SIO',
        bts_main_title: 'What is the BTS SIO?',
        bts_main_p1: 'The BTS SIO (Brevet de Technicien Supérieur Services Informatiques aux Organisations) is a two-year higher education diploma recognized by the French State (RNCP level 5). It trains students to become IT professionals capable of managing and developing information systems within organizations such as companies, public administrations, or digital service companies.',
        bts_main_p2: 'The program combines theoretical knowledge and practical projects in areas such as system administration, networking, software development, databases, and cybersecurity.',
        bts_slam_title: 'Option SLAM',
        bts_slam_p: 'SLAM stands for "Solutions Logicielles et Applications Métiers". This specialization focuses on software development and application design — programming languages, web development, database management, and application security.',
        bts_sisr_title: 'Option SISR',
        bts_sisr_badge: 'My Track',
        bts_sisr_p: 'SISR means "Solutions d\'Infrastructure, Systèmes et Réseaux". This specialization focuses on installing, administering, and securing IT infrastructures — configuring networks, managing servers, supervising IT systems, and ensuring security of digital services.',

        // Skills
        skills_heading: 'My',
        skills_heading_span: 'Skills',
        skill_prog_title: 'Programming',
        skill_prog_p: 'Proficiency in JavaScript, C, and Python. Hands-on experience in scripting and problem-solving.',
        skill_web_title: 'Web Development',
        skill_web_p: 'Development of web applications using HTML, CSS, and JavaScript. Creation of responsive, modern websites.',
        skill_db_title: 'Database',
        skill_db_p: 'Knowledge of relational databases and MySQL for storing, managing, and querying data.',
        skill_design_title: 'Software & Design',
        skill_design_p: '3D modeling with SolidWorks. 2D game development with Godot Engine.',
        skill_net_title: 'Network & Virtualization',
        skill_net_p: 'Virtual environments with VMware. Configuration of pfSense, Kali Linux, Debian. Network analysis with Wireshark & Nmap. GLPI incident management.',
        skill_lang_title: 'Languages',
        skill_lang_p: 'Bengali / Bangla – Native<br>French – Native<br>English – B2 Level (EF SET Certified)',

        // Certifications
        certs_heading: 'My',
        certs_heading_span: 'Certifications',
        cert1_title: 'EF SET English Certificate',
        cert1_desc: 'B2 Level – English Proficiency',
        cert_view: 'View Certificate',
        cert2_title: 'Cisco Introduction to Cybersecurity',
        cert2_desc: 'Cisco Networking Academy',

        // Company
        company_heading: 'Internship',
        company_heading_span: 'Target Companies',
        company1_title: 'Network Infrastructure Company',
        company1_domain: 'Network Infrastructure Services',
        company1_loc: 'France',
        company1_size: '500–2000 employees',
        company1_missions: ['Configure routers & switches', 'Maintain enterprise network infrastructures', 'Network security implementation'],
        company1_skills: ['Enterprise network configuration', 'Infrastructure maintenance', 'Real-world troubleshooting'],
        company2_title: 'Cybersecurity Consulting Company',
        company2_domain: 'IT Security & Cyber Threat Protection',
        company2_loc: 'Europe',
        company2_size: '200–1000 employees',
        company2_missions: ['Network traffic analysis', 'Security monitoring & vulnerability scanning', 'Incident response support'],
        company2_skills: ['Threat detection', 'Network security analysis', 'Incident response methods'],
        company3_title: 'Cloud & IT Services Company',
        company3_domain: 'Cloud Computing & Digital Transformation',
        company3_loc: 'International',
        company3_size: '5000+ employees',
        company3_missions: ['Server configuration & VM management', 'Cloud infrastructure monitoring', 'IT support and maintenance'],
        company3_skills: ['Cloud infrastructure management', 'Virtualization technologies', 'Enterprise IT operations'],
        desired_missions: 'Desired Missions',
        skills_to_gain: 'Skills to Gain',
        label_domain: 'Domain:',
        label_location: 'Location:',
        label_size: 'Size:',

        // Exams
        exams_heading: 'BTS SIO –',
        exams_heading_span: 'Exams',
        exams_intro: 'The BTS SIO – SISR is evaluated through a combination of continuous assessments and final exams. The exams represent approximately 40 hours of written and practical evaluations, complemented by project presentations.',
        exams_breakdown: 'Detailed Exam Breakdown',
        exam1_title: 'IT Project Management',
        exam1_detail: '4h written',
        exam1_desc: 'Managing IT projects, planning tasks, writing documentation, and proposing solutions according to client needs.',
        exam2_title: 'Network and Systems Administration',
        exam2_detail: '5h written/practical',
        exam2_desc: 'Configuring, maintaining, and troubleshooting IT infrastructures: server admin, network config, security, incident resolution.',
        exam3_title: 'Cybersecurity & IT Security',
        exam3_detail: '3h written/practical',
        exam3_desc: 'Network security, firewalls, user access management, system protection, and vulnerability detection.',
        exam4_title: 'Technical Support and IT Assistance',
        exam4_detail: '3h practical',
        exam4_desc: 'Providing technical support, resolving incidents, and documenting procedures in real-world simulations.',
        exam5_title: 'Software Development & Scripting',
        exam5_detail: '4h written/practical',
        exam5_desc: 'Basic scripting to automate tasks, manage system configurations, and support IT services.',
        exam6_title: 'Professional Communication & Documentation',
        exam6_detail: '2h written',
        exam6_desc: 'Communicate effectively in a professional environment, write reports, and document projects clearly.',
        exam7_title: 'Internship / Work Placement Evaluation',
        exam7_detail: 'Continuous assessment',
        exam7_desc: 'Evaluated on technical proficiency, professional behavior, and applying theoretical knowledge in real-world situations.',
        download_exams: 'Download Exams Summary (xlsx)',

        // Tech Watch
        tech_heading: 'Technology',
        tech_heading_span: 'Watch',
        tech1_title: 'Cybersecurity',
        tech1_p: 'Latest trends: AI-driven threat detection, zero-trust architectures.',
        tech2_title: 'Artificial Intelligence',
        tech2_p: 'Machine learning, deep learning, and automation technologies.',
        tech3_title: 'Quantum Computing',
        tech3_p: 'Reshaping IT and cryptography — the future of computation.',
        tech4_title: 'Crypto & Blockchain',
        tech4_p: 'Decentralized finance, smart contracts, and secure transactions.',
        tech5_title: 'Data Privacy & GDPR',
        tech5_p: 'Personal data protection and GDPR compliance updates.',
        tech6_title: 'IT Infrastructure',
        tech6_p: 'Cloud computing, virtualization, and secure IT environments.',

        // Projects
        projects_heading: 'My',
        projects_heading_span: 'Projects',
        proj1_title: 'QR Code Generator',
        proj1_tag: 'Python',
        proj1_p: 'Generate QR codes from any text or URL using the qrcode library. Demonstrates scripting, user input handling, and image generation.',
        proj2_title: 'Caesar Cipher – Encrypt Info',
        proj2_tag: 'C Language',
        proj2_p: 'Encrypt and decrypt text using a Caesar cipher in C. Showcases string manipulation and algorithm implementation.',
        proj3_title: 'Cryptography on Linux',
        proj3_tag: 'Linux / OpenSSL',
        proj3_p: 'Using OpenSSL, GPG, and native Linux libraries to encrypt files, manage keys, and implement cryptographic algorithms.',
        view_pdf: 'View PDF',

        // Contact
        contact_heading: 'Contact',
        contact_heading_span: 'Me',
        get_in_touch: 'Get in Touch',
        label_email: 'Email',
        label_loc: 'Location',
        label_linkedin: 'LinkedIn',
        label_github: 'GitHub',
        form_firstname: 'First Name',
        form_lastname: 'Last Name',
        form_email: 'Email Address',
        form_subject: 'Subject',
        form_message: 'Your Message',
        form_send: 'Send Message',
        form_sending: 'Sending…',
        form_success: "Message sent successfully! I'll get back to you soon.",
        form_error: 'Something went wrong. Please try again or email me directly.',
        form_err_empty: 'Please fill in all fields.',
        form_err_email: 'Please enter a valid email address.',
        form_mailto_success: 'Opening your mail client… Your email is pre-filled and ready to send!',

        // Footer
        footer_copy: '© 2025 Sahed Arshed Ali Khan. All rights reserved.',
    },

    // ── FRANÇAIS ─────────────────────────────
    fr: {
        nav_home: 'Accueil',
        nav_about: 'À propos',
        nav_bts: 'BTS SIO',
        nav_skills: 'Compétences',
        nav_certs: 'Certifications',
        nav_company: 'Entreprises',
        nav_exams: 'Examens',
        nav_projects: 'Projets',
        nav_tech: 'Veille Tech',
        nav_contact: 'Contact',

        greeting: 'Bonjour, je suis',
        home_desc: 'Étudiant en BTS SIO, spécialité SISR — passionné par les réseaux, la cybersécurité et l\'administration système.',
        download_cv: 'Télécharger CV',
        typing_words: ['Étudiant en Informatique', 'Passionné des Réseaux', 'Apprenant en Cybersécurité', 'BTS SIO – SISR'],

        about_heading: 'À propos de',
        about_heading_span: 'Moi',
        about_subtitle: 'Étudiant BTS SIO – SISR',
        about_p1: 'Je m\'appelle Sahed Arshed Ali Khan. Je suis actuellement inscrit en BTS SIO (Services Informatiques aux Organisations), spécialité SISR (Solutions d\'Infrastructure, Systèmes et Réseaux).',
        about_p2: 'Je suis passionné par les réseaux, l\'administration système et la cybersécurité. J\'aime apprendre de nouvelles technologies et relever des défis techniques, avec l\'objectif de poursuivre une carrière dans l\'administration des systèmes et réseaux.',
        about_btn: 'Mon Parcours Académique',

        timeline_heading: 'Mon',
        timeline_heading_span: 'Parcours',
        tl1_title: 'BTS SIO – SISR',
        tl1_desc: 'En cours de formation BTS SIO – SISR, axée sur l\'administration système, la gestion réseau, l\'infrastructure IT et la cybersécurité.',
        tl2_title: 'BTS CIEL – Option A',
        tl2_desc: 'Première année en BTS CIEL (Cybersécurité), apprentissage des fondamentaux de la sécurité informatique, de la protection réseau et de l\'administration système.',
        tl3_title: 'Licence en Mesures Physiques',
        tl3_desc: 'Programme BUT en Physique (3 ans). Développement d\'une pensée analytique qui a guidé ma réorientation vers l\'IT et les réseaux.',
        tl4_title: 'Baccalauréat Général',
        tl4_desc: 'Baccalauréat général avec spécialisation en Mathématiques et Physique, développant de solides compétences analytiques et de résolution de problèmes.',

        bts_heading: 'BTS',
        bts_heading_span: 'SIO',
        bts_main_title: 'Qu\'est-ce que le BTS SIO ?',
        bts_main_p1: 'Le BTS SIO (Brevet de Technicien Supérieur Services Informatiques aux Organisations) est un diplôme de l\'enseignement supérieur de deux ans reconnu par l\'État français (RNCP niveau 5). Il forme des professionnels de l\'IT capables de gérer et développer des systèmes d\'information au sein d\'organisations.',
        bts_main_p2: 'Le programme combine connaissances théoriques et projets pratiques dans des domaines tels que l\'administration système, les réseaux, le développement logiciel, les bases de données et la cybersécurité.',
        bts_slam_title: 'Option SLAM',
        bts_slam_p: 'SLAM signifie "Solutions Logicielles et Applications Métiers". Cette spécialité est axée sur le développement logiciel et la conception d\'applications — langages de programmation, développement web, gestion de bases de données et sécurité applicative.',
        bts_sisr_title: 'Option SISR',
        bts_sisr_badge: 'Ma Voie',
        bts_sisr_p: 'SISR signifie "Solutions d\'Infrastructure, Systèmes et Réseaux". Cette spécialité est axée sur l\'installation, l\'administration et la sécurisation des infrastructures IT — configuration réseau, gestion de serveurs, supervision des systèmes IT et sécurité des services numériques.',

        skills_heading: 'Mes',
        skills_heading_span: 'Compétences',
        skill_prog_title: 'Programmation',
        skill_prog_p: 'Maîtrise de JavaScript, C et Python. Expérience pratique en scripting et résolution de problèmes.',
        skill_web_title: 'Développement Web',
        skill_web_p: 'Développement d\'applications web avec HTML, CSS et JavaScript. Création de sites web modernes et responsives.',
        skill_db_title: 'Base de données',
        skill_db_p: 'Connaissance des bases de données relationnelles et MySQL pour stocker, gérer et interroger des données.',
        skill_design_title: 'Logiciels & Design',
        skill_design_p: 'Modélisation 3D avec SolidWorks. Développement de jeux 2D avec Godot Engine.',
        skill_net_title: 'Réseau & Virtualisation',
        skill_net_p: 'Environnements virtuels avec VMware. Configuration de pfSense, Kali Linux, Debian. Analyse réseau avec Wireshark & Nmap. Gestion des incidents GLPI.',
        skill_lang_title: 'Langues',
        skill_lang_p: 'Bengali / Bangla – Langue maternelle<br>Français – Langue maternelle<br>Anglais – Niveau B2 (Certifié EF SET)',

        certs_heading: 'Mes',
        certs_heading_span: 'Certifications',
        cert1_title: 'Certificat EF SET d\'Anglais',
        cert1_desc: 'Niveau B2 – Compétence en Anglais',
        cert_view: 'Voir le Certificat',
        cert2_title: 'Cisco Introduction à la Cybersécurité',
        cert2_desc: 'Cisco Networking Academy',

        company_heading: 'Entreprises',
        company_heading_span: 'Visées pour Stage',
        company1_title: 'Entreprise d\'Infrastructure Réseau',
        company1_domain: 'Services d\'Infrastructure Réseau',
        company1_loc: 'France',
        company1_size: '500–2000 employés',
        company1_missions: ['Configurer routeurs & switches', 'Maintenir les infrastructures réseau d\'entreprise', 'Mise en œuvre de la sécurité réseau'],
        company1_skills: ['Configuration réseau d\'entreprise', 'Maintenance d\'infrastructure', 'Dépannage réel'],
        company2_title: 'Cabinet de Conseil en Cybersécurité',
        company2_domain: 'Sécurité IT & Protection Cyber',
        company2_loc: 'Europe',
        company2_size: '200–1000 employés',
        company2_missions: ['Analyse du trafic réseau', 'Surveillance sécurité & analyse de vulnérabilités', 'Support en réponse aux incidents'],
        company2_skills: ['Détection des menaces', 'Analyse de la sécurité réseau', 'Méthodes de réponse aux incidents'],
        company3_title: 'Entreprise Cloud & Services IT',
        company3_domain: 'Cloud Computing & Transformation Digitale',
        company3_loc: 'International',
        company3_size: '5000+ employés',
        company3_missions: ['Configuration serveur & gestion VM', 'Surveillance d\'infrastructure Cloud', 'Support IT et maintenance'],
        company3_skills: ['Gestion d\'infrastructure Cloud', 'Technologies de virtualisation', 'Opérations IT en entreprise'],
        desired_missions: 'Missions Souhaitées',
        skills_to_gain: 'Compétences à Acquérir',
        label_domain: 'Domaine :',
        label_location: 'Lieu :',
        label_size: 'Taille :',

        exams_heading: 'BTS SIO –',
        exams_heading_span: 'Examens',
        exams_intro: 'Le BTS SIO – SISR est évalué par une combinaison d\'évaluations continues et d\'examens finaux. Les examens représentent environ 40 heures d\'évaluations écrites et pratiques, complétées par des présentations de projets.',
        exams_breakdown: 'Détail des Épreuves',
        exam1_title: 'Gestion de Projet Informatique',
        exam1_detail: '4h écrit',
        exam1_desc: 'Gestion de projets IT, planification des tâches, rédaction de documentation et proposition de solutions selon les besoins du client.',
        exam2_title: 'Administration Réseau et Systèmes',
        exam2_detail: '5h écrit/pratique',
        exam2_desc: 'Configuration, maintenance et dépannage des infrastructures IT : admin serveur, config réseau, sécurité, résolution d\'incidents.',
        exam3_title: 'Cybersécurité & Sécurité IT',
        exam3_detail: '3h écrit/pratique',
        exam3_desc: 'Sécurité réseau, pare-feux, gestion des accès utilisateurs, protection système et détection de vulnérabilités.',
        exam4_title: 'Support Technique et Assistance IT',
        exam4_detail: '3h pratique',
        exam4_desc: 'Fournir un support technique, résoudre des incidents et documenter les procédures dans des simulations réelles.',
        exam5_title: 'Développement Logiciel & Scripting',
        exam5_detail: '4h écrit/pratique',
        exam5_desc: 'Scripting de base pour automatiser les tâches, gérer les configurations système et soutenir les services IT.',
        exam6_title: 'Communication Professionnelle & Documentation',
        exam6_detail: '2h écrit',
        exam6_desc: 'Communiquer efficacement en environnement professionnel, rédiger des rapports et documenter les projets clairement.',
        exam7_title: 'Évaluation de Stage / Alternance',
        exam7_detail: 'Évaluation continue',
        exam7_desc: 'Évalué sur les compétences techniques, le comportement professionnel et l\'application des connaissances théoriques en situation réelle.',
        download_exams: 'Télécharger Résumé Examens (xlsx)',

        tech_heading: 'Veille',
        tech_heading_span: 'Technologique',
        tech1_title: 'Cybersécurité',
        tech1_p: 'Dernières tendances : détection des menaces par IA, architectures zero-trust.',
        tech2_title: 'Intelligence Artificielle',
        tech2_p: 'Machine learning, deep learning et technologies d\'automatisation.',
        tech3_title: 'Informatique Quantique',
        tech3_p: 'Remodelage de l\'IT et de la cryptographie — l\'avenir du calcul.',
        tech4_title: 'Crypto & Blockchain',
        tech4_p: 'Finance décentralisée, contrats intelligents et transactions sécurisées.',
        tech5_title: 'Données Personnelles & RGPD',
        tech5_p: 'Protection des données personnelles et mises à jour de la conformité RGPD.',
        tech6_title: 'Infrastructure IT',
        tech6_p: 'Cloud computing, virtualisation et environnements IT sécurisés.',

        projects_heading: 'Mes',
        projects_heading_span: 'Projets',
        proj1_title: 'Générateur de QR Code',
        proj1_tag: 'Python',
        proj1_p: 'Générer des QR codes à partir de texte ou d\'URL avec la bibliothèque qrcode. Démontre le scripting, la gestion des entrées et la génération d\'images.',
        proj2_title: 'Chiffre de César – Chiffrer des Infos',
        proj2_tag: 'Langage C',
        proj2_p: 'Chiffrer et déchiffrer du texte avec un chiffre de César en C. Montre la manipulation de chaînes et l\'implémentation d\'algorithmes.',
        proj3_title: 'Cryptographie sur Linux',
        proj3_tag: 'Linux / OpenSSL',
        proj3_p: 'Utilisation d\'OpenSSL, GPG et des bibliothèques Linux natives pour chiffrer des fichiers, gérer des clés et implémenter des algorithmes cryptographiques.',
        view_pdf: 'Voir PDF',

        contact_heading: 'Me',
        contact_heading_span: 'Contacter',
        get_in_touch: 'Prendre Contact',
        label_email: 'E-mail',
        label_loc: 'Localisation',
        label_linkedin: 'LinkedIn',
        label_github: 'GitHub',
        form_firstname: 'Prénom',
        form_lastname: 'Nom',
        form_email: 'Adresse e-mail',
        form_subject: 'Sujet',
        form_message: 'Votre Message',
        form_send: 'Envoyer le Message',
        form_sending: 'Envoi…',
        form_success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        form_error: 'Une erreur s\'est produite. Réessayez ou contactez-moi par e-mail.',
        form_err_empty: 'Veuillez remplir tous les champs.',
        form_err_email: 'Veuillez entrer une adresse e-mail valide.',
        form_mailto_success: 'Ouverture du client mail… Votre e-mail est pré-rempli et prêt à l\'envoi !',

        footer_copy: '© 2025 Sahed Arshed Ali Khan. Tous droits réservés.',
    },

    // ── ARABIC ───────────────────────────────
    ar: {
        nav_home: 'الرئيسية',
        nav_about: 'عن',
        nav_bts: 'BTS SIO',
        nav_skills: 'المهارات',
        nav_certs: 'الشهادات',
        nav_company: 'الشركات',
        nav_exams: 'الامتحانات',
        nav_projects: 'المشاريع',
        nav_tech: 'مراقبة التقنية',
        nav_contact: 'التواصل',

        greeting: 'مرحباً، أنا',
        home_desc: 'طالب BTS SIO، متخصص في SISR — شغوف بالشبكات والأمن السيبراني وإدارة الأنظمة.',
        download_cv: 'تحميل السيرة الذاتية',
        typing_words: ['طالب علوم الحاسوب', 'مهتم بالشبكات', 'متعلم الأمن السيبراني', 'BTS SIO – SISR'],

        about_heading: 'عن',
        about_heading_span: 'نفسي',
        about_subtitle: 'طالب BTS SIO – SISR',
        about_p1: 'اسمي ساهد أرشاد علي خان. أنا حالياً مسجل في برنامج BTS SIO (خدمات تقنية المعلومات للمؤسسات)، متخصص في SISR (حلول البنية التحتية والأنظمة والشبكات).',
        about_p2: 'أنا شغوف بالشبكات وإدارة الأنظمة والأمن السيبراني. أستمتع بتعلم التقنيات الجديدة وتحمّل التحديات التقنية، بهدف مواصلة مسيرتي في إدارة الأنظمة والشبكات.',
        about_btn: 'مسيرتي الأكاديمية',

        timeline_heading: 'مسيرتي',
        timeline_heading_span: 'الأكاديمية',
        tl1_title: 'BTS SIO – SISR',
        tl1_desc: 'أتابع حالياً BTS SIO – SISR، مع التركيز على إدارة الأنظمة وإدارة الشبكات والبنية التحتية لتقنية المعلومات والأمن السيبراني.',
        tl2_title: 'BTS CIEL – الخيار A',
        tl2_desc: 'السنة الأولى في BTS CIEL (الأمن السيبراني) تعلُّم أساسيات أمن المعلومات وحماية الشبكات وإدارة الأنظمة.',
        tl3_title: 'بكالوريوس في القياسات الفيزيائية',
        tl3_desc: 'برنامج BUT في الفيزياء لمدة ثلاث سنوات. طوّرت التفكير التحليلي الذي وجّه لاحقاً إعادة توجيهي نحو تقنية المعلومات والشبكات.',
        tl4_title: 'البكالوريا العامة',
        tl4_desc: 'بكالوريا عامة بتخصص الرياضيات والفيزياء، مما طوّر مهارات تحليلية قوية وقدرات على حل المشكلات.',

        bts_heading: 'BTS',
        bts_heading_span: 'SIO',
        bts_main_title: 'ما هو BTS SIO؟',
        bts_main_p1: 'BTS SIO هو دبلوم تعليم عالٍ لمدة عامين معترف به من قِبَل الدولة الفرنسية (المستوى 5 RNCP). يُعدّ الطلاب ليصبحوا متخصصين في تقنية المعلومات قادرين على إدارة وتطوير أنظمة المعلومات داخل المؤسسات.',
        bts_main_p2: 'يجمع البرنامج بين المعرفة النظرية والمشاريع العملية في مجالات مثل إدارة الأنظمة والشبكات وتطوير البرمجيات وقواعد البيانات والأمن السيبراني.',
        bts_slam_title: 'خيار SLAM',
        bts_slam_p: 'SLAM تعني "Solutions Logicielles et Applications Métiers". تركّز هذه التخصص على تطوير البرمجيات وتصميم التطبيقات.',
        bts_sisr_title: 'خيار SISR',
        bts_sisr_badge: 'مساري',
        bts_sisr_p: 'SISR تعني "Solutions d\'Infrastructure, Systèmes et Réseaux". تركّز هذه التخصص على تركيب وإدارة وتأمين البنى التحتية لتقنية المعلومات.',

        skills_heading: 'مهاراتي',
        skills_heading_span: '',
        skill_prog_title: 'البرمجة',
        skill_prog_p: 'إتقان JavaScript وC وPython. خبرة عملية في البرمجة النصية وحل المشكلات.',
        skill_web_title: 'تطوير الويب',
        skill_web_p: 'تطوير تطبيقات الويب باستخدام HTML وCSS وJavaScript. إنشاء مواقع ويب عصرية ومتجاوبة.',
        skill_db_title: 'قواعد البيانات',
        skill_db_p: 'معرفة قواعد البيانات العلائقية وMySQL لتخزين البيانات وإدارتها والاستعلام عنها.',
        skill_design_title: 'البرمجيات والتصميم',
        skill_design_p: 'النمذجة ثلاثية الأبعاد مع SolidWorks. تطوير الألعاب ثنائية الأبعاد مع Godot Engine.',
        skill_net_title: 'الشبكات والمحاكاة الافتراضية',
        skill_net_p: 'بيئات افتراضية مع VMware. تكوين pfSense وKali Linux وDebian. تحليل الشبكات مع Wireshark وNmap. إدارة الحوادث مع GLPI.',
        skill_lang_title: 'اللغات',
        skill_lang_p: 'البنغالية – لغة أم<br>الفرنسية – لغة أم<br>الإنجليزية – مستوى B2 (معتمد من EF SET)',

        certs_heading: 'شهاداتي',
        certs_heading_span: '',
        cert1_title: 'شهادة EF SET في الإنجليزية',
        cert1_desc: 'المستوى B2 – إتقان اللغة الإنجليزية',
        cert_view: 'عرض الشهادة',
        cert2_title: 'مقدمة Cisco في الأمن السيبراني',
        cert2_desc: 'Cisco Networking Academy',

        company_heading: 'شركات',
        company_heading_span: 'التدريب المستهدفة',
        company1_title: 'شركة بنية تحتية للشبكات',
        company1_domain: 'خدمات بنية الشبكات التحتية',
        company1_loc: 'فرنسا',
        company1_size: '500–2000 موظف',
        company1_missions: ['تكوين الراوترات والسويتشات', 'صيانة بنى الشبكات المؤسسية', 'تطبيق أمن الشبكات'],
        company1_skills: ['تكوين شبكات المؤسسات', 'صيانة البنية التحتية', 'استكشاف الأخطاء وإصلاحها في الواقع'],
        company2_title: 'شركة استشارات الأمن السيبراني',
        company2_domain: 'أمن تقنية المعلومات والحماية الإلكترونية',
        company2_loc: 'أوروبا',
        company2_size: '200–1000 موظف',
        company2_missions: ['تحليل حركة مرور الشبكة', 'مراقبة الأمان وفحص الثغرات', 'دعم الاستجابة للحوادث'],
        company2_skills: ['الكشف عن التهديدات', 'تحليل أمن الشبكات', 'طرق الاستجابة للحوادث'],
        company3_title: 'شركة خدمات السحابة وتقنية المعلومات',
        company3_domain: 'الحوسبة السحابية والتحول الرقمي',
        company3_loc: 'دولي',
        company3_size: 'أكثر من 5000 موظف',
        company3_missions: ['تكوين الخوادم وإدارة الآلات الافتراضية', 'مراقبة البنية التحتية السحابية', 'الدعم الفني والصيانة'],
        company3_skills: ['إدارة البنية التحتية السحابية', 'تقنيات الافتراضية', 'عمليات تقنية المعلومات في المؤسسات'],
        desired_missions: 'المهام المطلوبة',
        skills_to_gain: 'المهارات المراد اكتسابها',
        label_domain: 'المجال:',
        label_location: 'الموقع:',
        label_size: 'الحجم:',

        exams_heading: 'BTS SIO –',
        exams_heading_span: 'الامتحانات',
        exams_intro: 'يُقيَّم BTS SIO – SISR من خلال مزيج من التقييمات المستمرة والامتحانات النهائية. تمثّل الامتحانات ما يقارب 40 ساعة من التقييمات الكتابية والعملية، بالإضافة إلى عروض المشاريع.',
        exams_breakdown: 'تفاصيل الاختبارات',
        exam1_title: 'إدارة مشاريع تقنية المعلومات',
        exam1_detail: '4 ساعات كتابي',
        exam1_desc: 'إدارة مشاريع تقنية المعلومات، تخطيط المهام، كتابة الوثائق، واقتراح حلول وفقاً لاحتياجات العملاء.',
        exam2_title: 'إدارة الشبكات والأنظمة',
        exam2_detail: '5 ساعات كتابي/عملي',
        exam2_desc: 'تكوين وصيانة واستكشاف أخطاء البنى التحتية لتقنية المعلومات.',
        exam3_title: 'الأمن السيبراني وأمن تقنية المعلومات',
        exam3_detail: '3 ساعات كتابي/عملي',
        exam3_desc: 'أمان الشبكات، جدران الحماية، إدارة وصول المستخدمين، حماية الأنظمة، والكشف عن الثغرات.',
        exam4_title: 'الدعم الفني ومساعدة تقنية المعلومات',
        exam4_detail: '3 ساعات عملي',
        exam4_desc: 'تقديم الدعم الفني، حل الحوادث، وتوثيق الإجراءات في محاكاة للعالم الحقيقي.',
        exam5_title: 'تطوير البرمجيات والبرمجة النصية',
        exam5_detail: '4 ساعات كتابي/عملي',
        exam5_desc: 'برمجة نصية أساسية لأتمتة المهام وإدارة تكوينات النظام.',
        exam6_title: 'التواصل المهني والتوثيق',
        exam6_detail: '2 ساعة كتابي',
        exam6_desc: 'التواصل الفعال في بيئة مهنية، كتابة التقارير، وتوثيق المشاريع بوضوح.',
        exam7_title: 'تقييم التدريب/التوظيف',
        exam7_detail: 'تقييم مستمر',
        exam7_desc: 'التقييم على أساس الكفاءة التقنية والسلوك المهني وتطبيق المعرفة النظرية في المواقف الحقيقية.',
        download_exams: 'تحميل ملخص الامتحانات (xlsx)',

        tech_heading: 'مراقبة',
        tech_heading_span: 'التكنولوجيا',
        tech1_title: 'الأمن السيبراني',
        tech1_p: 'أحدث الاتجاهات: الكشف عن التهديدات بالذكاء الاصطناعي، هياكل الثقة الصفرية.',
        tech2_title: 'الذكاء الاصطناعي',
        tech2_p: 'التعلم الآلي والتعلم العميق وتقنيات الأتمتة.',
        tech3_title: 'الحوسبة الكمومية',
        tech3_p: 'إعادة تشكيل تقنية المعلومات والتشفير — مستقبل الحوسبة.',
        tech4_title: 'العملات المشفرة والبلوكشين',
        tech4_p: 'التمويل اللامركزي والعقود الذكية والمعاملات الآمنة.',
        tech5_title: 'خصوصية البيانات والقانون الأوروبي',
        tech5_p: 'حماية البيانات الشخصية وتحديثات الامتثال.',
        tech6_title: 'البنية التحتية لتقنية المعلومات',
        tech6_p: 'الحوسبة السحابية والمحاكاة الافتراضية وبيئات تقنية المعلومات الآمنة.',

        projects_heading: 'مشاريعي',
        projects_heading_span: '',
        proj1_title: 'مولّد رمز QR',
        proj1_tag: 'Python',
        proj1_p: 'توليد رموز QR من أي نص أو URL باستخدام مكتبة qrcode.',
        proj2_title: 'تشفير قيصر – تشفير المعلومات',
        proj2_tag: 'لغة C',
        proj2_p: 'تشفير وفك تشفير النص باستخدام شفرة قيصر في C.',
        proj3_title: 'التشفير على Linux',
        proj3_tag: 'Linux / OpenSSL',
        proj3_p: 'استخدام OpenSSL وGPG ومكتبات Linux لتشفير الملفات وإدارة المفاتيح.',
        view_pdf: 'عرض PDF',

        contact_heading: 'تواصل',
        contact_heading_span: 'معي',
        get_in_touch: 'ابقَ على تواصل',
        label_email: 'البريد الإلكتروني',
        label_loc: 'الموقع',
        label_linkedin: 'LinkedIn',
        label_github: 'GitHub',
        form_firstname: 'الاسم الأول',
        form_lastname: 'اسم العائلة',
        form_email: 'عنوان البريد الإلكتروني',
        form_subject: 'الموضوع',
        form_message: 'رسالتك',
        form_send: 'إرسال الرسالة',
        form_sending: 'جارٍ الإرسال…',
        form_success: 'تم إرسال الرسالة بنجاح! سأردّ عليك قريباً.',
        form_error: 'حدث خطأ ما. يرجى المحاولة مجدداً أو مراسلتي مباشرة.',
        form_err_empty: 'يرجى ملء جميع الحقول.',
        form_err_email: 'يرجى إدخال عنوان بريد إلكتروني صالح.',
        form_mailto_success: 'فتح عميل البريد… بريدك الإلكتروني جاهز للإرسال!',
        footer_copy: '© 2025 ساهد أرشاد علي خان. جميع الحقوق محفوظة.',
    },

    // ── BENGALI / বাংলা ──────────────────────
    bn: {
        nav_home: 'হোম',
        nav_about: 'আমার সম্পর্কে',
        nav_bts: 'BTS SIO',
        nav_skills: 'দক্ষতা',
        nav_certs: 'সার্টিফিকেট',
        nav_company: 'কোম্পানি',
        nav_exams: 'পরীক্ষা',
        nav_projects: 'প্রকল্প',
        nav_tech: 'প্রযুক্তি পর্যবেক্ষণ',
        nav_contact: 'যোগাযোগ',

        greeting: 'হ্যালো, আমি',
        home_desc: 'BTS SIO ছাত্র, SISR বিশেষজ্ঞ — নেটওয়ার্কিং, সাইবার নিরাপত্তা এবং সিস্টেম প্রশাসনে আগ্রহী।',
        download_cv: 'CV ডাউনলোড করুন',
        typing_words: ['কম্পিউটার বিজ্ঞানের ছাত্র', 'নেটওয়ার্ক উৎসাহী', 'সাইবার নিরাপত্তা শিক্ষার্থী', 'BTS SIO – SISR'],

        about_heading: 'আমার',
        about_heading_span: 'সম্পর্কে',
        about_subtitle: 'BTS SIO – SISR ছাত্র',
        about_p1: 'আমার নাম সাহেদ আরশাদ আলী খান। আমি বর্তমানে BTS SIO প্রোগ্রামে ভর্তি আছি, SISR বিশেষত্বে।',
        about_p2: 'আমি নেটওয়ার্কিং, সিস্টেম প্রশাসন এবং সাইবার নিরাপত্তায় আগ্রহী। নতুন প্রযুক্তি শেখা এবং প্রযুক্তিগত চ্যালেঞ্জ নেওয়া আমার পছন্দ।',
        about_btn: 'আমার শিক্ষামূলক যাত্রা',

        timeline_heading: 'আমার',
        timeline_heading_span: 'যাত্রা',
        tl1_title: 'BTS SIO – SISR',
        tl1_desc: 'বর্তমানে BTS SIO – SISR অনুসরণ করছি, সিস্টেম প্রশাসন, নেটওয়ার্ক ব্যবস্থাপনা এবং সাইবার নিরাপত্তায় মনোযোগ দিচ্ছি।',
        tl2_title: 'BTS CIEL – বিকল্প A',
        tl2_desc: 'BTS CIEL-এ প্রথম বছর, তথ্য নিরাপত্তার মূল বিষয়গুলো শিখছি।',
        tl3_title: 'ভৌত পরিমাপে স্নাতক',
        tl3_desc: 'পদার্থবিজ্ঞানে তিন বছরের BUT প্রোগ্রাম। বিশ্লেষণাত্মক চিন্তা বিকাশ করেছি।',
        tl4_title: 'সাধারণ বাকালরেয়া',
        tl4_desc: 'গণিত ও পদার্থবিজ্ঞানে বিশেষজ্ঞ সাধারণ বাকালরেয়া।',

        bts_heading: 'BTS',
        bts_heading_span: 'SIO',
        bts_main_title: 'BTS SIO কী?',
        bts_main_p1: 'BTS SIO হলো দুই বছরের উচ্চশিক্ষা ডিপ্লোমা যা ফরাসি রাষ্ট্র দ্বারা স্বীকৃত। এটি ছাত্রদের IT পেশাদার হিসেবে প্রশিক্ষিত করে।',
        bts_main_p2: 'প্রোগ্রামটি তাত্ত্বিক জ্ঞান এবং সিস্টেম প্রশাসন, নেটওয়ার্কিং, সফটওয়্যার ডেভেলপমেন্ট এবং সাইবার নিরাপত্তায় ব্যবহারিক প্রকল্প একত্রিত করে।',
        bts_slam_title: 'বিকল্প SLAM',
        bts_slam_p: 'SLAM সফটওয়্যার ডেভেলপমেন্ট এবং অ্যাপ্লিকেশন ডিজাইনে মনোযোগ দেয়।',
        bts_sisr_title: 'বিকল্প SISR',
        bts_sisr_badge: 'আমার ট্র্যাক',
        bts_sisr_p: 'SISR IT অবকাঠামো ইনস্টল, পরিচালনা এবং সুরক্ষিত করার উপর মনোযোগ দেয়।',

        skills_heading: 'আমার',
        skills_heading_span: 'দক্ষতা',
        skill_prog_title: 'প্রোগ্রামিং',
        skill_prog_p: 'JavaScript, C এবং Python-এ দক্ষতা। স্ক্রিপ্টিং এবং সমস্যা সমাধানে হাতে-কলমে অভিজ্ঞতা।',
        skill_web_title: 'ওয়েব ডেভেলপমেন্ট',
        skill_web_p: 'HTML, CSS এবং JavaScript ব্যবহার করে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট।',
        skill_db_title: 'ডেটাবেস',
        skill_db_p: 'রিলেশনাল ডেটাবেস এবং MySQL-এর জ্ঞান।',
        skill_design_title: 'সফটওয়্যার ও ডিজাইন',
        skill_design_p: 'SolidWorks দিয়ে 3D মডেলিং। Godot Engine দিয়ে 2D গেম ডেভেলপমেন্ট।',
        skill_net_title: 'নেটওয়ার্ক ও ভার্চুয়ালাইজেশন',
        skill_net_p: 'VMware দিয়ে ভার্চুয়াল পরিবেশ। pfSense, Kali Linux, Debian কনফিগারেশন।',
        skill_lang_title: 'ভাষা',
        skill_lang_p: 'বাংলা – মাতৃভাষা<br>ফরাসি – মাতৃভাষা<br>ইংরেজি – B2 স্তর (EF SET সার্টিফাইড)',

        certs_heading: 'আমার',
        certs_heading_span: 'সার্টিফিকেট',
        cert1_title: 'EF SET ইংরেজি সার্টিফিকেট',
        cert1_desc: 'B2 স্তর – ইংরেজি দক্ষতা',
        cert_view: 'সার্টিফিকেট দেখুন',
        cert2_title: 'Cisco সাইবার নিরাপত্তায় পরিচিতি',
        cert2_desc: 'Cisco Networking Academy',

        company_heading: 'ইন্টার্নশিপ',
        company_heading_span: 'লক্ষ্য কোম্পানি',
        company1_title: 'নেটওয়ার্ক অবকাঠামো কোম্পানি',
        company1_domain: 'নেটওয়ার্ক অবকাঠামো সেবা',
        company1_loc: 'ফ্রান্স',
        company1_size: '৫০০–২০০০ কর্মী',
        company1_missions: ['রাউটার ও সুইচ কনফিগার করা', 'এন্টারপ্রাইজ নেটওয়ার্ক রক্ষণাবেক্ষণ', 'নেটওয়ার্ক নিরাপত্তা বাস্তবায়ন'],
        company1_skills: ['এন্টারপ্রাইজ নেটওয়ার্ক কনফিগারেশন', 'অবকাঠামো রক্ষণাবেক্ষণ', 'বাস্তব সমস্যা সমাধান'],
        company2_title: 'সাইবার নিরাপত্তা পরামর্শ কোম্পানি',
        company2_domain: 'IT নিরাপত্তা ও সাইবার হুমকি সুরক্ষা',
        company2_loc: 'ইউরোপ',
        company2_size: '২০০–১০০০ কর্মী',
        company2_missions: ['নেটওয়ার্ক ট্রাফিক বিশ্লেষণ', 'নিরাপত্তা পর্যবেক্ষণ ও দুর্বলতা স্ক্যানিং', 'ইনসিডেন্ট রেসপন্স সাপোর্ট'],
        company2_skills: ['হুমকি সনাক্তকরণ', 'নেটওয়ার্ক নিরাপত্তা বিশ্লেষণ', 'ইনসিডেন্ট রেসপন্স পদ্ধতি'],
        company3_title: 'ক্লাউড ও IT সেবা কোম্পানি',
        company3_domain: 'ক্লাউড কম্পিউটিং ও ডিজিটাল রূপান্তর',
        company3_loc: 'আন্তর্জাতিক',
        company3_size: '৫০০০+ কর্মী',
        company3_missions: ['সার্ভার কনফিগারেশন ও VM ব্যবস্থাপনা', 'ক্লাউড অবকাঠামো পর্যবেক্ষণ', 'IT সাপোর্ট ও রক্ষণাবেক্ষণ'],
        company3_skills: ['ক্লাউড অবকাঠামো ব্যবস্থাপনা', 'ভার্চুয়ালাইজেশন প্রযুক্তি', 'এন্টারপ্রাইজ IT অপারেশন'],
        desired_missions: 'কাঙ্ক্ষিত মিশন',
        skills_to_gain: 'অর্জনযোগ্য দক্ষতা',
        label_domain: 'ডোমেইন:',
        label_location: 'অবস্থান:',
        label_size: 'আকার:',

        exams_heading: 'BTS SIO –',
        exams_heading_span: 'পরীক্ষা',
        exams_intro: 'BTS SIO – SISR ক্রমাগত মূল্যায়ন এবং চূড়ান্ত পরীক্ষার সংমিশ্রণে মূল্যায়ন করা হয়।',
        exams_breakdown: 'বিস্তারিত পরীক্ষার বিবরণ',
        exam1_title: 'IT প্রকল্প ব্যবস্থাপনা',
        exam1_detail: '৪ ঘণ্টা লিখিত',
        exam1_desc: 'IT প্রকল্প পরিচালনা, কার্য পরিকল্পনা, ডকুমেন্টেশন লেখা।',
        exam2_title: 'নেটওয়ার্ক ও সিস্টেম প্রশাসন',
        exam2_detail: '৫ ঘণ্টা লিখিত/ব্যবহারিক',
        exam2_desc: 'IT অবকাঠামো কনফিগার, রক্ষণাবেক্ষণ ও সমস্যা সমাধান।',
        exam3_title: 'সাইবার নিরাপত্তা',
        exam3_detail: '৩ ঘণ্টা লিখিত/ব্যবহারিক',
        exam3_desc: 'নেটওয়ার্ক নিরাপত্তা, ফায়ারওয়াল, ব্যবহারকারী অ্যাক্সেস ব্যবস্থাপনা।',
        exam4_title: 'প্রযুক্তিগত সহায়তা',
        exam4_detail: '৩ ঘণ্টা ব্যবহারিক',
        exam4_desc: 'প্রযুক্তিগত সহায়তা প্রদান এবং ঘটনা সমাধান।',
        exam5_title: 'সফটওয়্যার ডেভেলপমেন্ট ও স্ক্রিপ্টিং',
        exam5_detail: '৪ ঘণ্টা লিখিত/ব্যবহারিক',
        exam5_desc: 'কাজ স্বয়ংক্রিয় করতে মৌলিক স্ক্রিপ্টিং।',
        exam6_title: 'পেশাদার যোগাযোগ ও ডকুমেন্টেশন',
        exam6_detail: '২ ঘণ্টা লিখিত',
        exam6_desc: 'পেশাদার পরিবেশে কার্যকরভাবে যোগাযোগ করুন।',
        exam7_title: 'ইন্টার্নশিপ মূল্যায়ন',
        exam7_detail: 'ক্রমাগত মূল্যায়ন',
        exam7_desc: 'প্রযুক্তিগত দক্ষতা এবং পেশাদার আচরণের উপর মূল্যায়ন।',
        download_exams: 'পরীক্ষার সারাংশ ডাউনলোড করুন (xlsx)',

        tech_heading: 'প্রযুক্তি',
        tech_heading_span: 'পর্যবেক্ষণ',
        tech1_title: 'সাইবার নিরাপত্তা',
        tech1_p: 'সর্বশেষ প্রবণতা: AI-চালিত হুমকি সনাক্তকরণ, জিরো-ট্রাস্ট আর্কিটেকচার।',
        tech2_title: 'কৃত্রিম বুদ্ধিমত্তা',
        tech2_p: 'মেশিন লার্নিং, ডিপ লার্নিং এবং অটোমেশন প্রযুক্তি।',
        tech3_title: 'কোয়ান্টাম কম্পিউটিং',
        tech3_p: 'IT এবং ক্রিপ্টোগ্রাফি পুনর্গঠন — গণনার ভবিষ্যৎ।',
        tech4_title: 'ক্রিপ্টো ও ব্লকচেইন',
        tech4_p: 'বিকেন্দ্রীভূত অর্থায়ন, স্মার্ট কন্ট্রাক্ট এবং নিরাপদ লেনদেন।',
        tech5_title: 'ডেটা গোপনীয়তা ও GDPR',
        tech5_p: 'ব্যক্তিগত ডেটা সুরক্ষা এবং GDPR সম্মতি আপডেট।',
        tech6_title: 'IT অবকাঠামো',
        tech6_p: 'ক্লাউড কম্পিউটিং, ভার্চুয়ালাইজেশন এবং নিরাপদ IT পরিবেশ।',

        projects_heading: 'আমার',
        projects_heading_span: 'প্রকল্প',
        proj1_title: 'QR কোড জেনারেটর',
        proj1_tag: 'Python',
        proj1_p: 'qrcode লাইব্রেরি ব্যবহার করে যেকোনো টেক্সট বা URL থেকে QR কোড তৈরি করুন।',
        proj2_title: 'সিজার সাইফার – তথ্য এনক্রিপ্ট করুন',
        proj2_tag: 'C ভাষা',
        proj2_p: 'C-তে সিজার সাইফার ব্যবহার করে টেক্সট এনক্রিপ্ট ও ডিক্রিপ্ট করুন।',
        proj3_title: 'Linux-এ ক্রিপ্টোগ্রাফি',
        proj3_tag: 'Linux / OpenSSL',
        proj3_p: 'ফাইল এনক্রিপ্ট করতে OpenSSL, GPG এবং নেটিভ Linux লাইব্রেরি ব্যবহার।',
        view_pdf: 'PDF দেখুন',

        contact_heading: 'যোগাযোগ',
        contact_heading_span: 'করুন',
        get_in_touch: 'যোগাযোগ করুন',
        label_email: 'ইমেইল',
        label_loc: 'অবস্থান',
        label_linkedin: 'LinkedIn',
        label_github: 'GitHub',
        form_firstname: 'প্রথম নাম',
        form_lastname: 'শেষ নাম',
        form_email: 'ইমেইল ঠিকানা',
        form_subject: 'বিষয়',
        form_message: 'আপনার বার্তা',
        form_send: 'বার্তা পাঠান',
        form_sending: 'পাঠানো হচ্ছে…',
        form_success: 'বার্তা সফলভাবে পাঠানো হয়েছে! আমি শীঘ্রই উত্তর দেব।',
        form_error: 'কিছু ভুল হয়েছে। আবার চেষ্টা করুন।',
        form_err_empty: 'অনুগ্রহ করে সমস্ত ক্ষেত্র পূরণ করুন।',
        form_err_email: 'একটি বৈধ ইমেইল ঠিকানা লিখুন।',
        form_mailto_success: 'মেইল ক্লায়েন্ট খোলা হচ্ছে…',
        footer_copy: '© 2025 সাহেদ আরশাদ আলী খান। সর্বস্বত্ব সংরক্ষিত।',
    },

    // ── ESPAÑOL ──────────────────────────────
    es: {
        nav_home: 'Inicio',
        nav_about: 'Sobre mí',
        nav_bts: 'BTS SIO',
        nav_skills: 'Habilidades',
        nav_certs: 'Certificaciones',
        nav_company: 'Empresas',
        nav_exams: 'Exámenes',
        nav_projects: 'Proyectos',
        nav_tech: 'Vigilancia Tec.',
        nav_contact: 'Contacto',

        greeting: 'Hola, soy',
        home_desc: 'Estudiante de BTS SIO, especialidad SISR — apasionado por las redes, la ciberseguridad y la administración de sistemas.',
        download_cv: 'Descargar CV',
        typing_words: ['Estudiante de Informática', 'Entusiasta de Redes', 'Aprendiz de Ciberseguridad', 'BTS SIO – SISR'],

        about_heading: 'Sobre',
        about_heading_span: 'mí',
        about_subtitle: 'Estudiante BTS SIO – SISR',
        about_p1: 'Mi nombre es Sahed Arshed Ali Khan. Estoy inscrito en el programa BTS SIO, especialidad SISR.',
        about_p2: 'Soy apasionado por las redes, la administración de sistemas y la ciberseguridad.',
        about_btn: 'Mi Trayectoria Académica',

        timeline_heading: 'Mi',
        timeline_heading_span: 'Trayectoria',
        tl1_title: 'BTS SIO – SISR',
        tl1_desc: 'Actualmente cursando BTS SIO – SISR, enfocado en administración de sistemas, gestión de redes e infraestructura IT.',
        tl2_title: 'BTS CIEL – Opción A',
        tl2_desc: 'Primer año en BTS CIEL aprendiendo fundamentos de seguridad informática y administración de sistemas.',
        tl3_title: 'Grado en Medidas Físicas',
        tl3_desc: 'Programa BUT en Física de tres años. Desarrollé pensamiento analítico que guió mi reorientación hacia IT.',
        tl4_title: 'Bachillerato General',
        tl4_desc: 'Bachillerato con especialización en Matemáticas y Física.',

        bts_heading: 'BTS',
        bts_heading_span: 'SIO',
        bts_main_title: '¿Qué es el BTS SIO?',
        bts_main_p1: 'El BTS SIO es un diploma de educación superior de dos años reconocido por el Estado francés. Forma profesionales IT capaces de gestionar y desarrollar sistemas de información en organizaciones.',
        bts_main_p2: 'El programa combina conocimientos teóricos y proyectos prácticos en administración de sistemas, redes, desarrollo de software, bases de datos y ciberseguridad.',
        bts_slam_title: 'Opción SLAM',
        bts_slam_p: 'SLAM se enfoca en desarrollo de software y diseño de aplicaciones.',
        bts_sisr_title: 'Opción SISR',
        bts_sisr_badge: 'Mi Especialidad',
        bts_sisr_p: 'SISR se enfoca en instalar, administrar y asegurar infraestructuras IT.',

        skills_heading: 'Mis',
        skills_heading_span: 'Habilidades',
        skill_prog_title: 'Programación',
        skill_prog_p: 'Dominio de JavaScript, C y Python. Experiencia práctica en scripting y resolución de problemas.',
        skill_web_title: 'Desarrollo Web',
        skill_web_p: 'Desarrollo de aplicaciones web con HTML, CSS y JavaScript.',
        skill_db_title: 'Base de Datos',
        skill_db_p: 'Conocimiento de bases de datos relacionales y MySQL.',
        skill_design_title: 'Software y Diseño',
        skill_design_p: 'Modelado 3D con SolidWorks. Desarrollo de juegos 2D con Godot Engine.',
        skill_net_title: 'Redes y Virtualización',
        skill_net_p: 'Entornos virtuales con VMware. Configuración de pfSense, Kali Linux, Debian.',
        skill_lang_title: 'Idiomas',
        skill_lang_p: 'Bengalí / Bangla – Nativo<br>Francés – Nativo<br>Inglés – Nivel B2 (Certificado EF SET)',

        certs_heading: 'Mis',
        certs_heading_span: 'Certificaciones',
        cert1_title: 'Certificado EF SET de Inglés',
        cert1_desc: 'Nivel B2 – Competencia en Inglés',
        cert_view: 'Ver Certificado',
        cert2_title: 'Cisco Introducción a la Ciberseguridad',
        cert2_desc: 'Cisco Networking Academy',

        company_heading: 'Empresas',
        company_heading_span: 'Objetivo para Prácticas',
        company1_title: 'Empresa de Infraestructura de Red',
        company1_domain: 'Servicios de Infraestructura de Red',
        company1_loc: 'Francia',
        company1_size: '500–2000 empleados',
        company1_missions: ['Configurar routers y switches', 'Mantener infraestructuras de red empresarial', 'Implementación de seguridad de red'],
        company1_skills: ['Configuración de red empresarial', 'Mantenimiento de infraestructura', 'Resolución de problemas reales'],
        company2_title: 'Empresa de Consultoría en Ciberseguridad',
        company2_domain: 'Seguridad IT y Protección Cibernética',
        company2_loc: 'Europa',
        company2_size: '200–1000 empleados',
        company2_missions: ['Análisis de tráfico de red', 'Monitoreo de seguridad y análisis de vulnerabilidades', 'Soporte en respuesta a incidentes'],
        company2_skills: ['Detección de amenazas', 'Análisis de seguridad de red', 'Métodos de respuesta a incidentes'],
        company3_title: 'Empresa de Servicios Cloud e IT',
        company3_domain: 'Computación en la Nube y Transformación Digital',
        company3_loc: 'Internacional',
        company3_size: '5000+ empleados',
        company3_missions: ['Configuración de servidores y gestión de VM', 'Monitoreo de infraestructura Cloud', 'Soporte IT y mantenimiento'],
        company3_skills: ['Gestión de infraestructura Cloud', 'Tecnologías de virtualización', 'Operaciones IT empresariales'],
        desired_missions: 'Misiones Deseadas',
        skills_to_gain: 'Habilidades a Adquirir',
        label_domain: 'Dominio:',
        label_location: 'Ubicación:',
        label_size: 'Tamaño:',

        exams_heading: 'BTS SIO –',
        exams_heading_span: 'Exámenes',
        exams_intro: 'El BTS SIO – SISR se evalúa mediante evaluaciones continuas y exámenes finales que representan aproximadamente 40 horas.',
        exams_breakdown: 'Desglose Detallado de Exámenes',
        exam1_title: 'Gestión de Proyectos IT',
        exam1_detail: '4h escrito',
        exam1_desc: 'Gestión de proyectos IT, planificación de tareas, redacción de documentación.',
        exam2_title: 'Administración de Redes y Sistemas',
        exam2_detail: '5h escrito/práctico',
        exam2_desc: 'Configuración y mantenimiento de infraestructuras IT.',
        exam3_title: 'Ciberseguridad y Seguridad IT',
        exam3_detail: '3h escrito/práctico',
        exam3_desc: 'Seguridad de red, firewalls, gestión de accesos de usuario.',
        exam4_title: 'Soporte Técnico y Asistencia IT',
        exam4_detail: '3h práctico',
        exam4_desc: 'Proporcionar soporte técnico y resolver incidentes.',
        exam5_title: 'Desarrollo de Software y Scripting',
        exam5_detail: '4h escrito/práctico',
        exam5_desc: 'Scripting básico para automatizar tareas.',
        exam6_title: 'Comunicación Profesional y Documentación',
        exam6_detail: '2h escrito',
        exam6_desc: 'Comunicarse eficazmente y redactar informes.',
        exam7_title: 'Evaluación de Prácticas',
        exam7_detail: 'Evaluación continua',
        exam7_desc: 'Evaluación de competencia técnica y comportamiento profesional.',
        download_exams: 'Descargar Resumen de Exámenes (xlsx)',

        tech_heading: 'Vigilancia',
        tech_heading_span: 'Tecnológica',
        tech1_title: 'Ciberseguridad',
        tech1_p: 'Últimas tendencias: detección de amenazas con IA, arquitecturas zero-trust.',
        tech2_title: 'Inteligencia Artificial',
        tech2_p: 'Aprendizaje automático, aprendizaje profundo y tecnologías de automatización.',
        tech3_title: 'Computación Cuántica',
        tech3_p: 'Redefiniendo IT y criptografía — el futuro de la computación.',
        tech4_title: 'Cripto y Blockchain',
        tech4_p: 'Finanzas descentralizadas, contratos inteligentes y transacciones seguras.',
        tech5_title: 'Privacidad de Datos y GDPR',
        tech5_p: 'Protección de datos personales y actualizaciones de cumplimiento.',
        tech6_title: 'Infraestructura IT',
        tech6_p: 'Computación en la nube, virtualización y entornos IT seguros.',

        projects_heading: 'Mis',
        projects_heading_span: 'Proyectos',
        proj1_title: 'Generador de Código QR',
        proj1_tag: 'Python',
        proj1_p: 'Genera códigos QR desde texto o URL con la librería qrcode.',
        proj2_title: 'Cifrado César – Cifrar Información',
        proj2_tag: 'Lenguaje C',
        proj2_p: 'Cifra y descifra texto con el cifrado César en C.',
        proj3_title: 'Criptografía en Linux',
        proj3_tag: 'Linux / OpenSSL',
        proj3_p: 'Usando OpenSSL y GPG para cifrar archivos y gestionar claves.',
        view_pdf: 'Ver PDF',

        contact_heading: 'Contáctame',
        contact_heading_span: '',
        get_in_touch: 'Ponte en Contacto',
        label_email: 'Correo',
        label_loc: 'Ubicación',
        label_linkedin: 'LinkedIn',
        label_github: 'GitHub',
        form_firstname: 'Nombre',
        form_lastname: 'Apellido',
        form_email: 'Correo Electrónico',
        form_subject: 'Asunto',
        form_message: 'Tu Mensaje',
        form_send: 'Enviar Mensaje',
        form_sending: 'Enviando…',
        form_success: '¡Mensaje enviado con éxito! Te responderé pronto.',
        form_error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
        form_err_empty: 'Por favor, completa todos los campos.',
        form_err_email: 'Por favor, introduce una dirección de correo válida.',
        form_mailto_success: 'Abriendo tu cliente de correo…',
        footer_copy: '© 2025 Sahed Arshed Ali Khan. Todos los derechos reservados.',
    },

    // ── DEUTSCH ──────────────────────────────
    de: {
        nav_home: 'Startseite',
        nav_about: 'Über mich',
        nav_bts: 'BTS SIO',
        nav_skills: 'Fähigkeiten',
        nav_certs: 'Zertifikate',
        nav_company: 'Unternehmen',
        nav_exams: 'Prüfungen',
        nav_projects: 'Projekte',
        nav_tech: 'Tech-Watch',
        nav_contact: 'Kontakt',

        greeting: 'Hallo, ich bin',
        home_desc: 'BTS SIO Student, Spezialisierung SISR — leidenschaftlich für Netzwerke, Cybersicherheit und Systemadministration.',
        download_cv: 'Lebenslauf herunterladen',
        typing_words: ['Informatikstudent', 'Netzwerk-Enthusiast', 'Cybersicherheits-Lernender', 'BTS SIO – SISR'],

        about_heading: 'Über',
        about_heading_span: 'mich',
        about_subtitle: 'BTS SIO – SISR Student',
        about_p1: 'Mein Name ist Sahed Arshed Ali Khan. Ich bin derzeit im BTS SIO Programm eingeschrieben, Spezialisierung SISR.',
        about_p2: 'Ich bin leidenschaftlich an Netzwerken, Systemadministration und Cybersicherheit interessiert.',
        about_btn: 'Mein akademischer Werdegang',

        timeline_heading: 'Mein',
        timeline_heading_span: 'Werdegang',
        tl1_title: 'BTS SIO – SISR',
        tl1_desc: 'Derzeit BTS SIO – SISR, mit Fokus auf Systemadministration, Netzwerkverwaltung und IT-Infrastruktur.',
        tl2_title: 'BTS CIEL – Option A',
        tl2_desc: 'Erstes Jahr BTS CIEL (Cybersicherheit), Grundlagen der Informationssicherheit.',
        tl3_title: 'Bachelor in Physikalischen Messungen',
        tl3_desc: 'Dreijähriges BUT-Programm in Physik. Entwickelte analytisches Denken.',
        tl4_title: 'Allgemeines Abitur',
        tl4_desc: 'Abitur mit Schwerpunkt Mathematik und Physik.',

        bts_heading: 'BTS',
        bts_heading_span: 'SIO',
        bts_main_title: 'Was ist das BTS SIO?',
        bts_main_p1: 'Das BTS SIO ist ein zweijähriges Hochschuldiplom, das vom französischen Staat anerkannt wird. Es bildet IT-Fachleute aus.',
        bts_main_p2: 'Das Programm kombiniert theoretisches Wissen mit praktischen Projekten in Systemadministration, Netzwerken, Softwareentwicklung und Cybersicherheit.',
        bts_slam_title: 'Option SLAM',
        bts_slam_p: 'SLAM konzentriert sich auf Softwareentwicklung und Anwendungsdesign.',
        bts_sisr_title: 'Option SISR',
        bts_sisr_badge: 'Mein Weg',
        bts_sisr_p: 'SISR konzentriert sich auf die Installation, Verwaltung und Sicherung von IT-Infrastrukturen.',

        skills_heading: 'Meine',
        skills_heading_span: 'Fähigkeiten',
        skill_prog_title: 'Programmierung',
        skill_prog_p: 'Kenntnisse in JavaScript, C und Python. Praktische Erfahrung im Scripting.',
        skill_web_title: 'Webentwicklung',
        skill_web_p: 'Entwicklung von Webanwendungen mit HTML, CSS und JavaScript.',
        skill_db_title: 'Datenbank',
        skill_db_p: 'Kenntnisse in relationalen Datenbanken und MySQL.',
        skill_design_title: 'Software & Design',
        skill_design_p: '3D-Modellierung mit SolidWorks. 2D-Spieleentwicklung mit Godot Engine.',
        skill_net_title: 'Netzwerk & Virtualisierung',
        skill_net_p: 'Virtuelle Umgebungen mit VMware. Konfiguration von pfSense, Kali Linux, Debian.',
        skill_lang_title: 'Sprachen',
        skill_lang_p: 'Bengalisch / Bangla – Muttersprache<br>Französisch – Muttersprache<br>Englisch – B2-Niveau (EF SET zertifiziert)',

        certs_heading: 'Meine',
        certs_heading_span: 'Zertifikate',
        cert1_title: 'EF SET Englisch-Zertifikat',
        cert1_desc: 'B2-Niveau – Englischkenntnisse',
        cert_view: 'Zertifikat ansehen',
        cert2_title: 'Cisco Einführung in die Cybersicherheit',
        cert2_desc: 'Cisco Networking Academy',

        company_heading: 'Praktikums-',
        company_heading_span: 'Zielunternehmen',
        company1_title: 'Netzwerkinfrastruktur-Unternehmen',
        company1_domain: 'Netzwerkinfrastruktur-Dienste',
        company1_loc: 'Frankreich',
        company1_size: '500–2000 Mitarbeiter',
        company1_missions: ['Router & Switches konfigurieren', 'Unternehmensnetzwerke warten', 'Netzwerksicherheit implementieren'],
        company1_skills: ['Unternehmensnetzwerk-Konfiguration', 'Infrastrukturwartung', 'Reale Fehlerbehebung'],
        company2_title: 'Cybersicherheits-Beratungsunternehmen',
        company2_domain: 'IT-Sicherheit & Cyber-Bedrohungsschutz',
        company2_loc: 'Europa',
        company2_size: '200–1000 Mitarbeiter',
        company2_missions: ['Netzwerkverkehrsanalyse', 'Sicherheitsüberwachung & Schwachstellenanalyse', 'Incident-Response-Support'],
        company2_skills: ['Bedrohungserkennung', 'Netzwerksicherheitsanalyse', 'Incident-Response-Methoden'],
        company3_title: 'Cloud- & IT-Dienstleistungsunternehmen',
        company3_domain: 'Cloud Computing & Digitale Transformation',
        company3_loc: 'International',
        company3_size: '5000+ Mitarbeiter',
        company3_missions: ['Serverkonfiguration & VM-Management', 'Cloud-Infrastrukturüberwachung', 'IT-Support und Wartung'],
        company3_skills: ['Cloud-Infrastruktur-Management', 'Virtualisierungstechnologien', 'Enterprise IT-Betrieb'],
        desired_missions: 'Gewünschte Aufgaben',
        skills_to_gain: 'Zu erwerbende Fähigkeiten',
        label_domain: 'Bereich:',
        label_location: 'Standort:',
        label_size: 'Größe:',

        exams_heading: 'BTS SIO –',
        exams_heading_span: 'Prüfungen',
        exams_intro: 'Das BTS SIO – SISR wird durch kontinuierliche Bewertungen und Abschlussprüfungen von ca. 40 Stunden bewertet.',
        exams_breakdown: 'Detaillierte Prüfungsübersicht',
        exam1_title: 'IT-Projektmanagement',
        exam1_detail: '4h schriftlich',
        exam1_desc: 'IT-Projekte verwalten, Aufgaben planen, Dokumentation schreiben.',
        exam2_title: 'Netzwerk- und Systemadministration',
        exam2_detail: '5h schriftlich/praktisch',
        exam2_desc: 'IT-Infrastrukturen konfigurieren, warten und Fehler beheben.',
        exam3_title: 'Cybersicherheit & IT-Sicherheit',
        exam3_detail: '3h schriftlich/praktisch',
        exam3_desc: 'Netzwerksicherheit, Firewalls, Benutzerzugangsverwaltung.',
        exam4_title: 'Technischer Support und IT-Assistenz',
        exam4_detail: '3h praktisch',
        exam4_desc: 'Technischen Support leisten und Vorfälle lösen.',
        exam5_title: 'Softwareentwicklung & Scripting',
        exam5_detail: '4h schriftlich/praktisch',
        exam5_desc: 'Grundlegendes Scripting zur Aufgabenautomatisierung.',
        exam6_title: 'Professionelle Kommunikation & Dokumentation',
        exam6_detail: '2h schriftlich',
        exam6_desc: 'Effektiv kommunizieren und Berichte schreiben.',
        exam7_title: 'Praktikumsbewertung',
        exam7_detail: 'Kontinuierliche Bewertung',
        exam7_desc: 'Bewertung technischer Kompetenz und professionellen Verhaltens.',
        download_exams: 'Prüfungsübersicht herunterladen (xlsx)',

        tech_heading: 'Technologie-',
        tech_heading_span: 'Watch',
        tech1_title: 'Cybersicherheit',
        tech1_p: 'Neueste Trends: KI-gestützte Bedrohungserkennung, Zero-Trust-Architekturen.',
        tech2_title: 'Künstliche Intelligenz',
        tech2_p: 'Maschinelles Lernen, Deep Learning und Automatisierungstechnologien.',
        tech3_title: 'Quantencomputing',
        tech3_p: 'IT und Kryptographie neu gestalten — die Zukunft der Berechnung.',
        tech4_title: 'Krypto & Blockchain',
        tech4_p: 'Dezentrale Finanzen, Smart Contracts und sichere Transaktionen.',
        tech5_title: 'Datenschutz & DSGVO',
        tech5_p: 'Schutz personenbezogener Daten und DSGVO-Compliance-Updates.',
        tech6_title: 'IT-Infrastruktur',
        tech6_p: 'Cloud Computing, Virtualisierung und sichere IT-Umgebungen.',

        projects_heading: 'Meine',
        projects_heading_span: 'Projekte',
        proj1_title: 'QR-Code-Generator',
        proj1_tag: 'Python',
        proj1_p: 'QR-Codes aus beliebigem Text oder URLs generieren.',
        proj2_title: 'Caesar-Chiffre – Informationen verschlüsseln',
        proj2_tag: 'C-Sprache',
        proj2_p: 'Text mit einer Caesar-Chiffre in C ver- und entschlüsseln.',
        proj3_title: 'Kryptographie unter Linux',
        proj3_tag: 'Linux / OpenSSL',
        proj3_p: 'OpenSSL und GPG zur Dateiverschlüsselung und Schlüsselverwaltung verwenden.',
        view_pdf: 'PDF ansehen',

        contact_heading: 'Kontakt',
        contact_heading_span: 'aufnehmen',
        get_in_touch: 'Kontakt aufnehmen',
        label_email: 'E-Mail',
        label_loc: 'Standort',
        label_linkedin: 'LinkedIn',
        label_github: 'GitHub',
        form_firstname: 'Vorname',
        form_lastname: 'Nachname',
        form_email: 'E-Mail-Adresse',
        form_subject: 'Betreff',
        form_message: 'Ihre Nachricht',
        form_send: 'Nachricht senden',
        form_sending: 'Senden…',
        form_success: 'Nachricht erfolgreich gesendet! Ich werde mich bald melden.',
        form_error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
        form_err_empty: 'Bitte füllen Sie alle Felder aus.',
        form_err_email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        form_mailto_success: 'Ihr E-Mail-Client wird geöffnet…',
        footer_copy: '© 2025 Sahed Arshed Ali Khan. Alle Rechte vorbehalten.',
    },
};

// ── RTL languages ────────────────────────────
const RTL_LANGS = ['ar'];

// ── Language metadata for the selector UI ────
const LANG_META = [
    { code: 'en', label: 'English',  flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية',  flag: '🇸🇦' },
    { code: 'bn', label: 'বাংলা',    flag: '🇧🇩' },
    { code: 'es', label: 'Español',  flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
];

// ── Apply translations to DOM ─────────────────
function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;

    // RTL support
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', RTL_LANGS.includes(lang) ? 'rtl' : 'ltr');
    document.body.classList.toggle('rtl', RTL_LANGS.includes(lang));

    // Helper
    const setText = (sel, key, html = false) => {
        document.querySelectorAll(sel).forEach(el => {
            if (html) el.innerHTML = t[key] ?? el.innerHTML;
            else el.textContent = t[key] ?? el.textContent;
        });
    };
    const setPlaceholder = (id, key) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute('placeholder', ' '); // keep float-label working
    };

    // ─ Navbar ─
    const navLinks = document.querySelectorAll('.navbar a');
    const navKeys = ['nav_home','nav_about','nav_bts','nav_skills','nav_certs','nav_company','nav_exams','nav_projects','nav_tech','nav_contact'];
    navLinks.forEach((link, i) => { if (navKeys[i]) link.textContent = t[navKeys[i]] ?? link.textContent; });

    // ─ Home ─
    setText('[data-i18n="greeting"]', 'greeting');
    setText('[data-i18n="home_desc"]', 'home_desc');
    setText('[data-i18n="download_cv"]', 'download_cv');

    // ─ About ─
    setText('[data-i18n="about_heading"]', 'about_heading');
    setText('[data-i18n="about_heading_span"]', 'about_heading_span');
    setText('[data-i18n="about_subtitle"]', 'about_subtitle');
    setText('[data-i18n="about_p1"]', 'about_p1');
    setText('[data-i18n="about_p2"]', 'about_p2');
    setText('[data-i18n="about_btn"]', 'about_btn');

    // ─ Timeline ─
    setText('[data-i18n="timeline_heading"]', 'timeline_heading');
    setText('[data-i18n="timeline_heading_span"]', 'timeline_heading_span');
    ['tl1','tl2','tl3','tl4'].forEach(k => {
        setText(`[data-i18n="${k}_title"]`, `${k}_title`);
        setText(`[data-i18n="${k}_desc"]`, `${k}_desc`);
    });

    // ─ BTS SIO ─
    setText('[data-i18n="bts_heading"]', 'bts_heading');
    setText('[data-i18n="bts_heading_span"]', 'bts_heading_span');
    setText('[data-i18n="bts_main_title"]', 'bts_main_title');
    setText('[data-i18n="bts_main_p1"]', 'bts_main_p1');
    setText('[data-i18n="bts_main_p2"]', 'bts_main_p2');
    setText('[data-i18n="bts_slam_title"]', 'bts_slam_title');
    setText('[data-i18n="bts_slam_p"]', 'bts_slam_p');
    setText('[data-i18n="bts_sisr_title"]', 'bts_sisr_title');
    setText('[data-i18n="bts_sisr_badge"]', 'bts_sisr_badge');
    setText('[data-i18n="bts_sisr_p"]', 'bts_sisr_p');

    // ─ Skills ─
    setText('[data-i18n="skills_heading"]', 'skills_heading');
    setText('[data-i18n="skills_heading_span"]', 'skills_heading_span');
    ['prog','web','db','design','net','lang'].forEach(k => {
        setText(`[data-i18n="skill_${k}_title"]`, `skill_${k}_title`);
        const el = document.querySelector(`[data-i18n="skill_${k}_p"]`);
        if (el) el.innerHTML = t[`skill_${k}_p`] ?? el.innerHTML;
    });

    // ─ Certifications ─
    setText('[data-i18n="certs_heading"]', 'certs_heading');
    setText('[data-i18n="certs_heading_span"]', 'certs_heading_span');
    setText('[data-i18n="cert1_title"]', 'cert1_title');
    setText('[data-i18n="cert1_desc"]', 'cert1_desc');
    setText('[data-i18n="cert2_title"]', 'cert2_title');
    setText('[data-i18n="cert2_desc"]', 'cert2_desc');
    document.querySelectorAll('[data-i18n="cert_view"]').forEach(el => el.textContent = t['cert_view'] ?? el.textContent);

    // ─ Company ─
    setText('[data-i18n="company_heading"]', 'company_heading');
    setText('[data-i18n="company_heading_span"]', 'company_heading_span');
    setText('[data-i18n="desired_missions"]', 'desired_missions');
    setText('[data-i18n="skills_to_gain"]', 'skills_to_gain');
    setText('[data-i18n="label_domain"]', 'label_domain');
    setText('[data-i18n="label_location"]', 'label_location');
    setText('[data-i18n="label_size"]', 'label_size');
    [1,2,3].forEach(n => {
        setText(`[data-i18n="company${n}_title"]`, `company${n}_title`);
        setText(`[data-i18n="company${n}_domain"]`, `company${n}_domain`);
        setText(`[data-i18n="company${n}_loc"]`, `company${n}_loc`);
        setText(`[data-i18n="company${n}_size"]`, `company${n}_size`);
        // list items
        const missions = document.querySelectorAll(`[data-i18n-list="company${n}_missions"] li`);
        const mArr = t[`company${n}_missions`] || [];
        missions.forEach((li, i) => { if (mArr[i]) li.textContent = mArr[i]; });
        const skills = document.querySelectorAll(`[data-i18n-list="company${n}_skills"] li`);
        const sArr = t[`company${n}_skills`] || [];
        skills.forEach((li, i) => { if (sArr[i]) li.textContent = sArr[i]; });
    });

    // ─ Exams ─
    setText('[data-i18n="exams_heading"]', 'exams_heading');
    setText('[data-i18n="exams_heading_span"]', 'exams_heading_span');
    setText('[data-i18n="exams_intro"]', 'exams_intro');
    setText('[data-i18n="exams_breakdown"]', 'exams_breakdown');
    for (let i = 1; i <= 7; i++) {
        setText(`[data-i18n="exam${i}_title"]`, `exam${i}_title`);
        setText(`[data-i18n="exam${i}_detail"]`, `exam${i}_detail`);
        setText(`[data-i18n="exam${i}_desc"]`, `exam${i}_desc`);
    }
    setText('[data-i18n="download_exams"]', 'download_exams');

    // ─ Tech Watch ─
    setText('[data-i18n="tech_heading"]', 'tech_heading');
    setText('[data-i18n="tech_heading_span"]', 'tech_heading_span');
    for (let i = 1; i <= 6; i++) {
        setText(`[data-i18n="tech${i}_title"]`, `tech${i}_title`);
        setText(`[data-i18n="tech${i}_p"]`, `tech${i}_p`);
    }

    // ─ Projects ─
    setText('[data-i18n="projects_heading"]', 'projects_heading');
    setText('[data-i18n="projects_heading_span"]', 'projects_heading_span');
    [1,2,3].forEach(n => {
        setText(`[data-i18n="proj${n}_title"]`, `proj${n}_title`);
        setText(`[data-i18n="proj${n}_tag"]`, `proj${n}_tag`);
        setText(`[data-i18n="proj${n}_p"]`, `proj${n}_p`);
    });
    document.querySelectorAll('[data-i18n="view_pdf"]').forEach(el => el.textContent = t['view_pdf'] ?? el.textContent);

    // ─ Contact ─
    setText('[data-i18n="contact_heading"]', 'contact_heading');
    setText('[data-i18n="contact_heading_span"]', 'contact_heading_span');
    setText('[data-i18n="get_in_touch"]', 'get_in_touch');
    setText('[data-i18n="label_email"]', 'label_email');
    setText('[data-i18n="label_loc"]', 'label_loc');
    setText('[data-i18n="label_linkedin"]', 'label_linkedin');
    setText('[data-i18n="label_github"]', 'label_github');
    // Form labels (float labels)
    document.querySelector('label[for="firstname"]') && (document.querySelector('label[for="firstname"]').textContent = t['form_firstname']);
    document.querySelector('label[for="lastname"]') && (document.querySelector('label[for="lastname"]').textContent = t['form_lastname']);
    document.querySelector('label[for="email"]') && (document.querySelector('label[for="email"]').textContent = t['form_email']);
    document.querySelector('label[for="subject"]') && (document.querySelector('label[for="subject"]').textContent = t['form_subject']);
    document.querySelector('label[for="message"]') && (document.querySelector('label[for="message"]').textContent = t['form_message']);
    const btnTextEl = document.querySelector('.btn-text');
    if (btnTextEl) btnTextEl.innerHTML = `<i class='bx bx-send'></i> ${t['form_send']}`;
    const btnLoadEl = document.querySelector('.btn-loading');
    if (btnLoadEl) btnLoadEl.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> ${t['form_sending']}`;

    // ─ Footer ─
    setText('[data-i18n="footer_copy"]', 'footer_copy');

    // ─ Update typing animation words ─
    if (t.typing_words && typeof words !== 'undefined') {
        words.length = 0;
        t.typing_words.forEach(w => words.push(w));
    }

    // Save
    localStorage.setItem('portfolio_lang', lang);
    window._currentLang = lang;
    window._currentT = t;
}

// ── Build & inject the language switcher UI ───
function buildLangSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn" id="langToggle" aria-label="Select language">
        <i class='bx bx-globe'></i>
        <span class="lang-current-label">EN</span>
        <i class='bx bx-chevron-down lang-chevron'></i>
      </button>
      <ul class="lang-dropdown" id="langDropdown" role="listbox">
        ${LANG_META.map(l => `
          <li class="lang-option" data-lang="${l.code}" role="option" tabindex="0">
            <span class="lang-flag">${l.flag}</span>
            <span class="lang-name">${l.label}</span>
          </li>`).join('')}
      </ul>
    `;

    // Inject into header (before the hamburger icon)
    const header = document.querySelector('.header');
    const menuIcon = document.querySelector('#menu-icon');
    if (header && menuIcon) {
        header.insertBefore(switcher, menuIcon);
    }

    // Toggle dropdown
    const toggle = switcher.querySelector('#langToggle');
    const dropdown = switcher.querySelector('#langDropdown');
    const chevron = switcher.querySelector('.lang-chevron');
    const currentLabel = switcher.querySelector('.lang-current-label');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = dropdown.classList.toggle('open');
        chevron.style.transform = open ? 'rotate(180deg)' : 'rotate(0)';
    });

    // Close on outside click
    document.addEventListener('click', () => {
        dropdown.classList.remove('open');
        chevron.style.transform = 'rotate(0)';
    });

    // Select language
    switcher.querySelectorAll('.lang-option').forEach(opt => {
        const handler = () => {
            const lang = opt.dataset.lang;
            const meta = LANG_META.find(m => m.code === lang);
            if (meta) {
                currentLabel.textContent = meta.code.toUpperCase();
                // Mark active
                switcher.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
            }
            applyLang(lang);
            dropdown.classList.remove('open');
            chevron.style.transform = 'rotate(0)';
        };
        opt.addEventListener('click', handler);
        opt.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
    });

    return { currentLabel, switcher };
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const { currentLabel, switcher } = buildLangSwitcher();

    // Detect saved or browser language
    const saved = localStorage.getItem('portfolio_lang');
    const browser = (navigator.language || 'en').split('-')[0];
    const preferred = saved || (translations[browser] ? browser : 'en');

    // Mark active option
    const activeOpt = switcher.querySelector(`[data-lang="${preferred}"]`);
    if (activeOpt) activeOpt.classList.add('active');
    const meta = LANG_META.find(m => m.code === preferred);
    if (meta) currentLabel.textContent = meta.code.toUpperCase();

    applyLang(preferred);
});

// ── Export helpers for script.js ─────────────
window.getTranslation = (key) => {
    const lang = window._currentLang || 'en';
    return (translations[lang] && translations[lang][key]) || (translations['en'] && translations['en'][key]) || '';
};
