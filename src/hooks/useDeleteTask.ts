import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../services/firebase/firebase";
import { TASK_COLLECTION } from "../utils/constants";

const useDeleteTask = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteTask = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      await deleteDoc(doc(db, TASK_COLLECTION, id));
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteTask, loading, error };
};

export default useDeleteTask;
