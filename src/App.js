import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import FormContainer from "./components/organisms/container/formContainer";

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(0, -50%);
  // border: 5px solid #FFFF00;
  padding: 10px;
`;

function App() {
  return (
    <Div lang="en">
      <FormContainer />
    </Div>
  );
}

export default App;
