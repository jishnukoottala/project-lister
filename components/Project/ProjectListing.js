import React from "react";
import { useFetchProjects } from "../../hooks/project/fetchProject";
import Pagination from "../Pagination";
import ProjectItem from "./ProjectItem";

export default function ProjectListing() {
  const { loading, error, projects, page, fetchNext, fetchPrevious } =
    useFetchProjects();

  return (
    <div className="mt-5 container mx-auto px-4 flex flex-col justify-center">
      <div className="hidden sm:grid sm:grid-cols-7  gap-x-1 gap-y-2   sm:border-b sm:border-gray-500 mb-2">
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Project Name
        </label>
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Type
        </label>
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Status
        </label>
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Created By
        </label>
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Created At
        </label>
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Last Updated At
        </label>
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Action
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-7 gap-x-1 gap-y-2">
        {projects?.length > 0 &&
          !loading &&
          projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}{" "}
      </div>
      {projects?.length > 0 && !loading && (
        <Pagination
          active={true}
          showPrevious={page > 1}
          fetchNext={fetchNext}
          fetchPrevious={fetchPrevious}
          showNext={!(projects?.length < 5)}
        />
      )}
    </div>
  );
}
