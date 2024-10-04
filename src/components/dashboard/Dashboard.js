import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import CreateForm from './CreateForm/CreateForm.js';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/addblog');
  };

  return (
    <div>
        {/* <Navbar/> */}
      <h2>DASHBOARD</h2>
      <button className="my-button" onClick={handleButtonClick}>
        Create BLog
      </button>
    </div>
  );
};

export default Dashboard;