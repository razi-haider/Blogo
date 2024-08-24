// Purpose: User component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

function User() {
  // USING USENAVIGATE FOR NAVIGATION
  const Navigate = useNavigate();

  // FUNCTIONS FOR NAVIGATION
  const handleCreatePost = () => {
    Navigate('/create-blog');
  };

  // LOGOUT FUNCTION
  const handleLogout = () => {
    Navigate('/');
  };

  return (
    <Home
      // PROPS FOR HOME COMPONENT
      props={
        <>
          <p className='text-center'>
            Welcome to the users Screen. You can create new blog post from here.
          </p>
          <div className='text-center'>
            {/* Create new post button */}
            <button className='btn btn-primary' onClick={handleCreatePost}>
              Create new post
            </button>
            {/* Logout button */}
            <button className='btn btn-outline-danger' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      }
    />
  );
}

// EXPORT USER COMPONENT
export default User;
