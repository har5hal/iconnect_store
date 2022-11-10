import React from 'react'

import { Container, Row } from 'react-bootstrap'

import ProductCard from './ProductCard'

function ProductsPage() {
  return (
    <Container>
        <Row>
            <ProductCard/>
        </Row>
    </Container>
  )
}

export default ProductsPage