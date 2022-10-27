import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import AOS from 'aos';

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-blue-400 text-gray-100 mt-[95px] mb-4 mx-auto" data-aos="fade-down">
	{
    user?.photoURL ? 
    <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full shadow-2xl aspect-square" />
    : <img src="https://play-lh.googleusercontent.com/97SBxbD2bNm201fHNM440s71k2jmaYPuJrQVBHZuFu81Cr83VWrXei_SZuaR2jIbReY" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
  }
	<div className="space-y-4 text-center ">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
			<p className="px-5 text-xs sm:text-base">{user?.email}</p>
		</div>
		
	</div>
</div>
  );
};

AOS.init();

export default Profile;