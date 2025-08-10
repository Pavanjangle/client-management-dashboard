import { Bell, Crown } from 'lucide-react';
import { useState } from 'react';
import UpgradeModal from '../Modal/UpgradeModal';

const CustomHeader = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <input className="form-control w-50" placeholder="Search anything..." />
      <div className="d-flex align-items-center">
        <button
          className="btn btn-warning me-3 d-flex align-items-center"
          onClick={() => setIsUpgradeModalOpen(true)}
          style={{
            backgroundColor: '#ffc107',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e0a800'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ffc107'}
        >
          <Crown size={16} className="me-2" />
          Upgrade
        </button>
        <Bell size={20} className="me-3" />
        {/* <Avatar src="https://i.pravatar.cc/300" radius="xl" /> */}
      </div>
      
      {/* Upgrade Modal */}
      <UpgradeModal 
        isOpen={isUpgradeModalOpen} 
        onClose={() => setIsUpgradeModalOpen(false)} 
      />
    </div>
  );
};

export default CustomHeader;
