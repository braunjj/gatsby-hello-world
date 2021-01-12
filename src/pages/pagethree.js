import React from "react";
import Nav from "../components/nav"
import Weather from "../components/weather"

import '../style.css';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        city: "",
        weather: {
          location:{},
          current: {
          }
        }
    }
    this.addWeather = this.addWeather.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
  }

  handleChangeLocation(event) {

        console.log(event.target.value);
        if (event.target.value.length === 0) {
          this.setState({
            city: "",
            weather: {
              location:{},
              current: {
              }
            }
          })
          //this.addWeather()
        }
        this.setState({
            city: event.target.value
        })
    }

  addWeather(){
    if (this.state.city.length > 0){
      const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=d5c90f6ceef249ee9e9211459210901&q='+ this.state.city;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
            this.setState({
              weather:
                data
             })
         })
       }
  }

  render(){

    return(
      <div>
        <Nav/>
        <div className="content">
          <h2>This is Page Three.</h2>
          <h4>Show the weather</h4>
            <input name="location" onChange={this.handleChangeLocation} placeholder="Enter a City or Postal Code"></input>
            <button onClick={this.addWeather}>Get current weather</button>
          {this.state.weather.location.name === undefined ? <p>Nothing to show</p> :
            <Weather
              city={this.state.weather.location.name}
              region={this.state.weather.location.region}
              condition={this.state.weather.current.condition.text}
              icon={this.state.weather.current.condition.icon}
              feelslike_f={this.state.weather.current.feelslike_f}
              localtime={this.state.weather.location.localtime}

            />}

        </div>
      </div>
      )
    }
}
