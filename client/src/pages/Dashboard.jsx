import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/Card/StatCard';
import CustomBarChart from '../components/Chart/BarChart';
import CustomPieChart from '../components/Chart/PieChart';
import { DollarSign, Users, ShoppingBag, Eye } from 'lucide-react';

const Dashboard = () => (
  <DashboardLayout>
    <h2 className="mb-4">Dashboard</h2>
    <div className="row g-4">
      <div className="col-md-3">
        <StatCard icon={<DollarSign />} label="Total Revenue" value="$587,684.81" growth="+10.5%" />
      </div>
      <div className="col-md-3">
        <StatCard icon={<Users />} label="Total Customer" value="164,540" growth="-0.5%" />
      </div>
      <div className="col-md-3">
        <StatCard icon={<ShoppingBag />} label="Total Transaction" value="256,560" growth="+5.5%" />
      </div>
      <div className="col-md-3">
        <StatCard icon={<Eye />} label="Total Visitor" value="97,560" growth="+15.5%" />
      </div>
    </div>

    <div className="row g-4 mt-4">
      <div className="col-md-8">
        <div className="card p-3">
          <h5>Statistics of Orders</h5>
          <CustomBarChart />
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3">
          <h5>Deliveries</h5>
          <CustomPieChart />
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
