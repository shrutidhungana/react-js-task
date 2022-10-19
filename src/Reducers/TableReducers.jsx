import { CREATE_TABLE, EDIT_TABLE, DELETE_TABLE } from "./ReducerTypes";

const TableReducers = (state, action) => {
    switch (action.type) {
      case CREATE_TABLE:
        return {
          ...state,
          tables: [...state.tables, action.payload],
        };
  
      case EDIT_TABLE:
        const updatedTable = action.payload;
  
        const updatedTables = state.tables.map((tablee) => {
          if (tablee.id === updatedTable.id) {
            return updatedTable;
          }
          return tablee;
        });
  
        return {
          ...state,
          tables: updatedTables,
        };
  
      case DELETE_TABLE:
        return {
          ...state,
          tables: state.tables.filter(
            (tablee) => tablee.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default TableReducers;