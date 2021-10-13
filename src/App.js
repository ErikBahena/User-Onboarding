import React, { useState } from "react";
import Form from "./Components/Form.js";
import Team from "./Components/Team.js";
import formSchema from "./formSchema.js";

const initalFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  agreeToTOS: false,
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  agreeToTOS: "",
};

function App() {
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="App">
      <Team />
      <Form values={formValues} change={inputChange} errors={formErrors} />
    </div>
  );
}

export default App;
