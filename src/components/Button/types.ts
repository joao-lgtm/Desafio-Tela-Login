import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
  variant?: "primary" | "secondary";
}
