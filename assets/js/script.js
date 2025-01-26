const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            quote.style.color = "black";
            quote.innerHTML = data.content;
            author.innerHTML = data.author;
        }).catch(() => {
            quote.innerHTML = "A problem occured, please try again later.";
            quote.style.color = "red";
            author.innerHTML = "The Devs";
        });
}


getquote(api_url);