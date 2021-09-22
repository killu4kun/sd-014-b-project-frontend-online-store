import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Cart" component={ ShoppingCart } />
          <Route exact path="/:category" component={ Home } />
        </Switch>
      </main>
    );
  }
}

export default Content;
