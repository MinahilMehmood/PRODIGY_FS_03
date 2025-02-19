import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
     display: flex;
     align-items: center;
     ${mobile({
    flexDirection: "column"
})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.bg};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Centre = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
    display: "none"
})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px; 
`

const Right = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({
    backgroundColor: "#fff8f8",
    width: "90%"
})}
`

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`

const Payment = styled.img`
   width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>VOGA.</Logo>
                <Desc>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon bg="3B5999" >
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon bg="E4405F" >
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon bg="55ACEE" >
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon bg="E60023" >
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer >
            </Left >
            <Centre>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Centre>
            <Right>
                <Title>Contact</Title>
                <ContactItem><LocationOnIcon style={{ marginRight: "10px" }} />Faisal Town, Lahore</ContactItem>
                <ContactItem><LocalPhoneIcon style={{ marginRight: "10px" }} />+92 305 5637880</ContactItem>
                <ContactItem><EmailOutlinedIcon style={{ marginRight: "10px" }} />contact@voga.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container >
    )
}

export default Footer;
