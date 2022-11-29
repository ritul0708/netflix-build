import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import Navbar from '../Navbar'
import { selectUser } from '../reducers/userSlice'
import './ProfilePage.css'
import PlanPage from './PlanPage'

const ProfilePage = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profilePage'>
      <Navbar/>
      <div className="profilePage-body">
        <h1>Edit Profile</h1>
        <div className="profilePage-info">
          <img 
            src="https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png" 
            alt="Profile" 
          />
          <div className="profilePage-details">
            <h2>{user.email}</h2>
            <div className="profilePage-subscriptionPlans">
              <h3>Subscription Plans</h3>
              <PlanPage />
              <button 
                onClick={() => auth.signOut()} 
                className='profilePage-signOut'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage