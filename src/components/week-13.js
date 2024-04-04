import React from 'react';
import Navigation from './navigation'
import Login from './login'

export default class Week13 extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <Login />
            </div>
        );
    }
}