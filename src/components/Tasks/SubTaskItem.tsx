interface SubTaskItemProps {
  label: string;
}

function SubTaskItem({ label }: SubTaskItemProps) {
  return (
    <li className="border-subtask-1 border-r-4 mb-4 p-2 bg-base-200">
      {label}
    </li>
  );
}

export default SubTaskItem;
