import React from "react";
import Button from "../Button";

export default function CreateProject() {
  return (
    <div className="border border-solid border-grey-400 p-3 text-right flex justify-end">
      <div>
        <Button className="" asLink href="/project">
          {" "}
          Create Project
        </Button>
      </div>
    </div>
  );
}
