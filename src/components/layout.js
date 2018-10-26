import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 650,
          padding: `0 1rem`,
          marginTop: `3rem`
        }}
      >
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>{data.site.siteMetadata.name}</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
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
