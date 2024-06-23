import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { SUB_TASK_COLLECTION } from "@utils/constants";
import { db } from "@services/firebase/firebase";
import { useAuth } from "@contexts/authContext";
import SubTaskType from "@/types/SubTask";

const useFetchTasks = (parentId: string) => {
  const { userId } = useAuth();
  const [subTasks, setSubTasks] = useState<SubTaskType[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, SUB_TASK_COLLECTION),
      where("createdBy", "==", userId),
      where("parentId", "==", parentId),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => {
          return {
            id: doc.id,
            label: doc.data().label,
            status: doc.data().status,
            parentId: doc.data().parentId,
            createdAt: doc.data().createdAt,
            createdBy: doc.data().createdBy,
          };
        }
      );

      setSubTasks(data);
    });

    return () => unsubscribe();
  }, []);

  return { subTasks };
};

export default useFetchTasks;
