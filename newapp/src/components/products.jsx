import React, { Component } from 'react'
class Products extends Component {

    render() { 
        const {title,price,imgUrl} = this.props.product
       console.log(this.props);
       
        return ( 
            <React.Fragment>
              
        <h5>{title}</h5>
<div className="card-fluid" style={{width: 200}}>
<img className="card-img-top" src={imgUrl} alt="Product"/>
<div className="card-body">
<p className="card-text">Price:${price}</p>
<a href="google.com"  className="btn btn-primary">Add to Wishlist</a>
</div>
</div>
</React.Fragment>
         );
    }
}
 
export default Products;