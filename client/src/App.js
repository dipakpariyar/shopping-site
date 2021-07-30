import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/home/Home';
import ProductDetails from './screens/product-details';
import Test from './screens/TestComponent';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/details/:productId' component={ProductDetails} />
     <Route exact path="/test"  component={Test} />
     </Switch>
    </div>
  );
}

export default App;
