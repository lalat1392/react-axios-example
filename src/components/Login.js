import React, { useState } from "react";
import {server} from '../service/server'
import { Button, Form, Input, message } from 'antd'

import { Routes, Route, useNavigate } from 'react-router-dom';

function Login() {
    const initUser = { username: '', password: ''};
    // const navigate = useNavigate();

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.password && user.username) {
          console.log(user);
          return server.getToken()
          .then((res) => {
             alert("Login Successfuly");
            //  navigate('/user')
          });
        }
    }

    const onfinsihhandler = e => {
        // console.log(values)
        e.preventDefault();
        try {
            const res = server.getToken1(user);
            console.log(res);
            // if (res.success) {
                message.success("Login Successfully");
                // localStorage.setItem("token", res.data.access_token);
            // }
        } catch (error) {
            console.log(error);
            message.error("Something went wrong");
        }
    }
    
    return (
        <form onFinish={onfinsihhandler}>
            <div className="form-group col-5">
                    <label>user name</label>
                    <input
                        id="username"
                        class="form-field"
                        type="text"
                        value={user.username} onChange={handleChange}
                        placeholder="username"
                        name="username"
                    />
                </div>
                <div className="form-group col-5">
                    <label>password</label>
                    <input
                        id="password"
                        class="form-field"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={user.passord} onChange={handleChange}
                    />
                </div>
            <div className="form-group">
                <button type="submit">Login
                </button>
            </div>
        </form>
    );    
}
export default Login;
