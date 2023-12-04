import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js'

import './App.css'
import Header from './components/header/header.tsx';
import Hero from './components/hero/hero.tsx';
import Product from './components/product/product.tsx';
import Contact from './components/contact/contact.tsx';

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <Contact />
    </div>
  )
}

export default App;
