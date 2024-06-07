interface TextInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  className?: string;
  type?: string;
}

const TextInput = ({
  value,
  onChange,
  placeholder,
  className,
  type = "text",
}: TextInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`input input-bordered w-full ${className}`}
    />
  );
};

export default TextInput;
