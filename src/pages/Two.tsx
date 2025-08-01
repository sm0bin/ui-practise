import { products } from "../assets/data/product";

const Two = () => {
  return (
    <div className="grid grid-cols-4 gap-4 m-6">
      {products.map((p) => (
        <div key={p.name} className="border p-4 rounded-md">
          <img src={p.img} width="200" alt="" />
          <h1>{p.name}</h1>
          <p>{p.price}</p>
          <p>{p.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Two;
