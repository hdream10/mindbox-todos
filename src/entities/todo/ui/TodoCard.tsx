import { FC } from "react";
import { ITodo } from "../model/types";
import cs from "classnames";
import cls from "./TodoCard.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { useTodoStore } from "@/features/todo";

interface PropsTypes {
  card: ITodo;
}

export const TodoCard: FC<PropsTypes> = ({ card }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const { id, name, isCompleted } = card;

  return (
    <div
      className={cs(cls.todo, isCompleted ? cls.todoCompleted : "")}
      onClick={() => toggleTodo(id)}
    >
      <button className={cls.button}>{isCompleted && <CheckIcon/>}</button>
      <p className={cls.text}>{name}</p>
    </div>
  );
};
