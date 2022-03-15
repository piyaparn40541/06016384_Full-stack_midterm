import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import { useParams } from "react-router-dom";
import ShortPost from "./../components/ShortPost";

function CategoryContent() {
  const [posts, setPosts] = useState();
  const [authors, setAuthors] = useState();
  const [categories , setCategories] = useState();
  const [postsLoading, setPostsLoading] = useState(true);
  const [authorsLoading, setAuthorsLoading] = useState(true);
  const [caegoriesLoading, setCategoriesLoading] = useState(true);
  const categoryId = useParams().id;

  useEffect(() => {
    setPostsLoading(true);
    setAuthorsLoading(true);
    setCategoriesLoading(true);

    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then((result) => {
        setPosts(result.filter(post => post.categories.includes(parseInt(categoryId))));
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
      
    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/categories")
      .then(res => res.json())
      .then((result) => {
        setCategories(result);
      })
      .catch(err => console.log(err))
      .finally(() => setCategoriesLoading(false));
  }, []);

  if (postsLoading || authorsLoading || caegoriesLoading) return <div>loading..</div>;

  const authorName = (id) => {
    return authors.map(author => {
      if (author.id == id) return author.name;
    })
  }

  const categoryName = (id) => {
    return categories.map(category => {
      if (category.id == id) return category.name;
    })
  }

  return (
    <div className="container">
      <div className="rows">
        <div className="col m-auto text-center my-5">
          <h1>Category: {categoryName(categoryId)}</h1>
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

export default CategoryContent;
