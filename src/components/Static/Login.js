import { useState } from 'react';
import { loginFields } from "../../constants/FormFields";
import FormAction from "../../constants/FormAction";
import FormExtra from "../../constants/FormExtra";
import Input from "../../constants/Input";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import SucessAlert from '../Static/SucessAlert';
import FailedAlert from '../Static/FailedAlert';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate();
    const [alerts, setAlerts] = useState([]);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = async () => {
        try {
            const response = await axios.post('http://localhost:8000/auth/login', loginState);
            console.log(response.data);
            const token = response.data.token;
            const userId = response.data.userId;
            const pwd = response.data.pwd;
            Cookies.set('token', token, { expires: 7 });
            Cookies.set('userId', userId, { expires: 7 });
            Cookies.set('pwd', pwd, { expires: 7 });
            setAlerts((prevAlerts) => [...prevAlerts, "authenticationSucess"]);
            // Handle successful login or perform any necessary actions
            navigate('/')
        } catch (error) {
            setAlerts((prevAlerts) => [...prevAlerts, "authenticationFailed"]);
            console.error(error);
            // Handle login error or display error message
        }
    }

    const renderAlerts = () => {
        return alerts.map((alert, index) => {
          switch (alert) {
            
            case "authenticationSucess":
              return (
                <SucessAlert
                  key={index}
                  message={"Authentication successfully"}
                />
              );
            case "authenticationFailed":
              return <FailedAlert key={index} message={"Failed to authenticate user"} />;
            default:
              return null;
          }
        });
      };

    return (
        <div>
            <div className="w-full">
            {renderAlerts()}
            </div>
           
            <form className="mt-8 space-y-7 " onSubmit={handleSubmit}>
               
            <div className="w-96">
                {
                    fields.map(field =>
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

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />

        </form>
        
        </div>
    )
}