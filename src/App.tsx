import React from 'react';
import Step1 from './components/Step1/Step1';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <MultiStepForm>
        <Step1 />
      </MultiStepForm>
    </div>
  );
};

export default App;
