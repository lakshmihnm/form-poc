import InputField from "../atoms/input/inputField";
import ErrorMessage from "../atoms/error/errorMessage";

const InputElement = (props) => {
  console.log("element:", props);
  const { inputData, handleChange, errorData } = props;
  return (
    <div>
      <InputField inputData={inputData} handleChange={handleChange} />
      {errorData[inputData.name] && (
        <ErrorMessage
          errorMessage={errorData[inputData.name]}
          id={inputData.id}
        />
      )}
    </div>
  );
};

export default InputElement;
