import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import useCreateTask from "../../hooks/useCreateTask";
import { FormEvent, useState } from "react";
import { ArrowsUpDownIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

interface TaskToolbarProps {
  search: string;
  sortByDate: () => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const TaskToolbar = ({
  sortByDate,
  search,
  setSearchValue,
}: TaskToolbarProps) => {
  const [newTask, setNewTask] = useState<string>("");
  const { createTask } = useCreateTask();

  const handleCreateTask = () => {
    if (newTask === "") return;

    createTask(newTask);
    setNewTask("");
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateTask();
  };

  const handleSetNewTask = (value: string) => {
    setNewTask(value);
  };

  return (
    <div className="mb-4 p-4 grid gap-4 grid-cols-1 lg:grid-cols-2 align-middle justify-end bg-task shadow-xl border-slate-300 rounded-md border-2">
      <TextInput
        placeholder="Search..."
        value={search}
        onChange={setSearchValue}
      />

      <form className="align-middle gap-4 flex" onSubmit={handleOnSubmit}>
        <TextInput
          className="flex-1"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleSetNewTask}
        />

        <Button
          className="btn-primary text-white"
          onClick={handleCreateTask}
          disabled={newTask === ""}
        >
          <PlusCircleIcon className="w-5" />
        </Button>

        <Button className="btn-primary text-white" onClick={sortByDate}>
          <ArrowsUpDownIcon className="w-5" />
        </Button>
      </form>
    </div>
  );
};

export default TaskToolbar;
