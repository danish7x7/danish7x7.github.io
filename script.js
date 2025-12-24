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

    const positions = particles.geometry.attributes.position.array;
    const velocities = particles.geometry.attributes.velocity.array;

    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        if (positions[i] > 10 || positions[i] < -10) velocities[i] *= -1;
        if (positions[i + 1] > 10 || positions[i + 1] < -10) velocities[i + 1] *= -1;
        if (positions[i + 2] > 10 || positions[i + 2] < -10) velocities[i + 2] *= -1;
    }

    particles.geometry.attributes.position.needsUpdate = true;

    scene.children.forEach((child, index) => {
        if (child.geometry && child.geometry.type === 'BoxGeometry') {
            child.rotation.x += 0.005 * (index + 1);
            child.rotation.y += 0.005 * (index + 1);
        }
    });

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

// Local Time Clock
function initLocalTime() {
    const timeDisplay = document.getElementById('localTime');
    if (!timeDisplay) return;
    
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        timeDisplay.textContent = `${displayHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}

// Custom Cursor Implementation
let cursorX = 0;
let cursorY = 0;
let cursorTargetX = 0;
let cursorTargetY = 0;

function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        console.error('Cursor element not found');
        return;
    }

    // Check if device has touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // On touch devices, hide custom cursor and show default
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
        document.querySelectorAll('*').forEach(el => {
            el.style.cursor = 'auto';
        });
        return;
    }

    // Force cursor to be visible
    cursor.style.display = 'block';
    cursor.style.visibility = 'visible';
    cursor.style.opacity = '1';
    
    console.log('Custom cursor initialized');

    // Set initial position
    cursorX = window.innerWidth / 2;
    cursorY = window.innerHeight / 2;
    cursorTargetX = cursorX;
    cursorTargetY = cursorY;

    // Update position on mouse move
    document.addEventListener('mousemove', (e) => {
        cursorTargetX = e.clientX;
        cursorTargetY = e.clientY;
    });

    // Smooth animation loop
    function animateCursor() {
        // Smooth follow with easing
        cursorX += (cursorTargetX - cursorX) * 0.15;
        cursorY += (cursorTargetY - cursorY) * 0.15;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Add hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-image-wrapper, .tech-tag, nav, .logo, .nav-links a, .nav-contact');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// Text Decoding Animation for Hero Title
function animateHero() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const originalText = heroTitle.textContent.trim();
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}|;:,.<>?';
    const characters = originalText.split('');
    
    heroTitle.innerHTML = '';
    const charSpans = [];
    
    characters.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        span.style.display = 'inline-block';
        span.style.opacity = '1';
        span.dataset.finalChar = char === ' ' ? '\u00A0' : char;
        heroTitle.appendChild(span);
        charSpans.push(span);
    });

    let scrambleCount = 0;
    const maxScrambles = 15;
    const scrambleInterval = setInterval(() => {
        charSpans.forEach((span, index) => {
            const finalChar = span.dataset.finalChar;
            if (finalChar !== '\u00A0') {
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
            
            charSpans.forEach(span => {
                span.textContent = span.dataset.finalChar;
            });
            
            setTimeout(() => {
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
    }, 80);
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize local time clock
    initLocalTime();
    
    // Initialize 3D background
    init3DBackground();

    // Animate navigation
    anime({
        targets: '.logo',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.nav-links a',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        delay: anime.stagger(100, { start: 700 }),
        easing: 'easeOutExpo'
    });
    
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

    // Scroll-triggered animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                if (target.matches('.section h2')) {
                    anime({ 
                        targets: target, 
                        opacity: [0, 1], 
                        translateY: [50, 0], 
                        duration: 1000, 
                        easing: 'easeOutExpo' 
                    });
                }
                
                if (target.matches('.about-image')) {
                    anime({ 
                        targets: target, 
                        opacity: [0, 1], 
                        scale: [0.8, 1], 
                        duration: 1200, 
                        easing: 'easeOutExpo' 
                    });
                }
                
                if (target.matches('.about-text')) {
                    anime({ 
                        targets: target, 
                        opacity: [0, 1], 
                        translateX: [50, 0], 
                        duration: 1000, 
                        delay: 300, 
                        easing: 'easeOutExpo' 
                    });
                }
                
                if (target.matches('.skill-item')) {
                    anime({ 
                        targets: '.skill-item', 
                        opacity: [0, 1], 
                        translateY: [30, 0], 
                        duration: 800, 
                        delay: anime.stagger(100), 
                        easing: 'easeOutExpo' 
                    });
                }
                
                if (target.matches('.featured-project h2')) {
                    anime({ 
                        targets: target, 
                        opacity: [0, 1], 
                        translateY: [50, 0], 
                        duration: 1000, 
                        easing: 'easeOutExpo' 
                    });
                }
                
                if (target.matches('.project-showcase')) {
                    anime({ 
                        targets: target, 
                        opacity: [0, 1], 
                        translateY: [50, 0], 
                        duration: 1200, 
                        easing: 'easeOutExpo' 
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.section h2, .about-image, .about-text, .skill-item:first-child, .featured-project h2, .project-showcase').forEach(el => {
        observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Smart Navbar: Hide on scroll down, show on scroll up
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        
        const currentScrollY = window.scrollY;
        const scrollDifference = currentScrollY - lastScrollY;
        
        if (Math.abs(scrollDifference) > 5) {
            if (scrollDifference > 0 && currentScrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }
        
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
    
    window.addEventListener('scroll', onScroll, { passive: true });

    // Floating animation to skill items
    document.querySelectorAll('.skill-item').forEach((item, index) => {
        anime({ 
            targets: item, 
            translateY: [-5, 5], 
            duration: 2000 + (index * 200), 
            direction: 'alternate', 
            loop: true, 
            easing: 'easeInOutSine', 
            delay: index * 300 
        });
    });
});