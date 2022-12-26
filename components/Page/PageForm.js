import React, { useState } from "react";
import Button from "../common/Button";

export const PageForm = ({
  id,
  onUpdateHandler,
  pageData = { name: "" },
  isUpdateForm = false,
  updateLoading = false,
  createLoading = false,
  createError,
}) => {
  const [pageName, setPageName] = useState(pageData.name);
  const [status, setStatus] = useState(pageData?.status);
  const [showStatusDropDown, setShowStatusDropDown] = useState(false);
  const [error, setError] = useState(createError || false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!pageName) {
      console.log("inside if");
      setError("Please Fill in All Details");
      return;
    }
    setError(false);

    if (isUpdateForm) {
      onUpdateHandler(id, { pageName });
    } else {
      onUpdateHandler(id, { pageName });
    }
  };

  return (
    <div className="container border rounded-md border-solid border-gray-400 m-auto">
      <div className="flex items-center justify-center p-12">
        <form className="mx-auto w-full max-w-[550px]" method="POST">
          {error && (
            <div className="mt-5 w-full max-w-[40ch]  py-2 text-rose-600 text-center">
              {error}
            </div>
          )}
          <div className="mb-5">
            <label
              htmlFor="pageName"
              className="mb-3 block text-base font-semibold text-slate-900"
            >
              Page Name
            </label>
            <input
              type="text"
              name="pageName"
              id="pageName"
              placeholder="Page Name"
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base font-medium  outline-none focus:border-gray-400 focus:shadow-md"
            />
          </div>
          <div>
            <div className="mb-5"></div>

            {/* Update form  */}
            <hr className="border border-b-1 border-slate-400 mt-4 mb-4" />

            {isUpdateForm && (
              <>
                <div className="mb-5">
                  <label
                    htmlFor="createdAt"
                    className="mb-3 block text-base font-semibold text-slate-900"
                  >
                    Created At
                  </label>
                  <input
                    type="text"
                    name="createdAt"
                    id="createdAt"
                    placeholder="Created Date"
                    value={pageData.createdAt}
                    disabled
                    className="w-full text-slate-500 cursor-not-allowed rounded-md border border-gray-200 bg-white py-3 px-6 text-base font-medium  outline-none focus:border-gray-400 focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="updatedAt"
                    className="mb-3 block text-base font-semibold text-slate-900"
                  >
                    Updated At
                  </label>
                  <input
                    type="text"
                    name="updatedAt"
                    id="updatedAt"
                    placeholder="Updated Date"
                    value={pageData.updatedAt}
                    disabled
                    className="w-full text-slate-500 cursor-not-allowed rounded-md border border-gray-200 bg-white py-3 px-6 text-base font-medium  outline-none focus:border-gray-400 focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="status"
                    className="mb-3 block text-base font-semibold text-slate-900 mr-3"
                  >
                    Status
                  </label>
                  {pageData?.status}
                </div>
              </>
            )}
            <Button
              onClick={onSubmitHandler}
              disabled={updateLoading || createLoading}
              name="submit"
              className="text-base font-semibold text-white"
            >
              {isUpdateForm
                ? updateLoading
                  ? "Updating..."
                  : "Update"
                : createLoading
                ? "Creating..."
                : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
