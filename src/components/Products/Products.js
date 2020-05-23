import React, {Component} from 'react'
import './Products.css'
import {Container,Row,Col,Form,Button,Badge} from 'react-bootstrap'
import ProductList from '../ProductList/ProductList'
import PortalModal from '../Portal/Portal'
import ErrorBoundary from '../Error/Error'


class Products extends Component{
    constructor(props) {
      super(props);
      this.state = {
        items :  [],
        showModal: false,
        isEnabled: true
      }
    }
   componentDidMount() {
      fetch("http://localhost:3000/items.json")
        .then(response => {
          console.log(response)
          return response.json();
        }).then(items => {
           this.setState({ items: items.items})
        
    })
    }
    addItem = (e) =>{
      e.preventDefault();
      this.handleCloseModal();
      const items = Object.assign([] , this.state.items) ;
      if(this.refs.prdName.value && this.refs.price.value && 
       this.refs.description.value !== ""){
        const newId = items[items.length-1].id + 1;
         this.setState({
         items: items.concat({
         id:newId,
         ProductName:this.refs.prdName.value,
         Price : `$${this.refs.price.value}`,
         Description: this.refs.description.value
       })
  }) }
     else {
       setTimeout(() => {
       alert("Please fill all the fields") ;
     }, 100); 
    }
   }
  handleDelete = (id,e) =>{
    const filteredItems= this.state.items.filter(item =>
      item.id!==id);
     this.setState({
       items:filteredItems
      })
    
  }
  showValue = (e) =>{
    if ( this.refs.prdName.length < 0 && this.refs.description.value<0 && this.refs.price.value<0 ){
       document.getElementById("submitbtn").disable = true
    }
  }
  
  
  handleShowMessageClick = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})
    render(){
      let itemLength = this.state.items.length;
        return(
    <Container style={{marginTop:"5px" }}>
    <Row>
      <Col xs={6} sm={6} className="algn justify-content-end">
         <h4> Featured Products </h4>
          </Col>
      <Col xs={6} sm={6} className="algn justify-content-end">
          <button className="btn btn-primary" onClick={this.handleShowMessageClick}> Add Product </button>
          {this.state.showModal ? (
            <PortalModal>
             <Form onSubmit={this.addItem}>
             <Button className = "closebtn" onClick={this.handleCloseModal}>X </Button>
              <div className="hdng"> Add Product </div> 
              <hr/>
              <Form.Group controlId="itemName">
             <Form.Label>Item Name :</Form.Label>
             <Form.Control required ref="prdName" type="text" placeholder="Enter ProductName" value= {this.state.items.ProductName} />
            </Form.Group>
           <Form.Group controlId="itemPrice">
         <Form.Label>Price :</Form.Label>
         <Form.Control required ref="price" type="number" min="100" max="1000" placeholder="Enter Price " value= {this.state.items.Price} />
        </Form.Group>
       <Form.Group controlId="itemDescription">
      <Form.Label>Description :</Form.Label>
       <Form.Control required ref="description"  type="text" placeholder="Enter Description" value= {this.state.items.Description} />
      </Form.Group>
     </Form>
     <Button  type="submit" id="submitbtn"  variant="primary" onClick= {this.addItem} >
              Add
        </Button>
          </PortalModal>
          ) : null}
      </Col>
    </Row>
    <Row>
            <Col style={{marginTop:"2%" }} md={2} xs={2} sm={2}>
       <h4><Badge variant="primary">Total Products : {itemLength}</Badge></h4>
       </Col>
    <Col  md={10} xs={10} sm={10}>
        <Row>
        <ErrorBoundary>
        {
             this.state.items.map((productList,index)=>{
                return( 
                <ProductList key={productList.id} id = {productList.id} productName={productList.ProductName} deleteItem = {this.handleDelete}>
                  <h5>{productList.Price}</h5>
                  <h6> {productList.Description}</h6>
                </ProductList>
                  )
             })
          } 
          </ErrorBoundary>
          </Row> 
        </Col> 
        </Row>
  </Container>

        )}
  

}

export default Products