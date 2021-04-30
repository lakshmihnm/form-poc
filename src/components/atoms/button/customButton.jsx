const Button = ({ handleSubmit, children }) => {
  return (
    <button
      name="submit"
      type="submit"
      onClick={handleSubmit}
      className="btn btn-dark btn-lg btn-block"
    >
      {children}{" "}
    </button>
  );
};

export default Button;
