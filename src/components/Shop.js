import React, { Component } from 'react';
import '../styles/App.css';

import { data } from '../data.js';

import {NavLink} from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  let items = data.map((item) => {
    return(
      <div className="itemwrapper">
        <img src={item.img} />
        <div className="itemdescription">
          <div className="itemprice">{item.price}</div>
          <div>{item.description}</div>
        </div>
      </div>
    )
  })
  return (
    <div>
    {items}
    </div>
  );
}
}
  render() {
    return (
      <div className="categories">
         <div className="link shop"><NavLink to={`/shop/${cards}`}>Greeting Cards</NavLink></div>
         <div className="link shop"><NavLink to={`/shop/${stationery}`}>Stationery</NavLink></div>
         <div className="link shop"><NavLink to={`/shop/${singles}`}>Single Letter Pieces</NavLink></div>
       </div>
    );
  }
}
