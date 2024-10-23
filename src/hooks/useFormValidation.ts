import { useState } from 'react';

// Define types for form data and errors
interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const useFormValidation = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'This field is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'This field is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'This field is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    formErrors,
    isSubmitted,
    setIsSubmitted,
    handleFormChange,
    validate,
  };
};

export default useFormValidation;
