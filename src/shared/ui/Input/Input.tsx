import { forwardRef, InputHTMLAttributes } from "react";
import cx from "classnames";
import cls from "./Input.module.css"


export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...other }, ref) => {
  return <input ref={ref} className={cx(cls.input, className)} {...other} />;
});
