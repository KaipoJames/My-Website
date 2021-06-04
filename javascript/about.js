import { aboutQuotes } from "./quotes.js";

const quote = document.querySelector("#quote");
const randomQuote = aboutQuotes[Math.floor(Math.random() * aboutQuotes.length)];
quote.innerHTML = randomQuote;