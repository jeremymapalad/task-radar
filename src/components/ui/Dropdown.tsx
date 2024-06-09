import Button from "./Button";
import { useState } from "react";
import { getButtonClassNames } from "@utils/helpers";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface DropdownProps {
  options?: string[];
  defaultValue: string;
  onClick: (value: string) => void;
}

const Dropdown = ({
  options = [],
  defaultValue = "Select",
  onClick,
}: DropdownProps) => {
  const [selected, setSelected] = useState<string>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value: string) => {
    onClick(value);
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <Button onClick={toggleMenu} className={getButtonClassNames(selected)}>
        {selected} <ChevronDownIcon className="w-5" />
      </Button>

      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 bg-base-100 w-52 shadow-xl"
        >
          {options.map((option, i) => (
            <li key={i}>
              <a onClick={() => handleItemClick(option)}>{option}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
