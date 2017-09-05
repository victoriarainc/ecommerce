import React, { Component } from 'react';
import { singles, stationary, cards } from '../data'

export default class CategoryView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.items.map((item) => {
      return(
        <div>
          {item.description}
        </div>
      )
    })
    return (
      <div>
        This is a category view.
        <br />
        {this.props.category}
        <br />
        {items}
      </div>
    );
  }
}
