import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const imageUrls = {
  "CR90 corvette": "https://picfiles.alphacoders.com/235/235985.jpg",
  "Star Destroyer": "https://images4.alphacoders.com/787/78756.jpg",
  "Sentinel-class landing craft": "https://fractalsponge.net/wp/wp-content/uploads/2022/02/sentinel2-scaled.jpg",
  "Death Star": "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
  "Millennium Falcon": "https://upload.wikimedia.org/wikipedia/en/8/8d/A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg",
  "Y-wing": "https://static.wikia.nocookie.net/starwars/images/c/cd/Ywing.jpg/revision/latest?cb=20070210175842",
  "X-wing": "https://static.wikia.nocookie.net/starwars/images/5/57/Black_One_BF2.png/revision/latest?cb=20170825000542",
  "TIE Advanced x1": "https://static.wikia.nocookie.net/starwars/images/b/ba/DVTX1.png/revision/latest?cb=20150827050808",
  "Executor": "https://static.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20230405071103",
  "Rebel transport": "https://static.wikia.nocookie.net/starwars/images/b/be/GR-75_transport_SWGTCG.jpg/revision/latest?cb=20130911163358",
};

function Details() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    fetchStarship();
  }, []);

  const fetchStarship = async () => {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
    setStarship(response.data);
  };

  if (!starship) {
    return <div>Loading...</div>;
  }

  const imageUrl = imageUrls[starship.name] || 'default-image-url';

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="container mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg"
    >
      <Link to="/" className="text-blue-400 hover:text-blue-200 mb-4 inline-block">
        <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back
      </Link>
      <h1 className="text-4xl font-bold mb-6">{starship.name}</h1>
      <img src={imageUrl} alt={starship.name} className="w-full h-64 object-cover mb-6 rounded-lg" />
      <p className="text-lg mb-2"><span className="font-semibold">Model:</span> {starship.model}</p>
      <p className="text-lg mb-2"><span className="font-semibold">Hyperdrive Rating:</span> {starship.hyperdrive_rating}</p>
      <p className="text-lg mb-2"><span className="font-semibold">Passengers:</span> {starship.passengers}</p>
      <p className="text-lg mb-2"><span className="font-semibold">Max Atmosphering Speed:</span> {starship.max_atmosphering_speed}</p>
      <p className="text-lg mb-2"><span className="font-semibold">Manufacturer:</span> {starship.manufacturer}</p>
      <p className="text-lg mb-2"><span className="font-semibold">Crew:</span> {starship.crew}</p>
      <p className="text-lg mb-2"><span className="font-semibold">Cargo Capacity:</span> {starship.cargo_capacity}</p>
    </motion.div>
  );
}

export default Details;
