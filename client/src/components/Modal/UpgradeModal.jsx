import { useState } from 'react';
import { X, Check, Star } from 'lucide-react';

const UpgradeModal = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$9',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 customers',
        'Basic analytics',
        'Email support',
        '5GB storage',
        'Basic reporting'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$29',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        'Up to 1000 customers',
        'Advanced analytics',
        'Priority support',
        '25GB storage',
        'Advanced reporting',
        'Custom integrations',
        'Team collaboration'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Enterprise analytics',
        '24/7 phone support',
        'Unlimited storage',
        'Custom reporting',
        'API access',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  if (!isOpen) return null;

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleUpgrade = () => {
    // Here you would integrate with your payment system
    console.log(`Upgrading to ${selectedPlan} plan`);
    alert(`Redirecting to payment for ${plans.find(p => p.id === selectedPlan)?.name} plan`);
    onClose();
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1050
    }}>
      <div className="modal-content" style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '32px',
        maxWidth: '900px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="mb-2" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a1a1a' }}>
            Choose Your Plan
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', color: '#666' }}>
            Select the perfect plan for your business needs
          </p>
        </div>

        {/* Plans */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
              style={{
                border: selectedPlan === plan.id ? '3px solid #007bff' : '2px solid #e9ecef',
                borderRadius: '16px',
                padding: '24px',
                width: '280px',
                position: 'relative',
                backgroundColor: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: selectedPlan === plan.id ? 'scale(1.02)' : 'scale(1)',
                boxShadow: selectedPlan === plan.id ? '0 8px 25px rgba(0, 123, 255, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  <Star size={14} className="me-1" />
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-4">
                <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1a1a1a' }}>
                  {plan.name}
                </h3>
                <p className="text-muted mb-3" style={{ color: '#666', fontSize: '0.9rem' }}>
                  {plan.description}
                </p>
                <div className="price" style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#007bff' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '1.1rem', color: '#666' }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="list-unstyled mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <Check size={16} className="me-2" style={{ color: '#28a745', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#333' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Selection indicator */}
              {selectedPlan === plan.id && (
                <div className="text-center">
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#007bff',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Check size={12} color="white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="text-center">
          <button
            onClick={handleUpgrade}
            className="btn btn-primary btn-lg px-5 py-3"
            style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '8px',
              backgroundColor: '#007bff',
              border: 'none',
              padding: '12px 32px'
            }}
          >
            Upgrade to {plans.find(p => p.id === selectedPlan)?.name}
          </button>
          <button
            onClick={onClose}
            className="btn btn-outline-secondary ms-3 px-4 py-3"
            style={{
              fontSize: '1rem',
              borderRadius: '8px',
              border: '2px solid #6c757d',
              color: '#6c757d',
              backgroundColor: 'transparent'
            }}
          >
            Maybe Later
          </button>
        </div>

        {/* Additional info */}
        <div className="text-center mt-4">
          <p style={{ fontSize: '0.875rem', color: '#666' }}>
            All plans include a 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
