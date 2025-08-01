import React, { useState } from "react";

// Sample product data - replace with your actual data
const initialProducts = [
  {
    name: "Product 1",
    price: "$19.99",
    quantity: "10 in stock",
    img: "https://via.placeholder.com/200x150/3B82F6/white?text=Product+1",
  },
  {
    name: "Product 2",
    price: "$29.99",
    quantity: "5 in stock",
    img: "https://via.placeholder.com/200x150/EF4444/white?text=Product+2",
  },
  {
    name: "Product 3",
    price: "$39.99",
    quantity: "15 in stock",
    img: "https://via.placeholder.com/200x150/10B981/white?text=Product+3",
  },
  {
    name: "Product 4",
    price: "$49.99",
    quantity: "8 in stock",
    img: "https://via.placeholder.com/200x150/F59E0B/white?text=Product+4",
  },
  {
    name: "Product 5",
    price: "$59.99",
    quantity: "12 in stock",
    img: "https://via.placeholder.com/200x150/8B5CF6/white?text=Product+5",
  },
  {
    name: "Product 6",
    price: "$69.99",
    quantity: "3 in stock",
    img: "https://via.placeholder.com/200x150/EC4899/white?text=Product+6",
  },
  {
    name: "Product 7",
    price: "$79.99",
    quantity: "20 in stock",
    img: "https://via.placeholder.com/200x150/6B7280/white?text=Product+7",
  },
  {
    name: "Product 8",
    price: "$89.99",
    quantity: "7 in stock",
    img: "https://via.placeholder.com/200x150/F97316/white?text=Product+8",
  },
];

const One = () => {
  const [products, setProducts] = useState(initialProducts);
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOver, setDraggedOver] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDraggedOver(index);
  };

  const handleDragLeave = () => {
    setDraggedOver(null);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    if (draggedItem === null || draggedItem === dropIndex) {
      setDraggedItem(null);
      setDraggedOver(null);
      return;
    }

    const newProducts = [...products];
    const draggedProduct = newProducts[draggedItem];

    // Remove the dragged item
    newProducts.splice(draggedItem, 1);

    // Insert at new position
    const adjustedDropIndex =
      draggedItem < dropIndex ? dropIndex - 1 : dropIndex;
    newProducts.splice(adjustedDropIndex, 0, draggedProduct);

    setProducts(newProducts);
    setDraggedItem(null);
    setDraggedOver(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedOver(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Drag & Drop Product Grid
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Drag products to reorder them
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={`${product.name}-${index}`}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
            className={`
              border-2 p-4 rounded-lg cursor-move transition-all duration-200 bg-white
              ${
                draggedItem === index
                  ? "opacity-50 scale-95 border-blue-400"
                  : "hover:shadow-lg"
              }
              ${
                draggedOver === index && draggedItem !== index
                  ? "border-blue-500 bg-blue-50 scale-105"
                  : "border-gray-200"
              }
              ${
                draggedItem !== null && draggedItem !== index
                  ? "hover:border-blue-300"
                  : ""
              }
            `}
          >
            <div className="relative">
              <img
                src={product.img}
                width="200"
                alt={product.name}
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </div>
            </div>

            <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
            <p className="text-green-600 font-bold text-lg">{product.price}</p>
            <p className="text-gray-600 text-sm">{product.quantity}</p>

            <div className="mt-2 text-xs text-gray-400">
              Position: {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Current Order:</h3>
        <div className="text-sm text-gray-600">
          {products.map((product, index) => (
            <span key={index}>
              {index + 1}. {product.name}
              {index < products.length - 1 ? " → " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default One;
