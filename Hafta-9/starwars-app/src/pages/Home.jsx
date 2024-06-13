import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import StarshipList from '../components/StarshipList';
import logo from '../assets/Star_Wars_Logo.png';

function Home() {
  const [starships, setStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loadedCount, setLoadedCount] = useState(6);

  useEffect(() => {
    fetchStarships(page);
  }, [page]);

  const fetchStarships = async (page) => {
    const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
    setStarships((prevStarships) => [...prevStarships, ...response.data.results]);
  };

  const handleSearch = async () => {
    const response = await axios.get(`https://swapi.dev/api/starships/?search=${searchTerm}`);
    setStarships(response.data.results);
  };

  const loadMoreStarships = () => {
    setLoadedCount((prevCount) => prevCount + 3);
    if (loadedCount >= starships.length && page < Math.ceil(starships.length / 10)) {
      setPage(page + 1);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="container mx-auto p-4 lightspeed-background"
    >
      <div className="flex justify-center mb-6" >
        <img src={logo} alt="Star Wars Logo" className="w-64" />
      </div>
      <h1 className="text-5xl font-bold mb-6 text-center">Star Wars Starships</h1>
      <div className="flex justify-center mb-4">
        <motion.input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Name / Model"
          className="p-2 border border-gray-500 rounded-l-md bg-gray-800 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.button 
          onClick={handleSearch} 
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Filter
        </motion.button>
      </div>
      <StarshipList starships={starships.slice(0, loadedCount)} />
      <div className="flex justify-center mt-4">
        <motion.button 
          onClick={loadMoreStarships} 
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Load More
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Home;
