import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from './../components/Comment';
import Tag from './../components/Tag';
import Category from '../components/Category';
import { Form, Button } from 'react-bootstrap';

function PostContent() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});
  const [postLoading, setPostLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [username, setUsername] = useState("")
  const [comment, setComment] = useState("")
  const postId = useParams().id;

  useEffect(() => {
    setPostLoading(true);
    setCommentsLoading(true);

    fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${postId}`)
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((error) => console.log(error))
      .finally(() => setPostLoading(false));
    
    fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments?post=${postId}`)
      .then((res) => res.json())
      .then((json) => setComments(json))
      .catch((error) => console.log(error))
      .finally(() => setCommentsLoading(false));

  }, []);

  if (postLoading || commentsLoading) return <div>loading...</div>;

  const submitComment = async () => {
    await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/comments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Basic ZnN3ZDpmc3dkLWNtcw==',
      },
      body: JSON.stringify({
        author_name: username,
        content: comment,
        post: postId,
      }),
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
  }

  return (
    <div className="container">
      <div className="rows">
        <div className="col m-auto text-center my-5">
          <h1> {post.title.rendered} </h1>
        </div>
      </div>
      <div className="mx-5 mt-3">
        <div dangerouslySetInnerHTML = {{ __html: post.content.rendered }} />
      </div>
      <div className="ml-5 mt-3">
        <label>Published in &nbsp;</label>
        { post.categories.map((category) => {
          return (<Category key={ category } categoryId={ category } />);
        }) }
      </div>
      <div className="ml-5 mt-5 mb-5">
        { post.tags.map((tag) => {
          return (<Tag key={ tag } tagId={ tag } />);
        }) }
      </div>
      <hr />

      <div className="col mt-5">
        <h3>Comment</h3>

        { comments.map((comment) => {
          return (<Comment key={comment.id} comment={ comment } />);
        }) }
      </div>
      
      <div className="col mb-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange = { (event) => { setUsername(event.target.value) } }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter comment"
              onChange = { (event) => { setComment(event.target.value) } }
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitComment}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default PostContent;
