import React from 'react';
import Hero from './Hero';
import LearnBtn from '../../components/LearnBtn';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Products from '../Shop/Products';


const Home = () => {
  return (
    <>
      <Hero />

      
      <section className="w-full px-6 py-12 bg-gray-100">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Why <br /> Choosing Us
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.  
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quality Products</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
            <LearnBtn text='Learn More' icon={<FaArrowAltCircleRight />}/>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Trusted Service</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
           <LearnBtn text='Learn More' icon={<FaArrowAltCircleRight />}/>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Fast Delivery</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
            <LearnBtn text='Learn More' icon={<FaArrowAltCircleRight />}/>
          </div>
         
        </div>
        
      </section>

      <Products Headline='Best Selling Products' />
    </>
  );
};

export default Home;
