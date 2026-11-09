import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #4a4a4a;
  margin: 0 0 6px 10px;
`;

export const InputContainer = styled.div<{ $hasError: boolean }>`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px solid ${({ $hasError }) => ($hasError ? "#e02424" : "#81259d")};
  border-radius: 21px;
  overflow: hidden;
  padding: 0 14px;
  transition: box-shadow 0.2s;

  &:focus-within {
    box-shadow: 0 0 0 3px
      ${({ $hasError }) => ($hasError ? "rgba(224,36,36,.2)" : "rgba(129,37,157,.2)")};
  }

  & input {
    flex: 1;
    height: 40px;
    background-color: transparent;
    border: 0;
    outline: none;
    font-size: 15px;
    color: #222;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: 0;
  color: #81259d;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: #e02424;
  font-size: 12px;
  margin-top: 6px;
  margin-left: 10px;
`;
