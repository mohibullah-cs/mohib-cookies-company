
// Mohib Cookies Company — mobile menu and order interactions
"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  document.addEventListener("click", (event) => {
    const insideMenu = navigation.contains(event.target) || menuToggle.contains(event.target);
    if (!insideMenu && navigation.classList.contains("open")) {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Product links prepare a WhatsApp message.
const whatsappLink = document.querySelector("#whatsapp-link");

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    const message = `Hello! I would like to order ${link.dataset.product} from Mohib Cookies Company.`;

    if (whatsappLink) {
      whatsappLink.href = `https://wa.me/923400559956?text=${encodeURIComponent(message)}`;
    }
  });
});
