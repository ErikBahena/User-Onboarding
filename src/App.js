import React, { useState, useEffect } from "react";
import Form from "./Components/Form.js";
import Team from "./Components/Team.js";
import formSchema from "./formSchema.js";
import * as yup from "yup";
import axios from "axios";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  avatarImage: "",
  agreeToTOS: false,
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  avatarImage: [],
  agreeToTOS: "",
};

const initialDisabled = false;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled); // boolean
  const [members, setMembers] = useState([]);

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const postMember = (newMember) => {
    axios
      .post(`https://reqres.in/api/users`, newMember)
      .then((res) => {
        setMembers([...members, { [res.data.id]: res.data }]);
      })
      .catch((err) => console.log(err))
      .finally(setFormValues(initialFormValues));
  };

  return (
    <div className="App">
      <Team members={members} />
      <Form
        disabled={disabled}
        submit={postMember}
        values={formValues}
        change={inputChange}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
