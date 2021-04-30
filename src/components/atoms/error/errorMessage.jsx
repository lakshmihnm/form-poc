import styled from "styled-components";

const P = styled.p`
  color: #db2269;
  font-size: 0.8em;
  display: relative;
`;

const ErrorMessage = ({ errorMessage, id }) => {
  return (
    <P data-testid={errorMessage} id={id}>
      {errorMessage}
    </P>
  );
};

export default ErrorMessage;
