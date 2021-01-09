import React from "react";
import { Link } from "gatsby";
import Nav from "../components/nav"
import '../style.css';

export default function Home() {
  return (
  <div>
  <Nav/>
  <div className="content">
    <h1>This is the homepage!</h1>
    <p>Content goes here</p>
  </div>
  </div>
  )
}
