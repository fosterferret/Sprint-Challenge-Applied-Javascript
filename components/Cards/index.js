// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //Access the articles object and store it in a variable and then the values of the object in an array
        const articlesObject = response.data.articles;
        const articlesArray = Object.values(articlesObject);

        //For each item in the array, loop through it and then loop through its containing items and call the articleCardMaker function on each on
        articlesArray.forEach(article => {
            for (let i = 0; i < article.length; i++) {
                articleCardMaker(article[i]);
            }
        })
    })
    .catch(error => {
        console.log(error);
    })


function articleCardMaker(article) {
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const authorImg = document.createElement('img')
    const span = document.createElement('span')

    headlineDiv.textContent = article.headline;
    authorImg.setAttribute("src", article.authorPhoto);
    span.textContent = `By ${article.authorName}`;

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container')

    imgDiv.appendChild(authorImg);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(span);

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.appendChild(cardDiv);


    return cardsContainer;
}

