import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary form_container">
            <div className="w-40 p-5 rounded-3 bg-light form_container">
                <form>
                    <h3>Sign In</h3>
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
                    <div className="form-check mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="check"
                        />
                        <label htmlFor="check" className="form-check-label">
                            Remember me
                        </label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="text-right mt-3">
                        Forgot <a href="/forgot-password">password?</a> or{" "}
                        <Link to="/signup" className="ms-2">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
