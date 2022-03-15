import React, { useState, useEffect } from 'react';
import './../styles/App.css';
import { useParams } from 'react-router-dom';
import ShortPost from './../components/ShortPost';

function Author() {

    const [posts, setPosts] = useState();
    const [author, setAuthor] = useState();
    const [postsLoading, setPostsLoading] = useState(true);
    const [authorLoading, setAuthorLoading] = useState(true);
    const authorId = useParams().id;
  
    useEffect(() => {
      
      fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts")
        .then(res => res.json())
        .then((result) => {
          setPosts(result.filter(post => post.author == authorId));
          console.log(result);
        })
        .catch(err => console.log(err))
        .finally(() => setPostsLoading(false));
        
      fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${authorId}`)
        .then(res => res.json())
        .then((result) => {
          setAuthor(result);
          console.log(result);
        })
        .catch(err => console.log(err))
        .finally(() => setAuthorLoading(false));
    }, [])
  
    if (postsLoading || authorLoading) return (<div>loading..</div>);
  
    return (
      <div className="container">
        <div className="rows">
          <div className="col m-auto text-center my-5">
            <h1>Author: {author.name}</h1>
          </div>
          { posts.map((post) => {
              return (
                <ShortPost key={post.id} post={{ id: post.id, title: post.title.rendered, author: {author: post.author, name: author.name}, date: post.date, excerpt: post.excerpt.rendered }}/>
              );
          }) }
        </div>
      </div>
    );
}

export default Author;
