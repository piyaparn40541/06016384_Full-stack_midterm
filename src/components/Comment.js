import React from "react";
import dayjs from 'dayjs'

const Comment = (props) => {
    const comment = props.comment;

    return (
        <div id={comment.id} className="container border border-warning my-5 p-4">
            <div>
                <img src={comment.author_avatar_urls['24']} alt="Profile" />
                <label style={{ marginLeft: 20, marginBottom: 30 }}>{comment.author_name}</label>
                <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
                <hr />
            </div>
            <label style={{ fontSize: 11 }}>{dayjs(comment.date).format('MMM DD, YYYY - HH:mm')}</label>
        </div>
    );
}

export default Comment;