import React, { useState, useEffect } from "react";
const Products = () => {
    const dummyProducts = [
    {
      name: "Protein Powder",
      description: "High-quality protein supplement.",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1605296867424-26c3c5a663c7",
    },
    {
      name: "Dumbbells Set",
      description: "Adjustable dumbbell set for home workouts.",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1579751622521-1fa7293ea54e",
    },
    {
      name: "Resistance Bands",
      description: "Set of resistance bands for versatile workouts.",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b54",
    },
    {
      name: "Kettlebell Set",
      description: "Various sizes of kettlebells for strength training.",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1599058917212-d56fabab1365",
    },
    {
      name: "Yoga Mat",
      description: "Comfortable yoga mat for all types of workouts.",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1599857980193-7a9fbefa6bb8",
    },
    {
      name: "Jump Rope",
      description: "Adjustable jump rope for cardio exercises.",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1617237007482-1261e9f9a2f3",
    },
    {
      name: "Exercise Ball",
      description: "Stability ball for core strength and balance.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1607988306855-67b7b9a505a9",
    },
    {
      name: "Pull-Up Bar",
      description: "Doorway pull-up bar for upper body workouts.",
      price: "$44.99",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
    },
    {
      name: "Foam Roller",
      description: "High-density foam roller for muscle recovery.",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1604211781061-502b737518cb",
    },
    {
      name: "Agility Ladder",
      description: "Speed and agility ladder for footwork training.",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1591821829502-d07e381d1a79",
    },
  ];

    const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    useEffect(() => {
        console.log("Cart Items:", cartItems);
      }, [cartItems]);
      

  return (
    <div className="w-full h-auto py-16 px-6 lg:px-24 md:px-16 sm:px-6 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        All Products
      </h2>
      <p className="text-center text-gray-600">
        Explore our full range of products.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {dummyProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 w-full mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
             <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-gray-800">
                {product.price}
              </p>
              <button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Products;
