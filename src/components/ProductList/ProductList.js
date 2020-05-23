import React from 'react' 
import {Card,Button } from 'react-bootstrap'
import './ProductList.css'


const ProductList = (props)=> {
  return (
    <div md={3}>
    <Card style={{ width: '18rem' , padding : '10px', margin:'10px' }}>
    <Card.Img variant="top"alt="" src={require(`../../assets/product-image-1.png`)} />
    <Card.Title>
        {props.productName}
    </Card.Title>
    { <Card.Text>
        {props.children}
    </Card.Text> 
    }
    <Button variant="primary" className="mr-1">View Deatils</Button>
    <Button style={{ marginTop:'5px'}} variant="primary" className="mr-1"onClick = {() => props.deleteItem(props.id)}>Remove</Button>
   </Card>
   </div>
  )
   }

export default ProductList
