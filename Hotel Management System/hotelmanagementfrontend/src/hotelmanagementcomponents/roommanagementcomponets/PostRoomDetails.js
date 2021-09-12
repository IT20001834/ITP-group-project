import React, { Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
    constructor(props){
        super(props);
        
        this.state={
        post:{}
        };
        }

componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/room/${id}`).then((res) =>{
if(res.data.success){
this.setState({
post:res.data.post
});
console.log(this.state.post);


}
    });


}

render() {
const {RoomTitle,RoomNumber,RoomShortCode,BedType,Description,NumberOfMaximumPersons,ExtraBed,CleanningStatus,BasePrice,AdditionalPersonPrice,ExtraBedPrice,Discount,TotalBasePrice} = this.state.post;

return (



<div>
    
    <div style={{marginLeft:"100px", marginTop:"-900px"}}>
    <h1>View room detail #{RoomNumber}</h1>
    <hr/>






<div className="colm2">

<label>RoomTitle</label>
    <label style={{marginLeft:"120px", marginTop:"10px"}}>{RoomTitle}</label>
<br></br>

    <label>RoomNumber</label>
    <label style={{marginLeft:"95px", marginTop:"10px"}}>{RoomNumber}</label>
    <br></br>

    <label>RoomShortCode</label>
    <label style={{marginLeft:"80px", marginTop:"10px"}}>{RoomShortCode}</label>
    <br></br>

    <label>BedType</label>
    <label style={{marginLeft:"130px", marginTop:"10px"}}>{BedType}</label>
    <br></br>

    
    <label>NumberOfMaximumPersons</label>
    <label style={{marginLeft:"8px", marginTop:"10px"}}>{NumberOfMaximumPersons}</label>
    <br></br>

    <label>Description</label>
    <label style={{marginLeft:"116px", marginTop:"10px", width:"1000px"}}>{Description}</label>
    <br></br>

</div>

<div className="colm2">


    <label>ExtraBed</label>
    <label style={{marginLeft:"134px", marginTop:"10px"}}>{ExtraBed}</label>
    <br></br>

    <label>CleanningStatus</label>
    <label style={{marginLeft:"89px", marginTop:"10px"}}>{CleanningStatus}</label>
    <br></br>

    <label>BasePrice</label>
    <label style={{marginLeft:"130px", marginTop:"10px"}}>{BasePrice}</label>
    <br></br>

    <label>AdditionalPersonPrice</label>
    <label style={{marginLeft:"40px", marginTop:"10px"}}>{AdditionalPersonPrice}</label>
    <br></br>

    <label>ExtraBedPrice</label>
    <label style={{marginLeft:"90px", marginTop:"10px"}}>{ExtraBedPrice}</label>
    <br></br>

    </div>

    <div className="colm2">

    <label>Discount</label>
    <label style={{marginLeft:"125px", marginTop:"10px"}}>{Discount}</label>
    <br></br>

    <label>TotalBasePrice</label>
    <label style={{marginLeft:"90px", marginTop:"10px"}}>{TotalBasePrice}</label>
    <br></br>

</div>



</div>

<div style={{width:"100%", float:"left"}}>
<a href="/a"><input type="button" style={{width:"200px", height:"40px", marginLeft:"200px", marginTop:"100px"}} value="BACK"></input></a>
<a href="/edit/:id"><input type="button" style={{width:"200px", height:"40px", marginLeft:"100px"}} value="UPDATE ROOM DETAILS"></input></a>
<a href="/room/:id"><input type="button" style={{width:"200px", height:"40px", marginLeft:"100px"}} value="RESET ROOM DETAILS"></input></a>
</div>
</div>
)
}
}
