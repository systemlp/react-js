import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';
import './login.css';

const FormItem = Form.Item;

class Login extends Component {
    handledLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-container">
                <div className="image3"></div>
                <Form onSubmit={this.handledLogin} className="login-form">
                  <FormItem>
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '请输入密码!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="密 码" />
                    )}
                    </FormItem>
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                        登 录
                    </Button>
                </Form>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;
