if (window.IMGS) {
  document.querySelectorAll("img").forEach((img) => {
    const name = (img.getAttribute("src") || "").split("/").pop();
    if (name && window.IMGS[name]) img.src = window.IMGS[name];
  });
}

const intro = document.getElementById("intro");
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("load", () => {
  setTimeout(() => {
    intro.classList.add("is-done");
    intro.setAttribute("aria-hidden", "true");
  }, 2800);
});

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-solid", window.scrollY > 40);
});

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("is-open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
