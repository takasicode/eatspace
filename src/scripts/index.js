import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/scroll-bar.scss";
import "../styles/skip-link.scss";
import "../styles/nav-bar.scss";
import "../styles/hero.scss";
import "../styles/content.scss";
import "../styles/scroll-top.scss";
import "../styles/footer.scss";
import "../styles/responsive.scss";
import("../data/DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let data = jsonData["restaurants"];
  let dataList = "";

  const dataSlice = [];

  for (let i = 0; i < 6; i++) {
    dataSlice.push(data[i]);
  }

  dataSlice.forEach(function (data) {
    dataList += `
      <div class="list_items">
        <div class="list_items_images">
          <div class="city">${data["city"]}</div>
          <img class="list_items_images" src="${data["pictureId"]}" alt="${data["name"]}" title="${data["name"]}">
        </div>
        <div class="list_items_content">
          <p class="list_items_rate">
            Rate : 
            <span class="list_items_rate_value">${data["rating"]}</span>
          </p>
            <h2 class="list_items_title"><a href="#">${data["name"]}</a></h2>
            <div class="list_items_desc">${data["description"].slice(0, 35)}...</div>
        </div>
      </div>
    `;
  });
  document.querySelector("#list").innerHTML = dataList;
});

// Menu
const drawer = document.querySelector("#drawer");
const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});

// Scroll to top
const scrollToTopBtn = document.getElementById("scroll_to_top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Footer
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
