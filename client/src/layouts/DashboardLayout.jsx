import React from 'react';
import CustomSidebar from '../components/Sidebar/CustomSidebar';
import CustomHeader from '../components/Header/CustomHeader';

const DashboardLayout = ({ children }) => (
  <div className="d-flex">
    <CustomSidebar />
    <div className="flex-grow-1 p-3" style={{ backgroundColor: '#f4f4fc' }}>
      <CustomHeader />
      {children}
    </div>
  </div>
);

export default DashboardLayout;
