import React, { Component } from 'react';
import { getCategories } from '../services/api';

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
    }

    render() {
      const { categories, resolve } = this.state;
      return (
        <div>
          <ul>
            {resolve && categories.map(({ id, name }) => (
              <li key={ id } data-testid="category">
                {name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
}

export default SideBar;
