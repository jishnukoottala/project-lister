import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { PageForm } from "../../../../components/Page/PageForm";
import { useCreatePage } from "@/hooks/page/createPage";

const CreatePage = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const { id } = router.query;
  const {
    loading: createPageLoading,
    error: createPageError,
    createPage,
  } = useCreatePage();

  const onUpdateHandler = async (_, pageData) => {
    try {
      const pageRef = await createPage(id, pageData, currentUser);
      router.push(`/project/${id}/page/${pageRef.id}`);
    } catch (err) {}
  };

  return (
    <div>
      <PageForm
        projectId={id}
        currentUser={currentUser}
        createLoading={createPageLoading}
        onUpdateHandler={onUpdateHandler}
        createError={createPageError}
      />
    </div>
  );
};

export default CreatePage;
