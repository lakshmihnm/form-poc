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
  const formData = [
    {
      type: "text",
      id: "labelName",
      name: "name",
      placeholder: "Enter Name",
      ariaLabel: "Please enter name",
      label: "Name",
    },
    {
      type: "number",
      id: "labelNumber",
      name: "phone",
      placeholder: "Enter contact Number",
      ariaLabel: "Please enter contact number",
      label: "Contact",
    },
    {
      type: "date",
      id: "labelDate",
      name: "doj",
      placeholder: "Enter DOJ",
      ariaLabel: "Please enter DOJ",
      label: "DOJ",
    },
  ];

  const handleSubmision = () => {
    console.log("No errors");
    setTimeout(() => {
      setFlag(true);
    }, 2000);
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

        {formData.map((data) => {
          const { name, id, ariaLabel, placeholder, type, label } = data;
          return (
            <div className="form-group" key={id}>
              <label htmlFor={name} id={id} aria-label={ariaLabel}>
                {label}
              </label>
              <input
                type={type}
                className="form-control"
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleChange}
                aria-labelledby={id}
                data-testid={id}
                required
              />
              {errors[name] && (
                <p>
                  <Small data-testid={errors[name]}>{errors[name]}</Small>
                </p>
              )}
            </div>
          );
        })}

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
