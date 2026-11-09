import { ICredentials } from "../../services/auth";

export type IFormLogin = ICredentials;

export const defaultValues: IFormLogin = {
  email: "",
  password: "",
};
