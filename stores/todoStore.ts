import { configure, makeAutoObservable } from "mobx";

configure({
  enforceActions: "never",
});

export interface ITodoModel {
  id: number;
  text: string;
  done: boolean;
}

class TodosStore {
  todosList: ITodoModel[] = [];
  todo: ITodoModel = this.resetTodoData();
  textUpdate: string = "";

  resetTodoData() {
    return {
      id: Math.max(0, Math.max(...this.todosList.map(({ id }) => id))) + 1,
      text: "",
      done: false,
    };
  }

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todosList.push(this.todo);
    this.todo = this.resetTodoData();
  }

  deleteTodo(id: number) {
    this.todosList = this.todosList.filter((e) => e.id !== id);
  }

  updateTodo(id: number, text: string) {
    const idx = this.todosList.findIndex((e) => e.id === id);
    this.todosList.splice(idx, 1, { id, text, done: false });
  }
}

const todosStore = new TodosStore();
export default todosStore;
