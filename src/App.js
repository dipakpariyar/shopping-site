import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css'
function App() {

  return (
    <div className="App">
     <BrowserRouter>
     <Route path='/' component={Home} />
     </BrowserRouter>
     
    </div>
  );
}

export default App;
