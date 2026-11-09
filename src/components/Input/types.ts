import { InputHTMLAttributes } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface IInputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  errorMessage?: string;
}
