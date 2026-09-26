// ===================== i18n (AZ / RU / EN) =====================
(function () {
  const STORAGE_KEY = "site-lang";
  const DEFAULT_LANG = "en";

  const T = {
    en: {
      "nav.home": "Home",
      "nav.about": "About Me",
      "nav.about2": "About",
      "nav.skills": "Skills",
      "nav.projects": "My project's",
      "nav.projects2": "Projects",
      "nav.contact": "Contact",
      "role.webdev": "WEB DEVELOPER",
      "socials.follow": "FOLLOW ME",

      "hero.badge": "Available for projects",
      "hero.greeting": "Hi, I'm",
      "hero.role.prefix": "I'M A",
      "hero.role.title": "WEB DEVELOPER",
      "hero.desc":
        "Front-end developer in the making, based in Baku. I turn ideas into working websites — clean code, smooth animations, interfaces people actually enjoy using. Currently diving deeper into AI and design to build more complete projects on my own.",
      "hero.btn": "VIEW MY PROJECT'S",

      "status.online": "ONLINE",
      "loc.baku": "BAKU, AZERBAIJAN",

      "about.chapter.title": "ABOUT<br>ME",
      "about.eyebrow": "// BIOGRAPHY",
      "about.h2": "Design, code <span>&amp; craft.</span>",
      "about.intro":
        "Passionate web developer focused on crafting highly interactive, modern, and visually striking interfaces with performance in mind.",
      "about.bio.h3": "Hello, I'm <span>Fuad Alizade</span>",
      "about.bio.p":
        "I build digital products with clean structure, responsive design, and smooth interactions. From frontend design systems to dynamic backend features, I focus on turning complex challenges into seamless experiences.",
      "about.btn.cv": "Download CV",
      "about.btn.projects": "View Projects",
      "about.footer.role": "FULLSTACK CREATIVE",
      "about.card1.title": "TOTAL PROJECTS",
      "about.card1.desc":
        "Innovative web solutions crafted with high attention to performance.",
      "about.card2.title": "CERTIFICATES",
      "about.card2.desc":
        "Validated technical skills and specialized training milestones.",
      "about.card3.title": "YEARS EXPERIENCE",
      "about.card3.desc":
        "Continuous learning journey building real-world applications.",
      "about.card4.title": "UI / UX CRAFT",
      "about.card4.desc":
        "Driven by pixel precision, dark aesthetics, and seamless user flow.",
      "about.closing.1": "PASSION FOR DETAIL",
      "about.closing.2": "PERFECT EXECUTION",

      "badge.completed": "COMPLETED",
      "badge.verified": "VERIFIED",
      "badge.active": "ACTIVE",
      "badge.corefocus": "CORE FOCUS",
      "badge.core": "CORE",
      "badge.growing": "GROWING",
      "badge.obsession": "OBSESSION",
      "badge.featured": "FEATURED",

      "skills.chapter.title": "MY<br>SKILLS",
      "skills.eyebrow": "// MY ARSENAL",
      "skills.h2": "Code with a <span>pulse.</span>",
      "skills.intro":
        "I blend clean frontend code, sharp visual thinking and AI-powered workflows to turn an idea into an experience people remember.",
      "skills.reactor.status": "BUILD MODE",
      "skills.core.creative": "CREATIVE",
      "skills.core.core": "CORE",
      "skills.core.small": "always evolving",
      "skills.reactor.copy": "Making every pixel count.",
      "skills.reactor.tags": "DESIGN <i>×</i> CODE <i>×</i> CURIOSITY",

      "skill.frontend.eyebrow": "FRONTEND FOUNDATION",
      "skill.frontend.h3": "Frontend built<br>to <span>feel alive.</span>",
      "skill.frontend.desc":
        "Semantic, responsive interfaces with a strong eye for the details.",
      "skill.js.eyebrow": "INTERACTION",
      "skill.js.desc":
        "Adding motion, logic and those little moments that make a site click.",
      "skill.react.eyebrow": "MODERN STACK",
      "skill.react.desc":
        "Component-first web experiences built to scale with the idea.",
      "skill.ai.eyebrow": "SMART WORKFLOW",
      "skill.ai.h3": "AI tools,<br><span>real taste.</span>",
      "skill.ai.desc":
        "Research, ideas and faster prototypes — guided by human judgement.",
      "skill.python.eyebrow": "FOUNDATIONS",
      "skill.python.desc":
        "Exploring scripting and automation one useful project at a time.",
      "skill.craft.eyebrow": "THE EXTRA EDGE",
      "skill.craft.h3": "UI craft <span>&amp;</span><br>responsive thinking.",
      "skill.craft.desc":
        "Because great work should look intentional on every screen.",
      "skill.craft.signature": "DETAILS MATTER",
      "skills.closing.1": "FROM IDEA",
      "skills.closing.2": "TO INTERFACE",

      "word.idea": "IDEA",
      "word.design": "DESIGN",
      "word.code": "CODE",
      "word.ship": "SHIP",
      "word.message": "MESSAGE",
      "word.reply": "REPLY",

      "projects.chapter.title": "MY<br>WORK",
      "projects.eyebrow": "// SELECTED PROJECTS",
      "projects.h2": "Built with <span>intent.</span>",
      "projects.intro":
        "Every project is a solution — crafted with clean code, sharp design, and relentless attention to the details that matter.",
      "filter.all": "ALL",
      "filter.frontend": "FRONTEND",
      "filter.fullstack": "FULLSTACK",
      "filter.ui": "UI / UX",
      "projects.screenshot": "SCREENSHOT",
      "projects.featured.name": "NAME",
      "projects.featured.desc":
        "Short description of what this project does and what problem it solves. Keep it punchy.",
      "projects.card.desc.generic": "Short description of this project.",
      "projects.card.name.generic": "Project Name",
      "btn.livedemo": "Live Demo",
      "btn.live": "Live",

      "contact.chapter.title": "GET IN<br>TOUCH",
      "contact.eyebrow": "// CONTACT",
      "contact.h2": "Let's build <span>together.</span>",
      "contact.intro":
        "Have an idea, a project or just want to say hi? Send a message and I'll get back to you as soon as possible.",
      "contact.channel": "CHANNEL",
      "contact.openforwork": "OPEN FOR WORK",
      "contact.radar.say": "SAY",
      "contact.radar.hi": "HI",
      "contact.label.email": "EMAIL",
      "contact.label.telegram": "TELEGRAM",
      "contact.label.github": "GITHUB",
      "contact.label.location": "LOCATION",
      "contact.replytime": "AVG. REPLY TIME",
      "contact.replytime.value": "&lt; 24 HRS",
      "contact.form.newmsg": "// NEW MESSAGE",
      "contact.form.secure": "SECURE",
      "contact.form.name": "YOUR NAME",
      "contact.form.email": "YOUR EMAIL",
      "contact.form.subject": "SUBJECT (OPTIONAL)",
      "contact.form.message": "YOUR MESSAGE",
      "contact.form.send": "SEND MESSAGE",

      "modal.eyebrow": "// TRANSMISSION COMPLETE",
      "modal.title": "Message <span>sent!</span>",
      "modal.thanks": "Thank you,",
      "modal.text2":
        "! Your message was delivered successfully. I'll reply to you very soon.",
      "modal.gotit": "GOT IT",

      "footer.marquee1": "AVAILABLE FOR WORK",
      "footer.marquee2": "CLEAN CODE",
      "footer.marquee3": "SHARP DESIGN",
      "footer.marquee4": "LET'S BUILD TOGETHER",
      "footer.brand.desc":
        "Frontend developer crafting fast, clean and memorable interfaces. Every pixel with intent.",
      "footer.status": "OPEN FOR FREELANCE",
      "footer.col.nav": "// NAVIGATION",
      "footer.col.socials": "// SOCIALS",
      "footer.col.talk": "// LET'S TALK",
      "footer.talk.desc": "Have a project in mind? Let's make it real.",
      "footer.copy": "©",
      "footer.rights": "ALL RIGHTS RESERVED.",
      "footer.made": "DESIGNED &amp; CODED WITH",
      "footer.top": "TOP",
    },

    ru: {
      "nav.home": "Главная",
      "nav.about": "Обо мне",
      "nav.about2": "Обо мне",
      "nav.skills": "Навыки",
      "nav.projects": "Мои проекты",
      "nav.projects2": "Проекты",
      "nav.contact": "Контакты",
      "role.webdev": "ВЕБ-РАЗРАБОТЧИК",
      "socials.follow": "ПОДПИШИСЬ",

      "hero.badge": "Готов к проектам",
      "hero.greeting": "Привет, я",
      "hero.role.prefix": "Я —",
      "hero.role.title": "ВЕБ-РАЗРАБОТЧИК",
      "hero.desc":
        "Начинающий front-end разработчик из Баку. Превращаю идеи в работающие сайты — чистый код, плавные анимации, интерфейсы, которыми приятно пользоваться. Сейчас глубже изучаю AI и дизайн, чтобы делать ещё более цельные проекты самостоятельно.",
      "hero.btn": "СМОТРЕТЬ ПРОЕКТЫ",

      "status.online": "ОНЛАЙН",
      "loc.baku": "БАКУ, АЗЕРБАЙДЖАН",

      "about.chapter.title": "ОБО<br>МНЕ",
      "about.eyebrow": "// БИОГРАФИЯ",
      "about.h2": "Дизайн, код <span>и мастерство.</span>",
      "about.intro":
        "Увлечённый веб-разработчик, создающий интерактивные, современные и visuально яркие интерфейсы, не забывая о производительности.",
      "about.bio.h3": "Привет, я <span>Фуад Ализаде</span>",
      "about.bio.p":
        "Создаю цифровые продукты с чистой структурой, адаптивным дизайном и плавными взаимодействиями. От фронтенд-систем до динамичного бэкенда — превращаю сложные задачи в цельный опыт.",
      "about.btn.cv": "Скачать CV",
      "about.btn.projects": "Смотреть проекты",
      "about.footer.role": "FULLSTACK-ТВОРЕЦ",
      "about.card1.title": "ВСЕГО ПРОЕКТОВ",
      "about.card1.desc":
        "Инновационные веб-решения с высоким вниманием к производительности.",
      "about.card2.title": "СЕРТИФИКАТЫ",
      "about.card2.desc":
        "Подтверждённые технические навыки и пройденные обучения.",
      "about.card3.title": "ЛЕТ ОПЫТА",
      "about.card3.desc": "Непрерывное обучение через реальные проекты.",
      "about.card4.title": "UI / UX МАСТЕРСТВО",
      "about.card4.desc":
        "Точность до пикселя, тёмная эстетика и плавный пользовательский путь.",
      "about.closing.1": "ВНИМАНИЕ К ДЕТАЛЯМ",
      "about.closing.2": "БЕЗУПРЕЧНОЕ ИСПОЛНЕНИЕ",

      "badge.completed": "ГОТОВО",
      "badge.verified": "ПОДТВЕРЖДЕНО",
      "badge.active": "АКТИВНО",
      "badge.corefocus": "ГЛАВНЫЙ ФОКУС",
      "badge.core": "ОСНОВА",
      "badge.growing": "РАСТУ",
      "badge.obsession": "ОДЕРЖИМОСТЬ",
      "badge.featured": "ГЛАВНЫЙ",

      "skills.chapter.title": "МОИ<br>НАВЫКИ",
      "skills.eyebrow": "// МОЙ АРСЕНАЛ",
      "skills.h2": "Код с <span>пульсом.</span>",
      "skills.intro":
        "Совмещаю чистый фронтенд-код, острое визуальное мышление и AI-инструменты, чтобы превратить идею в опыт, который запоминается.",
      "skills.reactor.status": "РЕЖИМ СБОРКИ",
      "skills.core.creative": "ТВОРЧЕСКОЕ",
      "skills.core.core": "ЯДРО",
      "skills.core.small": "постоянно развивается",
      "skills.reactor.copy": "Каждый пиксель на счету.",
      "skills.reactor.tags": "ДИЗАЙН <i>×</i> КОД <i>×</i> ЛЮБОПЫТСТВО",

      "skill.frontend.eyebrow": "ОСНОВА FRONTEND",
      "skill.frontend.h3": "Frontend, который<br><span>оживает.</span>",
      "skill.frontend.desc":
        "Семантичные, адаптивные интерфейсы с вниманием к деталям.",
      "skill.js.eyebrow": "ВЗАИМОДЕЙСТВИЕ",
      "skill.js.desc":
        "Добавляю движение, логику и те мелочи, из-за которых сайт цепляет.",
      "skill.react.eyebrow": "СОВРЕМЕННЫЙ СТЕК",
      "skill.react.desc":
        "Компонентный подход к веб-опыту, готовому масштабироваться.",
      "skill.ai.eyebrow": "УМНЫЙ ПРОЦЕСС",
      "skill.ai.h3": "AI-инструменты,<br><span>настоящий вкус.</span>",
      "skill.ai.desc":
        "Исследования, идеи и быстрые прототипы — под контролем человеческого суждения.",
      "skill.python.eyebrow": "ОСНОВЫ",
      "skill.python.desc":
        "Изучаю скриптинг и автоматизацию через полезные проекты.",
      "skill.craft.eyebrow": "ДОПОЛНИТЕЛЬНЫЙ ШТРИХ",
      "skill.craft.h3": "UI-мастерство <span>и</span><br>адаптивное мышление.",
      "skill.craft.desc":
        "Потому что хорошая работа должна выглядеть продуманной на любом экране.",
      "skill.craft.signature": "ДЕТАЛИ ВАЖНЫ",
      "skills.closing.1": "ОТ ИДЕИ",
      "skills.closing.2": "К ИНТЕРФЕЙСУ",

      "word.idea": "ИДЕЯ",
      "word.design": "ДИЗАЙН",
      "word.code": "КОД",
      "word.ship": "РЕЛИЗ",
      "word.message": "СООБЩЕНИЕ",
      "word.reply": "ОТВЕТ",

      "projects.chapter.title": "МОИ<br>РАБОТЫ",
      "projects.eyebrow": "// ИЗБРАННЫЕ ПРОЕКТЫ",
      "projects.h2": "Сделано с <span>умом.</span>",
      "projects.intro":
        "Каждый проект — это решение, созданное с чистым кодом, острым дизайном и вниманием к важным деталям.",
      "filter.all": "ВСЕ",
      "filter.frontend": "FRONTEND",
      "filter.fullstack": "FULLSTACK",
      "filter.ui": "UI / UX",
      "projects.screenshot": "СКРИНШОТ",
      "projects.featured.name": "НАЗВАНИЕ",
      "projects.featured.desc":
        "Краткое описание того, что делает проект и какую проблему решает. Коротко и по делу.",
      "projects.card.desc.generic": "Краткое описание этого проекта.",
      "projects.card.name.generic": "Название проекта",
      "btn.livedemo": "Демо",
      "btn.live": "Демо",

      "contact.chapter.title": "СВЯЗЬ<br>СО МНОЙ",
      "contact.eyebrow": "// КОНТАКТЫ",
      "contact.h2": "Создадим <span>вместе.</span>",
      "contact.intro":
        "Есть идея, проект или просто хочешь поздороваться? Напиши — отвечу как можно скорее.",
      "contact.channel": "КАНАЛ",
      "contact.openforwork": "ОТКРЫТ ДЛЯ РАБОТЫ",
      "contact.radar.say": "СКАЖИ",
      "contact.radar.hi": "ПРИВЕТ",
      "contact.label.email": "ПОЧТА",
      "contact.label.telegram": "ТЕЛЕГРАМ",
      "contact.label.github": "ГИТХАБ",
      "contact.label.location": "ЛОКАЦИЯ",
      "contact.replytime": "СРЕДНЕЕ ВРЕМЯ ОТВЕТА",
      "contact.replytime.value": "&lt; 24 Ч",
      "contact.form.newmsg": "// НОВОЕ СООБЩЕНИЕ",
      "contact.form.secure": "ЗАЩИЩЕНО",
      "contact.form.name": "ВАШЕ ИМЯ",
      "contact.form.email": "ВАШ EMAIL",
      "contact.form.subject": "ТЕМА (НЕОБЯЗАТЕЛЬНО)",
      "contact.form.message": "ВАШЕ СООБЩЕНИЕ",
      "contact.form.send": "ОТПРАВИТЬ",

      "modal.eyebrow": "// ПЕРЕДАЧА ЗАВЕРШЕНА",
      "modal.title": "Сообщение <span>отправлено!</span>",
      "modal.thanks": "Спасибо,",
      "modal.text2": "! Ваше сообщение доставлено. Отвечу совсем скоро.",
      "modal.gotit": "ПОНЯТНО",

      "footer.marquee1": "ОТКРЫТ ДЛЯ РАБОТЫ",
      "footer.marquee2": "ЧИСТЫЙ КОД",
      "footer.marquee3": "ОСТРЫЙ ДИЗАЙН",
      "footer.marquee4": "ДАВАЙТЕ СОЗДАДИМ ВМЕСТЕ",
      "footer.brand.desc":
        "Front-end разработчик, создающий быстрые, чистые и запоминающиеся интерфейсы. Каждый пиксель осознанно.",
      "footer.status": "ОТКРЫТ ДЛЯ ФРИЛАНСА",
      "footer.col.nav": "// НАВИГАЦИЯ",
      "footer.col.socials": "// СОЦСЕТИ",
      "footer.col.talk": "// ПОГОВОРИМ",
      "footer.talk.desc": "Есть идея проекта? Давай реализуем.",
      "footer.copy": "©",
      "footer.rights": "ВСЕ ПРАВА ЗАЩИЩЕНЫ.",
      "footer.made": "СДЕЛАНО С",
      "footer.top": "ВВЕРХ",
    },

    az: {
      "nav.home": "Ana səhifə",
      "nav.about": "Haqqımda",
      "nav.about2": "Haqqımda",
      "nav.skills": "Bacarıqlar",
      "nav.projects": "Layihələrim",
      "nav.projects2": "Layihələr",
      "nav.contact": "Əlaqə",
      "role.webdev": "VEB PROQRAMÇI",
      "socials.follow": "MƏNİ İZLƏ",

      "hero.badge": "Layihələr üçün açığam",
      "hero.greeting": "Salam, mən",
      "hero.role.prefix": "MƏN BİR",
      "hero.role.title": "VEB PROQRAMÇIYAM",
      "hero.desc":
        "Bakıda yaşayan, gələcəyin front-end developeri. Fikirləri işləyən vebsaytlara çevirirəm — təmiz kod, axıcı animasiyalar, insanların istifadə etməkdən zövq aldığı interfeyslər. Hazırda süni intellekt və dizaynı daha dərindən öyrənərək daha bütöv layihələr qururam.",
      "hero.btn": "LAYİHƏLƏRİMƏ BAX",

      "status.online": "ONLAYN",
      "loc.baku": "BAKI, AZƏRBAYCAN",

      "about.chapter.title": "HAQQIM<br>DA",
      "about.eyebrow": "// BİOQRAFİYA",
      "about.h2": "Dizayn, kod <span>və ustalıq.</span>",
      "about.intro":
        "Performansı unutmadan interaktiv, müasir və vizual cəhətdən diqqətçəkən interfeyslər yaratmağa həvəsli veb developer.",
      "about.bio.h3": "Salam, mən <span>Fuad Əlizadəyəm</span>",
      "about.bio.p":
        "Təmiz struktur, adaptiv dizayn və axıcı qarşılıqlı əlaqəyə malik rəqəmsal məhsullar qururam. Frontend dizayn sistemlərindən dinamik backend funksiyalarına qədər mürəkkəb məsələləri rahat təcrübəyə çevirirəm.",
      "about.btn.cv": "CV Yüklə",
      "about.btn.projects": "Layihələrə bax",
      "about.footer.role": "FULLSTACK YARADICI",
      "about.card1.title": "ÜMUMİ LAYİHƏ",
      "about.card1.desc":
        "Performansa yüksək diqqətlə hazırlanmış innovativ veb həllər.",
      "about.card2.title": "SERTİFİKATLAR",
      "about.card2.desc":
        "Təsdiqlənmiş texniki bacarıqlar və xüsusi təlim mərhələləri.",
      "about.card3.title": "İL TƏCRÜBƏ",
      "about.card3.desc": "Real layihələr quraraq davam edən öyrənmə yolu.",
      "about.card4.title": "UI / UX USTALIĞI",
      "about.card4.desc":
        "Piksel dəqiqliyi, tünd estetika və axıcı istifadəçi təcrübəsi.",
      "about.closing.1": "DETALLARA DİQQƏT",
      "about.closing.2": "MÜKƏMMƏL İCRA",

      "badge.completed": "TAMAMLANIB",
      "badge.verified": "TƏSDİQLƏNİB",
      "badge.active": "AKTİV",
      "badge.corefocus": "ƏSAS FOKUS",
      "badge.core": "ƏSAS",
      "badge.growing": "İNKİŞAFDA",
      "badge.obsession": "EHTIRAS",
      "badge.featured": "SEÇİLMİŞ",

      "skills.chapter.title": "BACARIQ<br>LARIM",
      "skills.eyebrow": "// SİLAHXANAM",
      "skills.h2": "Nəbzi olan <span>kod.</span>",
      "skills.intro":
        "Fikri insanların yadda saxlayacağı təcrübəyə çevirmək üçün təmiz frontend kodunu, güclü vizual düşüncəni və AI iş axınlarını birləşdirirəm.",
      "skills.reactor.status": "QURMA REJİMİ",
      "skills.core.creative": "YARADICI",
      "skills.core.core": "NÜVƏ",
      "skills.core.small": "daim inkişafda",
      "skills.reactor.copy": "Hər piksel əhəmiyyətlidir.",
      "skills.reactor.tags": "DİZAYN <i>×</i> KOD <i>×</i> MARAQ",

      "skill.frontend.eyebrow": "FRONTEND ƏSASI",
      "skill.frontend.h3": "Canlı hiss edən<br><span>frontend.</span>",
      "skill.frontend.desc":
        "Detallara diqqətlə hazırlanmış semantik, adaptiv interfeyslər.",
      "skill.js.eyebrow": "QARŞILIQLI ƏLAQƏ",
      "skill.js.desc":
        "Saytı canlandıran hərəkət, məntiq və kiçik detallar əlavə edirəm.",
      "skill.react.eyebrow": "MÜASİR STEK",
      "skill.react.desc":
        "Fikirlə birlikdə böyüməyə hazır komponent əsaslı veb təcrübələr.",
      "skill.ai.eyebrow": "AĞILLI İŞ AXINI",
      "skill.ai.h3": "AI alətləri,<br><span>real zövq.</span>",
      "skill.ai.desc":
        "Tədqiqat, ideyalar və daha sürətli prototiplər — insan mühakiməsi ilə idarə olunur.",
      "skill.python.eyebrow": "TƏMƏLLƏR",
      "skill.python.desc":
        "Faydalı layihələr vasitəsilə skript yazma və avtomatlaşdırmanı öyrənirəm.",
      "skill.craft.eyebrow": "ƏLAVƏ ÜSTÜNLÜK",
      "skill.craft.h3": "UI ustalığı <span>və</span><br>adaptiv düşüncə.",
      "skill.craft.desc": "Çünki yaxşı iş hər ekranda düşünülmüş görünməlidir.",
      "skill.craft.signature": "DETALLAR VACİBDİR",
      "skills.closing.1": "FİKİRDƏN",
      "skills.closing.2": "İNTERFEYSƏ",

      "word.idea": "FİKİR",
      "word.design": "DİZAYN",
      "word.code": "KOD",
      "word.ship": "BURAXILIŞ",
      "word.message": "MESAJ",
      "word.reply": "CAVAB",

      "projects.chapter.title": "İŞLƏ<br>RİM",
      "projects.eyebrow": "// SEÇİLMİŞ LAYİHƏLƏR",
      "projects.h2": "Məqsədlə <span>qurulub.</span>",
      "projects.intro":
        "Hər layihə — təmiz kod, kəskin dizayn və vacib detallara diqqətlə hazırlanmış bir həlldir.",
      "filter.all": "HAMISI",
      "filter.frontend": "FRONTEND",
      "filter.fullstack": "FULLSTACK",
      "filter.ui": "UI / UX",
      "projects.screenshot": "SKRİNŞOT",
      "projects.featured.name": "AD",
      "projects.featured.desc":
        "Bu layihənin nə etdiyi və hansı problemi həll etdiyi barədə qısa təsvir.",
      "projects.card.desc.generic": "Bu layihə haqqında qısa təsvir.",
      "projects.card.name.generic": "Layihə adı",
      "btn.livedemo": "Canlı Demo",
      "btn.live": "Canlı",

      "contact.chapter.title": "ƏLAQƏYƏ<br>KEÇ",
      "contact.eyebrow": "// ƏLAQƏ",
      "contact.h2": "Birlikdə <span>quraq.</span>",
      "contact.intro":
        "Fikriniz, layihəniz var, yoxsa sadəcə salam demək istəyirsiniz? Mesaj göndərin, tezliklə cavab verəcəyəm.",
      "contact.channel": "KANAL",
      "contact.openforwork": "İŞ ÜÇÜN AÇIQ",
      "contact.radar.say": "DE",
      "contact.radar.hi": "SALAM",
      "contact.label.email": "EMAIL",
      "contact.label.telegram": "TELEQRAM",
      "contact.label.github": "GITHUB",
      "contact.label.location": "MƏKAN",
      "contact.replytime": "ORTA CAVAB VAXTI",
      "contact.replytime.value": "&lt; 24 SAAT",
      "contact.form.newmsg": "// YENİ MESAJ",
      "contact.form.secure": "TƏHLÜKƏSİZ",
      "contact.form.name": "ADINIZ",
      "contact.form.email": "EMAİLİNİZ",
      "contact.form.subject": "MÖVZU (İSTƏYƏ BAĞLI)",
      "contact.form.message": "MESAJINIZ",
      "contact.form.send": "GÖNDƏR",

      "modal.eyebrow": "// ÖTÜRÜLMƏ TAMAMLANDI",
      "modal.title": "Mesaj <span>göndərildi!</span>",
      "modal.thanks": "Təşəkkürlər,",
      "modal.text2": "! Mesajınız uğurla çatdırıldı. Tezliklə cavab verəcəyəm.",
      "modal.gotit": "BAŞA DÜŞDÜM",

      "footer.marquee1": "İŞ ÜÇÜN AÇIQ",
      "footer.marquee2": "TƏMİZ KOD",
      "footer.marquee3": "KƏSKİN DİZAYN",
      "footer.marquee4": "BİRLİKDƏ QURAQ",
      "footer.brand.desc":
        "Sürətli, təmiz və yadda qalan interfeyslər quran front-end developer. Hər piksel məqsədlə.",
      "footer.status": "FRİLANS ÜÇÜN AÇIQ",
      "footer.col.nav": "// NAVİQASİYA",
      "footer.col.socials": "// SOSİAL ŞƏBƏKƏLƏR",
      "footer.col.talk": "// DANIŞAQ",
      "footer.talk.desc": "Ağlınızda bir layihə var? Gəlin onu reallaşdıraq.",
      "footer.copy": "©",
      "footer.rights": "BÜTÜN HÜQUQLAR QORUNUR.",
      "footer.made": "SEVGİ İLƏ HAZIRLANIB",
      "footer.top": "YUXARI",
    },
  };

  function applyLanguage(lang) {
    const dict = T[lang] || T[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.placeholder = dict[key];
    });

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll(".lang-switch").forEach((group) => {
      const btns = [...group.querySelectorAll(".lang-switch__btn")];
      btns.forEach((b) =>
        b.classList.toggle("is-active", b.dataset.lang === lang),
      );
      const active = btns.find((b) => b.dataset.lang === lang);
      const glide = group.querySelector(".lang-switch__glide");
      if (active && glide) {
        // getBoundingClientRect avoids offsetLeft/offsetParent glitches caused
        // by transformed ancestors (e.g. the header's translateX centering)
        const groupRect = group.getBoundingClientRect();
        const activeRect = active.getBoundingClientRect();
        glide.style.width = activeRect.width + "px";
        glide.style.transform = `translateX(${activeRect.left - groupRect.left}px)`;
      }
    });
  }

  function initSwitchers() {
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initSwitchers();
    const saved = localStorage.getItem(STORAGE_KEY);
    applyLanguage(saved && T[saved] ? saved : DEFAULT_LANG);
    // re-align the glide pill after fonts/layout settle
    setTimeout(
      () => applyLanguage(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG),
      250,
    );
  });

  window.addEventListener("resize", () => {
    applyLanguage(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
  });
})();
