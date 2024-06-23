import { STATUS } from "@/utils/constants";
import firebase from "firebase/compat/app";

export default interface TaskType {
  id: string;
  label: string;
  status: STATUS;
  createdBy: string;
  createdAt: firebase.firestore.Timestamp;
}
