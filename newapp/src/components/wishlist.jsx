import React, { Component } from 'react'
class Wishlist extends Component {
    render() { 

        return ( 
            <div>
           <h6 className="hwishlist">wishlists</h6>

                   {this.props.wishlist.map( w => (

                  <ul key={w._id} className="list-group list-group-flush">
                    <li className="list-group-item">{w.title}</li>
                  </ul>
            ))}
  </div>

         );
    }
}
 
export default Wishlist;