import store from "../store.js"
// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 15000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  async getImage() {
    return await imgApi.get().then(res => {
      console.log("from image API", res);
      store.commit("image", res.data);
      console.log("store image", store.State.image);
    })
  }
}

const imageService = new ImageService();
export default imageService;
