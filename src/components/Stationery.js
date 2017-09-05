import React, { Component } from 'react';
import {stationery} from '../data';

export default class Stationery extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      let items = stationery.map((item) => {
        return(
          <div>
          {item.img}
          {item.price}
          {item.description}
          </div>
        )
      })
      return (
        <div>
        {items}
        </div>
      );
    }
  }
