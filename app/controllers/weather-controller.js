import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  let template = "";
  let weather = store.State.weather
document.querySelector("#weather").innerHTML = template+= `<p>${weather.city}</p> <p>${weather.kelvin}</p>`
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", _drawWeather);
    WeatherService.getWeather();
    _drawWeather();
  }
}
