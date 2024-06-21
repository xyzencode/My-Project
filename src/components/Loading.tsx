import React, { useState, useEffect } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

const Loading: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="loader-container">
            {loading ? (
                <div className="loader">
                    <AiOutlineLoading size={40} className="loading-icon" />
                    <div className="loading-text">Loading...</div>
                </div>
            ) : null}
        </div>
    );
};

export default Loading;