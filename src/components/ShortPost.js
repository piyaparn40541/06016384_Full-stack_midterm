import React from "react";
import dayjs from "dayjs";
import { Link } from 'react-router-dom';

const removeHyperLinkFromExcerpt = (excerpt) => {
    return excerpt.substring(excerpt.indexOf("<p>"), excerpt.indexOf("</p>") + 4);
}

const ShortPost = (props) => {
    return (
        <div className="container p-5 mb-5 text-center" style={{ width: '50%', backgroundColor: '#FFF5F5' }}>
            <h4>{props.post.title}</h4>
            
            <label>Published by&nbsp;</label>
            <Link to={`/author/${props.post.author.author}/`}>
                {props.post.author.name}
            </Link>
            <label>&nbsp;on&nbsp;</label>
            <Link to="/tag">
                {dayjs(props.post.date).format('MMM DD, YYYY')}
            </Link>

            <div className="mt-4" dangerouslySetInnerHTML={{ __html: removeHyperLinkFromExcerpt(props.post.excerpt) }} />
            
            <Link to={`/post/${props.post.id}`}>Read more...</Link>
        </div>
    )
}

export default ShortPost;