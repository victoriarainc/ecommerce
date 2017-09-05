import React, { Component } from 'react';
import {greetingcards} from '../data';

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      let items = greetingcards.map((item) => {
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
