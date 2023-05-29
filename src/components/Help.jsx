import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
    return (
        <div>
            this is help section
            <div>
                <Link to="/" className="underline">
                    go to dashboard
                </Link>
            </div>
        </div>
    );
}

export default Help;
