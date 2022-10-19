import React, { useState, useContext } from "react";
import { TableContext } from "../../../Context/TableContext";

const AddForm = () => {
   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("Nepal");
    const [errors, setErrors] = useState(false);
  const [error, setError] = useState(false);
  const {createTable, tables} = useContext(TableContext)
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
  const isValidEmail = (email) => {
      return  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);  
}
    const handleEmailChange = (e) => {
        if (!isValidEmail(e.target.value)) {
            setErrors('Email is invalid.Format is name@example.com');
          } else {
            setErrors(null);
        }
        setEmail(e.target.value)
   }
  
   
    
    const handlePhoneNumberChange = (e) => {
        if (e.target.value.length < 7 ) {
          setError('Your numbers should be atleast 7 digits ') 
        } else {
            setError(null)
        }
        setPhoneNumber((v) => (e.target.validity.valid ? e.target.value : v))
        
   }
  
    const handleDOBChange = (e) => {
        setDob(e.target.value)
    }
    
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleDistrictChange = (e) => {
        setDistrict(e.target.value)
    }

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }
  
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
      country
     
    };
    createTable(tablesNew)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">
            Name:*{/* *(Star) indicates it is required */}
          </label>
                  <input type="text"
                      required
                      placeholder="Enter your Name.."
                      value={name}
                      onChange = {handleNameChange}
                  />
        </div>
        <div>
          <label htmlFor="email">
            E-mail*{/* *(Star) indicates it is required */}
          </label>
                  <input type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={handleEmailChange}
                  />
                  {errors && <p>{errors }</p>}
        </div>
        <div>
          <label htmlFor="phoneNumber">
            Phone Number:*{/* *(Star) indicates it is required */}
          </label>
                  <input type="text"
                      pattern="[0-9]*"
                      required
                      placeholder="Enter your Phone Number"
                      value={phoneNumber}
                      onChange = {handlePhoneNumberChange}
                     
                  />
                  {error && <p>{error }</p>}
        </div>
        <div>
          <label htmlFor="dob">Date Of Birth (DOB):</label>
                  <input type="date"
                      value={dob}
                      onChange = {handleDOBChange}
                  />
        </div>
        <div>
          <label htmlFor="address">Address:</label>

          <label htmlFor="city">City:</label>
                  <input type="text"
                      placeholder="Enter your city.."
                      value={city}
                      onChange = {handleCityChange}
                  />
          <label htmlFor="district">District:</label>
                  <input type="text"
                      placeholder="Enter your district.."
                      value={district}
                      onChange = {handleDistrictChange}
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
                      placeholder="Enter Country"
                      value={country}
                      onChange = {handleCountryChange}
                  />
              </div>
              <button>Create Table</button>
      </form>
    </div>
  );
};

export default AddForm;