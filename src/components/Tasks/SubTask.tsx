import Button from "@ui/Button";
import { PlusIcon } from "@heroicons/react/24/solid";
import SubTaskItem from "./SubTaskItem";
import SubTaskType from "@/types/SubTask";
import { PropsWithChildren } from "react";

interface SubTaskProps extends PropsWithChildren {
  subTasks?: SubTaskType[];
}

function SubTask({ subTasks = [] }: SubTaskProps) {
  return (
    <>
      <ul>
        {subTasks.map((subtask) => {
          return <SubTaskItem key={subtask.id} label={subtask.label} />;
        })}
      </ul>

      <Button className="btn-success text-white btn-outline w-full">
        <PlusIcon className="w-5" /> Add Subtask
      </Button>
    </>
  );
}

export default SubTask;
