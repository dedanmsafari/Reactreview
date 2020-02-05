import React, { Component } from 'react';
import Products from "../components/products";
import Wishlist from "../components/wishlist";
import http from '../services/httpservice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config.json';
import "./App.css";

class App extends Component {
  state = { 
    products:[],
    wishlist:[]
   }
  async  componentDidMount() {
    
    const {data:products} = await http.get(config.apiEndpoint);
    this.setState({products})
    
   }
   handleWishlist = product => {

   const newWishlist=[...this.state.wishlist,product]
    this.setState({wishlist:newWishlist})
  };

  render() { 
    return ( 
      <React.Fragment>
      <ToastContainer />
<div className="container-fluid">
 <div className="row">
  {this.state.products.map(p => (
          <Products  className="products-item"  key={p._id}
          product={p}
          onWishlist={this.handleWishlist}
          />
        
      ))}
        <Wishlist
wishlist={this.state.wishlist}
        />
    </div> 
   
 </div>
     </React.Fragment>
     );
  }
}
 
export default App;