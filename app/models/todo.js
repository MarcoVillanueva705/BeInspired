export default class Todo{
  constructor(data){
    console.log("hello from Todo model");
    this._id = data._id
    this.completed = data.completed
    this.user =  data.user
    this.description = data.description
  }
  get Template(){
    return
  }
} 