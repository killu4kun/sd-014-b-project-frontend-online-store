import React, { Component } from 'react';
import { getCategories, getProductsFromCategory } from '../services/api';
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

  handleClick = () => {
    const { name } = this.props;
    getProductsFromCategory(name).then(({ results }) => {
      results.filter(({ title, thumbnail, price, id }) => (
        <Product key={ id } title={ title } thumbnail={ thumbnail } price={ price } />
      ));
    });
  };

  render() {
    const { categories, resolve } = this.state;
    return (
      <div>
        <ul>
          {resolve
            && categories.map(({ id, name }) => (
              <li
                name={ name }
                onClick={ this.handleClick }
                key={ id }
                data-testid="category"
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default SideBar;
