import React, { useEffect } from 'react';
import PersonInfo from './personalinformation';
import SecurityData from './securitydata';
import { BsPersonExclamation } from 'react-icons/bs';
import { GiHouseKeys } from 'react-icons/gi';
import { TbLogout } from 'react-icons/tb';
import ProfileHome from './profileHome';
import { useSelector } from 'react-redux';
import { profile } from '../app/features/profile/profileSlice';
import {Popup} from '../components/popupmenu'

const Profile = () => {
  const [profilePage, setProfilePage] = React.useState(<ProfileHome />);

  const profiles = useSelector(profile)

  useEffect(() => {
    switch (profiles) {
      case 'personal-information':
        setProfilePage(<PersonInfo />);
        break;
      case 'security-and-data':
        setProfilePage(<SecurityData />);
        break;
      case 'back':
        setProfilePage(<ProfileHome />);
        break;
      default:
        setProfilePage(<ProfileHome />);
        break;
    }

  }, [profiles])
  

  const profilearray = [<Profile />,<PersonInfo />,<SecurityData />]
  
  return (
    <div className="fixed z-[2000] rounded-2xl top-16 w-['280px'] md:w-[320px] right-2 md:right-12 lg:right-24 h-auto bg-gray-100 ">
      
      {profilePage}
    </div>
  );
};

export default Profile;
