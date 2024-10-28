import React from 'react';
import './Step3.scss';
import { Billing } from '../../types/billing';

interface Step3Props {
  billingType: Billing;
  selectedAddOns: Set<string>;
  onToggleAddOn: (addOnId: string) => void;
}

const Step3: React.FC<Step3Props> = ({ billingType, selectedAddOns, onToggleAddOn }) => {
  const addOns = [
    { id: 'online-service', label: 'Online service', description: 'Access to multiplayer games', price: billingType === 'yearly' ? '+$10/yr' : '+$1/mo' },
    { id: 'larger-storage', label: 'Larger storage', description: 'Extra 1TB of cloud save', price: billingType === 'yearly' ? '+$20/yr' : '+$2/mo' },
    { id: 'customizable-profile', label: 'Customizable profile', description: 'Custom theme on your profile', price: billingType === 'yearly' ? '+$20/yr' : '+$2/mo' },
  ];

  // Handle Enter key to prevent form submission on checkboxes
  const handleKeyPress = (event: React.KeyboardEvent, addOnId: string) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      onToggleAddOn(addOnId); // Toggle the checkbox
    }
  };

  return (
    <div className='step3-form'>
      {addOns.map((addOn) => (
        <label key={addOn.id} className={`add-on ${selectedAddOns.has(addOn.id) ? 'selected' : ''}`}>
          <input type='checkbox' checked={selectedAddOns.has(addOn.id)} onChange={() => onToggleAddOn(addOn.id)} onKeyPress={(event) => handleKeyPress(event, addOn.id)} aria-describedby={`${addOn.id}-description`} />
          <div className='add-on-content'>
            <span className='add-on-label'>{addOn.label}</span>
            <span id={`${addOn.id}-description`} className='add-on-description'>
              {addOn.description}
            </span>
          </div>
          <span className='add-on-price'>{addOn.price}</span>
        </label>
      ))}
    </div>
  );
};

export default Step3;
