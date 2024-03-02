import React from 'react';

const ProductItem = ({product}) => {
    return (
     <div className="p-2 md:w-1/3 sm:w-1/2 w-full">
      <div className="p-2 flex flex-col justify-between border border-blue-500 w-full h-full rounded-xl shadow-md">
      <p>{product.id}</p>
      <p>{product.brand}</p>
      <p>{product.price}</p>
      <p>{product.product}</p>
      </div>
     </div>
     );
};

export default ProductItem;