import React from 'react'
import EditForm from './EditForm'
import { Heading, Div } from './EditProfileStyles'

const EditProfile = () => {
  return (
    <Div>
         <Heading>Do you want to make some changes in the profile section:</Heading>
          <EditForm />
      </Div>
  )
}

export default EditProfile