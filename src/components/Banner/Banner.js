import React from 'react'
import "./Banner.css"

const Banner = ()=> {
  return (
   <div className="container-fluid">
     <div className="backgd" md={12} xs={12} lg={12}>
      <div className=" row justify-content-center">
       <h4>Shopping Application.....</h4>
      </div>
      <div className=" row justify-content-center">
              <i className="fab fa-facebook-f mr-2"></i>
              <i className="fa fa-wifi mr-2"></i>
              <i className="fa fa-envelope"></i>
           
      </div>
     </div>
   </div>
 
  )
}

export default Banner