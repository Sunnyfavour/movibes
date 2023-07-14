
import React from 'react';
import { Formik, Form } from 'formik';
import { Textfield } from './Textfield';
import * as Yup from "yup";
import "./userform.css"
import google from "../../assets/google.png"


export const Userform = () => {
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
        email: "",
        password: "",
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
                    <Textfield label="Name" name="firstName" type="text"/>

                    <Textfield label="Email" name="email" type="email"/>

                    <Textfield label="password" name="password" type="password"/>

                    <div className='button1'>
                    <button id='account' type="">Create account</button>
                    <button id='signup' type=""> 
                    <div><img src={google} alt='google'/> </div> SignUp with Google </button>  
                    </div>
                 </Form>
            </div> 
       )}
</Formik>
  )
}