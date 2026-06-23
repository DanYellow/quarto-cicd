document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar-nav .nav-link");

  links.forEach((link) => {
    if (link.textContent.trim() === "logos") {
      const li = link.parentNode;
      li.innerHTML = `
        <img src="/assets/crns.png" height="30">
        <img src="/assets/ensea.png" height="30">
        <img src="/assets/cy.png" height="30">
      `;

      li.classList.add("logos-container");
    }
  });
});
