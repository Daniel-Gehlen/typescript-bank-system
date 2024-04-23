// UserInfo.js
import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

const UserInfo = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>User Information</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
