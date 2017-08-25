import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {
    Row,
    Col,
    Icon,
    Input,
    Button,
    Alert
} from 'antd';
import './login.css';

const errMsg = {
    nameEmpty: {
        title: 'nameEmpty',
        msg: '请输入用户名'
    },
    passwordEmpty: {
        title: 'passwordEmpty',
        msg: '请输入密码'
    },
    error: {
        title: 'error',
        msg: '用户名或密码错误'
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            errMsg: null
        }
    }
    handledLogin = () => {
        const {userName, password} = this.state;
        if (!userName) {
            this.setState({errMsg: errMsg.nameEmpty});
        } else if (!password) {
            this.setState({errMsg: errMsg.passwordEmpty});
        } else {
            if (userName === 'admin' && password === '123456') {
                browserHistory.push('/');
            } else {
                this.setState({errMsg: errMsg.error});
            }
        }
    }
    render() {
        return (
            <div className="login-container">
                <div className="image3"></div>
                <div className="login-form">
                    {this.state.errMsg
                        ? <Alert showIcon type="error" message={this.state.errMsg.msg}/>
                        : null}
                    <Row>
                        <Col>
                            <Input size="large" value={this.state.userName} onChange={(e) => {
                                const value = e.target.value.trim();
                                this.setState({userName: value});
                                if (value && this.state.errMsg != null && (this.state.errMsg.title === 'nameEmpty' || this.state.errMsg.title === 'error')) {
                                    this.setState({errMsg: null});
                                }
                            }} prefix={<Icon type = "user" style = {{fontSize: 16}}/>} placeholder="用户名"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input size="large" type="password" value={this.state.password} onChange={(e) => {
                                const value = e.target.value.trim();
                                this.setState({password: value});
                                if (value && this.state.errMsg != null && (this.state.errMsg.title === 'passwordEmpty' || this.state.errMsg.title === 'error')) {
                                    this.setState({errMsg: null});
                                }
                            }} prefix={<Icon type = "lock" style = {{fontSize: 16}}/>} placeholder="密 码"/>
                        </Col>
                    </Row>
                    <Button size="large" type="primary" className="login-form-button" onClick={this.handledLogin}>
                        登 录
                    </Button>
                </div>
            </div>
        )
    }
}

export default Login;
