const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const cursorGlow = document.querySelector(".cursor-glow");
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navAnchors.forEach((anchor) => {
        anchor.classList.toggle("active", anchor.getAttribute("href") === `#${id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));

const projectData = {
  darzi: {
    status: "Live on Play Store",
    title: "DARZI — E-commerce App",
    goal: "DARZI was conceived as a premium e-commerce platform tailored for custom clothing. The primary objective was to digitize the bespoke tailoring experience, allowing users to browse exclusive vendor catalogs, customize their measurements, and place highly specific orders with confidence. The platform needed to handle complex product variations and direct vendor communication seamlessly.",
    contribution:
      "I architected the entire Flutter frontend, implementing dynamic product listing screens, a sophisticated cart management system, and secure order placement flows. I integrated Razorpay for secure transactions, built a real-time chat feature for direct buyer-seller communication, and ensured a fully responsive UI that adapts flawlessly across device sizes.",
    ux:
      "To maximize user retention, I focused on a frictionless shopping flow from initial product discovery to final checkout. I eliminated choice paralysis by designing clear, contextual call-to-actions, highly visible order status trackers, and an intuitive custom measurement input interface. The direct chat feature was designed as a floating, always-accessible element to reduce buyer hesitation.",
    tags: ["Flutter", "Razorpay", "Real-time Chat", "Authentication", "Responsive UI", "E-commerce"],
    screenshots: [
      "assets/darzi/WhatsApp%20Image%202026-07-06%20at%204.06.46%20PM.jpeg",
      "assets/darzi/WhatsApp%20Image%202026-07-06%20at%204.06.46%20PM%20%281%29.jpeg",
      "assets/darzi/WhatsApp%20Image%202026-07-06%20at%204.06.46%20PM%20%282%29.jpeg",
      "assets/darzi/WhatsApp%20Image%202026-07-06%20at%204.06.46%20PM%20%283%29.jpeg",
      "assets/darzi/WhatsApp%20Image%202026-07-06%20at%204.06.46%20PM%20%284%29.jpeg",
      "assets/darzi/WhatsApp%20Image%202026-07-06%20at%204.06.46%20PM%20%285%29.jpeg"
    ]
  },
  frequip: {
    status: "Live on Google Play Store & Apple App Store",
    title: "FREQUIP — Furniture Rental App",
    goal: "FREQUIP aims to revolutionize the furniture rental market by offering an extremely user-friendly subscription management app. The goal was to give users complete transparency over their active subscriptions, rental timelines, upcoming payments, and digital invoices, all within a sleek, modern mobile application.",
    contribution:
      "I led the mobile development using Flutter, building complex views for subscription lifecycles, active rental status overviews, and detailed invoice generation. I developed secure, upfront payment workflows, robust user authentication, and managed the end-to-end deployment process to both the Apple App Store and Google Play Store.",
    ux:
      "UX was paramount. I designed clean, dashboard-style interfaces that prioritize rental status visibility and upcoming payment alerts. Financial data and pricing breakdowns were restructured into highly readable, modular cards. I reduced the cognitive load during the payment process by implementing simplified, step-by-step decision points.",
    tags: ["Flutter", "Rental Dashboard", "Payments", "Authentication", "App Store Deployment"],
    screenshots: [
      "assets/frequip/WhatsApp%20Image%202026-07-06%20at%204.17.02%20PM.jpeg",
      "assets/frequip/WhatsApp%20Image%202026-07-06%20at%204.17.02%20PM%20%281%29.jpeg",
      "assets/frequip/WhatsApp%20Image%202026-07-06%20at%204.17.02%20PM%20%282%29.jpeg",
      "assets/frequip/WhatsApp%20Image%202026-07-06%20at%204.17.03%20PM.jpeg",
      "assets/frequip/WhatsApp%20Image%202026-07-06%20at%204.17.03%20PM%20%281%29.jpeg",
      "assets/frequip/WhatsApp%20Image%202026-07-06%20at%204.17.03%20PM%20%282%29.jpeg",
      "assets/frequip/WhatsApp%20Image%202026-07-06%20at%204.17.04%20PM.jpeg",
      "assets/frequip/WhatsApp%20Image%202026-07-06%20at%204.17.04%20PM%20%281%29.jpeg"
    ]
  },
  jalpay: {
    status: "Live on Play Store",
    title: "JalPay — Water Billing App",
    goal: "JalPay was developed as an enterprise utility solution to modernize water billing. The objective was to empower field-level workers and administrators to seamlessly manage consumer data, generate digital bills on the spot, track offline/online payments, and maintain detailed billing histories without relying on paper records.",
    contribution:
      "I engineered a highly reliable mobile application capable of operating in varied field conditions. I implemented digital bill generation algorithms, real-time payment tracking APIs, and a high-performance consumer search index. I also architected a strict role-based access control (RBAC) system for different tiers of utility employees.",
    ux:
      "Recognizing that field workers operate in challenging environments with limited time, I heavily optimized the UI for speed, high contrast readability, and large tap targets. The search interface was simplified to allow instant lookups via partial names or IDs, and the billing record views were designed to be scanned at a glance rather than read.",
    tags: ["Flutter", "Enterprise Billing", "Consumer Search", "Role-based Access", "Utility App"],
    screenshots: [
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.39%20PM.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.39%20PM%20%281%29.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.39%20PM%20%282%29.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.40%20PM.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.40%20PM%20%281%29.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.40%20PM%20%282%29.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.41%20PM.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.41%20PM%20%281%29.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.41%20PM%20%282%29.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.42%20PM.jpeg",
      "assets/jalpay/WhatsApp%20Image%202026-07-06%20at%204.16.42%20PM%20%281%29.jpeg"
    ]
  },
  trollx: {
    status: "TestFlight / UAT",
    title: "TrollX — Ride-Hailing Platform",
    goal: "TrollX is an ambitious, multi-faceted ride-hailing ecosystem. The overarching goal was to build a trio of robust, synchronized applications (Customer, Driver, and Fleet Manager) that communicate in real-time, providing seamless ride booking, accurate live tracking, and comprehensive financial dashboards for fleet owners.",
    contribution:
      "I was responsible for the core mechanics across all three apps using GetX for state management. I integrated Google Maps for high-precision live driver tracking and route plotting. I built the in-app wallet logic, fare estimation engines, complex driver dispatch algorithms, and the data-heavy fleet monitoring dashboards.",
    ux:
      "I tailored the user experience to the distinct psychological needs of each role. Customers received a minimalist, map-centric booking flow for instant gratification. Drivers were given high-contrast, distraction-free trip acceptance screens optimized for driving. Fleet owners got analytical, dense, but easily digestible financial and operational dashboards.",
    tags: ["Flutter", "Google Maps", "GetX", "Wallet", "Fleet Dashboard"],
    screenshots: [
      "assets/trollx/Preview%207.png",
      "assets/trollx/Preview%208.png",
      "assets/trollx/Preview%2010.png",
      "assets/trollx/Preview%2011.png",
      "assets/trollx/Preview%2012.png",
      "assets/trollx/Preview%2013.jpg",
      "assets/trollx/Preview%2014.jpg",
      "assets/trollx/Preview%2015.jpg",
      "assets/trollx/Preview%2016.jpg",
      "assets/trollx/Preview%2017.jpg",
      "assets/trollx/Preview%2018.jpg",
      "assets/trollx/Preview%20Fleet%207.png",
      "assets/trollx/Preview%20Fleet%208.png",
      "assets/trollx/Preview%20Fleet%209.png",
      "assets/trollx/Preview%20Fleet%2010.png",
      "assets/trollx/Preview%20Fleet%2011.png",
      "assets/trollx/Preview%20Fleet%2012.png"
    ]
  }
};

const modal = document.getElementById("caseModal");
const modalStatus = document.getElementById("modalStatus");
const modalTitle = document.getElementById("modalTitle");
const modalGoal = document.getElementById("modalGoal");
const modalContribution = document.getElementById("modalContribution");
const modalUx = document.getElementById("modalUx");
const modalTags = document.getElementById("modalTags");
const modalGallery = document.getElementById("modalGallery");

document.querySelectorAll(".project-card").forEach((card) => {
  const button = card.querySelector(".case-btn");
  button?.addEventListener("click", () => {
    const key = card.dataset.project;
    const data = projectData[key];
    if (!data) return;

    modalStatus.textContent = data.status;
    modalTitle.textContent = data.title;
    modalGoal.textContent = data.goal;
    modalContribution.textContent = data.contribution;
    modalUx.textContent = data.ux;
    modalTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join("");
    if (modalGallery) {
      modalGallery.innerHTML = data.screenshots
        ? data.screenshots
            .map((image) => `<img src="${image}" alt="${data.title} screenshot" loading="lazy" />`)
            .join("")
        : "";
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const statusEl = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  if (typeof emailjs === 'undefined') {
    statusEl.textContent = "Email service is not configured properly.";
    statusEl.style.color = "red";
    return;
  }

  // Update UI to show sending state
  const originalBtnText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;
  statusEl.textContent = "";

  // Call EmailJS sendForm
  emailjs.sendForm('service_eq26cvb', 'template_0mar3kg', form)
    .then(() => {
      statusEl.textContent = "Message sent successfully!";
      statusEl.style.color = "var(--cyan)";
      form.reset();
    }, (error) => {
      console.error("EmailJS Error:", error);
      statusEl.textContent = "Failed to send message. Please try again.";
      statusEl.style.color = "red";
    })
    .finally(() => {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    });
});

// ── Skill Ring Animation ──────────────────────────────────
(function initSkillRings() {
  const CIRCUMFERENCE = 2 * Math.PI * 52;

  document.querySelectorAll('.skill-card[data-score]').forEach(card => {
    const fill = card.querySelector('.ring-fill');
    if (fill) {
      fill.style.strokeDasharray = CIRCUMFERENCE;
      fill.style.strokeDashoffset = CIRCUMFERENCE;
    }
  });

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      const score = parseInt(card.dataset.score, 10);
      const offset = CIRCUMFERENCE * (1 - score / 100);
      const fill = card.querySelector('.ring-fill');
      const scoreEl = card.querySelector('.score-value');

      if (fill) fill.style.strokeDashoffset = offset;
      if (scoreEl) animateValue(scoreEl, score, 1800);

      skillObserver.unobserve(card);
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.skill-card[data-score]').forEach(card => skillObserver.observe(card));
})();

// ── Counter Animation ─────────────────────────────────────
(function initCounters() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      animateValue(el, target, 1200, suffix);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter[data-target]').forEach(el => counterObserver.observe(el));
})();

function animateValue(element, target, duration, suffix) {
  suffix = suffix || '';
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ── Lightbox Logic ─────────────────────────────────────────
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightboxBtn = document.getElementById("closeLightboxBtn");
const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxModal.classList.add("show");
  lightboxModal.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightboxModal.classList.remove("show");
  lightboxModal.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    lightboxImage.src = ""; // Clear src after animation
  }, 300);
}

// Event Delegation for gallery images
document.getElementById("modalGallery")?.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    openLightbox(e.target.src, e.target.alt);
  }
});

closeLightboxBtn?.addEventListener("click", closeLightbox);
lightboxCloseBtn?.addEventListener("click", closeLightbox);

// Note: Ensure the escape key listener earlier in the file also closes the lightbox if open.
// Since we have an existing window keydown listener, we will just add a new one here, 
// the browser handles multiple listeners just fine.
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightboxModal.classList.contains("show")) {
    closeLightbox();
    event.stopPropagation(); // Stop the event from also closing the case modal immediately
  }
});
