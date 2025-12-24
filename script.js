// script.js (or main.ts)

// --- 1. CLOCK FUNCTIONALITY ---
function updateClock() {
    const clockEl = document.getElementById('clock');
    if (!clockEl) return;

    const now = new Date();
    // Format: HH:MM:SS TimeZone
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZoneName: 'short'
    });
    clockEl.innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// --- 2. HOLOGRAM PIXEL EFFECT ---
// This requires the image to be loaded first
const canvas = document.createElement('canvas');
const container = document.getElementById('hologram');
const img = document.getElementById('source-image') as HTMLImageElement;

if (container && img) {
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    // Config
    const pixelSize = 8; // Size of pixelation
    let particles: Particle[] = [];
    
    class Particle {
        x: number;
        y: number;
        originX: number;
        originY: number;
        color: string;
        
        constructor(x: number, y: number, color: string) {
            this.x = x;
            this.y = y;
            this.originX = x;
            this.originY = y;
            this.color = color;
        }
        
        draw(context: CanvasRenderingContext2D) {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, pixelSize, pixelSize);
        }
        
        update(mouseX: number, mouseY: number) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = 100; // Radius of interaction
            
            let force = (maxDistance - distance) / maxDistance;
            if (force < 0) force = 0;
            
            const directionX = forceDirectionX * force * 20; // 20 = intensity
            const directionY = forceDirectionY * force * 20;
            
            if (distance < maxDistance) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                // Return to original position
                if (this.x !== this.originX) {
                    const dx = this.x - this.originX;
                    this.x -= dx * 0.1;
                }
                if (this.y !== this.originY) {
                    const dy = this.y - this.originY;
                    this.y -= dy * 0.1;
                }
            }
        }
    }

    // Initialize Image
    img.onload = () => {
        canvas.width = 400; // Match container CSS
        canvas.height = 500;
        
        // Draw image to canvas to get pixel data
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imgData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        
        // Create particles based on pixel data
        for (let y = 0; y < canvas.height; y += pixelSize) {
            for (let x = 0; x < canvas.width; x += pixelSize) {
                if (imgData) {
                    const index = (y * 4 * imgData.width) + (x * 4);
                    const red = imgData.data[index];
                    const green = imgData.data[index + 1];
                    const blue = imgData.data[index + 2];
                    const alpha = imgData.data[index + 3];
                    
                    if (alpha > 0) {
                        const color = `rgb(${red},${green},${blue})`;
                        particles.push(new Particle(x, y, color));
                    }
                }
            }
        }
        animate();
    };
    
    // Mouse Interaction
    let mouse = { x: -1000, y: -1000 }; // Start off screen
    container.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    container.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    function animate() {
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update(mouse.x, mouse.y);
            p.draw(ctx!);
        });
        requestAnimationFrame(animate);
    }
}

// --- 3. ANIME.JS MARQUEE ---
// Ensure anime.js library is loaded in HTML
if (typeof anime !== 'undefined') {
    // Reveal animation for Hero Text
    anime({
        targets: '.giant-text',
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: 500
    });

    // Marquee animation for projects
    // This moves the track left infinitely
    anime({
        targets: '.marquee-track',
        translateX: '-50%', // Move half the width
        duration: 10000,
        easing: 'linear',
        loop: true
    });
}