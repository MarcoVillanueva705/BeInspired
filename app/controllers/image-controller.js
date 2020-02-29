import ImageService from "../services/image-service.js";
import store from "../store.js"

function _draw() {
  let image = store.State.image;
    document.body.style.backgroundImage = `url(${image.url})`  
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor(){
    ImageService.getImage();
    store.subscribe("image", _draw)
  }
}
