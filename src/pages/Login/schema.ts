import * as yup from "yup";
import { IFormLogin } from "./types";

export const loginSchema: yup.SchemaOf<IFormLogin> = yup
  .object({
    email: yup
      .string()
      .trim()
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();
