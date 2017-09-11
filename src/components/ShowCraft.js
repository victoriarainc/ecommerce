
import React, { Component } from 'react';
import { craft } from '../craft';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
  }
    render() {

      let match = this.props.match;
      let service = match.params.id;

      let items = craft.map((result) => {
        if (result.service === service) {
          return (
            <div className="shopResult" key={result.id}>
              <h1>{result.service}</h1>
              <img className="shopImg" src={result.img} />
              <div className="shopDesc">
              <p className="cost">{result.price}</p>
              <p className="desc">{result.description}</p>
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
