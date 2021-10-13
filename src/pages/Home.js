import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCatalog from '../components/ProductCatalog';
import CartIcon from '../images/Icon.png';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      productCatalog: [],
      getCategoryAPI: [],
      requestAPI: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentDidMount() {
    this.getProductCategoryAPI();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async (event) => {
    const result = await getProductsFromCategoryAndQuery('', event.target.name);
    this.setState({
      productCatalog: result.results,
    });
    return result;
  }

  getProductCategoryAPI = async () => {
    const getAPI = await getCategories();
    this.setState({
      getCategoryAPI: getAPI,
      requestAPI: true,
    });
  }

  async searchProducts() {
    const { searchText } = this.state;
    const result = await getProductsFromCategoryAndQuery('', searchText);
    this.setState({
      productCatalog: result.results,
    });
    return result;
  }

  render() {
    const { getCategoryAPI, requestAPI, productCatalog, searchText } = this.state;
    return (
      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          type="text"
          data-testid="query-input"
          name="searchText"
          value={ searchText }
          onChange={ this.handleChange }
        />
        <button type="button" data-testid="query-button" onClick={ this.searchProducts }>
          Pesquisa
        </button>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img
            width="40px"
            className="shopping-cart-img"
            src={ CartIcon }
            alt="Ícone do Carrinho de compras"
          />
        </Link>
        <hr />
        {requestAPI
          ? (
            <>
              {getCategoryAPI.map((category) => (
                <button
                  onClick={ this.handleClick }
                  type="button"
                  key={ category.id }
                  data-testid="category"
                  name={ category.name }
                >
                  { category.name }
                </button>))}
            </>)
          : ''}
        <ProductCatalog productCatalog={ productCatalog } />
      </main>
    );
  }
}

export default Home;
