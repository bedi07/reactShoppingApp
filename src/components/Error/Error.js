import React , {Component} from 'react'

class ErrorBoundary extends Component{
    constructor(props){
     super(props)
      this.state = {
          hasError:false
      }
    }
    
    static getDrivedStateFromError(error){
        return{
            hasError:true
        }
    }
   
    render(){
         if(this.state.hasError){
         return <h3>Something Went Wrong</h3>
        }
      return this.props.children
    }
 }

export default ErrorBoundary