import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const imageUrls = {
  "CR90 corvette": "https://picfiles.alphacoders.com/235/235985.jpg",
  "Star Destroyer": "https://images4.alphacoders.com/787/78756.jpg",
  "Sentinel-class landing craft": "https://fractalsponge.net/wp/wp-content/uploads/2022/02/sentinel2-scaled.jpg",
  "Death Star": "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
  "Millennium Falcon": "https://upload.wikimedia.org/wikipedia/en/8/8d/A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg",
  "Y-wing": "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864",
  "X-wing": "https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C1%2C1536%2C864",
  "TIE Advanced x1": "https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080",
  "Executor": "https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845",
  "Rebel transport": "https://lumiere-a.akamaihd.net/v1/images/gr-75-medium-transport_cd04862d.jpeg?region=15%2C0%2C770%2C433",
  "Twin Ion Engine Advanced x1": "https://static.wikia.nocookie.net/starwars/images/b/ba/DVTX1.png/revision/latest?cb=20150827050808",
  "Executor-class star dreadnought": "https://static.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20230405071103",
  "GR-75 medium transport": "https://static.wikia.nocookie.net/starwars/images/b/be/GR-75_transport_SWGTCG.jpg/revision/latest?cb=20130911163358"
};

function StarshipCard({ starship }) {
  const id = starship.url.match(/\/([0-9]*)\/$/)[1];
  const imageUrl = imageUrls[starship.name] || 'https://via.placeholder.com/150';

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-gray-700 p-4 rounded-lg shadow-lg bg-gray-800 text-white"
    >
      <img src={imageUrl} alt={starship.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h2 className="text-2xl mb-2 font-semibold">{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
      <Link to={`/details/${id}`} className="text-blue-400 hover:text-blue-200 mt-4 inline-block">View Details</Link>
    </motion.div>
  );
}

export default StarshipCard;
