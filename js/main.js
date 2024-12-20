// nav
const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navigation");
menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
