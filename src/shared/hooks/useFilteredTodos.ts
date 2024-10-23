import { ITodo } from "@/entities/todo";
import { useTodoStore } from "@/features/todo";
import { useMemo } from "react";

export const useFilteredTodos = () => {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "Active":
        return todos.filter((todo: ITodo) => !todo.isCompleted);
      case "Completed":
        return todos.filter((todo: ITodo) => todo.isCompleted);
      case "All":
      default:
        return todos;
    }
  }, [todos, filter]);

  return filteredTodos;
};
