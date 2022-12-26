import React from "react";
import { useRouter } from "next/router";

export const PageItem = ({
  id,
  name,
  status,
  userName,
  createdAt,
  updatedAt,
}) => {
  const router = useRouter();
  const itemClassName = "text-base text-slate-800 flex justify-start p-2";
  const headingClassName = "font-semibold sm:hidden pr-2";

  return (
    <>
      <div className={itemClassName}>
        <h1 className={headingClassName}>Page Name : </h1>
        {name}
      </div>
      <div className={itemClassName}>
        <h1 className={headingClassName}>Status: </h1>
        {status}
      </div>
      <div className={itemClassName}>
        <h1 className={headingClassName}>Created By: </h1>
        {userName}
      </div>
      <div className={itemClassName}>
        <h1 className={headingClassName}>Created At: </h1>
        {createdAt}
      </div>
      <div className={itemClassName}>
        <h1 className={headingClassName}>Updated At: </h1>
        {updatedAt}
      </div>
      <div
        className={`${itemClassName} border-b border-gray-500 sm:border-0 pb-3`}
        //onClick={() => router.push(`/project/${id}`)}
      >
        <i className="fa-solid fa-pen-to-square hover:cursor-pointer"></i>
      </div>
    </>
  );
};
