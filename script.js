AOS.init({
  duration: 1200,
  once: false,        // 👈 ini yang penting, biar animasi bisa berulang
  mirror: true,       // animasi juga aktif saat scroll ke atas
  offset: 100         // jarak sebelum elemen mulai animasi
});


window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("shadow-sm");
  }
});


  document.addEventListener("DOMContentLoaded", function() {
    const nameText = "Sandra Esa Gemilang";
    const roleTexts = ["Web Developer", "UI\UX Desain", "Junior Coder"];
    
    const nameEl = document.getElementById("typing-name");
    const roleEl = document.getElementById("typing-role");

    let nameIndex = 0;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Ketik nama terlebih dahulu
    function typeName() {
      if (nameIndex < nameText.length) {
        nameEl.textContent += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 100);
      } else {
        setTimeout(typeRole, 800);
      }
    }

    // Animasi ketik dan hapus untuk profesi
    function typeRole() {
      const currentText = roleTexts[roleIndex];
      if (isDeleting) {
        roleEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        roleEl.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        speed = 1500; // jeda sebelum menghapus
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roleTexts.length;
        speed = 500;
      }

      setTimeout(typeRole, speed);
    }

    typeName();
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".side-navbar .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
  particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#3b82f6" },
    shape: { type: "circle" },
    opacity: { value: 0.4, random: true },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out",
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#60a5fa",
      opacity: 0.3,
      width: 1,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 3 },
    },
  },
  retina_detect: true,
});
// Pastikan AOS bekerja optimal di mobile dan tidak perlu refresh
window.addEventListener("load", () => {
  AOS.refresh(); // memastikan posisi elemen dihitung ulang setelah semua elemen muncul
});

// Kadang saat resize (misalnya dari portrait ke landscape), animasi bisa bug
window.addEventListener("resize", () => {
  AOS.refreshHard(); // paksa AOS hitung ulang semua posisi elemen
});
