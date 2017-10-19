
import React, { Component } from 'react';
import { craft } from '../offer.js';

export default class ShowCraft extends Component {
  constructor(props) {
    super(props);
  }
    render() {

      let match = this.props.match;
      let service = match.params.id;

      let craftItems = craft.map((craftItem) => {
        if (craftItem.service === service) {
          return (
            <div className="shopWrapper">
            <div className="shopHeader">
              {// <img className="shopImg" src={craftItem.img} />
          }
            </div>
              <div className="shopResult" key={craftItem.id}>

                <div className="shopDesc">
                <h1 className="title">{craftItem.service}</h1>
                <p className="cost">{craftItem.price}</p>
                <p className="desc">{craftItem.description}</p>
                </div>
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
        console.log(craftItems);
    }
  }
