import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";

export const useFetchProjects = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [projects, setProjects] = useState(null);

    const { currentUser } = useAuth();

    const fetchData = async () => {
        try{

            
            const querySnapshot =  await getDocs(collection(db, "projects"));
            const projectsLocal = []
            console.log("querySnapshot",querySnapshot.forEach((doc)=> console.log("data ",doc.data())))

            querySnapshot.forEach((doc)=> projectsLocal.push({...doc.data(), id: doc.id }))
            setProjects(projectsLocal);

        }catch(err){
            setError('Failed to load projects')
            console.log("projects loading --",err)
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>
    {
        fetchData()
    },[])

    return { loading, error, projects }
}