import React from "react";
import "../styles/login.css";

function Signup() {
    return (
        <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary form_container">
            <div className="w-40 p-5 rounded-3 bg-light form_container">
                <form>
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            className="form-control"
                        />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
