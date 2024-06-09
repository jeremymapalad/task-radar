import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "@services/firebase/firebase";
import { TASK_COLLECTION } from "@utils/constants";

const useUpdateTask = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateTask = async (id: string, status: string) => {
    setLoading(true);
    setError(null);

    try {
      await updateDoc(doc(db, TASK_COLLECTION, id), {
        status,
      });
    } catch (error) {
      setError("Failed to update task");
    } finally {
      setLoading(false);
    }
  };

  return { updateTask, loading, error };
};

export default useUpdateTask;
