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

const FormComponent = ({ values, change }) => {
  const onChange = (e) => {
    const { name, value, checked, type} = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <StyledFormContainer>
      <Form>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input
            onChange={onChange}
            type="text"
            id="first_name"
            name="first_name"
            value={values.first_name}
          />
          <FormFeedback valid>That name does not work</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            onChange={onChange}
            type="text"
            id="last_name"
            name="last_name"
            value={values.last_name}
          />
          <FormFeedback valid>That name does not work</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={onChange}
            type="email"
            id="email"
            name="email"
            value={values.email}
          />
          <FormFeedback valid>Great, that works!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            onChange={onChange}
            type="password"
            id="password"
            name="password"
            value={values.password}
          />
          <FormFeedback valid>The passowrd must blah blah</FormFeedback>
        </FormGroup>

        <FormGroup check>
          <Label for="agreeToTOS"></Label>
          <Input
            onChange={onChange}
            type="checkbox"
            name="agreeToTOS"
            id="agreeToTOS"
            checked={values.agreeToTOS}
          />
          I have read and agree to the terms and conditions
        </FormGroup>

        <Button>Join the Team</Button>
      </Form>
    </StyledFormContainer>
  );
};

export default FormComponent;
