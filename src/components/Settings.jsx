import React from 'react';
import { Link } from 'react-router-dom';

function Settings() {
    return (
        <div>
            this is settings page
            <div>
                <Link to="/" className="underline">
                    go to dashboard
                </Link>
            </div>
        </div>
    );
}

export default Settings;
