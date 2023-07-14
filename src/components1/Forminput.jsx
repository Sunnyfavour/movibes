import React, { useState } from 'react'
import "./forminput.css"
const Forminput = (props) => {
  const {label, onChange, errorMessage, id, ...inputProps} = props;
  const [focused,setFocused] = useState(false);
  const handleFocused =(e)=>{
    setFocused(true)
  }
  return (
    <div className='formInput'>
        {/* <label htmlFor="">Username</label> */}
        {/* <label>{label}</label> */}
        <input {...inputProps} 
        onChange={onChange}
         onBlur={handleFocused}
         focused={focused.toString()} 
         onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)} />
        <span>{errorMessage}</span>
    </div>
  )
}

export default Forminput;
