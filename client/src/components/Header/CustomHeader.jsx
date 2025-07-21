import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar } from '@mantine/core';

const CustomHeader = () => (
  <div className="d-flex justify-content-between align-items-center mb-4">
    <input className="form-control w-50" placeholder="Search anything..." />
    <div className="d-flex align-items-center">
      <Bell size={20} className="me-3" />
      <Avatar src="https://i.pravatar.cc/300" radius="xl" />
    </div>
  </div>
);

export default CustomHeader;
