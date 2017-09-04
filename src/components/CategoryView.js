import React, { Component } from 'react';

export default class CategoryView extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    let cat = this.props.match.params.category
    return (
      <div>
        This is a category view.
        <br />
        {cat}
      </div>
    );
  }
}
