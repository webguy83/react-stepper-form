import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import './MultiStepForm.scss';
import useFormValidation from '../../hooks/useFormValidation';
import usePlanSelection from '../../hooks/usePlanSelection';
import useMediaQuery from '../../hooks/useMediaQuery ';

const MultiStepForm: React.FC = () => {
  const { formData, formErrors, isSubmitted, handleFormChange, handleSubmitValidation } = useFormValidation({
    name: '',
    email: '',
    phone: '',
  });

  // Move the plan selection state here
  const { billingType, selectedPlan, handlePlanChange, handleBillingToggle } = usePlanSelection();
  const [step, setStep] = useState(1);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleNextStep = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = handleSubmitValidation(); // Perform full validation before moving forward

    if (isValid) {
      setStep((prev) => prev + 1); // Move to the next step only if the form is valid
    }
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
    <form className='center-wrapper' onSubmit={handleNextStep}>
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

        {/* Main Content */}
        <div className='form-content'>
          <Header title={stepTitles[step - 1].title} description={stepTitles[step - 1].description} />

          {step === 1 && <Step1 formData={formData} formErrors={formErrors} isSubmitted={isSubmitted} onChange={handleFormChange} />}

          {step === 2 && <Step2 billingType={billingType} selectedPlan={selectedPlan} onBillingToggle={handleBillingToggle} onPlanChange={handlePlanChange} />}

          {/* Other steps will go here */}
          {!isMobile && <Footer onBack={step > 1 ? handleGoBack : undefined} />}
        </div>
      </div>

      {/* Render Footer outside form-content for mobile view */}
      {isMobile && <Footer onBack={step > 1 ? handleGoBack : undefined} />}
    </form>
  );
};

export default MultiStepForm;
