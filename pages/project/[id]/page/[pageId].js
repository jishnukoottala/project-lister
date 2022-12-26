import React from "react";
import { useRouter } from "next/router";

const PageDetail = () => {
  const router = useRouter();
  const { id, pageId } = router.query;
  return (
    <div>
      <h1>Page Detail</h1>
      <h1>Page Id : {pageId}</h1>
      <h1>ProjectId : {id}</h1>
    </div>
  );
};

export default PageDetail;
