import React, {Component} from 'react';
import '../styles/App.css';

export default class Craft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inventory">
        <header className="inventoryHeader">Inventory</header>
        <form className = "addInventory" action="http://localhost:3030/inventory" method="post">
          Title: <input type="text" name="title" />
          Description: <input type="text" name="description" />
          Notes: <input type="text" name="notes" />
          Price: <input type="text" name="price" />
          Materials: <input type="text" name="materials" />
          <input type="submit" className="inventoryButton" name="add"/>
        </form>
      </div>
    );
  }
}
