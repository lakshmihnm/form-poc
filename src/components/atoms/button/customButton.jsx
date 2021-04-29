
const Button = (props) => {
    const {handleSubmit} = props
    return(
        <button
        name="submit"
        // aria-role="button"
        onClick={handleSubmit}
        className="btn btn-dark btn-lg btn-block"
      >Submit </button>
    )
}

export default Button;