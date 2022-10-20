import React, { createContext, useReducer, useEffect } from "react";
import TableReducers from "../Reducers/TableReducers";
import {
  CREATE_TABLE,
  EDIT_TABLE,
  DELETE_TABLE,
} from "../Reducers/ReducerTypes";

const initialState = {
  tables: [],
};

export const TableContext = createContext(initialState);

const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TableReducers, initialState);

  const createTable = (tablee) => {
    dispatch({
      type: CREATE_TABLE,
      payload: tablee,
    });
  };

  const editTable = (tablee) => {
    dispatch({
      type: EDIT_TABLE,
      payload: tablee,
    });
  };

  const deleteTable = (id) => {
    dispatch({
      type: DELETE_TABLE,
      payload: id,
    });
  };

  useEffect(() => {});

  return (
    <TableContext.Provider
      value={{
        tables: state.tables,
        createTable,
        editTable,
        deleteTable,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
