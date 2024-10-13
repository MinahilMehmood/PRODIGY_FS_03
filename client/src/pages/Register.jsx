import styled from 'styled-components';
import { mobile } from '../responsive';
import { useState } from 'react';
import { publicRequest } from '../requestMethod';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
    ${mobile({
    width: "80%"
})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    background-color: teal;
    cursor: pointer;
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: #fff;
`

const Error = styled.p`
    color: red;
`

const Register = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [confirmPass, setconfirmPass] = useState("");
    const [error, setError] = useState("");
    const Navigate = useNavigate();

    function handleChange(e) {
        const value = e.target.value;
        setData(prev => ({ ...prev, [e.target.name]: value }));
    }

    function handleConfirmPass(e) {
        setconfirmPass(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (data.password === confirmPass) {
            const resgister = async () => {
                try {
                    await publicRequest.post("/auth/register", data);
                    Navigate("/login");
                } catch (err) {
                    setError("Something went wrong. Try Again!");
                }
            }
            resgister();
        } else {
            setError("Your passwords doesn't match!");
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input required="true" onChange={handleChange} name="username" type="text" placeholder="Username" />
                    <Input required="true" onChange={handleChange} name="email" type="email" placeholder="Email" />
                    <Input required="true" onChange={handleChange} name="password" type="password" placeholder="Passsword" />
                    <Input required="true" onChange={handleConfirmPass} name="confirmPass" type="password" placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleSubmit} type='submit'>CREATE</Button>
                    <Error>{error}</Error>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Register;
