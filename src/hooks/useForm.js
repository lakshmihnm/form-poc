import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setErrors(validate(values));
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    
    console.log("VALUES:", values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  }
};

export default useForm;