// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// Active Nav Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Contact Form (Formspree)
const contactForm = document.querySelector("form");

if (contactForm && contactForm.action.includes("formspree")) {
    contactForm.addEventListener("submit", function (e) {
        // Let Formspree handle submission (no JS interference)
    });
}

// Back To Top Button
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// CV Modal Functionality (Fixed)
const modal = document.getElementById("cvModal");
const closeModal = document.querySelector(".close-modal");
const cvName = document.getElementById("cvName");
const cvSubject = document.getElementById("cvSubject");
const cvBio = document.getElementById("cvBio");
const cvQual = document.getElementById("cvQual");
const cvImage = document.getElementById("cvImage");

document.querySelectorAll(".view-cv").forEach(btn => {
    btn.addEventListener("click", function () {
        const card = this.closest(".principal-card, .teacher-card");

        if (!card) return;

        cvName.textContent = card.dataset.name || card.querySelector("h2, h4")?.textContent || "";
        cvSubject.textContent = card.dataset.subject || "";
        cvBio.textContent = card.dataset.bio || "";
        cvQual.textContent = card.dataset.qual || "";

        const img = this.dataset.cv || card.dataset.cv;
        if (img) {
            cvImage.src = img;
            cvImage.style.display = "block";
        } else {
            cvImage.style.display = "none";
        }

        modal.style.display = "flex";
    });
});

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// Welcome Screen Logic (Clean & Reliable)
window.addEventListener("load", () => {
    const welcome = document.getElementById("welcome-screen");
    const hero = document.getElementById("home");

    if (!welcome || !hero) return;

    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    hero.style.display = "none";

    setTimeout(() => {
        welcome.classList.add("fade-out");

        setTimeout(() => {
            welcome.style.display = "none";

            hero.style.display = "flex";  // show excellence section

            document.body.style.overflow = "auto";
            window.scrollTo(0, 0);
        }, 1500);
 
    }, 2000);
});