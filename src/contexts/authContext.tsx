import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import { auth } from "../services/firebase/firebase";
import { onAuthStateChanged, UserInfo } from "firebase/auth";
import { User } from "../types/User";

interface AuthProviderProps extends PropsWithChildren {}

interface AuthContextType {
  isUserLoggedIn: boolean;
  isEmailUser: boolean;
  isLoading: boolean;
  userId?: string;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [isEmailUser, setIsEmailUser] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initializeUser = async (user: User | null) => {
    if (user) {
      setIsUserLoggedIn(true);
      setCurrentUser({ ...user });

      const isEmail = user.providerData.some(
        (provider: UserInfo) => provider.providerId === "password"
      );

      setIsEmailUser(isEmail);
    } else {
      setCurrentUser(null);
      setIsUserLoggedIn(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        isEmailUser,
        currentUser,
        userId: currentUser?.uid,
        setCurrentUser,
        isLoading,
      }}
    >
      {isLoading ? "" : children}
    </AuthContext.Provider>
  );
};
