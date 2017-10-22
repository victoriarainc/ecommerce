import React, { Component } from 'react';
import { product } from '../product';

export default class ShowShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  // handles form submission
  componentDidMount() {

    let inventoryUrl = `http://localhost:3030/inventory`;
    // fetch call to retrieve inventory from the backend.
    fetch (inventoryUrl)
    .then(r => r.json() )
    .then((json) => {
      console.log("Data from fetch", json);
      this.setState({items: json});
    })
  }
    render() {

      let match = this.props.match;
      let category = match.params.id;

      let shopItems = this.state.items.map((shopItem) => {
          return (
            <div className="shopResult" key={shopItem.id}>

              <img className="shopImg" src={shopItem.img} />
              <div className="shopDesc">
                <p className="cost">{shopItem.price}</p>
                <p className="desc">{shopItem.description}</p>
              </div>

            </div>
          )
      })

      return (
        <div>
        {shopItems}
          <div className="inventoryItem">

          </div>
        </div>
      );
    }
  }
