
import React, { Component } from 'react';
import { craft } from '../craft';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
  }
    render() {

      let match = this.props.match;
      let service = match.params.id;

      let items = craft.map((item) => {
        if (item.craft === service) {
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
