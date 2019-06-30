import React, { useState } from 'react';

const FavouriteToggle = ({ style = {} }) => {

  const [favoriteActive, setFavorite] = useState(false);

  const handleClick = () => setFavorite(!favoriteActive);

  return(<span style={style} onClick={handleClick}>{favoriteActive ? '♥️' : '♡'}</span>);
};

export default FavouriteToggle;
