import {  doc, setDoc, deleteDoc, Timestamp } from "firebase/firestore";
import {  useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";


export const useUpdateProject = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateData = async (id, projectData) => {
        
        try{
            setLoading(true)
            
            const projectRef=  doc(db, "projects", id);
            await setDoc(projectRef, {...projectData, updatedAt: Timestamp.now() }, { merge: true})


        }catch(err){
            setError('Failed to edit projects')
            console.log("project edit --",err)
        }finally{
            setLoading(false);
        }
    }

    const deleteData = async (id) => {
        
        try{
            setLoading(true)
            
            const projectRef=  doc(db, "projects", id);
            await deleteDoc(projectRef)


        }catch(err){
            setError('Failed to delete projects')
            console.log("project edit --",err)
        }finally{
            setLoading(false);
        }
    }
   

    return { loading, error, updateData, deleteData }
}