import React from 'react';

const ProductItem = ({product}) => {
// console.log(product)
    return (
     <div className="p-2 w-1/3" key={product.id}>
      <div className="p-2 flex flex-col justify-between border border-blue-500 w-full h-full rounded-md shadow-md">
      <p>{product.id}</p>
      <p>{product.brand}</p>
      <p>{product.price}</p>
      <p>{product.product}</p>
      </div>
     </div>
     );
};

export default ProductItem;