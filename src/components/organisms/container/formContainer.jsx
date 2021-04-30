import InputElement from "../../molecules/inputEmelent";
import Button from "../../atoms/button/customButton";
import styled from "styled-components";
import MockData from "../../../constants/mockData";
import useForm from "../../../hooks/useForm";
import React, { useState, useEffect } from "react";
import validate from "../../../utils/formValidations";
import { FORMHEADER, SUCCESSMESSAGE } from "../../../constants/constants";

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
const Header = styled.h1`
  display: flex;
  margin-bottom: 20px;
  font-size: 20px;
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

const FormContainer = (props) => {
  const [flag, setFlag] = useState(false);
  const formData = MockData;
  console.log("formdata:", MockData);
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
  const { errors, handleChange, handleSubmit } = useForm(
    handleSubmision,
    validate
  );
  return (
    <div>
      <Header>{FORMHEADER}</Header>
      {flag && <SuccessDiv>{SUCCESSMESSAGE}</SuccessDiv>}
      <Form method="post">
        {formData.mockData.map((data) => {
          return (
            <InputElement
              inputData={data}
              handleChange={handleChange}
              errorData={errors}
              key={data.id}
            />
          );
        })}
        <Button handleSubmit={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};
export default FormContainer;
