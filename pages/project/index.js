import React from 'react'
import ProjectForm from '../../components/Project/ProjectForm'
import { createProject  } from "../../hooks/project/createProject";
import { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext';


export default function Projects() {

  const router = useRouter()
  const { currentUser } = useAuth()

  const onUpdateHandler = async (_, projectData)=> {
    try {
      console.log("projectData", { currentUser, projectData})
      const projectRef = await createProject(projectData,currentUser)
      console.log("projectId  ", projectRef.id)
      router.push("/")
    }catch(err){

    }
  }

  return (
    <div>
      <ProjectForm onUpdateHandler={onUpdateHandler} />
    </div>
  )
}
