"use strict";

/* ==========================================
   PREMIUM PORTFOLIO ANIMATIONS
   Author: Ayomide Oloyede
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       AOS INITIALIZATION
    ====================================== */

    if (window.AOS) {
        AOS.init({
            duration: 900,
            once: true,
            offset: 80,
            easing: "ease-in-out",
            mirror: false
        });
    }

    /* ======================================
       TYPED.JS
    ====================================== */

    if (window.Typed) {

        new Typed(".typing-text", {

            strings: [

                "Full Stack Web Developer",

                "Python Programmer",

                "AI Engineer",

                "Frontend Developer",

                "Backend Developer"

            ],

            typeSpeed: 70,

            backSpeed: 45,

            backDelay: 1700,

            loop: true,

            smartBackspace: true

        });

    }

    /* ======================================
       GSAP HERO
    ====================================== */

    if (window.gsap) {

        gsap.registerPlugin(ScrollTrigger);

        const hero = gsap.timeline();

        hero.from(".logo", {

            y: -40,

            opacity: 0,

            duration: .8,

            ease: "power3.out"

        })

            .from(".nav-links li", {

                y: -30,

                opacity: 0,

                stagger: .08,

                duration: .6

            }, "-=.4")

            .from(".hero-tag", {

                opacity: 0,

                y: 30,

                duration: .6

            })

            .from(".hero h1", {

                opacity: 0,

                y: 50,

                duration: .9

            })

            .from(".typing-text", {

                opacity: 0,

                y: 25,

                duration: .6

            })

            .from(".hero-description", {

                opacity: 0,

                y: 35,

                duration: .7

            })

            .from(".hero-buttons .btn", {

                opacity: 0,

                y: 30,

                stagger: .12,

                duration: .6

            })

            .from(".hero-image", {

                opacity: 0,

                scale: .8,

                rotate: -6,

                duration: 1

            });

    }

    /* ======================================
       ABOUT
    ====================================== */

    gsap.from(".about-image", {

        scrollTrigger: {

            trigger: ".about",

            start: "top 75%"

        },

        x: -100,

        opacity: 0,

        duration: 1

    });

    gsap.from(".about-text", {

        scrollTrigger: {

            trigger: ".about",

            start: "top 75%"

        },

        x: 100,

        opacity: 0,

        duration: 1

    });

    /* ======================================
       SKILL CARDS
    ====================================== */

    gsap.from(".skill-card", {

        scrollTrigger: {

            trigger: ".skills"

        },

        y: 70,

        opacity: 0,

        stagger: .18,

        duration: .8

    });

    /* ======================================
       SERVICE CARDS
    ====================================== */

    gsap.from(".service-card", {

        scrollTrigger: {

            trigger: ".services"

        },

        y: 70,

        opacity: 0,

        stagger: .15

    });

    /* ======================================
       PROJECT CARDS
    ====================================== */

    gsap.from(".project-card", {

        scrollTrigger: {

            trigger: ".projects"

        },

        y: 80,

        opacity: 0,

        stagger: .18

    });

    /* ======================================
       TIMELINE
    ====================================== */

    gsap.from(".timeline-item", {

        scrollTrigger: {

            trigger: ".experience"

        },

        opacity: 0,

        x: -80,

        stagger: .2

    });

    /* ======================================
       STATISTICS
    ====================================== */

    gsap.from(".stat-card", {

        scrollTrigger: {

            trigger: ".statistics"

        },

        y: 60,

        opacity: 0,

        stagger: .15

    });

    /* ======================================
       TESTIMONIALS
    ====================================== */

    gsap.from(".testimonial-card", {

        scrollTrigger: {

            trigger: ".testimonials"

        },

        opacity: 0,

        y: 80,

        stagger: .2

    });

    /* ======================================
       CONTACT
    ====================================== */

    gsap.from(".contact-wrapper", {

        scrollTrigger: {

            trigger: ".contact"

        },

        opacity: 0,

        y: 60

    });

    /* ======================================
       FOOTER
    ====================================== */

    gsap.from(".footer", {

        scrollTrigger: {

            trigger: ".footer"

        },

        opacity: 0,

        y: 50

    });

    /* ======================================
       BUTTON MICRO INTERACTION
    ====================================== */

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            gsap.to(btn, {

                scale: 1.05,

                duration: .25

            });

        });

        btn.addEventListener("mouseleave", () => {

            gsap.to(btn, {

                scale: 1,

                duration: .25

            });

        });

    });

    /* ======================================
       SOCIAL ICONS
    ====================================== */

    document.querySelectorAll(".social-icons a").forEach(icon => {

        icon.addEventListener("mouseenter", () => {

            gsap.to(icon, {

                y: -8,

                duration: .25

            });

        });

        icon.addEventListener("mouseleave", () => {

            gsap.to(icon, {

                y: 0,

                duration: .25

            });

        });

    });

    /* ======================================
       HERO IMAGE
    ====================================== */

    gsap.to(".hero-image", {

        y: -18,

        repeat: -1,

        yoyo: true,

        duration: 3,

        ease: "sine.inOut"

    });

});