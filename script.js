const root = document.documentElement;
const themeButton = document.getElementById("themeButton");
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const dialog = document.getElementById("auditDialog");
const newAuditButton = document.getElementById("newAuditButton");
const form = dialog.querySelector("form");
const formMessage = document.getElementById("formMessage");

// Theme toggle: starts light; persists the visitor's choice when storage is available.
const savedTheme = localStorage.getItem("govaccess-theme");
if (savedTheme === "dark") root.dataset.theme = "dark";
updateThemeButton();

themeButton.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("govaccess-theme", root.dataset.theme);
  updateThemeButton();
});

function updateThemeButton() {
  const isDark = root.dataset.theme === "dark";
  themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeButton.title = isDark ? "Switch to light theme" : "Switch to dark theme";
}

menuButton.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.addEventListener("click", (event) => {
  if (window.innerWidth <= 768 && sidebar.classList.contains("is-open") &&
      !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

newAuditButton.addEventListener("click", () => {
  formMessage.textContent = "";
  if (typeof dialog.showModal === "function") dialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = document.getElementById("websiteUrl");
  if (!url.checkValidity()) {
    url.reportValidity();
    return;
  }
  formMessage.textContent = `Demo audit prepared for ${url.value}. Connect your audit API to run a real scan.`;
  form.reset();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

// Prevent the mobile navigation from remaining open after switching to desktop.
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
