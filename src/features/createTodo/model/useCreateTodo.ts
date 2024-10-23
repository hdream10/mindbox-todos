import { useTodoStore } from "@/features/todo";
import { ChangeEvent, FormEvent, useState } from "react";

export const useCreateTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newValue = value.trim();
    if (newValue) {
      addTodo(newValue);
      setValue("");
    }
  };

  return {
    value,
    handleChange,
    handleSave,
  };
};
