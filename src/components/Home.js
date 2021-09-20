import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  };

  render() {
    const { inputText } = this.state;

    return (
      <div>
        <input type="text" value={ inputText } onChange={ this.handleChange } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        <SideBar />
      </div>
    );
  }
}

export default Home;
