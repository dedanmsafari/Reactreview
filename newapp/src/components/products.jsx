import React, { Component } from "react";
class Products extends Component {
  render() {
    const { title, price, imgUrl } = this.props.product;
    console.log(this.props);

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
            >
              Add 
            </button> 
              </div>
              <div className="col-sm-12 col-lg-6">
              <button
              className="btn btn-danger"
              onClick={() => this.props.onRemove(this.props.product)}
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
}

export default Products;
