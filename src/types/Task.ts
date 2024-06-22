import { STATUS } from "@/utils/constants";
import firebase from "firebase/compat/app";
import SubTaskType from "./SubTask";

export interface Task {
  id: string;
  label: string;
  status: STATUS;
  subTasks: SubTaskType[];
  createdBy: string;
  createdAt: firebase.firestore.Timestamp;
}
