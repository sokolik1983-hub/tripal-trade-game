import {useState} from 'react';
import {Input, Button} from '../../config';

const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleForSubmit = (e) => {
        e.preventDefault();
        console.log('form', form);
    }

    const handleChange = (e) => {
        setForm(prevState => ({
            ...form,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <form
            onSubmit={handleForSubmit}
        >
            <Input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}>
                Email
            </Input>
            <Input
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}>
                Password
            </Input>
            <Button submitBtn>Go</Button>
        </form>
    );
};

export default LoginForm;