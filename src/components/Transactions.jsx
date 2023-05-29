import React from 'react';
import { Link } from 'react-router-dom';

function Transactions() {
    return (
        <div>
            this is transactions page
            <div>
                <Link to="/" className="underline">
                    go to dashboard
                </Link>
            </div>
        </div>
    );
}

export default Transactions;
