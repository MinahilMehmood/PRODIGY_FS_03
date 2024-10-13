import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(cat ? `http://localhost:5000/products/?category=${cat}` : "http://localhost:5000/products/");
            setProducts(res.data);
        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat && (
            setFilteredProducts(
                products.filter(item => {
                    return (
                        Object.entries(filters).every(([key, value]) => {
                            return item[key].includes(value);
                        })
                    )
                })
            )
        )
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "Newest") {
            setFilteredProducts(prev => (
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            ));
        } else if (sort === "asc") {
            setFilteredProducts(prev => (
                [...prev].sort((a, b) => a.price - b.price)
            ));
        } else {
            setFilteredProducts(prev => (
                [...prev].sort((a, b) => b.price - a.price)
            ));
        }
    }, [sort]);

    return (
        <Container>
            {
                cat ? filteredProducts.map((product) => {
                    return <Product product={product} key={product.id} />
                }) :
                    products.slice(0, 8).map((product) => {
                        return <Product product={product} key={product.id} />
                    })
            }
        </Container>
    )
}

export default Products;
