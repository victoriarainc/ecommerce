import React, { Component } from 'react';
import { product } from '../product';

export default class ShowShop extends Component {
  constructor(props) {
    super(props);
  }
    render() {

      let match = this.props.match;
      let category = match.params.id;

      let shopItems = product.map((shopItem) => {
        if (shopItem.category === category) {
          return (
            <div className="shopResult" key={shopItem.id}>
              <img className="shopImg" src={shopItem.img} />
              <div className="shopDesc">
              <p className="cost">{shopItem.price}</p>
              <p className="desc">{shopItem.description}</p>
              </div>
            </div>
          )
        } else {
          return null;
        }
      })

      return (
        <div>
        {shopItems}
        </div>
      );
    }
  }
