import React from 'react'
import { useRouter } from 'next/router'
import { useFetchProject } from '../../hooks/project/fetchProject';
import ProjectForm from '../../components/Project/ProjectForm'
import { useUpdateProject } from '../../hooks/project/updateProject';
import Button from '../../components/Button';
import SpinnerLarge from '../../components/Loader/SpinnerLarge';

export default function ProjectItem() {

    const router = useRouter()
   
    const { id } = router.query;
    const { loading, error, project} = useFetchProject(id);
    const { loading: updateLoading, error:updateError,  updateData, deleteData } = useUpdateProject()

    console.log("project", project)

    const onUpdateHandler = async (_, projectData)=> {
        try {
          console.log("projectData", projectData);
          await updateData(id, projectData);
          router.push("/")
        //   const projectRef = await createProject(projectData,currentUser)
        //   console.log("projectId  ", projectRef.id)
        //   router.push("/")
        }catch(err){
    
        }
      }

      const onDeleteHandler = async () => {

        try {
            await deleteData(id)
            router.push("/");
        }catch(err){

        }
      }


  return (
    <div>
      {!loading  && !updateLoading && (<div className="w-full p-3 my-4 border rounded border-solid border-gray-500 flex justify-end">
        <Button variant="warning" fullWidth={false} onClick={onDeleteHandler}><i class="fa-solid fa-trash-can mr-2"></i>Delete Project</Button>
      </div>)}
    {updateLoading && <div className="container mx-auto mb-5 text-center text-orange-500 font-bold text-xl"> Updating.......</div>}
    {loading && <SpinnerLarge /> }
    {project && !loading && (
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-2">
         <ProjectForm  onUpdateHandler={onUpdateHandler} projectData={project} isUpdateForm updateLoading={updateLoading} />
 
         <div className="border border-solid border-slate-400 p-4">Project Tasks</div>
     </div>
      )}
    </div>
  )
}
