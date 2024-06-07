import firebase from "firebase/compat/app";

export interface Task {
  id: string;
  label: string;
  status: "To Do" | "In Progress" | "Completed";
  createdBy: string;
  createdAt: firebase.firestore.Timestamp;
}
