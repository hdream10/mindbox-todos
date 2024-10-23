import { Stack } from "@mui/material";
import cs from "classnames";
import cls from "./TodoListControls.module.css";
import { TodoFilter, useTodoStore } from "@/features/todo";
import { useFilteredTodos } from "@/shared/hooks/useFilteredTodos";

const controls: TodoFilter[] = ["All", "Active", "Completed"];

export const TodoListControls = () => {
  const todos = useFilteredTodos();
  const filter = useTodoStore((state) => state.filter);
  const changeFilter = useTodoStore((state) => state.changeFilter);
  const removeCompletedTodos = useTodoStore(
    (state) => state.removeCompletedTodos
  );

  return (
    <Stack padding={1} direction="row" justifyContent="space-between">
      <p className={cls.text}>{todos.length} items left</p>

      <Stack direction="row" spacing={0.5}>
        {controls.map((control, index) => (
          <button
            className={cs(cls.text, control === filter ? cls.activeTab : "")}
            onClick={() => changeFilter(control)}
            key={index}
          >
            {control}
          </button>
        ))}
      </Stack>

      <button className={cls.text} onClick={removeCompletedTodos}>
        Clear completed
      </button>
    </Stack>
  );
};
