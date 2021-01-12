import React, { Component } from 'react';
import { Link } from "gatsby";
import Nav from "../components/nav";
import HomepageHero from "../components/homepage-hero"
import '../style.css';

export default class Home extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <div>
        <Nav/>
        <HomepageHero
          headline="Hello! Welcome to my Site!"
          subheadline="This is the homepage hero component. It's neat, but you can visit other pages too!"
          linkpage = "/pagethree"
          linktext = "Check out Page Three"
        />
        <div className="content">
          <p>Moar content goes here</p>
        </div>
      </div>
      )
    }
}
