import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import styled from "styled-components";

import { BiCart } from "react-icons/bi";

const CardImg = styled.div`
    background-repeat:no-repeat;
    background-position:center; 
    background-size:contain;
    width:100%;
    height:600px;
`

const ProductDetail = () => {

    const { productId } = useParams();

    const { productsData } = useContext(ProductsContext);

    // console.log(productId)
    // console.log(productsData[0]?.id);


        const productData = productsData?.find(product => product?.id === parseInt(productId) );

    

    return(
            <Row>
                <Col md={5} lg={5}>
                    <div className="px-5 py-2" style={{ border: "1px solid #ededed" }}>
                            <CardImg style={{ backgroundImage:`url(${productData?.image})` }}></CardImg>
                    </div>
                </Col>
                <Col md={7} lg={7}>
                    <h2 className="fs-3 pb-4 my-4" style={{ borderBottom:"1px solid #cdcdcd" }}>{productData.title}</h2>
                    <h3 className="fs-2">Price: &#8377; {productData.price}</h3>
                    <p className="fs-6">Quantity: {productData.rating.count}</p>
                    <div className="my-5">
                        <h5 className="fs-5 fw-bold">Product Description</h5>
                        <p className="fs-6 text-secondary">{productData.description}</p>
                    </div>
                    <Button variant="warning"><BiCart size={22} style={{marginTop:"-.2rem", marginRight:".6rem"}} />Add to Cart</Button>
                </Col>
            </Row>
    )
}


export default ProductDetail;