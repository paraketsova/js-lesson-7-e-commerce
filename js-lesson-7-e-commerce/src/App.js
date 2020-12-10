import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ProductListPage from './pages/ProductListPage';


function App() {
  return (
    <div>
      <h1>E-Commerce</h1>

      <Switch>

        <Route path='/'>
          <ProductListPage />
        </Route>
        
      </Switch>

    </div>
  );
}

export default App;
