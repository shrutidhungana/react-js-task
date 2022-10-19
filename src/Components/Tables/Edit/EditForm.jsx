import React, { useState, useEffect, useContext } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import { TableContext } from "../../../Context/TableContext";



const EditForm = () => {
  const [selectedTable, setSelectedTable] = useState({
    id: null,
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "",
  });

  const { tables, editTable } = useContext(TableContext);
 
  const { id } = useParams();
   let navigate = useNavigate()
  useEffect(() => {
    const tableId = id;
    const selectedTable = tables.find(
      (currentTableTraversal) =>
        currentTableTraversal.id === parseInt(tableId)
    );
    setSelectedTable(selectedTable);
  }, [id, tables]);

  const handleOnChange = (userKey, newValue) =>
    setSelectedTable({ ...selectedTable, [userKey]: newValue });

  if (!selectedTable || !selectedTable.id) {
    return <div>Invalid Project ID.</div>;
  }

  const onSubmit = (e) => {
    e.preventDefault()
      editTable(selectedTable)
      navigate("/")
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">
            Name:*{/* *(Star) indicates it is required */}
          </label>
                  <input type="text"
                      required
                      value = {selectedTable.name}
                      onChange={(e) => handleOnChange("name", e.target.value)}
                  />
        </div>
        <div>
          <label htmlFor="email">
            E-mail*{/* *(Star) indicates it is required */}
          </label>
                  <input type="email"
                      required
                      value={selectedTable.email}
                  onChange={(e) => handleOnChange("email", e.target.value)}
                  
                  />
                    
        </div>
        <div>
          <label htmlFor="phoneNumber">
            Phone Number:*{/* *(Star) indicates it is required */}
          </label>
                  <input type="text"
                      pattern="[0-9]*"
                      required
                      value={selectedTable.phoneNumber}
                      onChange={(e) => handleOnChange("phoneNumber", e.target.value)}
                      
                     
                  />
                  
        </div>
        <div>
          <label htmlFor="dob">Date Of Birth (DOB):</label>
                  <input type="date"
                  value={selectedTable.dob}
                  onChange={(e) => handleOnChange("dob", e.target.value)}
                  
                  />
        </div>
        <div>
          <label htmlFor="address">Address:</label>

          <label htmlFor="city">City:</label>
                  <input type="text"
                  value={selectedTable.city}
                  onChange={(e) => handleOnChange("city", e.target.value)}
                  
                     
                  />
          <label htmlFor="district">District:</label>
                  <input type="text"
                      value={selectedTable.district}
                      onChange={(e) => handleOnChange("district", e.target.value)}
                      
                  />
          <label htmlFor="province">Province:</label>
          <select defaultValue="province">
            <option value="province" disabled>
              Choose Province
            </option>
            <option value="provinceOne">Province One</option>
            <option value="madeshProvince">Madesh Province</option>
            <option value="bagmatiProvince">Bagmati Province</option>
            <option value="gandakiProvince">Gandaki Province</option>
            <option value="lumbiniProvince">Lumbini Province</option>
            <option value="karnaliProvince">Karnali Province</option>
            <option value="sudhurProvince">Sudhurpaschhim Province</option>
          </select>
          <label htmlFor="country">Country:</label>
                  <input type="text"
                      value={selectedTable.country}
                      onChange={(e) => handleOnChange("country", e.target.value)}
                      
                  />
              </div>
              <button>Edit Table</button>
      </form>
    </div>
  );
};

export default EditForm;