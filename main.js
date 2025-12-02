document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');

    const translations = {
        es: {
            nav_home: "Inicio",
            nav_membership: "Membresía",
            // Traducciones para index.html
            hero_tagline: "Donde el Mundo no Puede Entrar",
            story_title: "Una Invitación a lo Eterno",
            story_p1: "En un mundo que grita por atención, hemos creado un lugar susurro. Isla Porcada no es un escape, es un <span class='highlight'>retorno a lo esencial</span>. Aquí, el tiempo se detiene no para aburrir, sino para permitirte escucharte.",
            story_p2: "Adquirir una villa aquí no es comprar una propiedad. Es <span class='highlight'>asegurar un legado</span>, un refugio para su linaje y un lugar donde el alma puede encontrar su verdadero norte. Es la única inversión que aprecia en valor mientras renueva su espíritu.",
            intro_title: "Un Santuario para el Alma",
            intro_p: "Más que un destino, Isla Porcada es una experiencia de aislamiento total y bienestar ininterrumpido. Un paraíso privado donde la naturaleza prístina se encuentra con el servicio más exquisito, diseñado para aquellos que valoran la privacidad por encima de todo.",
            pillar1_title: "Exclusividad Absoluta",
            pillar1_p: "Acceso restringido y seguridad de máximo nivel garantizan su tranquilidad. Un entorno donde la discreción es nuestra máxima y su privacidad, un santuario inviolable.",
            pillar2_title: "Lujo Auténtico",
            pillar2_p: "Inmersos en una reserva de manglares, con manantiales y ganadería propias. Ofrecemos un lujo que es genuino, sostenible y profundamente conectado con nuestro entorno.",
            pillar3_title: "Bienestar y Trascendencia",
            pillar3_p: "En \"El Origen\", nuestro santuario en la isla satélite, le ofrecemos un viaje de transformación a través de la medicina alternativa, el bio-hacking y prácticas milenarias para renovar cuerpo y mente.",
            refugio_title: "El Refugio Definitivo",
            refugio_p: "Una arquitectura que se integra con el paisaje para ofrecer un confort sin parangón.",
            feature1: "50 Cabañas exclusivas sobre el mar, cada una con piscina privada de inmersión.",
            feature2: "50 Villas de lujo a pie de playa.",
            feature3: "60 Suites en nuestro hotel boutique central.",
            feature4: "2 OASIS: mansiones privadas con chef y mayordomo.",
            feature5: "<strong>El Origen:</strong> un santuario de bienestar en una isla privada con programas de longevidad, yoga y medicina alternativa.",
            feature6: "La \"Zona Nexo\": un exclusivo restaurante de parrillas y horno de leña a pie de playa, con chill-out y una tienda gourmet.",
            pricing_title: "La Exclusividad, Definida",
            pricing_p: "Tarifas en régimen de Todo Incluido Premium. El acceso a la isla es mediante invitación.",
            price1_name: "Suite Boutique",
            price1_value: "$5,000",
            price1_note: "/ noche",
            price1_desc: "Acceso al mundo de Isla Porcada con servicio de mayordomo personal.",
            price2_name: "Cabaña sobre el Mar",
            price2_value: "$9,500",
            price2_note: "/ noche",
            price2_desc: "Aislamiento romántico con vistas infinitas y su propia piscina privada de inmersión en su santuario sobre el agua.",
            price3_name: "Villa a Pie de Playa",
            price3_value: "$15,000",
            price3_note: "/ noche",
            price3_desc: "Privacidad de una residencia completa con piscina y servicio dedicado para su grupo.",
            price4_name: "Villa OASIS",
            price4_value: "$50,000",
            price4_note: "/ noche",
            price4_desc: "Soberanía temporal. El pináculo de la privacidad con puerto y mayordomía propia.",
            legacy_title: "El Programa de Legado",
            legacy_p: "Adquiera una participación permanente en el santuario más exclusivo del mundo. Ofrecemos una selección limitada de villas en propiedad.",
            legacy_feature1: "Parcela de 1,000m² en primera línea de mar.",
            legacy_feature2: "Villa de 500m² con piscina infinita.",
            legacy_feature3: "Disfrute de su villa hasta 45 días al año.",
            legacy_feature4: "Rentabilidad garantizada del 5-7% anual.",
            legacy_feature5: "Acceso prioritario y programas personalizados en \"El Origen\", el santuario de bienestar.",
            legacy_feature6: "Acceso a una tienda gourmet en la \"Zona Nexo\" para satisfacer sus necesidades diarias.",
            investment_label: "Franja de Inversión:",
            investment_p: "No está comprando una casa. Está adquiriendo la llave para un estado de ser y un legado para las generaciones futuras.",
            legacy_button: "Explorar el Programa de Legado",
            invitation_title: "El Acceso es un Privilegio",
            invitation_p: "Isla Porcada no se reserva, se <span class='highlight'>accede mediante invitación</span>. Nuestro proceso de admisión asegura que cada miembro de nuestra comunidad comparta el respeto por la privacidad y la naturaleza que define nuestro santuario.",
            // Traducciones para membresia.html
            membership_hero_title: "The Sanctuary Club",
            membership_hero_subtitle: "Un refugio exclusivo de lujo y naturaleza en el Pacífico de Panamá. Únase a un legado de privacidad, discreción y experiencias inolvidables.",
            explorer_title: "Explorer",
            explorer_profile: "Para amantes del lujo sin ataduras.",
            explorer_initiation_fee: "Cuota de Ingreso:",
            explorer_annual_dues: "Cuota Anual:",
            explorer_benefit1: "Acceso a noches garantizadas en suites de lujo.",
            explorer_benefit2: "Prioridad en reservas de restaurantes y actividades.",
            explorer_benefit3: "15% de descuento en todos los servicios del resort.",
            explorer_benefit4: "Acceso a eventos exclusivos para miembros.",
            resident_title: "Resident",
            resident_profile: "Para propietarios de villas en condominio.",
            resident_initiation_fee: "Cuota de Ingreso:",
            resident_included_in_purchase: "Incluida en la compra",
            resident_annual_dues: "Cuota Anual:",
            resident_benefit1: "Integración total con servicios hoteleros de lujo.",
            resident_benefit2: "Máxima discreción y acceso a áreas privadas.",
            resident_benefit3: "Opción de gestión de alquiler para su villa.",
            resident_benefit4: "Voto en el Consejo del Club.",
            legacy_card_title: "Legacy",
            legacy_card_profile: "El nivel supremo para propietarios de élite.",
            legacy_card_initiation_fee: "Cuota de Ingreso:",
            legacy_card_annual_dues: "Cuota Anual:",
            legacy_card_benefit1: "Acceso preferente a cabañas sobre el mar.",
            legacy_card_benefit2: "Disponibilidad garantizada en cualquier momento.",
            legacy_card_benefit3: "Experiencias únicas e inolvidables.",
            legacy_card_benefit4: "Membresía vitalicia y transferible (legado).",
            action_title: "Acción Estilo Campo de Golf",
            action_description: "Ofrecemos un número limitado de \"Acciones Fundadoras\" del club. Obtenga una membresía \"Legacy\" de por vida sin estar vinculado a una propiedad y conviértase en un embajador exclusivo de nuestro legado.",
            action_share_price: "Precio por Acción Fundadora:",
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