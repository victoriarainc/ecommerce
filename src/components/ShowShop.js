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
            <div key={item.id}>
              <img src={item.img} />
              {item.price}
              {item.description}
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
