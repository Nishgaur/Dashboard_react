import React from 'react';
import { Link } from 'react-router-dom';

function Schedule() {
    return (
        <div>
            this is Schedule
            <div>
                <Link to="/" className="underline">
                    go to dashboard
                </Link>
            </div>
        </div>
    );
}

export default Schedule;
