import { homeQuotes } from "./quotes.js";

const quote = document.querySelector("#quote");
const randomQuote = homeQuotes[Math.floor(Math.random() * homeQuotes.length)];
quote.innerHTML = randomQuote;