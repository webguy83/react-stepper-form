import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MultiStepForm.scss';
import useMediaQuery from '../../hooks/useMediaQuery ';


interface Props {
  children: React.ReactNode;
}

const MultiStepForm: React.FC<Props> = ({ children }) => {
  const [step, setStep] = useState(1);
  const isMobile = useMediaQuery('(max-width:768px)');

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
    <form className="center-wrapper" onSubmit={handleNextStep}>
      <div className="multistep-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <ol className="steps">
            {stepTitles.map((item, index) => (
              <li key={index} className={`step ${step === index + 1 ? 'active' : ''}`}>
                <span className="step-circle">{index + 1}</span>
                <span className="step-text">
                  <span className="step-number">Step {index + 1}</span>
                  <span className="step-title">{item.title}</span>
                </span>
              </li>
            ))}
          </ol>
        </aside>

        {/* Main Content */}
        <div className="form-content">
          <Header title={stepTitles[step - 1].title} description={stepTitles[step - 1].description} />
          {children}
          {!isMobile && <Footer onBack={step > 1 ? handleGoBack : undefined} />}
        </div>
      </div>

      {/* Render Footer outside form-content for mobile view */}
      {isMobile && <Footer onBack={step > 1 ? handleGoBack : undefined} />}
    </form>
  );
};

export default MultiStepForm;
