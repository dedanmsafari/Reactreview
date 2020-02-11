import React, { Component } from 'react';
import Products from "../components/products";
import Wishlist from "../components/wishlist";
import http from '../services/httpservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config.json';
import "./App.css";

class App extends Component {
  state = { 
    products:[],
    wishlist:[]
   }
  async  componentDidMount() {
    
    const {data:products} = await http.get(`${config.apiEndpoint}/products`);
    this.setState({products})
   }
   handleWishlist = async product => {
     const {data:wishlist} = await http.post(`${config.apiEndpoint}/wishlist`,product)

   const newWishlist=[...this.state.wishlist,wishlist]
    this.setState({wishlist:newWishlist})
    
  };
   handleRemove = async product => {
     const originalwishlist= this.state.wishlist;
     
const wishlist = this.state.wishlist.filter( w => w._id !== product._id);
this.setState({ wishlist});
try {
  await http.delete(`${config.apiEndpoint}/wishlist/${product._id}`)
} catch (ex) {
  if(ex.response && ex.response.status === 404) {

    toast('the post has already been deleted');
  }
    this.setState({wishlist:originalwishlist})
}
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
          onRemove={this.handleRemove}
          wishlist={this.state.wishlist}
          />
        
      ))}
   
   <div className="col-sm-12 col-lg-3">
   <Wishlist
wishlist={this.state.wishlist}
        />
     </div>
  
      
    </div> 
 
 </div>
     </React.Fragment>
     );
  }
}
 
export default App;