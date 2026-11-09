import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #81259d;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  color: #6b6b6b;
  margin-top: 4px;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Spacing = styled.div`
  margin: 10px 0;
`;

export const FormAlert = styled.div`
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 14px;
  border-radius: 8px;
  background-color: #fdecec;
  color: #b91c1c;
  font-size: 14px;
`;

export const Hint = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
  color: #8a8a8a;
`;
