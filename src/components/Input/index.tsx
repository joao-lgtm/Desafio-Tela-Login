import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { InputContainer, ErrorMessage, ToggleButton, Label } from "./styles";
import { IInputProps } from "./types";

const Input = <T extends FieldValues>({
  control,
  name,
  label,
  errorMessage,
  type = "text",
  id,
  ...rest
}: IInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputId = id ?? `input-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div style={{ width: "100%" }}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputContainer $hasError={!!errorMessage}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              {...rest}
              id={inputId}
              type={isPassword && showPassword ? "text" : type}
              onChange={onChange}
              onBlur={onBlur}
              value={value ?? ""}
              ref={ref}
              aria-invalid={!!errorMessage}
              aria-describedby={errorMessage ? errorId : undefined}
            />
          )}
        />
        {isPassword && (
          <ToggleButton
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </ToggleButton>
        )}
      </InputContainer>
      {errorMessage ? (
        <ErrorMessage id={errorId} role="alert">
          {errorMessage}
        </ErrorMessage>
      ) : null}
    </div>
  );
};

export default Input;
