let searchInput = document.querySelector("input[name='search-input']"),
  searchLabel = document.querySelector("label[for='search-input']"),
  searchInputMobile = document.querySelector(
    "input[name='search-input-mobile']"
  ),
  searchLabelMobile = document.querySelector(
    "label[for='search-input-mobile']"
  );

searchLabel.onclick = () => {
  searchInput.classList.toggle("search-active");
};

searchLabelMobile.onclick = () => {
  searchInputMobile.classList.toggle("search-active");
};

let menuBtn = document.querySelector("#menu-btn"),
  headerNav = document.querySelector("header nav");

menuBtn.onclick = () => {
  console.log("klik");
  menuBtn.classList.toggle("fa-times");
  headerNav.classList.toggle("active");
};
