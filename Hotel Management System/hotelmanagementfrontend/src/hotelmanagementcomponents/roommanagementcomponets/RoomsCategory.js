import React, { Component } from 'react';
import img7 from '../images/room1.jpg';


export default class RoomsCategory extends Component{


render() {
return (


<div style={{marginLeft:"100px",marginTop:"-1000px", backgroundImage:"./images/logoco.png",maxWidth:"100%",height:"100px"}}>






<div class="card" style={{marginLeft:"50px",marginTop:"100px", backgroundImage:"./images/logoco.png",width:"1000px" ,height:"300px"}}>
<div className="c1" style={{float:"left",width:"40%"}}>
  <img src={img7} alt="Avatar" style={{width:"100%",height:"200px",marginTop:"0px"}}/>
  </div>
  <div className="c1" style={{float:"left",width:"40%",marginTop:"-200px",marginLeft:"500px"}}>
  
      <h1>02 A/C luxury rooms</h1>
      <h3>tv attached bathroom with hot water can accommodate un to 12 guests
<br></br>

      </h3>
      </div>

      <a href="/AvailableLuxuryRooms"><button class="button">For rooms</button></a>
    
</div>



<div class="card" style={{marginLeft:"50px",marginTop:"80px", backgroundImage:"./images/logoco.png",width:"1000px" ,height:"300px"}}>
  
<div className="c1" style={{float:"left",width:"40%"}}>
    <img src={img7} alt="Avatar" style={{width:"100%",height:"200px",marginTop:"0px"}}/>
    </div>
    <div className="c1" style={{float:"left",width:"40%",marginTop:"-200px",marginLeft:"500px"}}>
  <h1>03 A/C rooms</h1>
  <h3>attached bathroom and telephone</h3>
</div>
<a href="/rb2"><button class="button">For rooms</button></a>
</div>



<div class="card" style={{marginLeft:"50px",marginTop:"80px", backgroundImage:"./images/logoco.png",width:"1000px" ,height:"300px"}}>
<div className="c1" style={{float:"left",width:"40%"}}>
  <img src={img7} alt="Avatar" style={{width:"100%",height:"200px",marginTop:"0px"}}/>
  </div>
  <div className="c1" style={{float:"left",width:"40%",marginTop:"-200px",marginLeft:"500px"}}>
  <h1>10 non A/C rooms</h1>
  <h3>attached bathroom and telephone</h3>
</div>
<a href="/rb3"><button class="button">For rooms</button></a>
</div>





</div>

)
}
}
