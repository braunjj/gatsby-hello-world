import React, { Component } from 'react';
//import { Link } from "gatsby";

export default class Weather extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="weather">
        <p>It's {this.props.condition}, and feels like {this.props.feelslike_f}
        °F right now in {this.props.city}, {this.props.region}.</p>

        <img src={this.props.icon}/>
        <p>The current time there {this.props.localtime}</p>
      </div>
    )
  }
}
