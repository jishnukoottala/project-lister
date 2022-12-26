import {
  doc,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";

export const useCreatePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPage = async (projectId, pagesData, currentUser) => {
    try {
      setLoading(true);

      const result = await addDoc(
        collection(db, "projects", projectId, "pages"),
        {
          ...pagesData,
          createdAt: Timestamp.now(),
          status: "draft",
          projectId,
          userName: currentUser.displayName,
        }
      );
      return result;
    } catch (err) {
      setError("Failed to edit page");
      console.log("ppage edit --", err);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (id, projectData) => {
    try {
      setLoading(true);

      const projectRef = doc(db, "projects", id);
      await setDoc(
        projectRef,
        { ...projectData, updatedAt: Timestamp.now() },
        { merge: true }
      );
    } catch (err) {
      setError("Failed to edit projects");
      console.log("project edit --", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    try {
      setLoading(true);

      const projectRef = doc(db, "projects", id);
      await deleteDoc(projectRef);
    } catch (err) {
      setError("Failed to delete projects");
      console.log("project edit --", err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createPage, updateData, deleteData };
};
