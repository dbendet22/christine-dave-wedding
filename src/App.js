import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Details from './components/details'
import Travel from './components/travel'
import Things from './components/things'
import Met from './components/met'
import Proposal from './components/proposal'
import Photos from './components/photos'
import Registry from './components/registry'
import RSVP from './components/rsvp'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
  				<div id="colorlib-main">
  					<Introduction></Introduction>
  					{/* <About></About> */}
  					<Timeline></Timeline>
            <Details></Details>
            <Travel></Travel>
            <Things></Things>
            <Met></Met>
            <Proposal></Proposal>            
            <Photos></Photos>
            <Registry></Registry>
            <RSVP></RSVP>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
