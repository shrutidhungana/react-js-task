import React, { useState, useContext } from "react";
import { TableContext } from "../../../Context/TableContext";
import {
  Button,
  Container,
  Label,
  Input,
  Inputt,
  Labell,
  Select,
  Option,
  Span,
  Paragraph,
} from "./AddFormStyles";
const AddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("Nepal");
  const [province, setProvince] = useState("");
  const [errors, setErrors] = useState(false);
  const [error, setError] = useState(false);
  const { createTable, tables } = useContext(TableContext);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const isValidEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };
  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setErrors("Email is invalid.Format is name@example.com");
    } else {
      setErrors(null);
    }
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    if (e.target.value.length < 7) {
      setError("Your numbers should be atleast 7 digits ");
    } else {
      setError(null);
    }
    setPhoneNumber((v) => (e.target.validity.valid ? e.target.value : v));
  };

  const handleDOBChange = (e) => {
    setDob(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const tablesNew = {
      id: tables.length + 1,
      name,
      email,
      phoneNumber,
      dob,
      city,
      district,
      country,
    };
    createTable(tablesNew);
  };
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div>
          <Label htmlFor="name">
            Name:
            <Span>*{/* *(Star) indicates it is required */}</Span>
          </Label>
          <Input
            type="text"
            required
            placeholder="Enter your Name.."
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <Label htmlFor="email">
            E-mail
            <Span>*{/* *(Star) indicates it is required */}</Span>
          </Label>
          <Input
            type="email"
            required
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
          />
          {errors && <Paragraph>{errors}</Paragraph>}
        </div>
        <div>
          <Label htmlFor="phoneNumber">
            Phone Number:
            <Span>*{/* *(Star) indicates it is required */}</Span>
          </Label>
          <Input
            type="text"
            pattern="[0-9]*"
            required
            placeholder="Enter your Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {error && <Paragraph>{error}</Paragraph>}
        </div>
        <div>
          <Label htmlFor="dob">Date Of Birth (DOB):</Label>
          <Input type="date" value={dob} onChange={handleDOBChange} />
        </div>
        <div>
          <Label htmlFor="address">Address:</Label>

          <Labell htmlFor="city">City:</Labell>
          <Inputt
            type="text"
            placeholder="Enter your city.."
            value={city}
            onChange={handleCityChange}
          />
          <Labell htmlFor="district">District:</Labell>
          <Inputt
            type="text"
            placeholder="Enter your district.."
            value={district}
            onChange={handleDistrictChange}
          />
          <Labell htmlFor="province">Province:</Labell>
          <Select
            defaultValue="province"
            onChange={handleProvinceChange}
            value={province}
          >
            <Option value="province" disabled>
              Choose Province
            </Option>
            <Option value="Province One">Province One</Option>
            <Option value="Madesh Province">Madesh Province</Option>
            <Option value="Bagmati Province">Bagmati Province</Option>
            <Option value="Gandaki Province">Gandaki Province</Option>
            <Option value="Lumbini Province">Lumbini Province</Option>
            <Option value="Karnali Province">Karnali Province</Option>
            <Option value="Sudhurpaschhim Province">
              Sudhurpaschhim Province
            </Option>
          </Select>
          <Labell htmlFor="country">Country:</Labell>
          <Inputt
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={handleCountryChange}
          />
        </div>
        <Button>Create Table</Button>
      </form>
    </Container>
  );
};

export default AddForm;
