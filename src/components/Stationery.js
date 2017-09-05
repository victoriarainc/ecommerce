import React, { Component } from 'react';
import {stationery} from '../data';

export default class Stationery extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      let items = stationery.map((item) => {
        return(
          <div className="itemwrapper">
            <img src={item.img} />
            <div className="itemdescription">
              <div className="itemprice">{item.price}</div>
              <div>{item.description}</div>
            </div>
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
