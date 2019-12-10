import store from "../store.js";
import Todo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/marco/todos/",
  timeout: 8000
});

class TodoService {

  constructor(){
     this.loadTodosAsync()
  }
  async getTodos() {
    console.log("Getting the Todo List");
    todoApi.get("").then(res =>{
      console.log("from todo API", res)
      store.commit("todos", res.data.data)
      console.log("store todos", store.State.todos)
    });
    //TODO Handle this response from the server
  }T
  async addTodoAsync(newTodo) {
    todoApi.post("", newTodo).then(res =>{
      this.loadTodosAsync()
      console.log("from add Todo Async", res)
      // store.commit("todos", res.data.data)
      // console.log(store.State.todos)
      // this.loadTodos()
    }).catch(err=>{
      console.error(err)
    })
    }

    //ANCHOR WHAT is happening in the method below?  I used the example from greg's list to stop getting 
    //undefined on the page, but don't understand why it works.
    async loadTodosAsync() {
      todoApi.get("").then(res => {
        console.log(res)
        let todos = res.data.data.map(t => new Todo(t))
        store.commit("todos", todos)
      }).catch(err =>{
        console.error(err)
      })
      }
    
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    //NOTE //below, this inverts the boolean property easily
    todo.completed = !todo.completed
    todoApi.put(todoId, todo).then(res =>{
    this.loadTodosAsync()
    console.log(res)
  }).catch(err=>{
    console.error(err)
  })
    
    

    
    //TODO do you care about this data? or should you go get something else?
  }

  // _carApi.put("/cars/"+carId, { price: +carPrice + 100}).then(res =>{

  async removeTodoAsync(todoId) {
   await todoApi.delete(`${todoId}`).then(res =>{
     this.loadTodosAsync()
      console.log(res)
    }).catch(err=>{
      console.error(err)
    })
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}



const todoService = new TodoService();
export default todoService;
