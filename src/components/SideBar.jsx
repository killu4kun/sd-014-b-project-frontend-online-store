import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Product from './Product';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      resolve: false,
    };
  }

  componentDidMount() {
    this.getCategory();
  }

  getCategory = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
      resolve: true,
    });
  };

  render() {
    const { categories, resolve } = this.state;
    if (resolve) {
      return (
        <div>
          {categories.map(({ id, name }) => (
            <button
              type="button"
              name={ name }
              propz={ this.handleClick }
              key={ id }
              data-testid="category"
            >
              {name}
            </button>
          ))}
        </div>
      );
    }
    return <div />;
  }
}

export default SideBar;
