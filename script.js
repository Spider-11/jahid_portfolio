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
    status: "Live on Google Play Store",
    title: "DARZI — Tailor Booking Application",
    overview: "DARZI is a full-featured e-commerce platform built to digitize the bespoke tailoring industry. The app bridges the gap between local tailors/vendors and customers looking for custom-stitched clothing, enabling end-to-end product discovery, measurement input, order placement, and secure payment — all from a single mobile experience. The platform handles complex product variations, multi-vendor catalogs, and real-time buyer-seller communication.",
    keyFeatures: [
      { title: "Product Listing & Cart Management", desc: "Developed comprehensive product listing screens with filters, detailed item views, and a sophisticated cart management system that supports a smooth end-to-end shopping flow from browsing to checkout." },
      { title: "Secure Authentication & Profiles", desc: "Implemented secure user authentication with profile management, ensuring safe and personalized access for every user with proper session handling and data protection." },
      { title: "Razorpay Payment Integration", desc: "Integrated Razorpay payment gateway to enable secure, seamless online transactions with support for multiple payment methods including UPI, cards, and net banking." },
      { title: "Real-time Vendor Chat", desc: "Built a real-time chat system enabling seamless communication between vendors and customers — allowing buyers to discuss measurements, fabric choices, and order details directly within the app." },
      { title: "Cross-platform Optimization", desc: "Optimized UI performance and implemented fully responsive design to deliver a smooth, native-feeling experience across both Android and iOS devices." }
    ],
    contribution: "I architected and developed the entire Flutter frontend from the ground up. This included building dynamic product listing screens with search and filter capabilities, a sophisticated multi-item cart management system, and a complete order placement workflow. I integrated Razorpay for handling secure transactions across multiple payment modes, built a real-time chat module for direct buyer-seller communication, and implemented a robust authentication system with personalized user profiles. Every screen was built with responsive design principles, ensuring pixel-perfect rendering across Android and iOS devices of all sizes.",
    ux: "The UX strategy centered on eliminating friction at every stage of the shopping journey. I designed the product discovery flow with clear visual hierarchy and contextual call-to-actions that guide users naturally from browsing to purchasing. The cart experience was simplified to show real-time price updates and delivery estimates. The vendor chat feature was designed as a floating, always-accessible element — reducing buyer hesitation by enabling instant clarification on sizing, fabric, and customization options before committing to an order. Empty states, loading skeletons, and error recovery flows were all carefully planned to maintain user confidence throughout.",
    impact: "Successfully launched on Google Play Store, serving real customers with active vendor-buyer transactions and repeat orders.",
    tags: ["Flutter", "Dart", "Razorpay", "Real-time Chat", "REST APIs", "Authentication", "Responsive UI", "E-commerce", "Android", "iOS"],
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
    title: "FREQUIP — Furniture Rental Application",
    overview: "FREQUIP is a furniture rental management platform designed to make renting furniture as simple as ordering food. The app provides users with a complete rental lifecycle experience — from browsing a curated furniture catalog and booking items, to tracking active subscriptions, managing payments, and viewing detailed invoices. Built for both Android and iOS, the app was published on both Google Play Store and Apple App Store.",
    keyFeatures: [
      { title: "Product Listings & Booking Workflow", desc: "Implemented comprehensive product listings with detailed item views, high-quality imagery, pricing breakdowns, and a streamlined booking workflow for furniture rental services." },
      { title: "Dynamic REST API Integration", desc: "Integrated REST APIs to manage dynamic product data, real-time booking status, order workflows, and subscription lifecycle updates — ensuring the app always reflects the latest data." },
      { title: "Material Design UI", desc: "Designed responsive and user-friendly interfaces following Material Design principles, creating a consistent visual language across all screens with smooth transitions and intuitive navigation." },
      { title: "Secure Auth & Profile Management", desc: "Implemented secure user authentication with personalized profile management, order history tracking, and saved preferences for a tailored user experience." },
      { title: "Cross-platform Deployment", desc: "Optimized application performance for both platforms and managed the complete deployment pipeline — from build configuration and signing to store listing and publishing on both Google Play Store and Apple App Store." }
    ],
    contribution: "I led the complete mobile development lifecycle using Flutter. This involved building complex views for the product catalog with filtering and sorting capabilities, detailed item pages with rental pricing tiers, and a multi-step booking workflow. I integrated REST APIs for dynamic data management including product availability, booking confirmations, and order status tracking. The authentication system supports secure login with profile personalization. I handled the entire deployment process end-to-end, including build optimization, app signing, store asset preparation, and successful publishing on both the Apple App Store and Google Play Store.",
    ux: "The UX was designed around the principle of 'rental transparency.' I created clean, dashboard-style interfaces that prioritize rental status visibility, upcoming payment dates, and subscription timeline clarity. Financial data and pricing breakdowns were structured into highly readable, modular cards that users can scan at a glance. The booking flow was reduced to minimal steps with progress indicators, and I implemented visual feedback at every interaction point — from adding items to confirming a booking — to maintain user confidence throughout the rental process.",
    impact: "Successfully deployed on both Google Play Store and Apple App Store, making it one of the few furniture rental apps available cross-platform with a unified experience.",
    tags: ["Flutter", "Dart", "REST APIs", "Material Design", "Authentication", "Play Store", "App Store", "Cross-platform", "Responsive UI"],
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
    status: "Live on Google Play Store",
    title: "HRMS JalPay — Water & Sanitation Billing System",
    overview: "HRMS JalPay is an enterprise-grade utility management application built for water and sanitation departments. It replaces paper-based billing with a complete digital solution — enabling field workers and administrators to generate bills on the spot, track payments in real-time, search consumer databases instantly, and maintain comprehensive billing histories. The app is designed to operate reliably in field conditions with varying network connectivity and is used by multiple user roles across the organization.",
    keyFeatures: [
      { title: "Digital Bill Generation", desc: "Designed and implemented a complete digital bill generation system with automated meter rating calculations, payment tracking, and instant bill delivery — replacing manual paper-based processes entirely." },
      { title: "Modular Backend Integration", desc: "Integrated backend services with modular, reusable UI components to improve scalability and maintainability — allowing new billing features to be added without disrupting existing workflows." },
      { title: "Consumer Data Management", desc: "Built a comprehensive consumer data management system with high-performance search functionality, detailed billing history tracking, and consumer profile management for thousands of records." },
      { title: "Role-based Access Control", desc: "Implemented strict role-based login (RBAC) ensuring secure access control for different user types — from field meter readers and billing clerks to supervisors and administrators — each with appropriate permissions." },
      { title: "Field-optimized Performance", desc: "Optimized app performance for reliable operation in challenging field conditions, including low-bandwidth environments, ensuring smooth performance with large datasets and complex billing calculations." }
    ],
    contribution: "I engineered a highly reliable mobile application purpose-built for field deployment. I implemented the complete digital bill generation workflow with automated meter rating calculations, real-time payment tracking through API integration, and a high-performance consumer search index capable of handling thousands of records instantly. The backend integration was built with a modular architecture, using reusable UI components that allow the system to scale as new billing features are needed. I also architected the role-based access control (RBAC) system supporting multiple user tiers — field workers, billing clerks, supervisors, and administrators — each with precisely scoped permissions. The app was optimized for reliable operation in low-bandwidth field conditions and successfully deployed on Google Play Store.",
    ux: "Recognizing that field workers operate in challenging environments with limited time and often harsh lighting conditions, I heavily optimized the UI for speed, high contrast readability, and generously sized tap targets. The consumer search interface was designed for instant lookups via partial name or ID matching — a field worker can find any consumer in under 2 seconds. Billing record views were structured for rapid scanning rather than detailed reading, using color-coded status indicators, bold typography for amounts due, and clear visual separation between paid and unpaid records. The bill generation flow was reduced to the absolute minimum steps required, with smart defaults and auto-fill where possible.",
    impact: "Deployed on Google Play Store and actively used by utility department staff for daily billing operations, replacing legacy paper-based systems.",
    tags: ["Flutter", "Dart", "REST APIs", "RBAC", "Enterprise", "Digital Billing", "Consumer Search", "Field Operations", "Play Store"],
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
    status: "Live on Play Store & Apple App Store",
    title: "TrollX — Ride-Hailing Platform (3 Apps)",
    overview: "TrollX is an ambitious, full-scale ride-hailing ecosystem comprising three synchronized applications — Customer, Driver, and Fleet/Admin Panel. The platform delivers a complete Uber-like experience with real-time ride booking, live GPS tracking via Google Maps, fare estimation, in-app wallet, and comprehensive fleet management dashboards. Each app was purpose-built for its specific user role, with distinct UI/UX patterns optimized for that role's workflow. The system uses GetX for reactive state management across all three applications.",
    keyFeatures: [
      { title: "🚗 Customer App — Ride Booking & Tracking", desc: "Developed a complete ride booking system with real-time driver tracking on Google Maps, ride request flow, fare estimation engine, trip history, and integrated payment gateway with wallet functionality for seamless transactions." },
      { title: "🚕 Driver App — Ride Management & Earnings", desc: "Built the driver-side experience including ride request acceptance/rejection with live timer handling, real-time location updates with navigation support, an earnings dashboard, ride history management, and optimized background location services for accurate tracking." },
      { title: "📊 Fleet / Admin Panel — Operations & Analytics", desc: "Designed a comprehensive fleet management system handling multiple drivers and operations — including driver onboarding workflows, approval processes, ride monitoring, analytics dashboards tracking ride statistics and revenue, and role-based access control for admin users." },
      { title: "Google Maps Integration", desc: "Integrated Google Maps SDK for high-precision live driver tracking, real-time route plotting, ETA calculations, and location-based ride matching — forming the core backbone of the entire platform." },
      { title: "GetX State Management", desc: "Managed application state across all three apps using GetX, delivering reactive updates, dependency injection, and smooth navigation to ensure a responsive user experience even during complex real-time operations." }
    ],
    contribution: "I was responsible for building the core mechanics across all three applications in this ride-hailing ecosystem. For the Customer App, I developed the complete ride booking flow with real-time driver tracking using Google Maps, fare estimation algorithms, trip history, and integrated payment gateway with wallet functionality. For the Driver App, I built the ride acceptance/rejection system with live timer handling, real-time location updates with navigation support, an earnings and ride history dashboard, and optimized background location services for accurate tracking without excessive battery drain. For the Fleet/Admin Panel, I designed the fleet management system for handling multiple drivers, implemented driver onboarding and approval workflows, built an analytics dashboard tracking ride statistics and revenue, and architected role-based authentication for different admin roles. All three apps use GetX for state management, ensuring reactive data flow and smooth user experience.",
    ux: "I tailored the user experience to the distinct psychological needs of each user role. The Customer App features a minimalist, map-centric booking flow designed for instant gratification — users can book a ride in under 30 seconds. The Driver App was built with high-contrast, distraction-free trip acceptance screens optimized for use while driving, with large buttons, clear status indicators, and audio cues. The timer-based ride acceptance creates urgency without causing stress. The Fleet/Admin Panel provides dense but digestible analytical dashboards where fleet owners can monitor operations at a glance — with color-coded driver statuses, revenue charts, and ride heatmaps. Each app's navigation was designed around its primary use case: quick actions for customers, status-first for drivers, and data-first for admins.",
    impact: "Successfully deployed on both Google Play Store and Apple App Store.",
    tags: ["Flutter", "Dart", "Google Maps", "GetX", "Wallet", "Payments", "Real-time Tracking", "Fleet Management", "Analytics Dashboard", "RBAC", "Background Services", "Multi-app Platform"],
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
const modalOverview = document.getElementById("modalOverview");
const modalFeatures = document.getElementById("modalFeatures");
const modalContribution = document.getElementById("modalContribution");
const modalUx = document.getElementById("modalUx");
const modalImpact = document.getElementById("modalImpact");
const modalImpactWrap = document.getElementById("modalImpactWrap");
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

    // Overview
    if (modalOverview) {
      modalOverview.textContent = data.overview || "";
    }

    // Key Features
    if (modalFeatures && data.keyFeatures) {
      modalFeatures.innerHTML = data.keyFeatures
        .map(
          (f) => `<div class="feature-item">
            <h4>${f.title}</h4>
            <p>${f.desc}</p>
          </div>`
        )
        .join("");
    }

    modalContribution.textContent = data.contribution;
    modalUx.textContent = data.ux;

    // Impact
    if (modalImpact && data.impact) {
      modalImpact.textContent = data.impact;
      if (modalImpactWrap) modalImpactWrap.style.display = "";
    } else if (modalImpactWrap) {
      modalImpactWrap.style.display = "none";
    }

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
