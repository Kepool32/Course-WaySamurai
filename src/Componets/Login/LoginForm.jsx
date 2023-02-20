import React from 'react';
import Field from "redux-form/lib/Field";

const LoginForm = () => {
    return (
        <form>
            <div>
                <Field placeholder={"Login"} name={"Login"}component={"input"}/>
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

export default LoginForm;