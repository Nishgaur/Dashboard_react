import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div>
            this is Contact Us section
            <div>
                <Link to="/" className="underline">
                    go to dashboard
                </Link>
            </div>
        </div>
    );
}

export default Contact;
