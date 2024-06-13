import React from 'react';
import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {starships.map(starship => (
        <StarshipCard key={starship.url} starship={starship} />
      ))}
    </div>
  );
}

export default StarshipList;
