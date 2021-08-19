const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    toggleBtn.parentNode.classList.toggle("active");
  });
});
