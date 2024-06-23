import TaskType from "./Task";

export default interface SubTaskType extends TaskType {
  parentId: string;
}
