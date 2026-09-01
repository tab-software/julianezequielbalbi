// ============================================================
// JULIÁN BALBI — PORTFOLIO
// Todo lo que quieras personalizar rápidamente está marcado.
// ============================================================

// 1) CAMBIÁ TU RACHA DE DUOLINGO ACÁ:
// ============================================================
// 🔥 RACHA DE DUOLINGO
// ============================================================

// Tu racha actual: 1678 días
const DUOLINGO_START_STREAK = 1679;

// Fecha desde la cual empieza a sumar +1.
// Mañana: 26 de agosto de 2026
const DUOLINGO_START_DATE = new Date("2026-08-26T00:00:00");

function calculateDuolingoStreak() {
  const today = new Date();

  // Ponemos ambas fechas a medianoche
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const startDate = new Date(
    DUOLINGO_START_DATE.getFullYear(),
    DUOLINGO_START_DATE.getMonth(),
    DUOLINGO_START_DATE.getDate()
  );

  // Diferencia entre hoy y el día inicial
  const difference =
    todayDate.getTime() - startDate.getTime();

  const daysPassed = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  // Si todavía no llegó el 26/08/2026, mostrar 1678
  if (daysPassed < 0) {
    return DUOLINGO_START_STREAK;
  }

  // Desde el 26/08 empieza a sumar
  return DUOLINGO_START_STREAK + daysPassed + 1;
}

const DUOLINGO_STREAK = calculateDuolingoStreak();

document.getElementById("streakNumber").textContent =
  DUOLINGO_STREAK.toLocaleString("es-AR");

// 2) SI TENÉS EL LINK DE DIAGONALES STUDIOS, PEGALO ACÁ:
const DIAGONALES_STUDIOS_URL = "";
const diagonalesButton = document.querySelector("[data-diagonales-link]");

if (diagonalesButton) {
  diagonalesButton.addEventListener("click", () => {
    if (DIAGONALES_STUDIOS_URL.trim()) {
      window.open(DIAGONALES_STUDIOS_URL, "_blank", "noopener");
    } else {
      alert("Abrí script.js y colocá el link de Diagonales Studios en DIAGONALES_STUDIOS_URL.");
    }
  });
}

// Menú mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Header con efecto al hacer scroll
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

// Brillo suave siguiendo el mouse
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

// Animaciones de entrada
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));


