import styled, { css } from "styled-components";

interface IButtonStyleProps {
  $variant: "primary" | "secondary";
}

export const ButtonContainer = styled.button<IButtonStyleProps>`
  width: 100%;
  height: 42px;
  border: 1px solid #81259d;
  border-radius: 21px;
  font-size: 16px;
  font-weight: 700;
  transition: opacity 0.2s;

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          background-color: #81259d;
          color: #fff;
        `
      : css`
          background-color: transparent;
          color: #81259d;
        `}

  &:hover:not(:disabled) {
    opacity: 0.8;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
