import React, { useState, useEffect } from 'react';
import './../styles/App.css';
import ShortPost from './../components/ShortPost';
// import { PostsContext } from './../store/PostsProvider';

function Home() {

  const [posts, setPosts] = useState();
  const [authors, setAuthors] = useState();
  const [postsLoading, setPostsLoading] = useState(true);
  const [authorsLoading, setAuthorsLoading] = useState(true);

  useEffect(() => {
    setPostsLoading(true);
    setAuthorsLoading(true);
    
    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then((result) => {
        setPosts(result);
        console.log(result);
      })
      .catch(err => console.log(err))
      .finally(() => setPostsLoading(false));
      
    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users")
      .then(res => res.json())
      .then((result) => {
        setAuthors(result);
        console.log(result);
      })
      .catch(err => console.log(err))
      .finally(() => setAuthorsLoading(false));
  }, [])

  if (postsLoading || authorsLoading) return (<div>loading..</div>);

  const authorName = (id) => {
    return authors.map(author => {
      if (author.id == id) return author.name;
    })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBlock: 45 }}>
      <h1 className='mb-5'>Home Page</h1>

      { posts.map((post) => {
          return (
            <ShortPost key={post.id} post={{ id: post.id, title: post.title.rendered, author: {author: post.author, name: authorName(post.author)}, date: post.date, excerpt: post.excerpt.rendered }} />
          );
      }) }

    </div>
  );
}

export default Home;
