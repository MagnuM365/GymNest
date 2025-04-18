import React from "react";
import { Dumbbell } from "lucide-react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import PrimaryLink from "../../components/LinkBtn/PrimaryLink";

const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1605296867424-26c3c5a663c7",
    name: "Protein Powder",
    price: "$39.99",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1579751622521-1fa7293ea54e",
    name: "Dumbbells Set",
    price: "$59.99",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b54",
    name: "Resistance Bands",
    price: "$19.99",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1599058917212-d56fabab1365",
    name: "Kettlebell Set",
    price: "$79.99",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1599857980193-7a9fbefa6bb8",
    name: "Yoga Mat",
    price: "$29.99",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77",
    name: "Treadmill",
    price: "$499.99",
  }
];

const Ecommerce = () => {
    
    return (
        <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
            <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className='w-4 h-4 -rotate-45 text-indigo-600 ' />
                Our Products
            </h6>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-gray-800 p-4 rounded-lg text-center">
                        <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl text-white font-medium mb-2">{product.name}</h3>
                        <p className="text-indigo-400 text-lg font-semibold">{product.price}</p>
                        <PrimaryBtn className="mt-4">Buy Now</PrimaryBtn>
                    </div>
                ))}
            </div>
            <PrimaryLink link="Products" className="lg:w-auto md:w-auto sm:w-[75%] px-7 py-3 mt-8 uppercase rounded-md">
                View all products
            </PrimaryLink>

        </div>
    );
};

export default Ecommerce;


