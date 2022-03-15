import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import { useParams } from "react-router-dom";
import ShortPost from "./../components/ShortPost";

function TagContent() {
  const [posts, setPosts] = useState();
  const [authors, setAuthors] = useState();
  const [tags , setTags] = useState();
  const [postsLoading, setPostsLoading] = useState(true);
  const [authorsLoading, setAuthorsLoading] = useState(true);
  const [tagsLoading, setTagsLoading] = useState(true);
  const tagId = useParams().id;

  useEffect(() => {
    setPostsLoading(true);
    setAuthorsLoading(true);
    setTagsLoading(true);

    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then((result) => {
        setPosts(result.filter(post => post.tags.includes(parseInt(tagId))));
      })
      .catch(err => console.log(err))
      .finally(() => setPostsLoading(false));
      
    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users")
      .then(res => res.json())
      .then((result) => {
        setAuthors(result);
      })
      .catch(err => console.log(err))
      .finally(() => setAuthorsLoading(false));
      
    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/tags")
      .then(res => res.json())
      .then((result) => {
        setTags(result);
      })
      .catch(err => console.log(err))
      .finally(() => setTagsLoading(false));
  }, []);

  if (postsLoading || authorsLoading || tagsLoading) return <div>loading..</div>;

  const authorName = (id) => {
    return authors.map(author => {
      if (author.id == id) return author.name;
    })
  }

  const tagName = (id) => {
    return tags.map(tag => {
      if (tag.id == id) return tag.name;
    })
  }

  return (
    <div className="container">
      <div className="rows">
        <div className="col m-auto text-center my-5">
          <h1>Tag: {tagName(tagId)}</h1>
        </div>
        { posts.map((post) => {
            return (
              <ShortPost key={post.id} post={{ id: post.id, title: post.title.rendered, author: {author: post.author, name: authorName(post.author)}, date: post.date, excerpt: post.excerpt.rendered }}/>
            );
        }) }
      </div>
    </div>
  );
}

export default TagContent;
