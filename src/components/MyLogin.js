import React, { useState } from "react";

import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { server } from '../service/server'

function MyLogin() {

    const initUser = { username: '', password: '' };
    const [user, setUser] = useState(initUser);
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const onfinsihhandler = async (values) => {
        console.log("Values "+values);
        try {
            const res = await axios.post('/users',values);
            console.log(res);
            if (res.data.success) {
                message.success("Login Successfully");
                localStorage.setItem("token", res.access_token);
            }
        } catch (error) {
            console.log(error);
            message.error("Something went wrong");
        }
    }

        return (
            <div className="form-container" >
                <Form layout="vertical" onSubmit={onfinsihhandler}>
                    <Form.Field>
                        <label>Name</label>
                        <input type="text" id="username" name="username"
                            value={user.username} onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" id="password" name="password"
                            value={user.password} onChange={handleChange} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
}

export default MyLogin;