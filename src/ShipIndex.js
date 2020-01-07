import React from 'react';
import './shipIndex.css';
//import sender from "./sender.js";
//import receiver from "./test.js";
//const http = require('http');



console.log("start");


const dateNow = "December 11th 2019, 3:57 pm";
let ships = [];
  
  
// Start App
ships = [
    {
        "name": "MC75",
        "shipClass": "Cruiser",
        "manufacturor": "Mon Calamari Shipyards",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/76/MC75_Armored_Cruiser_SWA.png",
        "status": 0,
    },
    {
        "name": "MC80",
        "shipClass": "Cruiser",
        "manufacturor": "Mon Calamari Shipyards",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/9/94/MCLiberty.jpg",
        "status": 0,
    },
]




class Ship extends React.Component {
  constructor(props) {
      super(props);
      this.state = { ship:{}}
  }
  componentWillMount() {
    this.setState({
      ship: ships[this.props.id]
    });
  }

  render() {
    return (
        <>  
          <Card key={this.props.id} index={this.props.id} details={this.state.ship}/>
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
        posts: ships
      });
    }
    
    // componentDidMount() {
      
    //   http.get('http://localhost:3001/emp', (resp) => {
    //   let data = '';
    //   resp.on('data', (chunk) => {
    //     data += chunk;
    //   });
    //   resp.on('end', () => {
    //     //console.log(JSON.parse(data));
    //     //empStatus = JSON.parse(data);
    //     ships = [
    //         {
    //             "name": "MC75",
    //             "shipClass": "Cruiser",
    //             "manufacturor": dateNow,
    //             "image": "https://vignette.wikia.nocookie.net/starwars/images/7/76/MC75_Armored_Cruiser_SWA.png",
    //             "status": 0,
    //         },
    //         {
    //             "name": "MC80",
    //             "shipClass": "Cruiser",
    //             "manufacturor": dateNow,
    //             "image": "https://vignette.wikia.nocookie.net/starwars/images/9/94/MCLiberty.jpg",
    //             "status": 0,
    //         },
    //     ]
      
    //     this.setState({
    //       posts: ships
    //     })
    //   });
    //   }).on("error", (err) => {
    //     console.log("Error: " + err.message);
    //   });
    // }

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
      //sender(this.props.index,(this.state.status)%2 +1)
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
    <img src={image} className="shippic" />
    )
}
}


class CardBody extends React.Component {
render() {
    return (
    <div className="card-body">
        
    <h2>{this.props.name}</h2>
        
    <p className="body-content">
        Carida Naval Academy Classification: {this.props.shipClass}
        <br/>
        {this.props.manufacturor}
    </p>
    {/* <Button index={this.props.index} status ={this.props.status} /> */}
    </div>
    )
}
}


class Card extends React.Component {
render() {
    return (
    <article className="card">
        <CardHeader category={this.props.details.category} image={this.props.details.image}/>
        <CardBody index={this.props.index} name={this.props.details.name} manufacturor={this.props.details.manufacturor} status={this.props.details.status} shipClass={this.props.details.shipClass}/>
    </article>
    )
}
}












export {Ship, Main};