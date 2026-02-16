/* =========================
   TYPING ANIMATION
========================= */
const text = ["Web Developer", "C++ Programmer", "Problem Solver"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 120);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 80);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

/* =========================
   DARK / LIGHT MODE
========================= */
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleBtn.innerHTML = document.body.classList.contains("dark")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});

/* =========================
   PROJECT FILTER
========================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projects.forEach(project => {
            if (filter === "all" || project.classList.contains(filter)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});

/* =========================
   SKILL BAR ANIMATION
========================= */
const skillSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

function showProgress() {
    progressBars.forEach(bar => {
        const value = bar.dataset.progress;
        bar.style.width = value + "%";
    });
}

function hideProgress() {
    progressBars.forEach(bar => {
        bar.style.width = "0%";
    });
}

window.addEventListener("scroll", () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

/* =========================
   SCROLL TO TOP
========================= */
const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* =========================
   CONTACT FORM VALIDATION
========================= */
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        formMsg.textContent = "⚠ Please fill in all fields.";
        formMsg.style.color = "red";
        return;
    }

    if (!emailInput.value.includes("@")) {
        formMsg.textContent = "⚠ Enter a valid email.";
        formMsg.style.color = "red";
        return;
    }

    formMsg.textContent = "✅ Message sent successfully!";
    formMsg.style.color = "green";

    form.reset();
});
