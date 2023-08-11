import React, { useState } from 'react';
import './plan.css';

function Plan() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingInterval, setBillingInterval] = useState('monthly');
  const [subscriptionCreated, setSubscriptionCreated] = useState(false);

  const plans = [
    {
      name: 'Mobile',
      monthlyPrice: 100,
      yearlyPrice: 1000,
      videoQuality: 'Good',
      resolution: '480p',
      devices: 'Phone',
      
    },
    {
        name: 'Basic',
        monthlyPrice: 200,
        yearlyPrice: 2000,
        videoQuality: 'Good',
        resolution: '480p',
        devices: 'Phone',
        
      },
      {
        name: 'Standard',
        monthlyPrice: 500,
        yearlyPrice: 5000,
        videoQuality: 'Better',
        resolution: '1080p',
        devices: 'Phone',
        
      },
      {
        name: 'Premium',
        monthlyPrice: 700,
        yearlyPrice: 7000,
        videoQuality: 'Best',
        resolution: '4k+HDR',
        devices: 'Phone',
        
      }
    
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBillingIntervalChange = () => {
    setBillingInterval(billingInterval === 'monthly' ? 'yearly' : 'monthly');
  };

  const handleTakePlan = () => {
    setSubscriptionCreated(true);
  };

  const handleCancelSubscription = () => {
    setSubscriptionCreated(false);
  };

  return (
    <div className="App">
      <div className="content">
      <header className="header">
        <h1>Subscription Plans</h1>
      </header>
        {!subscriptionCreated ? (
          <div className="subscription-container">
            <div className="slider">
              <span className={`slider-label ${billingInterval === 'monthly' ? 'active' : ''}`} onClick={handleBillingIntervalChange}>
                Monthly
              </span>
              <div className="slider-switch">
                <div className={`slider-thumb ${billingInterval === 'yearly' ? 'active' : ''}`} onClick={handleBillingIntervalChange}></div>
              </div>
              <span className={`slider-label ${billingInterval === 'yearly' ? 'active' : ''}`} onClick={handleBillingIntervalChange}>
                Yearly
              </span>
            </div>

            <div className="plans">
              <div className='plan_headings'>
                <p>Price</p>
                <p>Video Quality</p>
                <p>Resolution</p>
                <p>Device You can use to watch </p>
              </div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`plan ${selectedPlan === plan ? 'selected' : ''}`}
                  onClick={() => handlePlanSelect(plan)}
                >
                  <h2>{plan.name}</h2>
                  <p>{billingInterval === 'monthly' ? `${plan.monthlyPrice} INR` : `${plan.yearlyPrice} INR`}</p>
                  <p>{plan.videoQuality}</p>
                  <p>{plan.resolution}</p>
                  <p>{plan.devices}</p>
                  <p>{plan.screens}</p>
                </div>
              ))}
            </div>
            <button className="take-plan-button" onClick={handleTakePlan}>
              Take Plan
            </button>
          </div>
        ) : (
          <div className="subscription-created">
            <h2>Your Subscription Created</h2>
            <button className="cancel-subscription-button" onClick={handleCancelSubscription}>
              Cancel Subscription
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Plan;
