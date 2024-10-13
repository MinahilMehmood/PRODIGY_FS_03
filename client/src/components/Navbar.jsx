import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';
import { mobile } from "../responsive";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from './../Redux/userRedux';

const Container = styled.div`
    height: 60px;
    ${mobile({
    height: "50px"
})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
    padding: "10px 0px"
})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    cursor: pointer;
    ${mobile({
    display: "none"
})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({
    width: "50px"
})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
    fontSize: "24px"
})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
    justifyContent: "center",
    flex: 2
})}
`

const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
    fontSize: "12px",
    marginLeft: "10px"
})}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("persist:root");
        navigate("/login");
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        VOGA.
                    </Logo>
                </Center>
                <Right>
                    {
                        !user ? (
                            <>
                                <Link to="/register">
                                    <MenuItem>REGISTER</MenuItem>
                                </Link>
                                <Link to="/login">
                                    <MenuItem>SIGN IN</MenuItem>
                                </Link>
                            </>
                        ) : (
                            <MenuItem onClick={handleLogout}>
                                Logout
                            </MenuItem>
                        )
                    }
                    {user && <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color='primary'>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>}
                </Right>
            </Wrapper>
        </Container>
    );
};


export default Navbar
