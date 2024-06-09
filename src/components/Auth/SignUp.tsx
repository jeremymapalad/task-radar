import { registerWithEmail } from "@services/firebase/auth";
import { useState } from "react";
import AuthForm from "./AuthForm";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (email: string, password: string) => {
    setErrorMessage("");
    setIsLoading(true);
    const register = await registerWithEmail(email, password);

    if (!register.success) {
      setIsLoading(false);
      setErrorMessage(register.message);
      return false;
    }

    return true;
  };

  return (
    <AuthForm
      title="Register an account"
      buttonText={isLoading ? "Processing your registration..." : "Sign Up"}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
    />
  );
};

export default SignIn;
