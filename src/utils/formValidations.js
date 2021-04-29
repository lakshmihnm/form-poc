export default function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = 'Please enter Name';
    } 
    if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = 'Please enter valid number';
    } 
    if (!values.doj) {
        errors.doj = 'Please enter DOJ';
    } 
    
    // if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = 'Email address is invalid';
    // }
    return errors;
  };