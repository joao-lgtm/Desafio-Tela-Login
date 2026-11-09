import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({
  title,
  loading = false,
  disabled = false,
  variant = "primary",
  type = "button",
  ...rest
}: IButtonProps) => {
  return (
    <ButtonContainer
      type={type}
      $variant={variant}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading ? "Entrando..." : title}
    </ButtonContainer>
  );
};

export default Button;
