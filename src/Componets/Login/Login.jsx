import React from 'react';

import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";


const LoginForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>login</button>
            </div>

        </form>
    );
};




const LoginReduxForm= reduxForm({form:'login'})( LoginForm)

const Login = () => {

    const OnSumbit=(formData)=>{

        console.log(formData);

    }
    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={ OnSumbit}/>
        </div>
    );
};

export default Login;