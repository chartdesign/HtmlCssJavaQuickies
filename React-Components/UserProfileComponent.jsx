
import React from 'react';

const UserProfile = ({ backgroundImg, profileImg, userName, userDescription }) => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: \`url(\${backgroundImg})\` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-3xl font-bold mb-2">{userName}</h1>
        <p className="text-white text-lg">{userDescription}</p>
      </div>
      <img src={profileImg} alt="Profile" className="absolute bottom-4 right-4 w-16 h-16 rounded-full border-2 border-white" />
    </div>
  );
};

export default UserProfile;
