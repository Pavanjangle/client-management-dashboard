import { Home, ShoppingCart, Users, BarChart, Volume2 } from 'lucide-react';

const menu = [
  { icon: <Home size={18} />, label: 'Overview' },
  { icon: <ShoppingCart size={18} />, label: 'Product' },
  { icon: <Users size={18} />, label: 'Customer' },
  { icon: <BarChart size={18} />, label: 'Statistics' },
  { icon: <Volume2 size={18} />, label: 'Campaign' },
//   { icon: <Volume2 size={18} />, label: 'Campaign' },
];

const CustomSidebar = () => (
  <div className="p-3 bg-dark text-white" style={{ width: 250, minHeight: '100vh' }}>
    <h4 className="mb-4">Services</h4>
    <ul className="list-unstyled">
      {menu.map((item, i) => (
        <li key={i} className="mb-3 d-flex align-items-center">
          <span className="me-2">{item.icon}</span> {item.label}
        </li>
      ))}
    </ul>
    <div className="mt-auto">
      <button className="btn btn-primary w-100">Upgrade</button>
    </div>
  </div>
);

export default CustomSidebar;
