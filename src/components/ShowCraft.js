
import React, { Component } from 'react';
import { data } from '../data';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
  }
    render() {

      let match = this.props.match;
      let service = match.params.id;

      let items = data.map((item) => {
        if (item.service === service) {
          return (
            <div className="shopResult" key={item.id}>
              <h1>{item.service}</h1>
              <img className="shopImg" src={item.img} />
              <div className="shopDesc">
              <p className="cost">{item.price}</p>
              <p className="desc">{item.description}</p>
              </div>
            </div>
          )
        } else {
          return null;
        }
      })

      return (
        <div>
        {items}
        </div>
      );
    }
  }
