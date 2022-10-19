import React, { useState, useEffect, useContext } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import { TableContext } from "../../../Context/TableContext";
import { Button, Container, Input, Label, Span, Labell,Inputt, Select, Option } from "./EditFormStyles";



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
      navigate("/profile")
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div>
          <Label htmlFor="name">
            Name:
           <Span>
              *{/* *(Star) indicates it is required */}
              </Span>
          </Label>
                  <Input type="text"
                      required
                      value = {selectedTable.name}
                      onChange={(e) => handleOnChange("name", e.target.value)}
                  />
        </div>
        <div>
          <Label htmlFor="email">
            E-mail
            <Span>
          *
            </Span>
          {/* *(Star) indicates it is required */}
          </Label>
                  <Input type="email"
                      required
                      value={selectedTable.email}
                  onChange={(e) => handleOnChange("email", e.target.value)}
                  
                  />
                    
        </div>
        <div>
          <Label htmlFor="phoneNumber">
            Phone Number:
            <Span>
              *
            </Span>
              {/* *(Star) indicates it is required */}
          </Label>
                  <Input type="text"
                      pattern="[0-9]*"
                      required
                      value={selectedTable.phoneNumber}
                      onChange={(e) => handleOnChange("phoneNumber", e.target.value)}
                      
                     
                  />
                  
        </div>
        <div>
          <Label htmlFor="dob">Date Of Birth (DOB):</Label>
                  <Input type="date"
                  value={selectedTable.dob}
                  onChange={(e) => handleOnChange("dob", e.target.value)}
                  
                  />
        </div>
        <div>
          <Label htmlFor="address">Address:</Label>

          <Labell htmlFor="city">City:</Labell>
                  <Inputt type="text"
                  value={selectedTable.city}
                  onChange={(e) => handleOnChange("city", e.target.value)}
                  
                     
                  />
          <Labell htmlFor="district">District:</Labell>
                  <Inputt type="text"
                      value={selectedTable.district}
                      onChange={(e) => handleOnChange("district", e.target.value)}
                      
                  />
          <Labell htmlFor="province">Province:</Labell>
          <Select defaultValue="province">
            <Option value="province" disabled>
              Choose Province
            </Option>
            <Option value="provinceOne">Province One</Option>
            <Option value="madeshProvince">Madesh Province</Option>
            <Option value="bagmatiProvince">Bagmati Province</Option>
            <Option value="gandakiProvince">Gandaki Province</Option>
            <Option value="lumbiniProvince">Lumbini Province</Option>
            <Option value="karnaliProvince">Karnali Province</Option>
            <Option value="sudhurProvince">Sudhurpaschhim Province</Option>
          </Select>
          <Labell htmlFor="country">Country:</Labell>
                  <Inputt type="text"
                      value={selectedTable.country}
                      onChange={(e) => handleOnChange("country", e.target.value)}
                      
                  />
              </div>
              <Button>Edit Profile</Button>
      </form>
    </Container>
  );
};

export default EditForm;

