import { loginWithEmail } from "@services/firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (email: string, password: string) => {
    setErrorMessage("");
    setIsLoading(true);
    const login = await loginWithEmail(email, password);

    if (!login.success) {
      setIsLoading(false);
      setErrorMessage(login.message);
      return false;
    }

    return true;
  };

  return (
    <AuthForm
      title="Sign In"
      buttonText={isLoading ? "Signing In..." : "Sign In"}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
    >
      <p className="text-gray-500 text-center text-sm font-light">
        Don't have an account?{" "}
        <Link
          className="text-primary-600 font-medium underline hover:opacity-80"
          to="/sign-up"
        >
          Sign up
        </Link>
      </p>
    </AuthForm>
  );
};

export default SignIn;
