import React from 'react'
import { useFetchProjects } from "../../hooks/project/fetchProject";
import ProjectItem from './ProjectItem';

export default function ProjectListing() {

  const { loading, error, projects } = useFetchProjects()

  console.log("projects",projects)
  return (
    <div className="mt-5 container mx-auto px-4 flex flex-xol justify-center">
     {projects?.length &&  projects.map((project)=> (<ProjectItem key={project.id} {...project} />))} 
    </div>
  )
}
