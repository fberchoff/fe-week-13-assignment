import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            // Styling is Bootstrap
            <div className="nav mb-5">
                <li className="nav-item">
                    <a className="nav-link fs-4" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fs-4" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fs-4" href="#">About</a>
                </li>
            </div>
        );
    }
}