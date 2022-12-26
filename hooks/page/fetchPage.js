import {
  collection,
  query,
  where,
  limit,
  doc,
  getDoc,
  orderBy,
  getDocs,
  startAfter,
  endBefore,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";

const dateOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
};
const timeOptions = { hour: "2-digit", minute: "2-digit" };

const dateTimeDisplay = (docDate) => {
  if (docDate) {
    const date = docDate.toDate();
    return `${date.toLocaleDateString(
      "en-GB",
      dateOptions
    )} ${date.toLocaleTimeString("en-GB", timeOptions)}`;
  }
  return "";
};

export const useFetchPages = (projectId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [page, setPage] = useState(1);

  const { currentUser } = useAuth();

  const fetchPrevious = async () => {
    const pageQuery = query(
      collection(db, "pages"),
      orderBy("createdAt"),
      endBefore(lastDoc),
      limit(5)
    );
    const querySnapshot = await getDocs(pageQuery);
    const pagesLocal = [];
    querySnapshot.forEach((doc) => {
      pagesLocal.push({
        ...doc.data(),
        createdAt: dateTimeDisplay(doc.data()?.createdAt),
        updatedAt: dateTimeDisplay(doc.data()?.updatedAt),
        id: doc.id,
      });
    });
    setPages(pagesLocal);
    setPage(page - 1);
  };

  const fetchNext = async () => {
    const pageQuery = query(
      collection(db, "pages"),
      orderBy("createdAt"),
      startAfter(lastDoc),
      limit(5)
    );
    const querySnapshot = await getDocs(pageQuery);
    const pagesLocal = [];
    //last visible doc
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    setLastDoc(lastVisible);
    querySnapshot.forEach((doc) => {
      pagesLocal.push({
        ...doc.data(),
        createdAt: dateTimeDisplay(doc.data()?.createdAt),
        updatedAt: dateTimeDisplay(doc.data()?.updatedAt),
        id: doc.id,
      });
    });
    setPages(pagesLocal);
    setPage(page + 1);
  };

  const fetchData = async () => {
    try {
      const pageQuery = query(
        collection(db, "projects", projectId, "pages"),
        orderBy("createdAt"),
        limit(5)
      ); //

      const querySnapshot = await getDocs(pageQuery);

      //last visible doc
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastDoc(lastVisible);

      const pagesLocal = [];
      querySnapshot.forEach((doc) =>
        pagesLocal.push({
          ...doc.data(),
          createdAt: dateTimeDisplay(doc.data()?.createdAt),
          updatedAt: dateTimeDisplay(doc.data()?.updatedAt),
          id: doc.id,
        })
      );
      setPages(pagesLocal);
    } catch (err) {
      setError("Failed to load pages");
      console.log("pages loading --", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, pages, page, fetchNext, fetchPrevious };
};

export const useFetchProject = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [project, setProject] = useState(null);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDoc(doc(db, "pages", id));

      if (querySnapshot.exists()) {
        setProject({
          ...querySnapshot.data(),
          createdAt: dateTimeDisplay(querySnapshot.data()?.createdAt),
          updatedAt: dateTimeDisplay(querySnapshot.data()?.updatedAt),
        });
      }
    } catch (err) {
      setError("Failed to load pages");
      console.log("pages loading --", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, project };
};
