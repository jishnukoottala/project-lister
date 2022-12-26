import React from "react";
import { useFetchPages } from "../../hooks/page/fetchPage";
import { PageItem } from "./PageItem";

export default function ProjectListing({ projectId }) {
  const { loading, error, pages, page, fetchNext, fetchPrevious } =
    useFetchPages(projectId);

  console.log("pages", pages);
  return (
    <div className="mt-5 container mx-auto px-4 flex flex-col justify-center">
      <div className="hidden sm:grid sm:grid-cols-6  gap-x-1 gap-y-2   sm:border-b sm:border-gray-500 mb-2">
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Name
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
          Updated At
        </label>
        <label className="font-semibold text-gray-600 uppercase px-1 py-2">
          Action
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-1 gap-y-2">
        {pages?.length > 0 &&
          !loading &&
          pages.map((pageObj) => (
            <PageItem key={pageObj.id} {...pageObj} />
          ))}{" "}
      </div>
      {/* {projects?.length > 0 && !loading && (
        <Pagination
          active={true}
          showPrevious={page > 1}
          fetchNext={fetchNext}
          fetchPrevious={fetchPrevious}
          showNext={!(projects?.length < 5)}
        />
      )} */}
    </div>
  );
}
