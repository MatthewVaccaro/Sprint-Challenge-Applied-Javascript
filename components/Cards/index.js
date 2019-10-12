// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const selectContainer = document.querySelector(".cards-container");

function createCards(element) {
  // Create Elements
  const cardContainer = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  //Create Structure
  cardContainer.appendChild(headline);
  cardContainer.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(authorName);

  //Add Content
  headline.textContent = element.headline;
  image.src = element.authorPhoto;
  authorName.textContent = element.authorName;

  //Add Styling
  cardContainer.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  image.classList.add("img");
  authorName.classList.add("span");

  return cardContainer;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function(response) {
    response.data.articles.javascript.forEach(data => {
      selectContainer.appendChild(new createCards(data));
    });

    response.data.articles.bootstrap.forEach(data => {
      selectContainer.appendChild(new createCards(data));
    });

    response.data.articles.technology.forEach(data => {
      selectContainer.appendChild(new createCards(data));
    });
    response.data.articles.jquery.forEach(data => {
      selectContainer.appendChild(new createCards(data));
    });
    response.data.articles.node.forEach(data => {
      selectContainer.appendChild(new createCards(data));
    });
  })
  .catch(function(error) {
    console.log(error);
  });
