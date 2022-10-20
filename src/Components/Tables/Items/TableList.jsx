import React, { useContext } from "react";
import { TableContext } from "../../../Context/TableContext";
import { Link } from "react-router-dom";
import { Button, Button2, Button3, Paragraph } from "./TableListStyle";
import "./TableList.css";

const TableList = () => {
  const { tables, deleteTable } = useContext(TableContext);

  const tableRows = tables.map((tablee) => {
    return (
      <tr key={tablee.id}>
        <td className="td">{tablee.name}</td>

        <td className="td">{tablee.email}</td>
        <td className="td">{tablee.phoneNumber}</td>
        <td className="td">{tablee.dob}</td>
        <td className="td">{tablee.city}</td>
        <td className="td">{tablee.district}</td>
        <td className="td">{tablee.province}</td>
        <td className="td">{tablee.country}</td>
        <td className="td">
          <Button3>
            <Link to={`/edit/${tablee.id}`} className="lk">
              Edit
            </Link>
          </Button3>
        </td>
        <td className="td">
          <Button2 onClick={() => deleteTable(tablee.id)}>Delete</Button2>
        </td>
      </tr>
    );
  });

  return (
    <div>
      {tables.length > 0 ? (
        <div>
          <table className="table" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th rowspan="2" className="th">
                  Name
                </th>
                <th rowspan="2" className="th">
                  Email
                </th>
                <th rowspan="2" className="th">
                  Phone Number
                </th>
                <th rowspan="2" className="th">
                  Date Of Birth
                </th>
                <th colspan="4" className="th">
                  Address
                </th>
              </tr>
              <tr>
                <th className="th2">City</th>
                <th className="th2">District</th>
                <th className="th2">Province</th>
                <th className="th2">Country</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      ) : (
        <Paragraph>It seems like no data is entered.</Paragraph>
      )}
      <Button>
        <Link to="profile" className="link">
          Profiles
        </Link>
      </Button>
    </div>
  );
};

export default TableList;
