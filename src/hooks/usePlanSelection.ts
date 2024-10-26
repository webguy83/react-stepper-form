import { useState } from 'react';
import { Plan } from '../types/plan';

const usePlanSelection = () => {
  const [billingType, setBillingType] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<Plan>('arcade');

  const handlePlanChange = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleBillingToggle = () => {
    setBillingType((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'));
  };

  return { billingType, selectedPlan, handlePlanChange, handleBillingToggle };
};

export default usePlanSelection;
