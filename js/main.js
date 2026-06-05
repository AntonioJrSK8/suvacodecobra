(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const header = document.querySelector(".header");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxFechar = document.querySelector(".lightbox-fechar");
  const galeriaItens = document.querySelectorAll(".galeria-item");
  const anoEl = document.getElementById("ano");
  let ultimoFoco = null;

  if (anoEl) anoEl.textContent = new Date().getFullYear();

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const aberto = navLinks.classList.toggle("aberto");
      navToggle.classList.toggle("ativo", aberto);
      navToggle.setAttribute("aria-expanded", aberto);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("aberto");
        navToggle.classList.remove("ativo");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 40 ? "0 4px 24px rgba(0,0,0,0.4)" : "none";
  });

  function abrirLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    ultimoFoco = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxFechar?.focus();
  }

  function fecharLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.style.overflow = "";
    lightboxImg.src = "";
    ultimoFoco?.focus();
  }

  galeriaItens.forEach((item) => {
    item.addEventListener("click", () => {
      abrirLightbox(item.dataset.src, item.dataset.alt || "");
    });
  });

  if (lightboxFechar) lightboxFechar.addEventListener("click", fecharLightbox);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) fecharLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) fecharLightbox();
  });
})();
