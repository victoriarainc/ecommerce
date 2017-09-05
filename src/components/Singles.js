import React, { Component } from 'react';
import {singles} from '../data'

export default class Singles extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let items = singles.map((item) => {
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
