import React from "react";
import EditForm from "./EditForm";
import { Heading, Div } from "./EditTableStyles";

const EditTable = () => {
  return (
    <Div>
      <Heading>Do you want to make some changes:</Heading>
      <EditForm />
    </Div>
  );
};

export default EditTable;
