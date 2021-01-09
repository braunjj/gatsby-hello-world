import React from "react";
import Nav from "../components/nav"
import '../style.css';


export default class Home extends React.Component {
  constructor(props){
    super(props);
    //alert("hello!");
    this.state = {
        people: [
          {id: "01", name: "Josh"},
          {id: "02", name: "Rex"},
          {id: "03", name: "Mike"}
        ],
        things:[
          {id: "01", name: "Foxy", description: "Rex's favorite toy and BFF"},
          {id: "02", name: "Whitepaw", description: "Rex's Whitepaw toy"},
          {id: "03", name: "Couch", description: "A big fluffy couch" }
        ],
        friends:[]

    }
    this.addFriend = this.addFriend.bind(this)
  }

  componentDidMount() {
        this.setState({
          friends: [
          {id: "01", name: "Erik"},
          {id: "02", name: "Abby"},
          {id: "03", name: "Frannie"},
        ]
        });
    }

    fetchName(){

    }

    addFriend(){
      const apiUrl = 'https://api.namefake.com/'

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));


      this.setState({
        friends: [
          ...this.state.friends,
          {id: "04", name: 'jo'}
        ]
     });
    }

  render(){

    return(
      <div>
        <Nav/>
        <div class="content">
          <h2>This is Page Two.</h2>
          <button onClick={this.addFriend}>Add Friend</button>
          <h4>People</h4>
          {this.state.people.map((person) => (
              <p key={person.id}>{person.id} - {person.name}</p>
          ))}
          <h4>Things</h4>
          {this.state.things.map((thing) => (
              <p key={thing.id}>{thing.id} - <b>{thing.name}</b>, {thing.description}</p>
          ))}

          <h4>Friends</h4>
          {this.state.friends.map((friend) => (
              <p key={friend.id}>{friend.id} - <b>{friend.name}</b></p>
          ))}
        </div>
      </div>
      )
    }
}
