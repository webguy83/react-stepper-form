import React from 'react';
import './Step1.scss';

interface Step1Props {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  formErrors: {
    name?: string;
    email?: string;
    phone?: string;
  };
  isSubmitted: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: React.FC<Step1Props> = ({ formData, formErrors, isSubmitted, onChange }) => {
  return (
    <div>
      <div className='step-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='e.g. Stephen King' value={formData.name} onChange={onChange} className={formErrors.name && isSubmitted ? 'error' : ''} />
          {formErrors.name && isSubmitted && <span className='error-message'>{formErrors.name}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' name='email' placeholder='e.g. stephenking@lorem.com' value={formData.email} onChange={onChange} className={formErrors.email && isSubmitted ? 'error' : ''} />
          {formErrors.email && isSubmitted && <span className='error-message'>{formErrors.email}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' name='phone' placeholder='e.g. +1 234 567 890' value={formData.phone} onChange={onChange} className={formErrors.phone && isSubmitted ? 'error' : ''} />
          {formErrors.phone && isSubmitted && <span className='error-message'>{formErrors.phone}</span>}
        </div>
      </div>
    </div>
  );
};

export default Step1;
