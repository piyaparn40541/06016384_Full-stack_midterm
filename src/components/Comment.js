import React from "react";
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

const Comment = (props) => {
    const comment = props.comment;

    return (
        <div id={comment.id}>
            <div>
                <img src={comment.author_avatar_urls['48']} alt="Profile" />
                <label>{comment.author_name}</label>
                <hr />
                <label>{dayjs(comment.date).format('MMM DD, YYYY - HH:mm')}</label>
            </div>
            <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
        </div>
    );
}

export default Comment;