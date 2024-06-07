import { COMPLETED, IN_PROGRESS, TO_DO } from "./constants";
import firebase from "firebase/compat/app";

export const getButtonClassNames = (value: string) => {
  switch (value) {
    case TO_DO:
      return "btn-secondary text-white"; // Set color to secondary for "To Do"
    case IN_PROGRESS:
      return "btn-primary text-white"; // Set color to primary for "In Progress"
    case COMPLETED:
      return "btn-success text-white"; // Set color to success for "Completed"
    default:
      return "btn-primary text-white"; // Set to primary color if value doesn't match any case
  }
};

export const isArrayEmpty = (arr: any[]) => {
  return arr.length === 0;
};

export const displayFirebaseDate = (value: firebase.firestore.Timestamp) => {
  return new Date(value.seconds * 1000).toLocaleString();
};
