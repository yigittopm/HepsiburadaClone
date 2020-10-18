import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import FilterNav from './components/FilterNav';
import ProductList from './components/ProductList';
import NextPage from './components/NextPage';

function App() {
  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <FilterNav/>
      <ProductList/>
      <NextPage/>
      <Footer/>
    </div>
  );
}

export default App;
