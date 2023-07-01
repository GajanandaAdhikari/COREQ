import { useState } from 'react';
import { loginFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from 'axios';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = async() =>{
        try {
            const response = await axios.post('http://localhost:8080/api/login', loginState);
            console.log(response.data);
            // Handle successful login or perform any necessary actions
          } catch (error) {
            console.error(error);
            // Handle login error or display error message
          }
    }

    return(
        <form className="mt-8 space-y-7 " onSubmit={handleSubmit}>
        <div className="w-96">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login" />

      </form>
    )
}