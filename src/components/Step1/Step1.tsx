import React from 'react';

const Step1: React.FC = () => {
  return (
    <div>
      <form className='step-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='e.g. Stephen King' />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' name='email' placeholder='e.g. stephenking@lorem.com' />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' name='phone' placeholder='e.g. +1 234 567 890' />
        </div>
      </form>
    </div>
  );
};

export default Step1;
