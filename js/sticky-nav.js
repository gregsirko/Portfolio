let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
    // scrolling down → hide header
    header.classList.add("hidden");
    } else {
    // scrolling up → show header
    header.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});