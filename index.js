// const API_KEY = "33780e04ab8b4142bf17417cda780f46";
const url = `https://newsapi.org/v2/everything?q=`;

const newsImages = new Array(4);
const newsTitle = new Array(4);
const newsDescription = new Array(4);
const newsSource = new Array(4);
for (var i = 0; i < 4; i++) {
  newsImages[i] = document.querySelector(`#newsImage-${i + 1}`);
  newsTitle[i] = document.querySelector(`#newsTitle-${i + 1}`);
  newsDescription[i] = document.querySelector(`#newsDescription-${i + 1}`);
  newsSource[i] = document.querySelector(`#newsSource-${i + 1}`);
}

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "33780e04ab8b4142bf17417cda780f46",
  },
};

const getNews = (category) => {
  News.innerHTML = category;
  fetch(url + category, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      for (var i = 0; i < 4; i++) {
        newsImages[i].src =
          response.articles[i]["urlToImage"] != null
            ? response.articles[i]["urlToImage"]
            : "./newspaper.png";
        newsTitle[i].innerHTML = response.articles[i]["title"];
        newsDescription[i].innerHTML = response.articles[i]["content"];
        newsSource[i].href = response.articles[i]["url"];
      }
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getNews(category.value);
});

window.addEventListener("load", () => getNews("World"));
