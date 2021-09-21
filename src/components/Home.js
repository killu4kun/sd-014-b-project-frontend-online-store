import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from './Product';
import SideBar from './SideBar';

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
      <div className="busca">
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
        <SideBar />
        {searchResults.map(({ title, thumbnail, price, id }) => (
          <Product key={ id } title={ title } thumbnail={ thumbnail } price={ price } />
        ))}
      </div>
    );
  }
}

export default Home;
