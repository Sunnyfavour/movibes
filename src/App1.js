
import Forminput from './components1/Forminput';
import "./App.css"
import { useState } from 'react';
import google from "./assets/google.png"
const App1 = () => {
    const [values, setValues] = useState({
        Name: "",
        email: "",
        password: "",
        // confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "Name",
            type: "text",
            placeholder: "Name",
            errorMessage: "Username should be 3-16 characters and should'nt include any special character!",
            label: "username",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$"
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should contain 8-20 characters and include atleast 1 letter, 1 number and 1 special character", 
            label: "Password",
            required: true,
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
        },
        // {
        //     id: 4,
        //     name: "confirmPassword",
        //     type: "text",
        //     placeholder: "confirm Password",
        //     errorMessage: "password didn't match", 
        //     label: "confirm Password",
        //     pattern: values.password,
        //     required: true,
            
        // },
    ];
const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem(values,JSON.stringify(values));
    alert("form data saved");
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()));
}
const onChange =(e)=>{
    setValues({...values,[e.target.name]: e.target.value})
}
const signUp =(e)=>{
    e.preventDefault();
    alert("you details is processing")
}
console.log(values) 
  return (
    <div className='app'>
        <form >
            {/* <h1>Register</h1> */}
            {/* <Forminput name="username" placeholder="Username" />
            <Forminput name="email" placeholder="Email" />
            <Forminput name="fullname" placeholder="Full Name" />
            <Forminput name="password" placeholder="password" /> */
            inputs.map((input)=>(
                <Forminput keys={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))
            }
            <div className='btn'>
            <button id="createAcct" onClick={handleSubmit} >Create account</button>
            <button id='signup' type="" onClick={signUp} > 
                    <div><img src={google} alt='google'/> </div> SignUp with Google </button> 
            </div>
        </form>
    </div>
  )
}

export default App1;