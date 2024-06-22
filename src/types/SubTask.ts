import { Task } from "./Task";

export default interface SubTaskType extends Task {
  parentId: string;
}
