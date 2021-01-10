import React, { Component } from 'react';
import { Link } from "gatsby";

export default class HomepageHero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>{this.props.headline}</h1>
        <p>{this.props.subheadline}</p>
        <Link className="button" to={this.props.linkpage}>{this.props.linktext}</Link>

      </div>
    )
  }
}
