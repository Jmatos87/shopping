import React from 'react';
import logo from './logo.svg';
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container wrapper'>
        <div className='row'>
          <Products/>
          <Cart />
          
        </div>
      </div>
    </div>
  );
}

export default App;
