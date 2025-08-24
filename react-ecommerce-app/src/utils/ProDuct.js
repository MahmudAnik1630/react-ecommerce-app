
import chair1 from '../assets/products/chair-1.png';
import chair2 from '../assets/products/chair-2.png';
import chair3 from '../assets/products/chair-3.png';
import chair4 from '../assets/products/chair-4.png';
import chair5 from '../assets/products/chair-5.png';
import beds1 from '../assets/products/beds-1.png';
import beds2 from '../assets/products/beds-2.png';
import beds3 from '../assets/products/beds-3.png';
import beds4 from '../assets/products/beds-4.png';
import beds5 from '../assets/products/beds-5.png';
import sofa1 from '../assets/products/sofa-1.png';
import sofa2 from '../assets/products/sofa-2.png';
import sofa3 from '../assets/products/sofa-3.png';
import sofa4 from '../assets/products/sofa-4.png';
import sofa5 from '../assets/products/sofa-5.png';
import lamp1 from '../assets/products/lamp-1.png';
import lamp2 from '../assets/products/lamp-2.png';
import lamp3 from '../assets/products/lamp-3.png';
import lamp4 from '../assets/products/lamp-4.png';
import lamp6 from '../assets/products/lamp-6.png';


const images = {
  chair1, chair2, chair3, chair4, chair5,
  beds1, beds2, beds3, beds4, beds5,
  sofa1, sofa2, sofa3, sofa4, sofa5,
  lamp1, lamp2, lamp3, lamp4, lamp6
};


export const ProDuct = [
  
  { id: 1, name: "Comfortable Chair", category: "Chair", price: 99, imageUrl: images.chair2, rating: 5 },
  { id: 2, name: "Ergonomic Chair", category: "Chair", price: 129, imageUrl: images.chair2, rating: 4 },
  { id: 3, name: "Stylish Armchair", category: "Chair", price: 149, imageUrl: images.chair3, rating: 3 },
  { id: 4, name: "Leather Recliner", category: "Chair", price: 199, imageUrl: images.chair4, rating: 4 },
  { id: 5, name: "Minimalist Chair", category: "Chair", price: 89, imageUrl: images.chair5, rating: 4.5 },

  
  { id: 6, name: "King Size Bed", category: "Beds", price: 299, imageUrl: images.beds1, rating: 5 },
  { id: 7, name: "Queen Size Bed", category: "Beds", price: 249, imageUrl: images.beds2, rating: 5 },
  { id: 8, name: "Modern Bed Frame", category: "Beds", price: 399, imageUrl: images.beds3, rating: 3 },
  { id: 9, name: "Platform Bed", category: "Beds", price: 349, imageUrl: images.beds4, rating: 2 },
  { id: 10, name: "Sleigh Bed", category: "Beds", price: 459, imageUrl: images.beds5, rating: 5 },

  
  { id: 11, name: "Luxury Sofa", category: "Sofa", price: 499, imageUrl: images.sofa1, rating: 4 },
  { id: 12, name: "Compact Sofa", category: "Sofa", price: 399, imageUrl: images.sofa2, rating: 5 },
  { id: 13, name: "L-shaped Sofa", category: "Sofa", price: 699, imageUrl: images.sofa3, rating: 4 },
  { id: 14, name: "Sofa with Chaise", category: "Sofa", price: 549, imageUrl: images.sofa4, rating: 5 },
  { id: 15, name: "Sectional Sofa", category: "Sofa", price: 799, imageUrl: images.sofa5, rating: 3.6 },

  
  { id: 16, name: "Modern Lamp", category: "Lamp", price: 49, imageUrl: images.lamp1, rating: 5 },
  { id: 17, name: "Classic Lamp", category: "Lamp", price: 59, imageUrl: images.lamp2, rating: 4 },
  { id: 18, name: "Wooden Table Lamp", category: "Lamp", price: 69, imageUrl: images.lamp3, rating: 3 },
  { id: 19, name: "Industrial Floor Lamp", category: "Lamp", price: 89, imageUrl: images.lamp4, rating: 5 },
  { id: 20, name: "Vintage Desk Lamp", category: "Lamp", price: 79, imageUrl: images.lamp6, rating: 4 },
];
