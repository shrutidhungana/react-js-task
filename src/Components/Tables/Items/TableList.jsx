import React, { useContext, useState } from 'react'
import { TableContext } from '../../../Context/TableContext'
import { Link } from 'react-router-dom'

const TableList = () => {
  const { tables, deleteTable } = useContext(TableContext)
  const [sort, setSort] = useState()
  
  return (
    <div>
      {tables.length > 0 ? (
        <div>
          {tables.map((tablee) => (
            <table key={tablee.id} width="100%" border="1" cellspacing="0" cellpadding="0">
              <thead>
              <tr>
               <th rowspan = "2">Name</th>
               <th rowspan = "2">Email</th>
               <th rowspan = "2">Phone Number</th>
               <th rowspan = "2">Date Of Birth</th>
               <th colspan = "4">Address</th>
              </tr>
              <tr>
               <th>City</th>
               <th>District</th>
               <th>Province</th>
               <th>Country</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{tablee.name}</td>
                  <td>{tablee.email}</td>
                  <td>{tablee.phoneNumber}</td>
                  <td>{tablee.dob}</td>
                  <td>{tablee.city}</td>
                  <td>{tablee.district}</td>
                  <td>{tablee.province}</td>
                  <td>{tablee.country}</td>
                  <td>
                  <Link to={`/edit/${tablee.id}`}>
                    Edit
                  </Link>
                  </td>
                  <td>
                    <button onClick={() => deleteTable(tablee.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
               
            </table>
          ))}
        </div>
          
         
       
         
     ) : (
        <p>It seems like no data is entered.</p>
      )
       
      }
      <Link to = "profile">Profiles</Link>
    </div>
  )
}

export default TableList