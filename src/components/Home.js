import React from 'react';
import List from './List';

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const getData = async () => {
    fetch('https://my-json-server.typicode.com/szymonzalarski98/jsonplaceholder-rest-api/db')
      .then((res) => res.json())
      .then((res) => setPosts(res.posts))
      .catch(err => console.error(err));
  }
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {posts.length > 0 ? <List posts={posts} /> : <p>Loading...</p>}
    </>
  );
};

export default Home;