import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
}

const Button = ({
  onClick = () => {},
  className = "btn-primary text-white",
  children,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
