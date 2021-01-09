import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return (
  <nav>
    <Link activeClassName="active" to="/">Home</Link>
    <Link activeClassName="active" to="/pagetwo">Local Data</Link>
    <Link activeClassName="active" to="/pagethree">Page three</Link>
  </nav>
  )

}
