import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import welcome from './../assets/welcome.webp';

const Welcome = () => {
    return (
        <div className="container">
            <div className="row my-5" >
                <img style={{ width: 700, marginInline: "auto" }} src={welcome} alt="Welcome Page" />
            </div>
            <div className="row mt-5">
                <Button style={{ width: 500, marginInline: "auto" }} as={Link} to="/home">Go to BlogBlog!</Button>
            </div>
        </div>
    );
}

export default Welcome;