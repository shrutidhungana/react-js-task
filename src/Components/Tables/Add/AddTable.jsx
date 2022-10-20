import React from "react";
import AddForm from "./AddForm";
import { Heading, Div } from "./AddTableStyles";

const AddTable = () => {
  return (
    <Div>
      <Heading>Please enter the following credentials:</Heading>
      <AddForm />
    </Div>
  );
};

export default AddTable;
