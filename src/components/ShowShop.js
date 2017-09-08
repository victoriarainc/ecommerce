import React, { Component } from 'react';
import { data } from '../data';

export default class ShowShop extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      // let items = stationery.map((item) => {
      //   return(
      //     <div className="itemwrapper">
      //       <img src={item.img} />
      //       <div className="itemdescription">
      //         <div className="itemprice">{item.price}</div>
      //         <div>{item.description}</div>
      //       </div>
      //     </div>
      //   )
      // });

      let match = this.props.match;
      let category = match.params.id;

      let items = data.map((item) => {
        if (item.category === category) {
          return (
            <div className="shopResult" key={item.id}>
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
