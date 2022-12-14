import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

export const createProject = async (project, currentUser) => {
  return await addDoc(collection(db, "projects"), {
    ...project,
    userId: currentUser.uid,
    createdAt: Timestamp.now(),
    status: "draft",
    userName: currentUser.displayName,
  });
};
