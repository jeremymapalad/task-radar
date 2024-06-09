import { useState } from "react";
import TaskList from "@components/Tasks/TaskList";
import TaskToolbar from "@components/Tasks/TaskToolbar";
import useFetchTasks from "@hooks/useFetchTasks";
import TaskNav from "@components/Tasks/TaskNav";

const TaskManagementPage = () => {
  const { tasks, sortByDate } = useFetchTasks();
  const [searchValue, setSearchValue] = useState<string>("");
  const searchValueToLowerCase = searchValue.toLowerCase();

  return (
    <div className="max-w-4xl mt-14 mb-4 px-4 mx-auto">
      <h1 className="text-4xl text-center mb-4">Task Management System</h1>

      <TaskNav />

      <TaskToolbar
        sortByDate={sortByDate}
        search={searchValue}
        setSearchValue={setSearchValue}
      />

      <TaskList
        tasks={tasks.filter((task) =>
          task.label.toLowerCase().includes(searchValueToLowerCase)
        )}
      />
    </div>
  );
};

export default TaskManagementPage;
