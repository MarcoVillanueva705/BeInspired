import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  let todos = store.State.todos;
  // document.querySelector("#todos").innerHTML = template += `<p>${todos.description}</p>`;
  todos.forEach(todo => template += todo.Template)
  document.getElementById('todos').innerHTML = template
}
 
export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
    TodoService.loadTodos();
    console.log("hello from todo controller")
    // TodoService.addTodoAsync()
    
  }

  async addTodo(e) {
    e.preventDefault();
    var formData = e.target;
    var newTodo = {
      //TODO build the todo object from the data that comes into this method
      // user: formData.user.value,
      description: formData.description.value
    };
    try {
      await TodoService.addTodoAsync(newTodo);
      formData.reset()
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
