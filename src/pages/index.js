import React from "react";
import { Link } from "gatsby";
import Nav from "../components/nav";
import HomepageHero from "../components/homepage-hero"
import '../style.css';

export default function Home() {
  return (
  <div>
  <Nav/>

  <HomepageHero
    headline="Hello! Welcome to my Site!"
    subheadline="This is the homepage, but you can visit other pages too"
    linkpage = "/pagethree"
    linktext = "Check out Page Three"
  />
  <div className="content">

  <p>Content goes here</p>
  </div>
  </div>
  )
}
