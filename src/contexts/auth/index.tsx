import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { ICredentials, IUser, signInRequest } from "../../services/auth";

interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  signIn: (credentials: ICredentials) => Promise<void>;
  signOut: () => void;
}

const STORAGE_KEY = "@desafio-login:user";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const readStoredUser = (): IUser | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as IUser) : null;
  } catch {
    return null;
  }
};

interface IAuthProviderProps {
  children: ReactNode;
  latency?: number;
}

export const AuthProvider = ({ children, latency }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(readStoredUser);

  const signIn = useCallback(
    async (credentials: ICredentials) => {
      const loggedUser = await signInRequest(credentials, latency);
      setUser(loggedUser);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
      } catch {
        /* storage indisponível: segue só em memória */
      }
    },
    [latency]
  );

  const signOut = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<IAuthContext>(
    () => ({ user, isAuthenticated: !!user, signIn, signOut }),
    [user, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
