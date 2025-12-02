document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');

    const translations = {
        es: {
            nav_home: "Inicio",
            nav_membership: "Membresía",
            // ... (aquí irían todas las traducciones al español)
        },
        en: {
            nav_home: "Home",
            nav_membership: "Membership",
            // ... (aquí irían todas las traducciones al inglés)
        },
        ru: {
            nav_home: "Главная",
            nav_membership: "Членство",
            // ... (aquí irían todas las traducciones al ruso)
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    function switchLanguage(lang) {
        const langData = translations[lang];
        if (!langData) return;

        document.documentElement.lang = lang;

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = langData[key];
            if (value) {
                element.innerHTML = value;
            }
        });

        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        localStorage.setItem('selectedLanguage', lang);
    }

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    switchLanguage(savedLang);
});