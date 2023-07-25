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

  function showStockOnly(e) {
    const copy = [...anotherProducts];

    if (e.target.checked === true) {
      const newProduct = copy.filter((item) => {
        return item.inStock === true;
      });
      setProducts(newProduct);
    } else {
      setProducts(copy);
    }
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchItems={searchItems}
        showStockOnly={showStockOnly}
        products={products}
      />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
