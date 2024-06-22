import { Task } from "@/types/Task";
import { isArrayEmpty } from "@utils/helpers";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks?: Task[];
}

const TaskList = ({ tasks = [] }: TaskListProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {!isArrayEmpty(tasks) ? (
        tasks.map(({ id, label, status, createdAt, createdBy, subTasks }) => {
          return (
            <TaskItem
              key={id}
              id={id}
              label={label}
              subTasks={subTasks}
              status={status}
              createdAt={createdAt}
              createdBy={createdBy}
            />
          );
        })
      ) : (
        <p className="text-center col-span-3 p-4 bg-white">
          We couldn't find any tasks matching your criteria at the moment.
        </p>
      )}
    </div>
  );
};

export default TaskList;
