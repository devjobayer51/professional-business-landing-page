const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => nav?.classList.remove("is-open"));
});
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Project enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
    );
    document.getElementById("formNote").textContent = "Opening your email app with the enquiry details…";
    window.location.href = `mailto:hello@novastudio.example?subject=${subject}&body=${body}`;
  });
}