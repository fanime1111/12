const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    
    const isExpanded = this.classList.contains('active');
    this.setAttribute('aria-expanded', isExpanded);
});

const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('no-scroll');
        burgerMenu.setAttribute('aria-expanded', false);
    });
});

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

const modalData = {
    ceremony: {
        title: 'Организация церемонии похорон',
        description: 'Полная организация траурной церемонии, включая подготовку документов, транспорт, ритуальные принадлежности и координацию всех этапов прощания.',
        image: 'https://i.pinimg.com/736x/a3/73/cb/a373cb4e2a6305b3eaa605d92db09732.jpg'
        
    },
    cremation: {
        title: 'Кремация',
        description: 'Организация кремации с соблюдением всех необходимых процедур, включая оформление документов и предоставление урны для праха.'
        
    },
    transport: {
        title: 'Перевозка тел умерших',
        description: 'Перевозка на дальние расстояния (груз 200) по территории РБ, РФ и стран СНГ. Оформление всех необходимых документов для транспортировки.'
    },
    documents: {
        title: 'Помощь в оформлении документов',
        description: 'Полное сопровождение в оформлении всех необходимых документов, включая свидетельство о смерти, разрешения на захоронение и другие справки.'
    },
    improvement: {
        title: 'Благоустройство мест захоронений',
        description: 'Установка памятников, оград, укладка плитки, озеленение и уход за местом захоронения.'
    },
    granite: {
        title: 'Гранитные памятники',
        description: 'Изготовление памятников из натурального гранита. Долговечные, устойчивые к погодным условиям. Гравировка портретов и надписей.'
    },
    'marble-chips': {
        title: 'Памятники из гранитно-мраморной крошки',
        description: 'Доступные по цене памятники из прессованной крошки. Разнообразие форм и размеров.'
    },

    paving: {
        title: 'Тротуарная плитка',
        description: 'Укладка тротуарной плитки на месте захоронения. Различные цвета и узоры.'
    },
    'granite-tile': {
        title: 'Гранитная плитка',
        description: 'Облицовка места захоронения гранитной плиткой. Долговечное и эстетичное решение.'
    },

    'metal-fence': {
        title: 'Металлические ограды',
        description: 'Изготовление и установка металлических оград с антикоррозийным покрытием.'
    },
    'granite-fence': {
        title: 'Гранитные ограды',
        description: 'Монументальные ограды из натурального гранита. Долговечность и солидный внешний вид.'
    },
    'marble-chips-fence': {
        title: 'Ограды из гранитно-мраморной крошки',
        description: 'Экономичный вариант ограды с хорошими эксплуатационными характеристиками.'
    },
    exclusive: {
        title: 'Эксклюзивные мемориальные комплексы',
        description: 'Индивидуальное проектирование и создание уникальных мемориальных комплексов по вашим пожеланиям.'
    },
    package1: {
        title: 'Базовый пакет услуг',
        description: 'Минимальный набор необходимых услуг для организации похорон. Включает транспорт, гроб эконом-класса, венок и оформление документов.'
    },
    package2: {
        title: 'Стандартный пакет услуг',
        description: 'Расширенный пакет с улучшенными ритуальными принадлежностями, дополнительным транспортом и полным сопровождением.'
    },
    package3: {
        title: 'Премиум пакет услуг',
        description: 'Полный комплекс услуг премиум-класса с индивидуальным подходом, элитными принадлежностями и организацией поминальной трапезы.'
    }
};

function openModal(type, element = null) {
    const data = modalData[type];
    if (data) {
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        
        let modalImageUrl = 'assents/1.webp';
        
        const serviceCard = document.querySelector(`[data-service="${type}"]`);
        const productCard = document.querySelector(`[data-product="${type}"]`);
        const targetCard = serviceCard || productCard;
        
        if (targetCard && targetCard.dataset.modalImage) {
            modalImageUrl = targetCard.dataset.modalImage;
        }
        
        const modalImage = modal.querySelector('.modal-image');
        modalImage.style.backgroundImage = `url('${modalImageUrl}')`;
        
        modal.classList.add('active');
        body.classList.add('no-scroll');
        
        setTimeout(() => {
            modal.querySelector('.modal-close').focus();
        }, 100);
    }
}

function closeModal() {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideOut 0.3s forwards';
    modal.style.animation = 'fadeOut 0.3s forwards';
    
    setTimeout(() => {
        modal.classList.remove('active');
        body.classList.remove('no-scroll');
        modalContent.style.animation = 'modalSlideIn 0.3s forwards';
        modal.style.animation = '';
    }, 300);
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70; 
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
document.querySelectorAll('.service-card, .product-card, .package-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.step-card').forEach(card => {
    card.style.animationPlayState = 'paused';
    stepObserver.observe(card);
});

let scrollPosition = 0;

function lockScroll() {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
}

document.addEventListener('DOMContentLoaded', () => {
    if (!('scrollBehavior' in document.documentElement.style)) {
        const smoothScrollPolyfill = () => {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const target = document.getElementById(targetId);
                    if (target) {
                        const targetPosition = target.offsetTop - 70;
                        window.scrollTo(0, targetPosition);
                    }
                });
            });
        };
        smoothScrollPolyfill();
    }

    console.log('Сайт ритуальных услуг загружен успешно');
    console.log('Телефон для связи: +375 33 347-54-75');
});