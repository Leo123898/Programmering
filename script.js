document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.transform = "translateY(0)";
    card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px)";
      card.style.boxShadow = "0 18px 40px rgba(27, 42, 71, 0.14)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 12px 30px rgba(27, 42, 71, 0.08)";
    });

    card.setAttribute("data-order", String(index + 1));
  });
});
