import { ITodo } from "@/entities/todo";

export type TodoFilter = "All" | "Active" | "Completed";

export interface TodoStore {
  filter: TodoFilter;
  todos: ITodo[];
  changeFilter: (filter: TodoFilter) => void;
  addTodo: (title: string) => void;
  removeCompletedTodos: () => void;
  toggleTodo: (id: string) => void;
}
