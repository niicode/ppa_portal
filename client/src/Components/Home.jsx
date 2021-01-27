import React from "react";
import "./Home.css";
import "./hoc/hoc.css";

function Home() {
  return (
    <div>
      <header>
        <nav>
          <div className="nav">
            <div className="nav_left">
              <ul className="nav-l">
                <a className="" href="/">
                  ppa
                </a>
                <li>
                  <a href="/">Something here</a>
                </li>
                <li>
                  <a href="/">Something</a>
                </li>
                <li>
                  <a href="/">Some</a>
                </li>
                <li>
                  <a href="/">Thing</a>
                </li>
              </ul>
            </div>
            <div className="nav_right">
              <ul className="nav-l">
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a className="button" href="/">
                    Create an account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="main_home">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main__body">
                <h1>Welcome to the PPA training Program </h1>
                <p>You will have a better experience here</p>
                <a className="button" href="/">
                  Create an account
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="img">
                <img src="/images/undraw.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
