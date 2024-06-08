import { FormEvent, PropsWithChildren, useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

interface AuthFormProps extends PropsWithChildren {
  onSubmit: (email: string, password: string) => Promise<boolean>;
  errorMessage: string;
  buttonText: string;
  title: string;
}

interface AuthField {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const AuthForm = ({
  onSubmit,
  errorMessage,
  buttonText,
  children,
  title,
}: AuthFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await onSubmit(email, password);

    if (!result) setPassword("");
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 md:h-screen lg:py-0">
      <div className="sm:max-w-md md:mt-0 w-full bg-task rounded-lg shadow-xl xl:p-0">
        <div className="space-y-6 p-6 sm:p-8">
          <h1 className="text-center text-xl font-bold text-gray-900 md:text-2xl">
            {title}
          </h1>
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            {errorMessage && (
              <div className="text-white p-3 rounded-md bg-red-500">
                {errorMessage}
              </div>
            )}

            <AuthField
              type="email"
              label="Email Address"
              value={email}
              onChange={setEmail}
              placeholder="email@domain.com"
            />

            <AuthField
              type="password"
              label="Password"
              value={password}
              onChange={setPassword}
              placeholder="•••••••"
            />

            <Button
              type="submit"
              className="text-center w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              {buttonText}
            </Button>

            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

const AuthField = ({
  type,
  label,
  placeholder,
  value,
  onChange,
}: AuthField) => {
  return (
    <div>
      <label className="text-gray-900 block mb-2 text-sm font-medium">
        {label}
      </label>

      <TextInput
        type={type}
        value={value}
        onChange={onChange}
        className="text-gray-900 bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600"
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthForm;
