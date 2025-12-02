document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');

    const translations = {
        es: {
            nav_home: "Inicio",
            nav_membership: "Membresía",
            index_hero_tagline: "Donde el Mundo no Puede Entrar",
            index_story_title: "Una Invitación a lo Eterno",
            index_story_p1: "En un mundo que grita por atención, hemos creado un lugar susurro. Isla Porcada no es un escape, es un <span class='highlight'>retorno a lo esencial</span>. Aquí, el tiempo se detiene no para aburrir, sino para permitirte escucharte.",
            index_story_p2: "Adquirir una villa aquí no es comprar una propiedad. Es <span class='highlight'>asegurar un legado</span>, un refugio para su linaje y un lugar donde el alma puede encontrar su verdadero norte. Es la única inversión que aprecia en valor mientras renueva su espíritu.",
            index_intro_title: "Un Santuario para el Alma",
            index_intro_p: "Más que un destino, Isla Porcada es una experiencia de aislamiento total y bienestar ininterrumpido. Un paraíso privado donde la naturaleza prístina se encuentra con el servicio más exquisito, diseñado para aquellos que valoran la privacidad por encima de todo.",
            index_pillar1_title: "Exclusividad Absoluta",
            index_pillar1_p: "Acceso restringido y seguridad de máximo nivel garantizan su tranquilidad. Un entorno donde la discreción es nuestra máxima y su privacidad, un santuario inviolable.",
            index_pillar2_title: "Lujo Auténtico",
            index_pillar2_p: "Inmersos en una reserva de manglares, con manantiales y ganadería propias. Ofrecemos un lujo que es genuino, sostenible y profundamente conectado con nuestro entorno.",
            index_pillar3_title: "Bienestar y Trascendencia",
            index_pillar3_p: "En \"El Origen\", nuestro santuario en la isla satélite, le ofrecemos un viaje de transformación a través de la medicina alternativa, el bio-hacking y prácticas milenarias para renovar cuerpo y mente.",
            index_refugio_title: "El Refugio Definitivo",
            index_refugio_p: "Una arquitectura que se integra con el paisaje para ofrecer un confort sin parangón.",
            index_feature1: "50 Cabañas exclusivas sobre el mar, cada una con piscina privada de inmersión.",
            index_feature2: "50 Villas de lujo a pie de playa.",
            index_feature3: "60 Suites en nuestro hotel boutique central.",
            index_feature4: "2 OASIS: mansiones privadas con chef y mayordomo.",
            index_feature5: "<strong>El Origen:</strong> un santuario de bienestar en una isla privada con programas de longevidad, yoga y medicina alternativa.",
            index_feature6: "La \"Zona Nexo\": un exclusivo restaurante de parrillas y horno de leña a pie de playa, con chill-out y una tienda gourmet.",
            index_pricing_title: "La Exclusividad, Definida",
            index_pricing_p: "Tarifas en régimen de Todo Incluido Premium. El acceso a la isla es mediante invitación.",
            index_price1_name: "Suite Boutique",
            index_price1_value: "$5,000",
            index_price1_note: "/ noche",
            index_price1_desc: "Acceso al mundo de Isla Porcada con servicio de mayordomo personal.",
            index_price2_name: "Cabaña sobre el Mar",
            index_price2_value: "$9,500",
            index_price2_note: "/ noche",
            index_price2_desc: "Aislamiento romántico con vistas infinitas y su propia piscina privada de inmersión en su santuario sobre el agua.",
            index_price3_name: "Villa a Pie de Playa",
            index_price3_value: "$15,000",
            index_price3_note: "/ noche",
            index_price3_desc: "Privacidad de una residencia completa con piscina y servicio dedicado para su grupo.",
            index_price4_name: "Villa OASIS",
            index_price4_value: "$50,000",
            index_price4_note: "/ noche",
            index_price4_desc: "Soberanía temporal. El pináculo de la privacidad con puerto y mayordomía propia.",
            index_legacy_title: "El Programa de Legado",
            index_legacy_p: "Adquiera una participación permanente en el santuario más exclusivo del mundo. Ofrecemos una selección limitada de villas en propiedad.",
            index_legacy_feature1: "Parcela de 1,000m² en primera línea de mar.",
            index_legacy_feature2: "Villa de 500m² con piscina infinita.",
            index_legacy_feature3: "Disfrute de su villa hasta 45 días al año.",
            index_legacy_feature4: "Rentabilidad garantizada del 5-7% anual.",
            index_legacy_feature5: "Acceso prioritario y programas personalizados en \"El Origen\", el santuario de bienestar.",
            index_legacy_feature6: "Acceso a una tienda gourmet en la \"Zona Nexo\" para satisfacer sus necesidades diarias.",
            index_investment_label: "Franja de Inversión:",
            index_investment_p: "No está comprando una casa. Está adquiriendo la llave para un estado de ser y un legado para las generaciones futuras.",
            index_legacy_button: "Explorar el Programa de Legado",
            index_invitation_title: "El Acceso es un Privilegio",
            index_invitation_p: "Isla Porcada no se reserva, se <span class='highlight'>accede mediante invitación</span>. Nuestro proceso de admisión asegura que cada miembro de nuestra comunidad comparta el respeto por la privacidad y la naturaleza que define nuestro santuario.",
            footer_copyright: "&copy; 2025 Takyma Investment Pioneer. Todos los derechos reservados.",
        },
        en: {
            nav_home: "Home",
            nav_membership: "Membership",
            index_hero_tagline: "Where the World Cannot Enter",
            index_story_title: "An Invitation to the Eternal",
            index_story_p1: "In a world that screams for attention, we have created a place of whisper. Isla Porcada is not an escape, it is a <span class='highlight'>return to the essential</span>. Here, time stops not to bore, but to allow you to listen to yourself.",
            index_story_p2: "Acquiring a villa here is not buying a property. It is <span class='highlight'>securing a legacy</span>, a refuge for your lineage and a place where the soul can find its true north. It is the only investment that appreciates in value while renewing your spirit.",
            index_intro_title: "A Sanctuary for the Soul",
            index_intro_p: "More than a destination, Isla Porcada is an experience of total seclusion and uninterrupted wellness. A private paradise where pristine nature meets the most exquisite service, designed for those who value privacy above all else.",
            index_pillar1_title: "Absolute Exclusivity",
            index_pillar1_p: "Restricted access and top-tier security ensure your peace of mind. An environment where discretion is our maxim and your privacy is an inviolable sanctuary.",
            index_pillar2_title: "Authentic Luxury",
            index_pillar2_p: "Immersed in a mangrove reserve, with our own springs and livestock. We offer a luxury that is genuine, sustainable, and deeply connected to our environment.",
            index_pillar3_title: "Wellness and Transcendence",
            index_pillar3_p: "At \"The Origin,\" our sanctuary on the satellite island, we offer a journey of transformation through alternative medicine, bio-hacking, and ancient practices to renew body and mind.",
            index_refugio_title: "The Definitive Refuge",
            index_refugio_p: "Architecture that integrates with the landscape to offer unparalleled comfort.",
            index_feature1: "50 exclusive overwater bungalows, each with a private plunge pool.",
            index_feature2: "50 luxury beachfront villas.",
            index_feature3: "60 suites in our central boutique hotel.",
            index_feature4: "2 OASIS: private mansions with a chef and butler.",
            index_feature5: "<strong>The Origin:</strong> a wellness sanctuary on a private island with longevity programs, yoga, and alternative medicine.",
            index_feature6: "The \"Nexo Zone\": an exclusive beachfront grill and wood-fired oven restaurant with a chill-out area and a gourmet market.",
            index_pricing_title: "Exclusivity, Defined",
            index_pricing_p: "All-Inclusive Premium rates. Access to the island is by invitation only.",
            index_price1_name: "Boutique Suite",
            index_price1_value: "$5,000",
            index_price1_note: "/ night",
            index_price1_desc: "Access to the world of Isla Porcada with a personal butler service.",
            index_price2_name: "Overwater Bungalow",
            index_price2_value: "$9,500",
            index_price2_note: "/ night",
            index_price2_desc: "Romantic seclusion with infinite views and your own private plunge pool in your sanctuary over water.",
            index_price3_name: "Beachfront Villa",
            index_price3_value: "$15,000",
            index_price3_note: "/ night",
            index_price3_desc: "The privacy of a complete residence with a pool and dedicated service for your group.",
            index_price4_name: "OASIS Villa",
            index_price4_value: "$50,000",
            index_price4_note: "/ night",
            index_price4_desc: "Temporary sovereignty. The pinnacle of privacy with a private marina and butler service.",
            index_legacy_title: "The Legacy Program",
            index_legacy_p: "Acquire a permanent stake in the world's most exclusive sanctuary. We offer a limited selection of villas for ownership.",
            index_legacy_feature1: "1,000m² beachfront plot.",
            index_legacy_feature2: "500m² villa with an infinity pool.",
            index_legacy_feature3: "Enjoy your villa for up to 45 days per year.",
            index_legacy_feature4: "Guaranteed annual return of 5-7%.",
            index_legacy_feature5: "Priority access and personalized programs at \"The Origin,\" the wellness sanctuary.",
            index_legacy_feature6: "Access to a gourmet market in the \"Nexo Zone\" for your daily needs.",
            index_investment_label: "Investment Range:",
            index_investment_p: "You are not buying a house. You are acquiring the key to a state of being and a legacy for future generations.",
            index_legacy_button: "Explore the Legacy Program",
            index_invitation_title: "Access is a Privilege",
            index_invitation_p: "Isla Porcada is not booked; it is <span class='highlight'>accessed by invitation</span>. Our admissions process ensures that every member of our community shares the respect for privacy and nature that defines our sanctuary.",
            footer_copyright: "&copy; 2025 Takyma Investment Pioneer. All rights reserved.",
        },
        ru: {
            nav_home: "Главная",
            nav_membership: "Членство",
            index_hero_tagline: "Место, куда мир не может войти",
            index_story_title: "Приглашение в Вечность",
            index_story_p1: "В мире, который кричит о внимании, мы создали место шепота. Исла Поркада - это не побег, это <span class='highlight'>возвращение к существенному</span>. Здесь время останавливается не от скуки, а чтобы позволить вам прислушаться к себе.",
            index_story_p2: "Приобретение виллы здесь - это не покупка недвижимости. Это <span class='highlight'>обеспечение наследия</span>, убежище для вашей родословной и место, где душа может найти свой истинный север. Это единственная инвестиция, которая растет в цене, обновляя ваш дух.",
            index_intro_title: "Святилище для Души",
            index_intro_p: "Больше, чем пункт назначения, Исла Поркада - это опыт полного уединения и непрерывного благополучия. Частный рай, где первозданная природа встречается с самым изысканным сервисом, предназначенный для тех, кто ценит конфиденциальность превыше всего.",
            index_pillar1_title: "Абсолютная Эксклюзивность",
            index_pillar1_p: "Ограниченный доступ и безопасность высшего уровня обеспечивают ваше спокойствие. Среда, где дискретность - наша максима, а ваша конфиденциальность - неприкосновенное святилище.",
            index_pillar2_title: "Аутентичная Роскошь",
            index_pillar2_p: "Погруженные в заповедник мангровых зарослей, с нашими собственными источниками и скотом. Мы предлагаем роскошь, которая подлинна, устойчива и глубоко связана с нашей окружающей средой.",
            index_pillar3_title: "Благополучие и Трансцендентность",
            index_pillar3_p: "В \"Происхождении\", нашем святилище на спутниковом острове, мы предлагаем путешествие трансформации через альтернативную медицину, био-хакинг и древние практики для обновления тела и разума.",
            index_refugio_title: "Окончательное Убежище",
            index_refugio_p: "Архитектура, которая интегрируется с ландшафтом, чтобы предложить несравненный комфорт.",
            index_feature1: "50 эксклюзивных бунгало над водой, каждое с частным погружным бассейном.",
            index_feature2: "50 роскошных вилл на первой линии пляжа.",
            index_feature3: "60 номеров в нашем центральном бутик-отеле.",
            index_feature4: "2 OASIS: особняки с шеф-поваром и дворецким.",
            index_feature5: "<strong>Происхождение:</strong> святилище благополучия на частном острове с программами долголетия, йоги и альтернативной медицины.",
            index_feature6: "\"Зона Нексо\": эксклюзивный ресторан гриль и дровяной печи на пляже с зоной отдыха и гурманским рынком.",
            index_pricing_title: "Эксклюзивность, Определенная",
            index_pricing_p: "Тарифы \"Все включено Премиум\". Доступ на остров только по приглашению.",
            index_price1_name: "Бутик-номер",
            index_price1_value: "$5,000",
            index_price1_note: "/ ночь",
            index_price1_desc: "Доступ к миру Исла Поркада с личным сервисом дворецкого.",
            index_price2_name: "Бунгало над Водой",
            index_price2_value: "$9,500",
            index_price2_note: "/ ночь",
            index_price2_desc: "Романтическое уединение с бесконечными видами и вашим собственным частным бассейном для погружения в вашем святилище над водой.",
            index_price3_name: "Вилла на Пляже",
            index_price3_value: "$15,000",
            index_price3_note: "/ ночь",
            index_price3_desc: "Конфиденциальность полного резиденции с бассейном и посвященным сервисом для вашей группы.",
            index_price4_name: "Вилла OASIS",
            index_price4_value: "$50,000",
            index_price4_note: "/ ночь",
            index_price4_desc: "Временный суверенитет. Вершина конфиденциальности с частной мариной и сервисом дворецкого.",
            index_legacy_title: "Программа Наследия",
            index_legacy_p: "Приобретите постоянную долю в самом эксклюзивном святилище мира. Мы предлагаем ограниченный выбор вилл для владения.",
            index_legacy_feature1: "Участок 1,000м² на первой линии моря.",
            index_legacy_feature2: "Вилла 500м² с бесконечным бассейном.",
            index_legacy_feature3: "Наслаждайтесь вашей виллой до 45 дней в году.",
            index_legacy_feature4: "Гарантированная годовая доходность 5-7%.",
            index_legacy_feature5: "Приоритетный доступ и персонализированные программы в \"Происхождении\", святилище благополучия.",
            index_legacy_feature6: "Доступ к гурманскому рынку в \"Зоне Нексо\" для удовлетворения ваших ежедневных потребностей.",
            index_investment_label: "Диапазон Инвестиций:",
            index_investment_p: "Вы не покупаете дом. Вы приобретаете ключ к состоянию бытия и наследие для будущих поколений.",
            index_legacy_button: "Исследовать Программу Наследия",
            index_invitation_title: "Доступ - это Привилегия",
            index_invitation_p: "Исла Поркада не бронируется; она <span class='highlight'>доступна по приглашению</span>. Наш процесс приема гарантирует, что каждый член нашего сообщества разделяет уважение к конфиденциальности и природе, которое определяет наше святилище.",
            footer_copyright: "&copy; 2025 Takyma Investment Pioneer. Все права защищены.",
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