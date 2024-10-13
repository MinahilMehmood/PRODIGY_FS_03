import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../Redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;    
    ${mobile({
    flexDirection: "column",
    padding: "10px"
})}
`

const ImgContainer = styled.div`
    flex: 1;
`

const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({
    height: "40vh"
})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
    padding: "10px"
})}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({
    width: "100%"
})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
    width: "100%"
})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    background-color: #fff;
    padding: 15px;
    border: 2px solid teal;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {

    const location = useLocation();
    const proId = location.pathname.split("/")[2];
    const [product, setProduct] = useState({
        "_id": "",
        "title": "",
        "desc": "",
        "img": "",
        "categories": [],
        "size": [],
        "color": [],
        "price": 0,
        "createdAt": "",
        "updatedAt": ""
    });

    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`products/find/${proId}`);
                setProduct(res.data);
            } catch (err) {

            }
        }
        getProduct();
    }, [proId]);

    function handleQuantity(type) {
        type === "dec" ? (quantity > 1 && setQuantity(quantity - 1)) : setQuantity(quantity + 1);
    }

    function handleClick() {
        dispatch(addProduct({ ...product, quantity, color, size }));
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Img src={product.img}></Img>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            {product.color.map((c) => (
                                <FilterColor onClick={() => setColor(c)} color={c} key={c} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {
                                    product.size.map((s) => {
                                        return <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                    })
                                }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <AddIcon onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
