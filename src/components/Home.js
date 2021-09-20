import React from 'react';

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
      </div>
    );
  }
}

export default Home;
