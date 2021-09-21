import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from './Product';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      searchResults: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  };

  handleSubmit = () => {
    const { inputText } = this.state;
    getProductsFromCategoryAndQuery(inputText, inputText).then(({ results }) => {
      console.log(results);
      this.setState({ searchResults: results });
    });
  };

  render() {
    const { inputText, searchResults } = this.state;

    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ inputText }
          onChange={ this.handleChange }
        />
        <input
          data-testid="query-button"
          type="submit"
          onClick={ this.handleSubmit }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/Cart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        {searchResults.map(({ title, thumbnail, price, id }) => (
          <Product key={ id } title={ title } thumbnail={ thumbnail } price={ price } />
        ))}
        <SideBar />
      </div>
    );
  }
}

export default Home;
