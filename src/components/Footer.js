import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <div>
    <footer id="footer">
      <h2>Get in touch!</h2>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} target="_blank" rel="noreferrer" className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
    </div>
  );
}
