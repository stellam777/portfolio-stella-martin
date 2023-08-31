import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#one">About Me</Link>
              </li>
              <li>
                <Link to="/#two">Projects</Link>
              </li>
              <li>
                <Link to="/#three">Skills</Link>
              </li>
              <li>
                <Link to="/#footer">Contact</Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1qLOoPShsYwYVYvPLl5Ae63ZShsaVc7qz/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
