import React from "react";
import Nav from "../components/nav"
import '../style.css';


export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        people: [
          {id: "01", name: "Josh"},
          {id: "02", name: "Rex"},
          {id: "03", name: "Mike"}
        ],
        things:[
          {id: "01", name: "Foxy", description: "Rex's favorite toy and BFF"},
          {id: "02", name: "Whitepaw", description: "Rex's Whitepaw toy"},
          {id: "03", name: "Couch", description: "A big fluffy couch" },
          {id: "04", name: "Coffee Maker", description: "Lets make a laté" }
        ],
        friends:[]

    }
  }

  componentDidMount() {
        this.setState({
          //add friends when the component mounts
          friends: [
          {id: "01", name: "Erik"},
          {id: "02", name: "Abby"},
          {id: "03", name: "Frannie"},
          {id: "04", name: "Rex"}
        ]
        });
    }

  render(){

    return(
      <div>
        <Nav/>
        <div className="content">
          <h2>This is Page Two.</h2>
          <h4>People</h4>
          <table>
            <thead>
            <tr>
              <td width="100px">ID</td>
              <td>Name</td>
            </tr>
            </thead>
            <tbody>
          {this.state.people.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
          ))}
          </tbody>
          </table>
          <h4>Things</h4>
          {this.state.things.map((item) => (
              <p key={item.id}>{item.id} - <b>{item.name}</b> –– {item.description}</p>
          ))}

          <h4>Friends</h4>
          {this.state.friends.map((item) => (
              <p key={item.id}>{item.id} - <b>{item.name}</b></p>
          ))}
        </div>
      </div>
      )
    }
}
