import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  };

  render() {
    const { categories, resolve } = this.state;
    const { fetchCategories } = this.props;
    if (resolve) {
      return (
        <div>
          {categories.map(({ id, name }) => (
            <Link to={ `/${name}` } key={ id } onClick={ fetchCategories }>
              <button type="button" name={ name } data-testid="category">
                {name}
              </button>
            </Link>
          ))}
        </div>
      );
    }
    return <div />;
  }
}

SideBar.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
};

export default SideBar;
