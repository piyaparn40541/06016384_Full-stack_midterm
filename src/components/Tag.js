import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Tag = (props) => {
    const [tag, setTag] = useState();
    const [loading, setLoading] = useState(true);
    const tagId = props.tagId;

    useEffect(() => {
        setLoading(true);

        fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/tags/${tagId}`)
            .then(res => res.json())
            .then((result) => {
                setTag(result);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>loading...</div>;

    return (
        <Button as={Link} to={ `/tag/${tagId}` } variant="outline-primary">{tag.name}</Button>
    );

}

export default Tag;