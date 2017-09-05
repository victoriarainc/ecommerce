import React, { Component } from 'react';
import {greetingcards} from '../data';

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      let items = greetingcards.map((item) => {
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
