import React, {useState} from 'react';
import {Input, Button} from '../../config';

const RegistrationForm = () => {
    const [form, setForm] = useState({
        signupEmail: "",
        signupPassword: "",
        signupRepeatPassword: "",
    });

    const handleForSubmit = (e) => {
        e.preventDefault();
        if(form.signupPassword === form.signupRepeatPassword) {
            console.log('form', form);
        } else {
            alert('Ваши пароли не совпадают')
        }
    }

    const handleChange = (e) => {
        setForm(prevState => ({
            ...form,
            [e.target.name]: e.target.value,
        }))
    }
    return (
        <form onSubmit={handleForSubmit}>
            <Input
                type="email"
                id="signupEmail"
                regInput
                value={form.email}
                onChange={handleChange}>
                Email
            </Input>
            <Input
                type="password"
                id="signupPassword"
                regInput
                value={form.password}
                onChange={handleChange}>
                Password
            </Input>
            <Input
                type="password"
                id="signupRepeatPassword"
                regInput
                value={form.repeat}
                onChange={handleChange}>
                Repeat Password
            </Input>
            <Button submitBtn>Register</Button>
        </form>
    );
};

export default RegistrationForm;