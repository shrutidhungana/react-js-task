import React, { useContext } from 'react'
import { TableContext } from '../../Context/TableContext'
import { Link } from 'react-router-dom'
import { No, Box, Paragraph1 } from './ProfileListStyles'
const ProfilesList = () => {
  const {tables} = useContext(TableContext)
  return (
    <div>
      {tables.length > 0 ?
        (<div>
          {tables.map((tablee) => (
            <div key={tablee.id}>
              <p>Name:
                {tablee.name}
              </p>
              <p>Email:{ tablee.email}</p>
              <p>Phone Number:{tablee.phoneNumber }</p>
              <p>DOB:{tablee.dob }</p>
              <p>Address:
                <p>City:{tablee.city}</p>
                <p>District:{tablee.district}</p>
                <p>Province:{tablee.province}</p>
                <p> Country:{tablee.country}</p>
              </p>
              <div>
              <Link to={`/edits/${tablee.id}`}>Edit</Link>
              </div>
            </div>
          ))}
        </div>)
        :
        (
          <No>
            <Box>
              <Paragraph1>
                Seems like there are no items in profile
                </Paragraph1>
              </Box>
        </No>
        )}
    </div>
  )
}

export default ProfilesList