if (window.emailjs) {
  emailjs.init({
    publicKey: "service_x7n4nzw"
  });
}

"use strict";

/* ==========================================
   PORTFOLIO SCRIPT
   Author: Ayomide Oloyede
   Version: 2.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     ELEMENTS
  ========================================== */

  const body = document.body;

  const loader = document.getElementById("loader");

  const header = document.querySelector(".header");

  const menuBtn = document.querySelector(".menu-btn");

  const navLinks = document.querySelector(".nav-links");

  const themeToggle = document.getElementById("theme-toggle");

  const backToTop = document.getElementById("backToTop");

  const progressBar = document.querySelector(".progress-bar-scroll");

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

      e.preventDefault();

      emailjs.sendForm(

        "service_x7n4nzw",

        "template_ryasbju",

        this

      )

        .then(() => {

          alert("Message sent successfully!");

          this.reset();

        })

        .catch((error) => {

          alert("Failed to send message.");

          console.log(error);

        });

    });

  }

  const skillBars = document.querySelectorAll(".progress-bar");

  const counters = document.querySelectorAll(".counter");

  const filterButtons = document.querySelectorAll(".filter-btn");

  const projectCards = document.querySelectorAll(".project-card");

  /* ==========================================
     LOADER
  ========================================== */

  window.addEventListener("load", () => {

    if (!loader) return;

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(() => {

      loader.remove();

    }, 600);

  });

  /* ==========================================
     STICKY HEADER
  ========================================== */

  function handleHeader() {

    if (!header) return;

    if (window.scrollY > 60) {

      header.classList.add("sticky");

    } else {

      header.classList.remove("sticky");

    }

  }

  handleHeader();

  window.addEventListener("scroll", handleHeader);

  /* ==========================================
     MOBILE MENU
  ========================================== */

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      menuBtn.classList.toggle("open");

      navLinks.classList.toggle("active");

    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("open");

      });

    });

  }

  /* ==========================================
     SMOOTH SCROLL
  ========================================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

      const target = document.querySelector(link.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({

        behavior: "smooth"

      });

    });

  });

  /* ==========================================
     THEME TOGGLE
  ========================================== */

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {

    body.classList.add("light");

  }

  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      body.classList.toggle("light");

      if (body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

      } else {

        localStorage.removeItem("theme");

      }

    });

  }

  /* ==========================================
     BACK TO TOP
  ========================================== */

  function toggleBackToTop() {

    if (!backToTop) return;

    backToTop.style.display =
      window.scrollY > 400 ? "flex" : "none";

  }

  toggleBackToTop();

  window.addEventListener("scroll", toggleBackToTop);

  if (backToTop) {

    backToTop.addEventListener("click", () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    });

  }

  /* ==========================================
     SCROLL PROGRESS BAR
  ========================================== */

  function updateProgressBar() {

    if (!progressBar) return;

    const total =

      document.documentElement.scrollHeight -

      document.documentElement.clientHeight;

    const progress =

      (window.scrollY / total) * 100;

    progressBar.style.width = progress + "%";

  }

  updateProgressBar();

  window.addEventListener("scroll", updateProgressBar);
  /* ==========================================
   SKILL BAR ANIMATION
========================================== */

  if (skillBars.length > 0) {

    const skillObserver = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const bar = entry.target;

          const value = bar.dataset.progress || "0";

          bar.style.width = value + "%";

          skillObserver.unobserve(bar);

        }

      });

    }, {
      threshold: 0.4
    });

    skillBars.forEach(bar => {

      bar.style.width = "0%";

      skillObserver.observe(bar);

    });

  }

  /* ==========================================
     COUNTER ANIMATION
  ========================================== */

  function animateCounter(counter) {

    const target = parseInt(counter.dataset.target);

    let count = 0;

    const speed = target / 120;

    function update() {

      count += speed;

      if (count < target) {

        counter.textContent = Math.floor(count);

        requestAnimationFrame(update);

      } else {

        counter.textContent = target;

      }

    }

    update();

  }

  if (counters.length > 0) {

    const counterObserver = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          animateCounter(entry.target);

          counterObserver.unobserve(entry.target);

        }

      });

    }, {

      threshold: 0.5

    });

    counters.forEach(counter => {

      counterObserver.observe(counter);

    });

  }

  /* ==========================================
     PROJECT FILTER
  ========================================== */

  if (filterButtons.length > 0) {

    filterButtons.forEach(button => {

      button.addEventListener("click", () => {

        filterButtons.forEach(btn =>

          btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.filter;

        projectCards.forEach(card => {

          if (
            category === "all" ||
            card.dataset.category === category
          ) {

            card.style.display = "block";

            setTimeout(() => {

              card.style.opacity = "1";

              card.style.transform = "scale(1)";

            }, 50);

          } else {

            card.style.opacity = "0";

            card.style.transform = "scale(.9)";

            setTimeout(() => {

              card.style.display = "none";

            }, 250);

          }

        });

      });

    });

  }

  /* ==========================================
     CONTACT FORM
  ========================================== */

  if (contactForm) {

    contactForm.addEventListener("submit", e => {

      e.preventDefault();

      const name = contactForm.querySelector(
        'input[type="text"]'
      );

      const email = contactForm.querySelector(
        'input[type="email"]'
      );

      const message = contactForm.querySelector(
        "textarea"
      );

      if (
        !name.value.trim() ||
        !email.value.trim() ||
        !message.value.trim()
      ) {

        showToast("Please complete all fields.");

        return;

      }

      showToast("Message sent successfully!");

      contactForm.reset();

    });

  }

  /* ==========================================
     TOAST NOTIFICATION
  ========================================== */

  function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {

      toast.classList.add("show");

    }, 50);

    setTimeout(() => {

      toast.classList.remove("show");

      setTimeout(() => {

        toast.remove();

      }, 300);

    }, 3000);

  }

  /* ==========================================
     BUTTON RIPPLE EFFECT
  ========================================== */

  document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

      const ripple = document.createElement("span");

      ripple.className = "ripple";

      const rect = this.getBoundingClientRect();

      ripple.style.left =

        e.clientX - rect.left + "px";

      ripple.style.top =

        e.clientY - rect.top + "px";

      this.appendChild(ripple);

      setTimeout(() => {

        ripple.remove();

      }, 600);

    });

  });
  /* ==========================================
   TYPED.JS
========================================== */

  if (window.Typed && document.querySelector(".typing")) {

    new Typed(".typing", {
      strings: [
        "Full Stack Developer",
        "Python Programmer",
        "AI Engineer",
        "UI/UX Enthusiast"
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1800,
      loop: true
    });

  }

  /* ==========================================
     GSAP ANIMATIONS
  ========================================== */

  if (window.gsap) {

    gsap.from(".hero-title", {
      y: 40,
      opacity: 0,
      duration: 1
    });

    gsap.from(".hero-text", {
      y: 30,
      opacity: 0,
      delay: .2,
      duration: 1
    });

    gsap.from(".hero-buttons .btn", {
      y: 20,
      opacity: 0,
      stagger: .15,
      delay: .5
    });

    gsap.from(".profile-photo", {
      scale: .8,
      opacity: 0,
      duration: 1,
      delay: .6
    });

  }

  /* ==========================================
     AOS
  ========================================== */

  if (window.AOS) {

    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80
    });

  }

  /* ==========================================
     PARALLAX HERO
  ========================================== */

  const hero = document.querySelector(".hero");

  if (hero) {

    hero.addEventListener("mousemove", (e) => {

      const x = (window.innerWidth / 2 - e.pageX) / 40;
      const y = (window.innerHeight / 2 - e.pageY) / 40;

      const image = document.querySelector(".profile-photo");

      if (image) {

        image.style.transform =
          `translate(${x}px, ${y}px)`;

      }

    });

  }

  /* ==========================================
     FADE-IN ON SCROLL
  ========================================== */

  const fadeItems = document.querySelectorAll(".fade-in");

  if (fadeItems.length > 0) {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    }, {

      threshold: .2

    });

    fadeItems.forEach(item => {

      observer.observe(item);

    });

  }

  /* ==========================================
     ACTIVE NAV LINK
  ========================================== */

  const sections = document.querySelectorAll("section[id]");

  function activateNav() {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {

        current = section.getAttribute("id");

      }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

      }

    });

  }

  activateNav();

  window.addEventListener("scroll", activateNav);

  /* ==========================================
     PRELOAD IMAGES
  ========================================== */

  document.querySelectorAll("img").forEach(img => {

    if (img.complete) return;

    img.addEventListener("load", () => {

      img.classList.add("loaded");

    });

  });

  /* ==========================================
     PERFORMANCE
  ========================================== */

  let resizeTimer;

  window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

      updateProgressBar();
      handleHeader();

    }, 150);

  });

  console.log(
    "%cPortfolio Loaded Successfully",
    "color:#3B82F6;font-size:18px;font-weight:bold;"
  );

});