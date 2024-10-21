import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MultiStepForm.scss';

interface Props {
  children: React.ReactNode;
}

const MultiStepForm: React.FC<Props> = ({ children }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setStep((prev) => prev + 1);
  };

  const handleGoBack = () => {
    setStep((prev) => prev - 1);
  };

  const stepTitles = [
    { title: 'Personal info', description: 'Please provide your name, email address, and phone number.' },
    { title: 'Select your plan', description: 'You have the option of monthly or yearly billing.' },
    { title: 'Add-Ons', description: 'Choose your add-ons.' },
    { title: 'Summary', description: 'Double-check everything before confirming.' },
  ];

  return (
    <div className='center-wrapper'>
      <div className='multistep-container'>
        {/* Sidebar */}
        <aside className='sidebar'>
          <ol className='steps'>
            {stepTitles.map((item, index) => (
              <li key={index} className={`step ${step === index + 1 ? 'active' : ''}`}>
                <span className='step-circle'>{index + 1}</span>
                <span className='step-text'>
                  <span className='step-number'>Step {index + 1}</span>
                  <span className='step-title'>{item.title}</span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
        <form className='form-content' onSubmit={handleNextStep}>
          <Header title={stepTitles[step - 1].title} description={stepTitles[step - 1].description} />
          {children}
          <Footer onBack={step > 1 ? handleGoBack : undefined} />
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
