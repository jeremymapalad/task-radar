import { useState } from "react";
import Dropdown from "@ui/Dropdown";
import Button from "@ui/Button";
import { STATUS } from "@utils/constants";
import TaskType from "@/types/Task";
import SubTask from "./SubTask";
import { displayFirebaseDate } from "@utils/helpers";
import { TrashIcon } from "@heroicons/react/24/solid";
import useDeleteTask from "@hooks/useDeleteTask";
import useUpdateTask from "@hooks/useUpdateTask";
import useFetchSubTasks from "@hooks/useFetchSubTasks";

interface TaskItemProps extends TaskType {}

const TaskItem = ({ id, label, status, createdAt }: TaskItemProps) => {
  const { subTasks } = useFetchSubTasks(id);
  const { deleteTask } = useDeleteTask();
  const { updateTask } = useUpdateTask();
  const [currentStatus, setCurrentStatus] = useState<string>(status);

  const handleOnChangeStatus = (value: string) => {
    setCurrentStatus(value);
    updateTask(id, value);
  };

  const handleOnDelete = () => {
    deleteTask(id);
  };

  console.log("subTasks", subTasks);

  return (
    <div className="bg-task rounded-md border-slate-300 border-2 p-5 shadow-xl flex flex-col">
      <h2 className="text-2xl leading-none">{label}</h2>

      <div className="mt-auto">
        <div className="mt-4">
          <SubTask subTasks={subTasks} />
        </div>

        <div className="mt-4 pt-4 border-slate-300 border-t-4 flex justify-between">
          <Dropdown
            options={Object.values(STATUS)}
            defaultValue={currentStatus}
            onClick={handleOnChangeStatus}
          />

          <Button className="btn-error text-white" onClick={handleOnDelete}>
            <TrashIcon className="w-5" />
          </Button>
        </div>

        <div className="text-right mt-4 text-xs">
          Created at: {displayFirebaseDate(createdAt)}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
