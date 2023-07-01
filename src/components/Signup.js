import { useState } from 'react';
import { signupFields } from "../constants/FormFields"
import FormAction from "./FormAction";
import Input from "./Input";
import CardProfile from './ProfilePictureUpload';
import axios from 'axios';

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/signup', signupState);
      console.log(response.data);
      // Handle the response or perform any necessary actions
    } catch (error) {
      console.error(error);
      // Handle any error that occurred during the API request
    }
  };

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="w-96 mt-0 pt-0">
        {
          
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}