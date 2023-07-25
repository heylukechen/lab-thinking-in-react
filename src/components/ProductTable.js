import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => {
          return (
            <ProductRow
              key={product.id}
              category={product.category}
              price={product.price}
              inStock={product.inStock}
              name={product.name}
              id={product.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
