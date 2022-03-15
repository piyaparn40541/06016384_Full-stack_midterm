import React from "react";
import dayjs from "dayjs";
import { Link } from 'react-router-dom';

const ShortPost = (props) => {
    return (
        <div key={props.post.id} style={{ width: '50%', border: '1 px', padding: '10px', backgroundColor: '#F7F9F9' }}>
            <p style={{ alignSelf: 'center' }}>Title: {props.post.title}</p>
            
            <label>Published by </label>
            <Link to={`/author/${props.post.author.author}/`}>
                {props.post.author.name}
            </Link>
            <label> on </label>
            <Link to="/tag">
                {dayjs(props.post.date).format('MMM DD')}
            </Link>
            <label>, </label>
            <Link to="/tag">
                {dayjs(props.post.date).format('YYYY')}
            </Link>

            <div dangerouslySetInnerHTML={{ __html: props.post.excerpt }} />
            
            <Link to={`/post/${props.post.id}`}>Read more...</Link>
        </div>
    )
}

export default ShortPost;