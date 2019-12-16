import QuoteService from "../services/quote-service.js";
// import _store from "../store.js";
import store from "../store.js";
// import quoteService from "../services/quote-service.js";

function _draw(){
  let template = ""
  let quote = store.State.quote;
  document.querySelector("#quote").innerHTML = template += `<p>${quote.quote.body}</p><p>...${quote.quote.author}</P>`
}

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
constructor(){
  store.subscribe("quote", _draw);
  QuoteService.getQuote();

}
}
