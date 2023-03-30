// const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

// const formEl = document.querySelector("form");
// const searchInputEl = document.getElementById("search-input");
// const searchResultsEl = document.querySelector(".search-results");
// const showMoreButtonEl = document.getElementById("show-more-button");

// let inputData = "";
// let page = 1;

// async function searchImages() {
//   inputData = searchInputEl.value;
//   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   if (page === 1) {
//     searchResultsEl.innerHTML = "";
//   }

//   const results = data.results;

//   results.map((result) => {
//     const imageWrapper = document.createElement("div");
//     imageWrapper.classList.add("search-result");
//     const image = document.createElement("img");
//     image.src = result.urls.small;
//     image.alt = result.alt_description;
//     const imageLink = document.createElement("a");
//     imageLink.href = result.links.html;
//     imageLink.target = "_blank";
//     imageLink.textContent = result.alt_description;

//     imageWrapper.appendChild(image);
//     imageWrapper.appendChild(imageLink);
//     searchResultsEl.appendChild(imageWrapper);
//   });

//   page++;

//   if (page > 1) {
//     showMoreButtonEl.style.display = "block";
//   }
// }

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   page = 1;
//   searchImages();
// });

// showMoreButtonEl.addEventListener("click", () => {
//   searchImages();
// });

class ImageSearch {
  constructor(
    formSelector,
    inputSelector,
    resultsSelector,
    showMoreSelector
  ) {
    this.formEl = document.querySelector(formSelector);
    this.searchInputEl = document.getElementById(inputSelector);
    this.searchResultsEl = document.querySelector(resultsSelector);
    this.showMoreButtonEl = document.getElementById(showMoreSelector);

    this.accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
    this.inputData = "";
    this.page = 1;

    this.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      this.page = 1;
      this.searchImages();
    });

    this.showMoreButtonEl.addEventListener("click", () => {
      this.searchImages();
    });
  }

  async searchImages() {
    this.inputData = this.searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${this.page}&query=${this.inputData}&client_id=${this.accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (this.page === 1) {
      this.searchResultsEl.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-result");
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      this.searchResultsEl.appendChild(imageWrapper);
    });

    this.page++;

    if (this.page > 1) {
      this.showMoreButtonEl.style.display = "block";
    }
  }
}

// Instantiate the ImageSearch class and pass the element selectors
const imageSearch = new ImageSearch(
  "form",
  "search-input",
  ".search-results",
  "show-more-button"
);
