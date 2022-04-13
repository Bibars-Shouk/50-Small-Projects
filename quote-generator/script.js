const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");

const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const complete = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

let apiQuotes = [];

const newQuote = () => {
  loading();

  const randomIdx = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomIdx];
  authorText.textContent = quote.author ? quote.author : "Unknown";

  quote.text.length > 120
    ? quoteText.classList.add("long-quote")
    : quoteText.classList.remove("long-quote");

  quoteText.textContent = quote.text;
  complete();
};

const getQuotes = async () => {
  loading();
  const apiUri = "https://type.fit/api/quotes";
  try {
    const res = await fetch(apiUri);
    apiQuotes = await res.json();
    newQuote();
  } catch (err) {
    alert("Ops! Something went wrong trying to get your quote :(");
  }
};

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes();
