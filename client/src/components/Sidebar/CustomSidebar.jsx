import { Home, ShoppingCart, Users, BarChart, Volume2, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const menu = [
  { 
    icon: <Home size={18} />, 
    label: 'Overview',
    hasChildren: true,
    children: [
      { label: 'Dashboard', icon: <BarChart size={16} /> },
      { label: 'Analytics', icon: <BarChart size={16} /> },
      { label: 'Reports', icon: <BarChart size={16} /> },
      { label: 'Insights', icon: <BarChart size={16} /> },
      { label: 'Performance', icon: <BarChart size={16} /> }
    ]
  },
  { 
    icon: <ShoppingCart size={18} />, 
    label: 'Products',
    hasChildren: true,
    children: [
      { label: 'All Products', icon: <ShoppingCart size={16} /> },
      { label: 'Add Product', icon: <ShoppingCart size={16} /> },
      { label: 'Categories', icon: <ShoppingCart size={16} /> },
      { label: 'Inventory', icon: <ShoppingCart size={16} /> }
    ]
  },
  { 
    icon: <Users size={18} />, 
    label: 'Customer',
    hasChildren: true,
    children: [
      { label: 'All Customers', icon: <Users size={16} /> },
      { label: 'Add Customer', icon: <Users size={16} /> },
      { label: 'Customer Groups', icon: <Users size={16} /> }
    ]
  },
  { 
    icon: <BarChart size={18} />, 
    label: 'Statistics',
    hasChildren: true,
    children: [
      { label: 'Sales Stats', icon: <BarChart size={16} /> },
      { label: 'Revenue', icon: <BarChart size={16} /> },
      { label: 'Growth', icon: <BarChart size={16} /> },
      { label: 'Trends', icon: <BarChart size={16} /> }
    ]
  },
  { 
    icon: <Volume2 size={18} />, 
    label: 'Campaign',
    hasChildren: true,
    children: [
      { label: 'All Campaigns', icon: <Volume2 size={16} /> },
      { label: 'Create Campaign', icon: <Volume2 size={16} /> },
      { label: 'Campaign Analytics', icon: <Volume2 size={16} /> }
    ]
  },
];

const CustomSidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isDropdownHovered) {
        setHoveredItem(null);
      }
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
    setHoveredItem(null);
  };

  return (
    <div className="p-3 bg-dark text-white" style={{ width: 250, minHeight: '100vh', position: 'relative' }}>
      <h4 className="mb-4">Service's</h4>
      <ul className="list-unstyled">
        {menu.map((item, i) => (
          <li key={i} className="mb-3" style={{ position: 'relative' }}>
            {item.hasChildren ? (
              <div
                className="d-flex align-items-center justify-content-between w-100"
                style={{
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s',
                  backgroundColor: hoveredItem === i ? '#34495e' : 'transparent'
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex align-items-center">
                  <span className="me-2">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <ChevronRight size={16} />
              </div>
            ) : (
              <div
                className="d-flex align-items-center"
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  backgroundColor: hoveredItem === i ? '#34495e' : 'transparent'
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="me-2">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            )}
            
            {/* Child options dropdown */}
            {item.hasChildren && hoveredItem === i && (
              <div
                style={{
                  position: 'absolute',
                  left: '100%',
                  top: 0,
                  backgroundColor: '#2c3e50',
                  border: '1px solid #34495e',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  zIndex: 1000,
                  minWidth: '180px',
                  padding: '8px 0'
                }}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                {item.children.map((child, childIndex) => (
                  <div
                    key={childIndex}
                    className="d-flex align-items-center p-2"
                    style={{
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      color: 'white',
                      fontSize: '14px',
                      padding: '8px 12px'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    onClick={() => {
                      console.log(`Clicked: ${child.label}`);
                      // Add your navigation or action logic here
                    }}
                  >
                    <span className="me-2">{child.icon}</span>
                    <span>{child.label}</span>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <button className="btn btn-primary w-100">Upgrade</button>
      </div>
    </div>
  );
};

export default CustomSidebar;
