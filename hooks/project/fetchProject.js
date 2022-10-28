import { collection, query, where, doc,getDoc,  getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";

const dateOptions = { weekday: 'short', month:'short', day: 'numeric', year: 'numeric'};
const timeOptions = { hour: '2-digit', minute:'2-digit'}

const dateTimeDisplay = (docDate) => {
    if(docDate){
        const date = docDate.toDate();
        return `${date.toLocaleDateString('en-GB', dateOptions)} ${date.toLocaleTimeString('en-GB',timeOptions)}`
    }
    return ""
}

export const useFetchProjects = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [projects, setProjects] = useState(null);

    const { currentUser } = useAuth();

 

    const fetchData = async () => {
        try{

            
            const querySnapshot =  await getDocs(collection(db, "projects"));
            const projectsLocal = []

            
          
            querySnapshot.forEach((doc)=> projectsLocal.push({...doc.data(), 
                createdAt:dateTimeDisplay(doc.data()?.createdAt),
                updatedAt:dateTimeDisplay(doc.data()?.updatedAt),
                id: doc.id }))
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


export const useFetchProject = (id) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [project, setProject] = useState(null);

    const fetchData = async () => {
        try{

            
            const querySnapshot =  await getDoc(doc(db, "projects", id));

            if(querySnapshot.exists()){
            setProject({...querySnapshot.data(), 
                createdAt:dateTimeDisplay(querySnapshot.data()?.createdAt),
                updatedAt:dateTimeDisplay(querySnapshot.data()?.updatedAt)
            })
            }

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

    return { loading, error, project }
}