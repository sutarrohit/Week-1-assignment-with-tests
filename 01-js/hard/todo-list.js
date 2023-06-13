/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

const readline = require("readline");

class Todo {
  constructor() {
    this.todo = [];
  }

  add(todoData) {
    this.todo.push(todoData);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
      this.todo.splice(indexOfTodo, 1);
    }
  }

  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo > 0 && indexOfTodo < this.todo.length) {
      this.todo[indexOfTodo] = updatedTodo;
    }
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
      return this.todo[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todo = [];
  }
}

const todoObject = new Todo();

todoObject.add("Task 1");
todoObject.add("Task 2");
todoObject.add("Task 3");
console.log(`Task addes to todo :  ${todoObject.getAll()}`);

todoObject.update(1, "I have updated task2");
console.log(`Updated task2 :  ${todoObject.getAll()}`);

todoObject.remove(2);
console.log(`removed task3 :  ${todoObject.getAll()}`);

todoObject.clear();
console.log(`clear to list : ${todoObject.getAll()}`);

module.exports = Todo;
