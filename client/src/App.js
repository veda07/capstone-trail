
import React, { Component } from 'react';
import './App.css';
import TrailContainer from './trailsContainer/TrailContainer';
import HomeContainer from './homeContainer/HomeContainer';
import CreateTrailForm from './CreateTrail/CreateTrailForm';



class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
        
      
        <div>
           <HomeContainer></HomeContainer>
          
        
          <TrailContainer showTrails={this.showTrails}/>
         

        </div>
    );
  }
}

export default App;
