import React, { useId } from "react";
const products = [
  {
    name: "product1",
  },
  {
    name: "product2",
  },
];

// useId -- generate stable, unique IDs
function FifthUseId() {
  const id = useId();
  return (
    <>
      {products.map((product) => {
        return (
          <div key={`${id} + ${product}`}>
            <h1>{product.name}</h1>
          </div>
        );
      })}
    </>
  );
}

export default FifthUseId;
