import React, { useContext } from "react";

import { Col, Card } from 'react-bootstrap'
import styled from "styled-components"
import { Link } from "react-router-dom";

import { ProductsContext } from "../context/ProductsContext";


const CardImg = styled.div`
    background-repeat:no-repeat;
    background-position:center; 
    background-size:contain;
    width:100%;
    height:200px; 
    border:none;
`

const ProductCard = () => {

    //set the data below we have in useEffect hook
    const { productsData } = useContext(ProductsContext);


    return (
        // ? used is when we get an undefined data when the data is firstfetched then we get the actual data. 
        productsData?.map((product, i) => {
            const productTitle =  product.title.length>30?product.title.split(" ",5).join(" ")+"...":product.title;
            return (
                <Col sm={6} md={4} lg={3} key={product.id}>
                    <Link to={`/${product.id}`} className="text-decoration-none">
                    <Card className="mb-4">
                        
                        <div className="p-3">
                            <CardImg className="CardImg"
                            style={{ backgroundImage:`url(${product.image})` }}></CardImg>
                        </div>
                        <Card.Body className="p-3">
                            <Card.Title className="fs-6 fw-b" style={{ height:"2.5rem" }}>{productTitle}</Card.Title>
                            <Card.Text className="fw-bold text-dark">&#8377; {product.price}</Card.Text>
                        </Card.Body>
                        
                    </Card>
                    </Link>
                </Col>
                )
            }
        )
    )
}

export default ProductCard;