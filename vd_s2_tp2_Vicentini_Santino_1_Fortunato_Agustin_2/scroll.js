const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("data-scroll");
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({behavior: "smooth"});
    });
});

