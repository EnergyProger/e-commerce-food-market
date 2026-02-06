import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import HideIcon from "@/shared/assets/icons/Hide.svg?react";
import ShowIcon from "@/shared/assets/icons/Show.svg?react";
import { cn } from "@/shared/lib";

import { Button } from "../Button/Button";

import styles from "./Input.module.scss";

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends HTMLInputType {
  className?: string;
  value?: string;
  disabled?: boolean;
  rounded?: boolean;
  Icon?: ReactNode;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    Icon,
    onChange,
    disabled = false,
    rounded = false,
    type = "text",
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return (
    <div
      className={cn(styles.inputContainer, className, {
        [styles.rounded]: rounded,
        [styles.disabled]: disabled,
        [styles.focus]: focus,
      })}
    >
      {Icon}
      <input
        {...rest}
        value={value}
        disabled={disabled}
        className={cn(styles.input, {
          [styles.disabled]: disabled,
        })}
        type={showPassword && type === "password" ? "text" : type}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {type === "password" && (
        <Button
          theme="ghost"
          type="button"
          className={styles.toggleVisibility}
          onClick={toggleShowPassword}
        >
          {showPassword ? <HideIcon /> : <ShowIcon />}
        </Button>
      )}
    </div>
  );
};
