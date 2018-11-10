import React from "react";
import "tachyons";
import { StaticQuery, Link, graphql } from "gatsby";

const ListLink = props => (
  <li className="mr3 dib">
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            name
          }
        }
      }
    `}
    render={data => (
      <div className="mw5 mw7-ns center pa3 ph5-ns pt5">
        <header className="flex justify-between flex-wrap">
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 className="di">{data.site.siteMetadata.name}</h3>
          </Link>
          <ul className="ma0 mt3 mt0-ns di">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/contact">Contact</ListLink>
          </ul>
        </header>
        {children}
      </div>
    )}
  />
);
