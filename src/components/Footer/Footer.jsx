import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <div>
            {date.getFullYear()}
        </div>
    );
}

export default Footer;
