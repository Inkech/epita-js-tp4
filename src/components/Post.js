import React, { useState } from 'react';
import FavouriteToggle from './FavouriteToggle';
import ScoreCounter from '../ScoreCounter';

const Post = ({ data }) => {

  const [displayBody,setDisplay] = useState(false);

  const handleClick = () => setDisplay(!displayBody);

  return(
  <li
    style={{
      backgroundColor: 'white',
      color: '#333',
      margin: '5px',
      padding: '10px',
      fontSize: '11pt',
      cursor: 'pointer'
    }}
  >
    <span style={{ fontWeight: '900' }} onClick={handleClick}>{data.title}</span>

    <ScoreCounter style={{ float: 'left' }}/>
    <FavouriteToggle style={{ float: 'right' }} />
    {displayBody ? <div onClick={handleClick}>{data.body}</div> : <span></span>}
  </li>
  );
};

export default Post;
