import React from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
    return (
        <div>
            this is Users
            <div>
                <Link to="/" className="underline">
                    go to dashboard
                </Link>
            </div>
        </div>
    );
}
