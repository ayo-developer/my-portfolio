"use strict";

/* =====================================================
   PREMIUM PARTICLE BACKGROUND
   Apple-inspired Canvas Animation
   Author: Ayomide Oloyede
===================================================== */

(() => {

    const canvas = document.getElementById("particles");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    const config = {

        particleCount:
            window.innerWidth < 768 ? 50 : 90,

        maxSize: 4,

        minSize: 1,

        speed: 0.6,

        connectDistance: 120,

        color: "rgba(59,130,246,.7)",

        lineColor: "rgba(59,130,246,.12)"
    };

    class Particle {

        constructor() {

            this.reset();

            this.x = Math.random() * width;

            this.y = Math.random() * height;

        }

        reset() {

            this.size = Math.random() *
                (config.maxSize - config.minSize)
                + config.minSize;

            this.speedX = (Math.random() - .5) * config.speed;

            this.speedY = (Math.random() - .5) * config.speed;

        }

        update() {

            this.x += this.speedX;

            this.y += this.speedY;

            if (this.x < 0 || this.x > width) {

                this.speedX *= -1;

            }

            if (this.y < 0 || this.y > height) {

                this.speedY *= -1;

            }

            const dx = this.x - mouse.x;

            const dy = this.y - mouse.y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {

                this.x += dx / 18;

                this.y += dy / 18;

            }

        }

        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = config.color;

            ctx.fill();

        }

    }

    const particles = [];

    for (let i = 0; i < config.particleCount; i++) {

        particles.push(new Particle());

    }

    function connect() {

        for (let a = 0; a < particles.length; a++) {

            for (let b = a; b < particles.length; b++) {

                const dx =
                    particles[a].x - particles[b].x;

                const dy =
                    particles[a].y - particles[b].y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.connectDistance) {

                    ctx.beginPath();

                    ctx.strokeStyle = config.lineColor;

                    ctx.lineWidth = 1 - distance / 160;

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.stroke();

                }

            }

        }

    }

    function animate() {

        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {

            p.update();

            p.draw();

        });

        connect();

        requestAnimationFrame(animate);

    }

    animate();

    window.addEventListener("resize", () => {

        width = canvas.width = window.innerWidth;

        height = canvas.height = window.innerHeight;

    });

    window.addEventListener("mousemove", (e) => {

        mouse.x = e.clientX;

        mouse.y = e.clientY;

    });

    window.addEventListener("mouseleave", () => {

        mouse.x = null;

        mouse.y = null;

    });

})();