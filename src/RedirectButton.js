import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectButton({ id, route, label, state }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route, { state });
    };

    return (
        <button id={id} aria-label={`Navigate to ${route}`} onClick={handleClick}>
            {label}
        </button>
    );
}
