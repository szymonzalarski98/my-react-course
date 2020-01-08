import React from 'react';
import Post from './Post';

const List = (props) => {
  const { posts } = props;
  return (
    <>
      {posts.map((item) => <Post key={item.id} data={item} />)}
    </>
  );
};

export default List;