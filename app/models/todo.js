export default class Todo{
  constructor(data){
    console.log("hello from Todo model");
    this._id = data._id
    this.completed = data.completed
    this.user =  data.user
    this.description = data.description
  }
  get Template(){
    let template =`
    <div>
    
        <li class="${this.completed?'strikes':""}">${this.description}</li>
        <button type="button" class="btn btn-outline-danger" onclick="app.todoController.removeTodo('${this._id}')">Delete</button>`
        
        if(this.completed == false){
          template += `<button type="button" class="btn btn-outline-warning" onclick="app.todoController.toggleTodoStatus('${this._id}')">Check Off</button>`
        }else{
          template += `<button type="button" class="btn btn-outline-info" onclick="app.todoController.toggleTodoStatus('${this._id}')">Not Completed</button>`
        }
        template +=` </div>
    </div>`
    return template;
  }
  }

  // if(this.completed){
  //   <del><p>this.description</p></del>
  // }else{
  // <p>this.description</p>
  // }