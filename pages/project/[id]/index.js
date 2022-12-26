import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { useFetchProject } from "../../../hooks/project/fetchProject";
import ProjectForm from "@/projectcomponents/ProjectForm";
import { useUpdateProject } from "@/hooks/project/updateProject";
import Button from "@/common_components/Button";
import SpinnerLarge from "@/components/common/Loader/SpinnerLarge";
import PageList from "@/pagecomponents/PageList";

export default function ProjectItem() {
  const router = useRouter();
  const { currentUser } = useAuth();
  const { id } = router.query;
  const { loading, error, project } = useFetchProject(id);
  const {
    loading: updateLoading,
    error: updateError,
    updateData,
    deleteData,
  } = useUpdateProject();

  const onUpdateHandler = async (_, projectData) => {
    try {
      console.log("projectData", projectData);
      await updateData(id, projectData);
      router.push("/");
      //   const projectRef = await createProject(projectData,currentUser)
      //   console.log("projectId  ", projectRef.id)
      //   router.push("/")
    } catch (err) {}
  };

  const onCreatePage = async () => {
    // const pageData = {
    //   name: "demo_page",
    //   few: "few1",
    //   tree: "tree1",
    // };

    // try {
    //   console.log("pageData", pageData);
    //   await createPage(id, pageData, currentUser);
    //   //   const projectRef = await createProject(projectData,currentUser)
    //   //   console.log("projectId  ", projectRef.id)
    //   //   router.push("/")
    // } catch (err) {}
    router.push(`/project/${id}/page`);
  };

  const onDeleteHandler = async () => {
    try {
      await deleteData(id);
      router.push("/");
    } catch (err) {}
  };

  return (
    <div>
      {!loading && !updateLoading && (
        <div className="w-full p-3 my-4 border rounded border-solid border-gray-500 flex justify-end ">
          <div className="mr-3">
            <Button onClick={() => onCreatePage()}> Create Page</Button>{" "}
          </div>
          <Button variant="warning" fullWidth={false} onClick={onDeleteHandler}>
            <i class="fa-solid fa-trash-can mr-2"></i>Delete Project
          </Button>
        </div>
      )}
      {updateLoading && (
        <div className="container mx-auto mb-5 text-center text-orange-500 font-bold text-xl">
          {" "}
          Updating.......
        </div>
      )}
      {loading && <SpinnerLarge />}
      {project && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[350px_minmax(900px,_1fr)] gap-x-1 gap-y-2">
          <ProjectForm
            onUpdateHandler={onUpdateHandler}
            projectData={project}
            isUpdateForm
            updateLoading={updateLoading}
          />

          <div className="border border-solid rounded-md border-slate-400 p-4">
            <PageList projectId={id} />
            {/* {!loading && <PageForm />} */}

            {createPageLoading && (
              <div className="container mx-auto mb-5 text-center text-orange-500 font-bold text-xl">
                {" "}
                Creating.......
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
