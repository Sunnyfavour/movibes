import React from 'react';
import { Formik, Form } from 'formik';
import { Textfield } from './Textfield';
import * as Yup from "yup";


export const Login = () => {
  const validate = Yup.object({
    firstName: Yup.string().min(15, "Must be 15 characters or less").required("Required"),

    lastName: Yup.string().max(20, "Must be 15 characters or less").required("Required"),

    email: Yup.string()
    .email("Email is invalid").required("Required"),

    password: Yup.string().min(6, "password should be greater than 6 characters").required("password is required"),

    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "password must match").required("confirm password is required"), 

  })
  return (
    <Formik
    initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }}
    validationSchema={validate}
    onSubmit={values =>{
      console.log(values)
    }}
     >
       { formik => (
            <div>
                {/* { console.log(formik)} */}
                 <Form>
                    <Textfield label="First Name" name="firstName" type="text"/>

                    <Textfield label="Email" name="email" type="email"/>

                    <Textfield label="password" name="password" type="password"/>

                    <button type="submit">Register</button>
                    <button type="reset">Reset</button>
                 </Form>
            </div> 
       )}
</Formik>
  )
}
