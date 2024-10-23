import { CreateTodoForm } from "@/features/createTodo";
import cls from "./Todos.module.css";
import { TodoListControls } from "@/features/todoListControls";
import TodosList from "./TodosList";

export const Todos = () => {
  return (
    <div className={cls.todos}>
      <div className={cls.layer}>
        <CreateTodoForm />
        <TodosList />
        <TodoListControls />
      </div>
      <div className={cls.layer2}></div>
      <div className={cls.layer3}></div>
    </div>
  );
};
