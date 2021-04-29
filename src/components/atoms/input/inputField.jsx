const InputField = (props) => {
  const { name, id, ariaLabel, placeholder, type, label } = props.inputData;
  return (
    <div className="form-group">
      <label htmlFor={name} id={id} aria-label={ariaLabel}>
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={props.handleChange}
        aria-labelledby={id}
        data-testid={id}
        required
        aria-describedby={`error-${name}`}
      />
    </div>
  );
};

export default InputField;
