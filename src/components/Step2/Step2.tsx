import React from 'react';
import './Step2.scss';
import arcadeIcon from '../../assets/images/icon-arcade.svg';
import advancedIcon from '../../assets/images/icon-advanced.svg';
import proIcon from '../../assets/images/icon-pro.svg';
import { Plan } from '../../types/plan';

interface Step2Props {
  billingType: 'monthly' | 'yearly';
  selectedPlan: string;
  onBillingToggle: () => void;
  onPlanChange: (plan: Plan) => void;
}

const Step2: React.FC<Step2Props> = ({ billingType, selectedPlan, onBillingToggle, onPlanChange }) => {
  return (
    <div className='step2-form'>
      {/* Your plan selection logic */}
      <div className='plans'>
        <label className={`plan ${selectedPlan === 'arcade' ? 'selected' : ''}`}>
          <input type='radio' name='plan' value='arcade' checked={selectedPlan === 'arcade'} onChange={() => onPlanChange('arcade')} />
          <div className='plan-content'>
            <img src={arcadeIcon} alt='Arcade Plan Icon' className='icon' />
            <div className='plan-details'>
              <span className='plan-name'>Arcade</span>
              <span className='plan-price'>{billingType === 'yearly' ? '$90/yr' : '$9/mo'}</span>
              {billingType === 'yearly' && <span className='plan-features'>2 months free</span>}
            </div>
          </div>
        </label>

        <label className={`plan ${selectedPlan === 'advanced' ? 'selected' : ''}`}>
          <input type='radio' name='plan' value='advanced' checked={selectedPlan === 'advanced'} onChange={() => onPlanChange('advanced')} />
          <div className='plan-content'>
            <img src={advancedIcon} alt='Advanced Plan Icon' className='icon' />
            <div className='plan-details'>
              <span className='plan-name'>Advanced</span>
              <span className='plan-price'>{billingType === 'yearly' ? '$120/yr' : '$12/mo'}</span>
              {billingType === 'yearly' && <span className='plan-features'>2 months free</span>}
            </div>
          </div>
        </label>

        <label className={`plan ${selectedPlan === 'pro' ? 'selected' : ''}`}>
          <input type='radio' name='plan' value='pro' checked={selectedPlan === 'pro'} onChange={() => onPlanChange('pro')} />
          <div className='plan-content'>
            <img src={proIcon} alt='Pro Plan Icon' className='icon' />
            <div className='plan-details'>
              <span className='plan-name'>Pro</span>
              <span className='plan-price'>{billingType === 'yearly' ? '$150/yr' : '$15/mo'}</span>
              {billingType === 'yearly' && <span className='plan-features'>2 months free</span>}
            </div>
          </div>
        </label>
      </div>

      {/* Billing Type Toggle */}
      <div className='billing-toggle'>
        <span>Monthly</span>
        <button type='button' className={`toggle-button ${billingType === 'yearly' ? 'checked' : ''}`} onClick={onBillingToggle} aria-label='Toggle Billing Type'>
          <span className='toggle-switch'></span>
        </button>
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default Step2;
