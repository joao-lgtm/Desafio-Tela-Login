export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

interface IUserRecord extends IUser {
  password: string;
}

// "Banco de dados" fake — em um projeto real isso seria uma chamada HTTP para a API.
const USERS: IUserRecord[] = [
  { id: 1, name: "Aluno DIO", email: "dio@dio.me", password: "123456" },
];

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export const signInRequest = async (
  { email, password }: ICredentials,
  latency = 800
): Promise<IUser> => {
  await delay(latency);

  const record = USERS.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase()
  );

  if (!record || record.password !== password) {
    throw new AuthError("E-mail ou senha incorretos");
  }

  const { password: _omit, ...user } = record;
  return user;
};
