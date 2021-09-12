import React, { Component } from 'react';
import './DashboardCss.css';
import img2 from './images/room1.jpg';
import img3 from './images/image2.jpg';
import img4 from './images/image3.jpg';



export default class Dashboard extends Component{



render() {
return (

<div className="dashboardbackground" style={{marginLeft:"100px", marginTop:"-1000px"}}>


<div class="w3-content" style={{maxWidth:"1400px"}}>

<header class="w3-container w3-center w3-padding-32"> 
  <h1><b>AMALYA REACH HOLIDAY RESORT</b></h1>
  <p>Welcome to the your next home</p>
</header>


<div class="w3-row">


<div class="w3-col l8 s12">

  <div class="w3-card-4 w3-margin w3-white">
    <img src={img3} alt="Nature" style={{width:"100%", height:"400px"}}/>
    <div class="w3-container">
      <h3><b>Who Are We?</b></h3>
      <h5>description</h5>
    </div>

    <div class="w3-container">
      <p>Finding the right space for your event is never easy and getting advice from friends, family, clients, co-workers or anyone is always great. we at amalya provides you a life time experience with our brand new wedding reception hallsand holiday resort which can be used for a memorable day in your life.

First, it's always best to shop around for several locations to see what's on offer (and within budget) and always consider booking your party venue at least several months to a year in advance, say the experts. Take your time, and don't settle for the first location that comes along. Unusual venues like historic mansions, galleries, and even sailing yachts can provide memorable party spaces. Before you make the final decision, also remember to take into account who is on your guest list, and how accessible it may be for everyone involved.</p>
      
    </div>
  </div>
  <hr/>



</div>


<div class="w3-col l4">

  <div class="w3-card w3-margin w3-margin-top" style={{width:"400px"}}>
  <img src={img2} style={{width:"100%"}}/>
    <div class="w3-container w3-white">
      <h4><b>About Us</b></h4>
      <p className="fas fa-building"> No:556, Moragahahena, Pitipana North, Homagama, Sri Lanka</p><br/>
      <p className="fa fa-fax"> Tel/Fax :94 11 2748913, 4404040</p><br/>
      <p className="fas fa-phone"> Mobile:77 7743612</p><br/>
      <p className="fas fa-wallet"> Email:info@amalyareach.com</p><br/>
    </div>
  </div>
  

  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4>Popular Links</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
      <li class="w3-padding-16">
        <img src="/w3images/workshop.jpg" alt="Image" class="w3-left w3-margin-right" style={{width:"50px"}}/>
        <span class="w3-large">Room Booking</span><br/>
        <span>Sed mattis nunc</span>
      </li>
      <li class="w3-padding-16">
        <img src="/w3images/gondol.jpg" alt="Image" class="w3-left w3-margin-right" style={{width:"50px"}}/>
        <span class="w3-large">Event Booking</span><br/>
        <span>Praes tinci sed</span>
      </li> 
      <li class="w3-padding-16">
        <img src="/w3images/skies.jpg" alt="Image" class="w3-left w3-margin-right" style={{width:"50px"}}/>
        <span class="w3-large">Food Order</span><br/>
        <span>Ultricies congue</span>
      </li>   
       
    </ul>
  </div>
  <hr/> 
 

  

</div>


</div><br/>


</div>


</div>


)
}
}


