import { musicQuotes } from "./quotes.js";

const quote = document.querySelector("#quote");
const randomQuote = musicQuotes[Math.floor(Math.random() * musicQuotes.length)];
quote.innerHTML = randomQuote;