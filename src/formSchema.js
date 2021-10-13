import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required("A username must be provided")
    .min(3, "Must be at least 3 characters long"),
  last_name: yup
    .string()
    .trim()
    .required("A username must be provided")
    .min(3, "Must be at least 3 characters long"),
  email: yup
    .string()
    .email("The email must be valid")
    .required("An email must be provided"),
  password: yup
    .string()
    .required("No passord provided")
    .min(5, "Passwords must be at least 5 characters"),
  agreeToTOS: yup.boolean().required("You must agree to use our services"),
});
export default formSchema;
