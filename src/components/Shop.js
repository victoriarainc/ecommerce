import React, {Component} from 'react';
import '../styles/App.css';

import {data} from '../data.js';

import {NavLink} from 'react-router-dom';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    let match = this.props.match;
    console.log(match);
  }

  render() {

    let categories = []
    data.forEach((item) => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    });

    let category_links = categories.map((item) => {
      return (
        <div key={item} className="link shop">
          <NavLink to={`/shop/${item}`}>{item}</NavLink>
        </div>
      )
    });
    console.log(category_links);

    // let items = data.map((item) => {
    //   return (
    //     <div className="itemwrapper">
    //       <img src={item.img}/>
    //       <div className="itemdescription">
    //         <div className="itemprice">{item.price}</div>
    //         <div>{item.description}</div>
    //       </div>
    //     </div>
    //   );
    // });

    return (
      <div>
        {category_links}
      </div>
// {      <div className="categories">
//         <div className="link shop">
//           <NavLink to={`/shop/${cards}`}>Greeting Cards</NavLink>
//         </div>
//         <div className="link shop">
//           <NavLink to={`/shop/${stationery}`}>Stationery</NavLink>
//         </div>
//         <div className="link shop">
//           <NavLink to={`/shop/${singles}`}>Single Letter Pieces</NavLink>
//         </div>
//       </div>}
    );
  }
}
