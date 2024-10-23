import { useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Axios  from "axios";
import Badge from 'react-bootstrap/Badge';


function ProductDetails(){

    let pro = useParams();
    let [singleProduct, setSingleProduct] = useState({});

    useEffect(()=>{
        setTimeout(()=>{
            getSingleProduct();
        },500)
    })

    let getSingleProduct =() =>{
        // console.log(pro.id);
        Axios.get("https://fakestoreapi.com/products/"+pro.id)
        .then((res)=>{
            setSingleProduct(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(

        <>
            <Container style={{marginTop : "100px"}}>
                <Row>
                    <Col>
                         <img src={singleProduct.image}  height={600} />  
                    </Col>
                    <Col style={{marginTop : "100px"}}>
                        <h3>{singleProduct.title}</h3>

                        <Badge bg="primary">{singleProduct.rating?singleProduct.rating.rate:""}</Badge>
                        <h4>{singleProduct.price}</h4>
                        {singleProduct.rating?singleProduct.rating.count > 1 ?
                            <p style={{color:"green"}}>Available</p>
                            :
                            <p style={{color:"red"}}>Out of Stock</p>
                            :""}
                            <p>{singleProduct.description}</p>
                    </Col>
                </Row>
               
            </Container>
        </>
    )
}

export default ProductDetails;