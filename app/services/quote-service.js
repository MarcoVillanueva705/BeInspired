// import _store from "../store.js"
import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  
  async getQuote() {
    return await _quoteApi.get().then(res => {
      console.log("from quote API", res);
      store.commit("quote", res.data);
      console.log("store quote", store.State.quote)
    })
  }
}

const quoteService = new QuoteService();
export default quoteService;
