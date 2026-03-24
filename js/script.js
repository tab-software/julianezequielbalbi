// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Responsive GSAP with matchMedia
const mm = gsap.matchMedia();

// Hero
mm.add("(min-width: 768px)", () => {
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    heroTl
        .fromTo('.hero-title', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' })
        .fromTo('.hero-subtitle', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.5')
        .to('.hero-buttons', { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' }, '-=0.8')
        .fromTo('.image-placeholder', { opacity: 0, scale: 1.2, rotationY: -15 }, { opacity: 1, scale: 1, rotationY: 0, duration: 1.5, ease: 'power3.out' }, '-=1');
    
    return () => heroTl.kill(); // Cleanup
});

mm.add("(max-width: 767px)", () => {
    const heroTlMobile = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
        }
    });
    
    heroTlMobile
        .fromTo('.hero-title', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
        .fromTo('.hero-subtitle', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4')
        .to('.hero-buttons', { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.6')
        .fromTo('.image-placeholder', { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, '-=0.8');
    
    return () => heroTlMobile.kill();
});



// Sobre mí responsive
mm.add("(min-width: 768px)", () => {
    const sobreTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#sobre-mi',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    sobreTl
        .fromTo('#sobre-mi .section-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
        .to('.sobre-mi-text p', { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }, '-=0.5')
        .to('.stat', { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' }, '-=0.5');
    
    return () => sobreTl.kill();
});

mm.add("(max-width: 767px)", () => {
    const sobreTlMobile = gsap.timeline({
        scrollTrigger: {
            trigger: '#sobre-mi',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
        }
    });
    
    sobreTlMobile
        .fromTo('#sobre-mi .section-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        .to('.sobre-mi-text p', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, '-=0.4')
        .to('.stat', { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.4');
    
    return () => sobreTlMobile.kill();
});

// Proyectos responsive
mm.add("(min-width: 768px)", () => {
    const proyectosTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#proyectos',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    proyectosTl
        .fromTo('#proyectos .section-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
        .to('.proyecto-card', { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, '-=0.5');
    
    return () => proyectosTl.kill();
});

mm.add("(max-width: 767px)", () => {
    const proyectosTlMobile = gsap.timeline({
        scrollTrigger: {
            trigger: '#proyectos',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
        }
    });
    
    proyectosTlMobile
        .fromTo('#proyectos .section-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        .to('.proyecto-card', { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }, '-=0.4');
    
    return () => proyectosTlMobile.kill();
});

// tab_ responsive
mm.add("(min-width: 768px)", () => {
    const tabTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#tab',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    tabTl
        .fromTo('#tab .section-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
        .fromTo('.section-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
        .to('.service', { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }, '-=0.5')
        .to('.tab-cta h3', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.8');
    
    return () => tabTl.kill();
});

mm.add("(max-width: 767px)", () => {
    const tabTlMobile = gsap.timeline({
        scrollTrigger: {
            trigger: '#tab',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
        }
    });
    
    tabTlMobile
        .fromTo('#tab .section-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        .fromTo('.section-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3')
        .to('.service', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, '-=0.4')
        .to('.tab-cta h3', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
    
    return () => tabTlMobile.kill();
});

// Contact form
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envío
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = '¡Enviado!';
        button.style.background = '#10b981';
        button.style.borderColor = '#10b981';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '#000';
            button.style.borderColor = 'transparent';
            this.reset();
        }, 2000);
    }, 1500);
});

// Sobre mí GSAP Animation
const sobreTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#sobre-mi',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

sobreTl
    .fromTo('#sobre-mi .section-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .to('.sobre-mi-text p', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    }, '-=0.5')
    .to('.stat', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    }, '-=0.5');

// Proyectos GSAP Animation
const proyectosTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#proyectos',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

proyectosTl
    .fromTo('#proyectos .section-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .to('.proyecto-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.5');

// tab_ GSAP Animation
const tabTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#tab',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

tabTl
    .fromTo('#tab .section-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.section-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3'
    )
    .to('.service', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    }, '-=0.5')
    .to('.tab-cta h3', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.8');

// Galería GSAP Animation
const galeriaTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#galeria',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

galeriaTl
    .fromTo('#galeria .section-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .to('.foto-item', {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: {
            amount: 0.5,
            from: 'left'
        },
        ease: 'back.out(1.7)'
    }, '-=0.5');

// Contacto GSAP Animation
const contactoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#contacto',
        start: 'top 85%',
        toggleActions: 'play none none none'
    }
});

contactoTl
    .fromTo('#contacto .section-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .to('.contact-info p, .contact-email', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.3')
    .to('.social-links a', {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)'
    }, '-=0.5')
    .to('.contact-form input, .contact-form textarea, .contact-form button', {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out'
    }, '-=0.8');

// Parallax effect for hero image - DISABLED per user request
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroImage = document.querySelector('.image-placeholder');
//     if (heroImage) {
//         heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

