
import React, { Component } from 'react';
import { craft } from '../craft';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
  }
    render() {

      let match = this.props.match;
      let service = match.params.id;

      let craftItems = craft.map((craftItem) => {
        if (craftItem.service === service) {
          return (
            <div className="shopResult" key={craftItem.id}>
              <h1>{craftItem.service}</h1>
              <img className="shopImg" src={craftItem.img} />
              <div className="shopDesc">
              <p className="cost">{craftItem.price}</p>
              <p className="desc">{craftItem.description}</p>
              </div>
            </div>
          )
        } else {
          return null;
        }
      })

      return (
        <div>
        {craftItems}
        </div>
      );
    }
  }
