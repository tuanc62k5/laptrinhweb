document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.querySelector(".quantity-control input");
  const decreaseButton = document.querySelector(
    ".quantity-control button:first-child"
  );
  const increaseButton = document.querySelector(
    ".quantity-control button:last-child"
  );

  // Xử lý sự kiện khi nhấn nút giảm
  decreaseButton.addEventListener("click", function () {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  });

  // Xử lý sự kiện khi nhấn nút tăng
  increaseButton.addEventListener("click", function () {
    let currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
  });
});

// nav
const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navigation");
menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
