import { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "@services/firebase/firebase";
import { TASK_COLLECTION, STATUS } from "@utils/constants";
import { useAuth } from "@contexts/authContext";

const useCreateTask = () => {
  const { userId } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createTask = async (label: string) => {
    setLoading(true);
    setError(null);

    try {
      const now = Timestamp.now();

      await addDoc(collection(db, TASK_COLLECTION), {
        label,
        status: STATUS.TO_DO,
        subTasks: [],
        createdAt: now,
        createdBy: userId,
      });
    } catch (error) {
      setError("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return { createTask, loading, error };
};

export default useCreateTask;
