import React from 'react';

export default class Login extends React.Component {
    render () {
        return (
            // The App-Header class comes from the default App.css file because this was required. The rest of the
            // styling is bootstrap.
            <div className="container w-50">
                <div className="border border-primary-subtle p-5">
                    <form>
                        <p className="h3 mb-5">Login</p>
                        <div className="mb-3 mt-3">
                            <label className="form-label" htmlFor="loginEmail" >Email address</label>
                            <input className="form-control" type="email" id="loginEmail" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 mt-4">
                            <label className="form-label" htmlFor="inputPassword">Password</label>
                            <input className="form-control" type="password" id="inputPassword"></input>
                        </div>
                        <button className="btn btn-primary mt-4 mb-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}