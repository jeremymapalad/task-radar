import Button from "@ui/Button";
import { PlusIcon } from "@heroicons/react/24/solid";
import SubTaskItem from "./SubTaskItem";
import { SAMPLE_SUBTASK_LIST } from "@utils/constants";

function SubTask() {
  return (
    <>
      <ul>
        {SAMPLE_SUBTASK_LIST.map((subtask, i) => {
          return <SubTaskItem key={`${i}-${subtask}`} label={subtask} />;
        })}
      </ul>

      <Button className="btn-success text-white btn-outline w-full">
        <PlusIcon className="w-5" /> Add Subtask
      </Button>
    </>
  );
}

export default SubTask;
