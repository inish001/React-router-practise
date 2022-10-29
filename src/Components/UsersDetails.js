import React from 'react'
import { useParams } from 'react-router-dom'

function UsersDetails() {
    const params = useParams()    // const{userId} = useParams()
    const userId = params.userId  // instead of this line we can destructure the id in the above line
  return (
    <div>
      Details of Users {userId}
    </div>
  )
}

export default UsersDetails
