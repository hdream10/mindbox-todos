import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { TodoFilter, TodoStore } from "./types";

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      filter: "All",
      todos: [],
      changeFilter: (filter: TodoFilter) => {
        set(() => ({
          filter,
        }));
      },
      addTodo: (name: string) => {
        set((state) => ({
          todos: [...state.todos, { id: uuidv4(), name, isCompleted: false }],
        }));
      },
      removeCompletedTodos: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.isCompleted),
        }));
      },
      toggleTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        }));
      },
    }),
    {
      name: "todo-storage",
    }
  )
);
