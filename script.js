// This function loads pokemon data from the Pokemon API
function fetchQuoteJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios.get(url)
    .then(function(response) {
      return response.data[0]; // response.data instead of response.json() with fetch
    })
    .then(function(quote) {
      console.log('data decoded from JSON:', quote);

      // Build a block of HTML
      const quoteHtml = `
        <p><strong>${quote.character}</strong></p>
        <img src="${quote.image}" />
        <p>${quote.quote}</p>
      `;
      document.querySelector('#quote-part').innerHTML = quoteHtml;
    });
}

fetchQuoteJSON();


document.getElementById('myBtn').addEventListener('click', function fetchQuoteJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios.get(url)
    .then(function(response) {
      return response.data[0]; // response.data instead of response.json() with fetch
    })
    .then(function(quote) {
      console.log('data decoded from JSON:', quote);

      // Build a block of HTML
      const quoteHtml = `
        <p><strong>${quote.character}</strong></p>
        <img src="${quote.image}" />
        <p>${quote.quote}</p>
      `;
      document.querySelector('#quote-part').innerHTML = quoteHtml;
    });
})
