import React from 'react';
import moment from 'moment';
import './employee.css'
import e0 from "./images/dannybetancourt.jpg";
import e1 from "./images/rupeshbista.jpg";
import e2 from "./images/tylerdriver.jpg";
import e3 from "./images/juanduran.jpg";
import e4 from "./images/cjellis.jpg";
import e5 from "./images/scottyfulton.jpg";
import e6 from "./images/donnewman.jpg";
import e7 from "./images/johnphang.jpg";
import e8 from "./images/ivanrincon.jpg";
import e9 from "./images/trevortaylor.jpg";
import sender from "./sender.js";
import receiver from "./test.js";
const http = require('http');



console.log("start");

let empStatus = [];
const dateNow = "December 11th 2019, 3:57 pm";
const date = moment().format('MMMM Do YYYY, h:mm a');//(new Date()).toUTCString()+'-6';
const location = "Classroom 1";
let employees = []
  
  
  // Start App

class Employee extends React.Component {
  constructor(props) {
      super(props);
      this.state = { employee:{}}
  }
  componentWillMount() {
    this.setState({
      employee: employees[this.props.id]
    });
  }

  render() {
    return (
        <>  
          <Card key={this.props.id} index={this.props.id} details={this.state.employee}/>
        </>
    );
  }
}



class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: employees
      });
    }
    
    componentDidMount() {
      
      http.get('http://localhost:3001/emp', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        console.log(JSON.parse(data));
        empStatus = JSON.parse(data);
        employees = [
          {
              "name": "Danny Betancourt",
              "location": location,
              "lastLogged": dateNow,
              "image": e0,
              "status": empStatus[0],
          },
          {
              "name": "Rupesh Bista",
              "location": location,
              "lastLogged": dateNow,
              "image": e1,
              "status": empStatus[1],
          },
          {
              "name": "Tyler Driver",
              "location": location,
              "lastLogged": dateNow,
              "image": e2,
              "status": empStatus[2],
          },
          {
            "name": "Juan Duran",
            "location": location,
            "lastLogged": date,
            "image": e3,
            "status": empStatus[3],
          },
          {
            "name": "CJ Ellis",
            "location": location,
            "lastLogged": date,
            "image": e4,
            "status": empStatus[4],
          },
          {
            "name": "Scotty Fulton",
            "location": location,
            "lastLogged": dateNow,
            "image": e5,
            "status": empStatus[5],
          },
          {
            "name": "Don Newman",
            "location": location,
            "lastLogged": dateNow,
            "image": e6,
            "status": empStatus[6],
          },
          {
              "name": "John Phang",
              "location": location,
              "lastLogged": dateNow,
              "image": e7,
              "status": empStatus[7],
          },
            
          {
              "name": "Ivan Rincon",
              "location": location,
              "lastLogged": dateNow,
              "image": e8,
              "status": empStatus[8],
          },
          {
              "name": "Trevor Taylor",
              "location": location,
              "lastLogged": dateNow,
              "image": e9,
              "status": empStatus[9],
          }
      ]
      
        this.setState({
          posts: employees
        })
      });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    }

    render() {
        return ( 
            <div className="app-card-list" id="app-card-list">
                {
                    Object
                    .keys(this.state.posts)
                    .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
                }
            </div>
        )
    }
}
  
class Button extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {isSafe: true, isDeclared: false, statusText: "Undeclared" , status: this.props.status, style: {backgroundColor: '#f5f5dc',color: 'black'}}
        
        this.handleClick = this.handleClick.bind(this);
        this.serverPost = this.serverPost.bind(this);
    }

    componentDidMount(){
      switch (this.state.status){
        case 0:
            this.setState({
              statusText: "Undeclared"
            });
            break;
        case 1:
            this.setState({
              statusText: "At Risk",
              style: {backgroundColor: '#a1273b',color: 'white'}
            });
            break;
        case 2:
            this.setState({
              statusText: "Safe",
              style: {backgroundColor: '#4CAF50',color: 'white'}
            });
            break;
        default:
          console.log('should not be here')
    }
    }
  
    handleClick() {
       
        switch (this.state.status + 1){
          case 0:
              this.setState({
                statusText: "Undeclared",
                status: 0
              });
              break;
          case 1:
              this.setState({
                statusText: "At Risk",
                style: {backgroundColor: '#a1273b',color: 'white'},
                status: 1
              });
              break;
          case 2:
              this.setState({
                statusText: "Safe",
                style: {backgroundColor: '#4CAF50',color: 'white'},
                status: 2
              });
              break;
          default:
            this.setState({
              statusText: "At Risk",
              style: {backgroundColor: '#a1273b',color: 'white'},
              status: 1
            });
            break;
      }
      this.serverPost();

    }

    serverPost(){
      //console.log(this.props.index, (this.state.status)%2 +1)
      sender(this.props.index,(this.state.status)%2 +1)
    }
  
    render() {
      return (
        <button className="safetyButton" onClick={this.handleClick} style={this.state.style}>
          {this.state.statusText}
        </button>
      );
    }
}
  
  
  class CardHeader extends React.Component {
    render() {
      const { image} = this.props;
      return (
        <img src={image} className="headshot" />
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          
        <h2>{this.props.name}</h2>
          
        <p className="body-content">
            Last Recorded Location: {this.props.location}
            <br/>
            {this.props.lastLogged}
        </p>
        <Button index={this.props.index} status ={this.props.status} />
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody index={this.props.index} name={this.props.details.name} lastLogged={this.props.details.lastLogged} status={this.props.details.status} location={this.props.details.location}/>
        </article>
      )
    }
  }












export {Employee, Main};