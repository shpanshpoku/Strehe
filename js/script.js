document.addEventListener("DOMContentLoaded", () => {
  // Click event for booking buttons
  const buttons = document.querySelectorAll(".book-button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const name = button.closest(".psychologist-card")
                        .querySelector(".psychologist-name")?.innerText || "Psikolog";
      alert(`Ju keni zgjedhur të rezervoni një konsultim me ${name}.`);
    });
  });

  // Reveal on scroll animation
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(section => observer.observe(section));
});
