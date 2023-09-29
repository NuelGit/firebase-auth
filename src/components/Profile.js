import React from 'react'
import {useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/UserContext'

const Profile = () => {
    const {logout, user, userProfile} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async() =>{
        try {
           await logout() 
           navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <> 
    <div>User's Profile</div>
    <p>User Email: {user && user.email} </p>

    <div>
        <p> User Full-Name: { userProfile && userProfile.fullname}</p>
        <p> User Full-Name: { userProfile && userProfile.phone}</p>
    </div>

    <div>
        <button onClick={handleLogout}> Log-Out</button>
    </div>
  </>
  )
}

export default Profile
