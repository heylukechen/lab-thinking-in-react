import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import { useState } from 'react';
import jsonData from '../data.json';

const ProductsPage = () => {
//m
  const [products, setProducts] = useState(jsonData);
  //have a back-up state varibles and not change the jsonData forever
  const [anotherProducts, setAnotherProducts] = useState(jsonData);

  function searchItems(e) {
    const copy = [...anotherProducts];
    const newProduct = copy.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setProducts(newProduct);
    console.log(e.target.value);
    //reset the database back to the original
    //toLowerCase improvements
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchItems={searchItems} products={products} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
