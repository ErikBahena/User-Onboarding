import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required("A name must be provided")
    .min(3, "Must be at least 3 characters long"),
  last_name: yup
    .string()
    .trim()
    .required("A name must be provided")
    .min(3, "Must be at least 3 characters long"),
  // avatarImage: yup.string().required("You Must Provide a Profile Picture"),
  email: yup
    .string()
    .email("The email must be valid")
    .required("An email must be provided"),
  password: yup
    .string()
    .required("No passord provided")
    .min(5, "Passwords must be at least 5 characters"),
  agreeToTOS: yup
    .boolean()
    .oneOf([true], "You Must Agree to the Terms and Services to Continue"),
});
export default formSchema;
