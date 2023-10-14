import React from 'react'
import PersonInfo from './personalinformation';
import SecurityData from './securitydata';
import Profile from './profile';
import ProfileHome from './profileHome';

  const ProfileLayout =  () =>{
    
    return (
      <div className='fixed inset-0 bg-black/50 flex justify-end pt-12 pr-14 items-start'>
            <PersonInfo />
            <Profile />
            <ProfileHome />
            <SecurityData />
      </div>
    )
    }





export default ProfileLayout