import { TodoCard } from "@/entities/todo";
import { useFilteredTodos } from "@/shared/hooks/useFilteredTodos";

const TodosList = () => {
  const todos = useFilteredTodos();

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard card={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodosList;
