import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(true);
    const categoryId = props.categoryId;

    useEffect(() => {
        setLoading(true);

        fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/categories/${categoryId}`)
            .then(res => res.json())
            .then((result) => {
                setCategory(result);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>loading...</div>;

    return (
        <Link to={ `/category/${categoryId}` }>
            { category.name }&nbsp;
        </Link>
    );

}

export default Category;