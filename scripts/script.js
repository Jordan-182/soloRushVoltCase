/* Code used to add a smooth scroll to the nav links */

document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  });
});
