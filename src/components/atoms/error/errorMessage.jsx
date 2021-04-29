import styled from "styled-components";

const Small = styled.small`
  color: #db2269;
  font-size: 0.8em;
  display: relative;
`;

const ErrorMessage = (props) => {
  const { errorMessage } = props;
  return (
    <p>
      <Small data-testid={errorMessage} id={errorMessage} aria-invalid>
        {errorMessage}
      </Small>
    </p>
  );
};

export default ErrorMessage;
