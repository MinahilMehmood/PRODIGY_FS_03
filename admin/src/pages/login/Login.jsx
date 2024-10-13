import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  
  @media (max-width: 380px) {
    width: 80%;
  }
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    background-color: teal;
    cursor: pointer;
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: #fff;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color: red;
`

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, error } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        login(dispatch, { username, password });
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Passsword" />
                    <Button disabled={isFetching} onClick={handleClick}>SIGN IN</Button>
                    {error && <Error>Something went wrong!</Error>}
                    {/* <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link> */}
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Login;
