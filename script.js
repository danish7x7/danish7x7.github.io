// 3D Background Scene Setup
let scene, camera, renderer, particles;

function init3DBackground() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create floating geometric particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;

        velocities[i] = (Math.random() - 0.5) * 0.02;
        velocities[i + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i + 2] = (Math.random() - 0.5) * 0.02;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        opacity: 0.6
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Add some wireframe cubes
    for (let i = 0; i < 5; i++) {
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.1
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        
        cube.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        
        cube.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        
        scene.add(cube);
    }

    camera.position.z = 5;

    animate3D();
}

function animate3D() {
    requestAnimationFrame(animate3D);

    // Animate particles
    const positions = particles.geometry.attributes.position.array;
    const velocities = particles.geometry.attributes.velocity.array;

    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Boundary checking
        if (positions[i] > 10 || positions[i] < -10) velocities[i] *= -1;
        if (positions[i + 1] > 10 || positions[i + 1] < -10) velocities[i + 1] *= -1;
        if (positions[i + 2] > 10 || positions[i + 2] < -10) velocities[i + 2] *= -1;
    }

    particles.geometry.attributes.position.needsUpdate = true;

    // Rotate wireframe cubes
    scene.children.forEach((child, index) => {
        if (child.geometry && child.geometry.type === 'BoxGeometry') {
            child.rotation.x += 0.005 * (index + 1);
            child.rotation.y += 0.005 * (index + 1);
        }
    });

    // Camera movement based on mouse position
    if (typeof mouseX !== 'undefined') {
        camera.position.x = mouseX * 0.0001;
        camera.position.y = mouseY * 0.0001;
    }

    renderer.render(scene, camera);
}

// Mouse tracking for camera movement
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX - window.innerWidth / 2;
    mouseY = event.clientY - window.innerHeight / 2;
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize Lenis Smooth Scroll
let lenis;
function initLenis() {
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            // Update parallax on every frame
            updateParallax();
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        
        return lenis;
    }
    return null;
}

// Local Time Clock
function initLocalTime() {
    const timeDisplay = document.getElementById('localTime');
    if (!timeDisplay) return;
    
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        // Format time as HH:MM:SS AM/PM
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        timeDisplay.textContent = `${displayHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
    }
    
    // Update immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);
}

// Parallax Effect for Project Images
function initParallax() {
    const parallaxImages = document.querySelectorAll('[data-parallax]');
    if (parallaxImages.length === 0) return;
    
    // Store initial positions for each image
    parallaxImages.forEach(img => {
        const wrapper = img.parentElement;
        const rect = wrapper.getBoundingClientRect();
        img.dataset.initialTop = rect.top + window.scrollY;
        img.dataset.wrapperHeight = rect.height;
    });
}

function updateParallax() {
    const parallaxImages = document.querySelectorAll('[data-parallax]');
    if (parallaxImages.length === 0) return;
    
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || (lenis ? lenis.scroll : 0);
    
    parallaxImages.forEach(img => {
        const wrapper = img.parentElement;
        const rect = wrapper.getBoundingClientRect();
        const wrapperTop = rect.top;
        const wrapperHeight = rect.height;
        
        // Calculate if wrapper is in viewport
        const wrapperBottom = wrapperTop + wrapperHeight;
        const isInView = wrapperBottom > 0 && wrapperTop < windowHeight;
        
        if (isInView) {
            // Parallax speed: 0.25 means image moves at 25% of scroll speed (slower)
            const parallaxSpeed = 0.25;
            
            // Calculate how much the wrapper has scrolled relative to viewport center
            const viewportCenter = windowHeight / 2;
            const wrapperCenter = wrapperTop + wrapperHeight / 2;
            const distanceFromCenter = wrapperCenter - viewportCenter;
            
            // Apply parallax offset (negative because we want image to move opposite to scroll)
            const parallaxOffset = -distanceFromCenter * parallaxSpeed;
            
            // Apply transform directly for better performance
            img.style.transform = `translateY(${parallaxOffset}px)`;
        } else {
            // Reset transform when out of view
            img.style.transform = 'translateY(0)';
        }
    });
}

// Custom Cursor with Anime.js
let cursorX = 0;
let cursorY = 0;
let cursorTargetX = 0;
let cursorTargetY = 0;

function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    // Hide cursor on mobile/touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }

    // Initialize cursor position
    cursorX = window.innerWidth / 2;
    cursorY = window.innerHeight / 2;
    cursorTargetX = cursorX;
    cursorTargetY = cursorY;

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        cursorTargetX = e.clientX;
        cursorTargetY = e.clientY;
    });

    // Animate cursor to follow mouse with lag using Anime.js
    let cursorAnimation = null;
    
    function updateCursor() {
        // Calculate distance to target
        const deltaX = cursorTargetX - cursorX;
        const deltaY = cursorTargetY - cursorY;
        
        // Only animate if position has changed significantly
        if (Math.abs(deltaX) > 0.5 || Math.abs(deltaY) > 0.5) {
            if (cursorAnimation) cursorAnimation.pause();
            
            cursorAnimation = anime({
                targets: { x: cursorX, y: cursorY },
                x: cursorTargetX,
                y: cursorTargetY,
                duration: 800,
                easing: 'easeOutExpo',
                update: function(anim) {
                    cursorX = anim.animatables[0].target.x;
                    cursorY = anim.animatables[0].target.y;
                    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
                }
            });
        }
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Add hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, .project-card, .skill-item, .social-link, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// Text Decoding Animation for Hero Title (Terminal Decode)
function animateHero() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // Get the original text
    const originalText = heroTitle.textContent.trim();
    
    // Characters for scrambling (alphanumeric + symbols)
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}|;:,.<>?';
    
    // Split text into characters (including spaces)
    const characters = originalText.split('');
    
    // Clear the original text and wrap each character in a span
    heroTitle.innerHTML = '';
    const charSpans = [];
    
    characters.forEach((char, index) => {
        const span = document.createElement('span');
        // Start with a random scramble character
        span.textContent = char === ' ' ? '\u00A0' : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        span.style.display = 'inline-block';
        span.style.fontFamily = 'JetBrains Mono, monospace'; // Monospaced font for scrambling
        span.style.opacity = '1';
        span.dataset.finalChar = char === ' ' ? '\u00A0' : char;
        heroTitle.appendChild(span);
        charSpans.push(span);
    });

    // Scramble phase: Random characters cycling
    let scrambleCount = 0;
    const maxScrambles = 15; // Number of scramble iterations
    const scrambleInterval = setInterval(() => {
        charSpans.forEach((span, index) => {
            const finalChar = span.dataset.finalChar;
            if (finalChar !== '\u00A0') { // Don't scramble spaces
                // Gradually reveal correct character (more correct chars as we progress)
                const progress = scrambleCount / maxScrambles;
                if (Math.random() > progress) {
                    span.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                } else {
                    span.textContent = finalChar;
                }
            }
        });
        scrambleCount++;
        
        if (scrambleCount >= maxScrambles) {
            clearInterval(scrambleInterval);
            
            // Final reveal: Set all to correct characters
            charSpans.forEach(span => {
                span.textContent = span.dataset.finalChar;
            });
            
            // Switch back to original font and animate final reveal
            setTimeout(() => {
                charSpans.forEach(span => {
                    span.style.fontFamily = ''; // Reset to inherit from .hero-title
                });
                
                // Final animation: characters settle into place
                anime({
                    targets: charSpans,
                    opacity: [0.5, 1],
                    translateY: [10, 0],
                    scale: [0.9, 1],
                    duration: 600,
                    delay: anime.stagger(30),
                    easing: 'easeOutExpo'
                });
            }, 100);
        }
    }, 80); // Scramble every 80ms
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lenis smooth scroll
    lenis = initLenis();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize parallax effect
    initParallax();
    
    // Initialize local time clock
    initLocalTime();
    
    // Initialize 3D background
    init3DBackground();

    // Animate navigation - Staggered fade-in
    anime({
        targets: '.logo',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutExpo'
    });

    // Staggered fade-in for navigation menu items
    anime({
        targets: '.nav-links a',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        delay: anime.stagger(100, { start: 700 }),
        easing: 'easeOutExpo'
    });
    
    // Animate contact link
    anime({
        targets: '.nav-contact',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        delay: 900,
        easing: 'easeOutExpo'
    });

    // Animate hero section with text decoding effect
    animateHero();
    
    // Animate hero image container
    anime({
        targets: '.hero-image-container',
        opacity: [0, 0.85],
        scale: [0.9, 1],
        duration: 1500,
        delay: 2000,
        easing: 'easeOutExpo'
    });

    // Animate other hero elements after title decoding
    setTimeout(() => {
        const heroTimeline = anime.timeline({ easing: 'easeOutExpo' });
        heroTimeline
        .add({ targets: '.hero-subtitle', opacity: [0, 1], translateY: [50, 0], duration: 1000, delay: 200 })
        .add({ targets: '.hero-description', opacity: [0, 1], translateY: [50, 0], duration: 1000, offset: '-=600' });
    }, 1500);

    // Scroll-triggered animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (target.matches('.section h2')) {
                    anime({ targets: target, opacity: [0, 1], translateY: [50, 0], duration: 1000, easing: 'easeOutExpo' });
                }
                if (target.matches('.about-image')) {
                    anime({ targets: target, opacity: [0, 1], scale: [0.8, 1], duration: 1200, easing: 'easeOutExpo' });
                }
                if (target.matches('.about-text')) {
                    anime({ targets: target, opacity: [0, 1], translateX: [50, 0], duration: 1000, delay: 300, easing: 'easeOutExpo' });
                }
                if (target.matches('.skill-item')) {
                    anime({ targets: '.skill-item', opacity: [0, 1], translateY: [30, 0], duration: 800, delay: anime.stagger(100), easing: 'easeOutExpo' });
                }
                if (target.matches('.project-card')) {
                    anime({ targets: target, opacity: [0, 1], translateY: [50, 0], duration: 1200, easing: 'easeOutExpo' });
                }
                if (target.matches('.social-link')) {
                    anime({ targets: '.social-link', opacity: [0, 1], scale: [0.5, 1], duration: 600, delay: anime.stagger(100), easing: 'easeOutBack' });
                }
                if (target.matches('.contact-form')) {
                    anime({ targets: target, opacity: [0, 1], translateY: [50, 0], duration: 1000, easing: 'easeOutExpo' });
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.section h2, .about-image, .about-text, .skill-item:first-child, .project-card, .social-link:first-child, .contact-form').forEach(el => {
        observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Smart Navbar: Hide on scroll down, show on scroll up
    let lastScrollY = lenis ? lenis.scroll : window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        
        const currentScrollY = lenis ? lenis.scroll : window.scrollY;
        const scrollDifference = currentScrollY - lastScrollY;
        
        // Only hide/show if scroll difference is significant (more than 5px)
        if (Math.abs(scrollDifference) > 5) {
            if (scrollDifference > 0 && currentScrollY > 100) {
                // Scrolling DOWN - hide navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling UP - show navbar
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        // Update scrolled class for styling
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    // Use Lenis scroll event if available, otherwise use window scroll
    if (lenis) {
        lenis.on('scroll', ({ scroll, limit, velocity, direction }) => {
            onScroll();
        });
    } else {
        window.addEventListener('scroll', onScroll, { passive: true });
    }
    
    // Initialize navbar position
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.style.transform = 'translateY(0)';
    }

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        anime({ targets: '.submit-btn', scale: [1, 0.95, 1], duration: 200, complete: () => { alert('Message sent! (This is a demo - integrate with your backend)'); this.reset(); } });
    });

    // Add hover animations to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => { anime({ targets: card, scale: 1.02, duration: 300, easing: 'easeOutQuad' }); });
        card.addEventListener('mouseleave', () => { anime({ targets: card, scale: 1, duration: 300, easing: 'easeOutQuad' }); });
    });

    // Parallax effect for sections
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => { const rate = scrolled * -0.5; section.style.transform = `translateY(${rate * 0.1}px)`; });
    });

    // Add glitch effect on logo hover
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => { anime({ targets: logo, translateX: [0, -2, 2, 0], duration: 200, easing: 'easeInOutQuad' }); });
    }

    // Floating animation to skill items
    document.querySelectorAll('.skill-item').forEach((item, index) => {
        anime({ targets: item, translateY: [-5, 5], duration: 2000 + (index * 200), direction: 'alternate', loop: true, easing: 'easeInOutSine', delay: index * 300 });
    });

    // Particle trail effect on mouse move (DOM-only)
    let tailParticles = [];
    const maxParticles = 20;
    document.addEventListener('mousemove', (e) => {
        if (tailParticles.length < maxParticles) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(255, 255, 255, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            document.body.appendChild(particle);
            tailParticles.push(particle);
            anime({ targets: particle, scale: [1, 0], opacity: [1, 0], duration: 1000, easing: 'easeOutExpo',
                complete: () => { particle.remove(); tailParticles = tailParticles.filter(p => p !== particle); } });
        }
    });

    // NEW: Initialize VanillaTilt on project cards
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 8, speed: 400, glare: true, "max-glare": 0.2
    });
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(Draggable);

    const viewport = document.getElementById('projectsViewport');
    const axis = document.getElementById('projectsAxis');

    // ------------- PROJECT DATA -------------
    const projectsData = [
        { title: 'E-Commerce Platform',  url: 'https://github.com/danish7x7/ecommerce-platform' },
        { title: 'Task Manager',         url: 'https://github.com/danish7x7/task-manager' },
        { title: 'Weather Dashboard',    url: 'https://github.com/danish7x7/weather-dashboard' },
        { title: 'Marketplace Analytics',url: 'https://github.com/danish7x7/marketplace-analytics' },
        { title: 'Bug Bite Detection',   url: 'https://github.com/danish7x7/bug-bite-detection' },
        { title: 'Addiction Analysis',   url: 'https://github.com/danish7x7/addiction-analysis' },
    ];

    // ------------- BUILD CARDS -------------
    function buildCards(){
        axis.innerHTML = '';
        projectsData.forEach(p => {
            const card = document.createElement('div');
            card.className = 'proj-card';
            
            const title = document.createElement('div');
            title.className = 'proj-title';
            title.textContent = p.title;
            
            const overlay = document.createElement('div');
            overlay.className = 'proj-overlay';
            overlay.innerHTML = '<span class="proj-cta">View on GitHub →</span>';
            
            const link = document.createElement('a');
            link.href = p.url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.setAttribute('aria-label', p.title + ' – open on GitHub');

            card.appendChild(title);
            card.appendChild(overlay);
            card.appendChild(link);
            axis.appendChild(card);
        });
    }
    buildCards();

    // Duplicate cards for seamless loop
    const original = axis.innerHTML;
    function ensureLoopWidth(){
        while (axis.scrollWidth < viewport.clientWidth * 2.2) {
            axis.insertAdjacentHTML('beforeend', original);
        }
    }
    ensureLoopWidth();

    // ------------- TRAIN-LIKE ENTRY ANIMATION -------------
    const cards = gsap.utils.toArray('.proj-card');
    const viewportWidth = viewport.clientWidth;
    const cardWidth = parseFloat(getComputedStyle(viewport).getPropertyValue('--card-w'));
    
    // Calculate each card's natural position in the flex container
    // Then set them all to start off-screen to the right
    cards.forEach((card, index) => {
        // Get the card's position relative to the axis
        const cardRect = card.getBoundingClientRect();
        const axisRect = axis.getBoundingClientRect();
        const naturalX = cardRect.left - axisRect.left;
        
        // Start each card off-screen to the right, maintaining their relative spacing
        gsap.set(card, {
            x: viewportWidth + cardWidth - naturalX,
            opacity: 0
        });
    });

    // Animate cards entering from right in train-like sequence
    const entryTimeline = gsap.timeline({
        onComplete: startSlowMotion
    });

    // Each card moves to its natural position (x: 0) with a stagger
    entryTimeline.to(cards, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15, // 0.15s delay between each card (train effect)
        ease: 'power3.out'
    });

    // ------------- SLOW MOTION DRIFT -------------
    let driftTween = null;
    let isDragging = false;
    let currentX = 0;

    function startSlowMotion(){
        killDrift();
        const half = axis.scrollWidth / 2;
        let currentPosition = gsap.getProperty(axis, "x") || 0;
        
        // Normalize position if we're past the reset point (seamless loop)
        if (currentPosition <= -half) {
            currentPosition = currentPosition + half;
            gsap.set(axis, {x: currentPosition});
        }
        
        // Calculate target: move from current position to reset point
        const targetX = currentPosition - half;
        const distance = Math.abs(targetX - currentPosition);
        const speed = half / 75; // pixels per second
        const duration = distance / speed;
        
        // Create continuous loop animation
        driftTween = gsap.to(axis, {
            x: targetX,
            duration: duration || 75,
            ease: 'none',
            repeat: -1, // Infinite repeat
            onRepeat: () => {
                // Seamless reset: when we reach -half, duplicate content is aligned
                // with original at 0, so we can reset without visual jump
                const pos = gsap.getProperty(axis, "x");
                if (pos <= -half) {
                    gsap.set(axis, {x: pos + half});
                }
            }
        });
    }

    function killDrift(){
        if (driftTween) {
            driftTween.kill();
            driftTween = null;
        }
    }

    // Pause drift on hover/interaction
    axis.addEventListener('mouseenter', () => {
        if (driftTween && !isDragging) driftTween.pause();
    });
    axis.addEventListener('mouseleave', () => {
        if (driftTween && !isDragging) driftTween.resume();
    });
    axis.addEventListener('focusin', () => {
        if (driftTween && !isDragging) driftTween.pause();
    });
    axis.addEventListener('focusout', () => {
        if (driftTween && !isDragging) driftTween.resume();
    });

    // ------------- DRAG FUNCTIONALITY (DESKTOP & MOBILE) -------------
    const draggable = Draggable.create(axis, {
        type: 'x',
        bounds: {
            minX: -(axis.scrollWidth - viewport.clientWidth),
            maxX: 0
        },
        edgeResistance: 0.85,
        inertia: true,
        throwResistance: 5000, // Higher resistance = slower deceleration (more momentum)
        onDragStart: () => {
            isDragging = true;
            killDrift();
        },
        onDragEnd: () => {
            isDragging = false;
            // Don't resume immediately - let inertia complete first
        },
        onThrowComplete: () => {
            // Inertia has finished, now resume slow motion from current position
            if (!isDragging) {
                startSlowMotion();
            }
        }
    })[0];

    // Handle window resize
    window.addEventListener('resize', () => {
        ensureLoopWidth();
        if (draggable) {
            draggable.update();
        }
    });
});

