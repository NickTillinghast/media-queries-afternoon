import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <div className="logo">
            <a className="boot" href="#/services">
              Start Bootstrap
            </a>
          </div>
          <nav className="menu">
            <ul className="list">
              <li>
                <a href="#/services">Services</a>
              </li>
              <li>
                <a href="#/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#/about">About</a>
              </li>
              <li>
                <a href="#/team">Team</a>
              </li>
              <li>
                <a href="#/conatct">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
