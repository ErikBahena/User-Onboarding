import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  width: 70%;
  margin: 5% auto;
  padding: 1rem;
  height: max-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.4rem;

  Input {
    margin-bottom: 2%;
  }

  Button {
    margin-top: 2%;
  }

  /* Tablet or Smaller (1000px and down) */
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

/* Valid attr on the input and FormFeedBack will display the validity message and styling */

/* Invalid attr on the input and no attr on the FormFeedBack will display the non valid styling and text */

const FormComponent = (props) => {
  return (
    <StyledFormContainer>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" id="name" name="name" />
          <FormFeedback valid>That name does not work</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" id="email" name="email" />
          <FormFeedback valid>Great, that works!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="passwork">Password</Label>
          <Input type="password" id="passwork" name="password" />
          <FormFeedback valid>The passowrd must blah blah</FormFeedback>
        </FormGroup>

        <FormGroup check>
          <Label for="agreeToTOS"></Label>
          <Input type="checkbox" name="agreeToTOS" id="agreeToTOS" /> I have
          read and agree to the terms and conditions
        </FormGroup>

        <FormGroup>
          <Button>Join the Team</Button>
        </FormGroup>
      </Form>
    </StyledFormContainer>
  );
};

export default FormComponent;
