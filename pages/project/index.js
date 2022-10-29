import React, { useState } from 'react'
import ProjectForm from '../../components/Project/ProjectForm'
import { createProject  } from "../../hooks/project/createProject";
import { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext';


export default function Projects() {

  const router = useRouter()
  const { currentUser } = useAuth()
  const [loading, setLoading] = useState(false)

  const onUpdateHandler = async (_, projectData)=> {
    try {
      console.log("projectData", { currentUser, projectData})
      setLoading(true);
      const projectRef = await createProject(projectData,currentUser)
      console.log("projectId  ", projectRef.id)
      setLoading(false);
      router.push("/")

    }catch(err){

    }
  }

  return (
    <div>
      <ProjectForm onUpdateHandler={onUpdateHandler} createLoading={loading}  />
    </div>
  )
}
