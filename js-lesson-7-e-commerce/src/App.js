import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {
  return (
    <div>
      <h1>E-Commerce</h1>

      <Switch>

        <Route path='/:id' component={ProductDetailPage} />
        <Route path='/'>
          <ProductListPage />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
