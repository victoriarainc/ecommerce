import React, { Component } from 'react';
import { singles, stationary, cards } from '../data'

import CategoryView from './CategoryView'

export default class CategoryController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      items: []
    }
  }

  componentDidMount() {
    // Once the component is created we want to load
    // our products so they can be displayed.
    let category = this.props.match.params.category

    if (category === 'singles') {
      this.setState({category: 'Singles', items: singles});

    } else if (category === 'stationary') {
      this.setState({category: 'Stationary', items: stationary});

    } else if (category === 'cards') {
      this.setState({category: 'Cards', items: cards});
    }
  }

  render() {
    return(
        <CategoryView category={this.state.category} items={this.state.items} />
    )
  }
}
