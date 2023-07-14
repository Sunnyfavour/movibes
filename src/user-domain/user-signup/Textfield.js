import React from 'react';
import { useField,ErrorMessage } from 'formik'
import "./textfield.css"
export const Textfield = ({label, ...props}) => {
    const [field, meta] = useField(props);
    console.log(field,meta);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input
      {...field} {...props} />
        <ErrorMessage component="div" className='error' name={field.name} />
    </div>
    

  )
}
