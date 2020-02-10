import React, { Component } from "react";
class Products extends Component {
  render() {
    const { title, price, imgUrl } = this.props.product;
  
    return (
      <React.Fragment>
        <div className="card-fluid" style={{ width: 200 }}>
          <p className="card-title">{title}</p>
          <img className="card-img-top" src={imgUrl} alt="Product" />
          <div className="card-body">
            <p className="card-text">Price:${price}</p>
            <div className="row">
              <div className="col-sm-12 col-lg-6">
              <button
              className="btn btn-primary"
              onClick={() => this.props.onWishlist(this.props.product)}
             disabled ={this.disable(this.props.product._id)}
            >
              Add 
            </button> 
              </div>
              <div className="col-sm-12 col-lg-6">
              <button
              className="btn btn-danger"
              onClick={() => this.props.onRemove(this.props.product._id)}
            >
              Remove{" "}
            </button>
              </div>
            </div>
           
           
          </div>
        </div>
      </React.Fragment>
    );
  }
  disable(productId){
    const wishlist = [...this.props.wishlist]
 if(wishlist.some( w => w._id === productId) )
   return true;
 
  }
}

export default Products;
