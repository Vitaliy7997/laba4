window.addEventListener("load", function () {
    alert("Ласкаво просимо до Coffee House!");
});

const currentDate = document.getElementById("currentDate");
const coffeeItems = document.querySelectorAll(".coffee-item");

coffeeItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const coffeeName = item.getAttribute("data-name");
        alert("Ви обрали: " + coffeeName);

        coffeeItems.forEach(function (card) {
            card.classList.remove("active-card");
        });

        item.classList.add("active-card");
    });
});

if (currentDate) {
    const today = new Date();
    currentDate.textContent = "Сьогодні: " + today.toLocaleDateString("uk-UA");
}