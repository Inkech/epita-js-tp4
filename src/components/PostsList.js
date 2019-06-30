import React, {useEffect, useState, useRef} from 'react';
import Post from './Post';

const PostsList = () => {

  const inputTitle = useRef(null);
  const inputBody = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => setData(json));
  }, []);

  const handleClick = () => {
    let newPost = {userId: 1,
      id: data.length + 1,
      title: inputTitle.current.value,
      body: inputBody.current.value};
    let newData = data;
    newData.push(newPost);
    setData(newData);
  };

  return (
    <div>
      <ul style={{ listStyle: 'none', width: '800px' }}>
        {data.map(p => (
        <Post data={p} />
        ))}
      </ul>
      <div>
        <p>Create new post</p>
        <form>
      <input ref={inputTitle} placeholder="Title" type="text"/>
      <input ref={inputBody} placeholder="Body" type="text"/>
      <button onClick={handleClick}>Create</button>
      </form>
      </div>
  </div>
  );
};



export default PostsList;
