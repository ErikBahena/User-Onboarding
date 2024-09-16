// Styling
import "bootstrap/dist/css/bootstrap.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
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

  .invalid-feedback {
    margin-bottom: 1%;
  }

  #password {
    margin-bottom: 2%;
  }
  Button {
    margin-top: 2%;
  }

  .form-group {
    margin-bottom: 1%;
  }

  /* Tablet or Smaller (1000px and down) */
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

/* Valid attr on the input and FormFeedBack will display the validity message and styling */

/* Invalid attr on the input and no attr on the FormFeedBack will display the non valid styling and text */

const FormComponent = ({ values, change, errors, submit, disabled }) => {
  const onChange = async (e) => {
    const { name, value, checked, type } = e.target;
    e.persist();
    let valueToUse = type === "checkbox" ? checked : value;

    if (type === "file") {
      valueToUse = "file:///" + value;
    }
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
            // invalid=true if the error string is not empty, invalid=false if the error string is empty
            invalid={!!errors.first_name}
            // if the error is an not an empty string then valid=false, if the error is an empty string then check if the value is empty or not, if the value is empty then valid = false, if the value is not empty then the valid=true
            valid={
              errors.first_name !== ""
                ? false
                : values.first_name
                ? true
                : false
            }
          />
          <FormFeedback>{errors.first_name}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            onChange={onChange}
            type="text"
            id="last_name"
            name="last_name"
            value={values.last_name}
            invalid={!!errors.last_name}
            valid={errors.last_name ? false : values.last_name ? true : false}
          />
          <FormFeedback>{errors.last_name}</FormFeedback>
        </FormGroup>
        {/* 
I would have to upload this file to a database then get it again once I want to use it. Because it's a local file
        <FormGroup>
          <Label for="avatarImage">Profile Picture</Label>
          <br></br>
          <Input
            onChange={onChange}
            type="file"
            name="avatarImage"
            id="avatarImage"
            accept="image/png, image/jpeg"
            invalid={!!errors.avatarImage}
            value={inputFileName}
          />
          <FormFeedback>{errors.avatarImage}</FormFeedback>
        </FormGroup> */}

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={onChange}
            type="email"
            id="email"
            name="email"
            value={values.email}
            invalid={!!errors.email}
            valid={errors.email ? false : values.email ? true : false}
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            onChange={onChange}
            type="password"
            id="password"
            name="password"
            value={values.password}
            invalid={!!errors.password}
            valid={errors.password ? false : values.password ? true : false}
          />
          <FormFeedback>{errors.password}</FormFeedback>
        </FormGroup>

        <FormGroup check>
          <Label for="agreeToTOS"></Label>
          <Input
            onChange={onChange}
            type="checkbox"
            name="agreeToTOS"
            id="agreeToTOS"
            checked={values.agreeToTOS}
            invalid={!!errors.agreeToTOS}
            valid={errors.agreeToTOS ? false : values.agreeToTOS ? true : false}
            className="password-input"
          />
          I have read and agree to the terms and conditions
          <FormFeedback>{errors.agreeToTOS}</FormFeedback>
        </FormGroup>

        <Button
          id="join-button"
          disabled={disabled}
          onClick={(e) => {
            e.preventDefault();
            submit(values);
          }}
        >
          Join the Team
        </Button>
      </Form>
    </StyledFormContainer>
  );
};

export default FormComponent;
