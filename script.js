

document.addEventListener("DOMContentLoaded", () => {

    console.log("🍓 Welcome to Frutageo!");

    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.animation = `cardReveal 0.7s ease ${index * 0.15}s forwards`;
    });

});
