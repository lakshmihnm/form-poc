import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import validate from "./components/formValidations";
import useForm from "./components/useForm";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 100px;
  padding: 20px 40px 40px 40px;
  border-radius: 6px;
  box-shadow: 0px 8px 36px #222;
  background-color: #fefefe;
`;
const SuccessDiv = styled.header`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 100px;
  height: opx;
  padding: 20px 40px 40px 40px;
  border-radius: 6px;
  box-shadow: 0px 8px 36px #222;
  background-color: #fefefe;
  margin-bottom: 10px;
  border-top: 3px solid green;
`;
const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(0, -50%);
  // border: 5px solid #FFFF00;
  padding: 10px;
`;

const Header = styled.h3`
  display: flex;
  margin-bottom: 20px;
`;
const Small = styled.small`
  color: #db2269;
  font-size: 0.8em;
  display: relative;
`;

function App() {
  const [flag, setFlag] = useState(false);
  // const [age, seAge] = useState(0);
  // const [dob, setDob] = useState(null);

  // const handleChange = (e,id) => {
  //   switch(id){
  //     case 'text':
  //       setName(e.target.name);
  //   }
  // };
  const handleSubmision = () => {
    console.log("No errors");
    setTimeout(() => {
      setFlag(true);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setFlag(false);
      }, 2000);
    };
  });

  const { values, errors, handleChange, handleSubmit } = useForm(
    handleSubmision,
    validate
  );
  return (
    <Div>
      <Header>Employee Details Form</Header>
      {flag && <SuccessDiv>Form Submitted Successfully</SuccessDiv>}
      <Form>
        {/* <h3>Details</h3> */}

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />
          {errors.name && (
            <p>
              <Small>{errors.name}</Small>
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            placeholder="Enter Phone number"
            onChange={handleChange}
          />
          {errors.phone && (
            <p>
              <Small>{errors.phone}</Small>
            </p>
          )}
        </div>

        <div className="form-group">
          <label>DOJ</label>
          <input
            type="date"
            className="form-control"
            name="doj"
            placeholder="Enter DOJ"
            onChange={handleChange}
          />
          {errors.name && (
            <p>
              <Small>{errors.doj}</Small>
            </p>
          )}
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-dark btn-lg btn-block"
        >
          Submit
        </button>
      </Form>
    </Div>
  );
}

export default App;
