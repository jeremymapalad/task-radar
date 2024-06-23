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
import { TASK_COLLECTION } from "@utils/constants";
import TaskType from "@/types/Task";
import { db } from "@services/firebase/firebase";
import { useAuth } from "@contexts/authContext";

const useFetchTasks = () => {
  const { userId } = useAuth();
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [sortByNewest, setSortByNewest] = useState<boolean>(true);

  //For Toggle: Sort By Date feature
  const sortByDate = () => {
    const sortedTasks = tasks.sort((a, b) => {
      const timestampA = a.createdAt.toDate();
      const timestampB = b.createdAt.toDate();

      if (!a.createdAt || !b.createdAt) return 0;

      return sortByNewest
        ? timestampA.getTime() - timestampB.getTime()
        : timestampB.getTime() - timestampA.getTime();
    });

    setSortByNewest(!sortByNewest);
    setTasks(sortedTasks);
  };

  useEffect(() => {
    const q = query(
      collection(db, TASK_COLLECTION),
      where("createdBy", "==", userId),
      orderBy("createdAt", sortByNewest ? "desc" : "asc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => {
          return {
            id: doc.id,
            label: doc.data().label,
            status: doc.data().status,
            createdAt: doc.data().createdAt,
            createdBy: doc.data().createdBy,
          };
        }
      );

      setTasks(data);
    });

    return () => unsubscribe();
  }, []);

  return { tasks, sortByDate };
};

export default useFetchTasks;
