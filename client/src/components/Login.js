import { Button } from 'antd';
import React, { Component } from 'react';
import './../App.css';

export default class Login extends Component {

    render() {
        return (
            <Button href='http://localhost:3001/auth/mercadolibre' type="primary">Log In</Button>
        )
    }
}