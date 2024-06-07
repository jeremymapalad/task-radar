import { loginWithEmail } from "../../services/firebase/auth";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    if (!isLoading) {
      setIsLoading(true);
      const login = await loginWithEmail(email, password);

      if (!login.success) {
        setIsLoading(false);
        setErrorMessage(login.message);
        setPassword("");
      }
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 md:h-screen lg:py-0">
      <div className="sm:max-w-md md:mt-0 w-full bg-task rounded-lg shadow-xl xl:p-0">
        <div className="space-y-6 p-6 sm:p-8">
          <h1 className="text-center text-xl font-bold text-gray-900 md:text-2xl">
            Sign in
          </h1>
          <form className="space-y-6" onSubmit={onSubmit}>
            {errorMessage && (
              <div className="text-white p-3 rounded-md bg-red-500">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="text-gray-900 block mb-2 text-sm font-medium">
                Email Address
              </label>

              <TextInput
                type="email"
                value={email}
                onChange={setEmail}
                className="text-gray-900 bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600"
                placeholder="email@domain.com"
              />
            </div>

            <div>
              <label className="text-gray-900 block mb-2 text-sm font-medium">
                Password
              </label>

              <TextInput
                type="password"
                value={password}
                onChange={setPassword}
                className="text-gray-900 bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600"
                placeholder="••••••"
              />
            </div>
            <Button
              type="submit"
              className="text-center w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>

            <p className="text-gray-500 text-center text-sm font-light">
              Don't have an account?{" "}
              <Link
                className="text-primary-600 font-medium hover:underline"
                to="/sign-up"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
