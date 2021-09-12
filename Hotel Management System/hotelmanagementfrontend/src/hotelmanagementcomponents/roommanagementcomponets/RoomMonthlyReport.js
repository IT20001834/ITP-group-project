import React, { Component } from 'react';
import axios from 'axios';
import img1 from '../images/logoco.png';



export default class RoomMonthlyReport extends Component{
constructor(props){
super(props);

this.state={
posts:[]
};
}



componentDidMount(){
this.retrievePosts();
}

retrievePosts(){
axios.get("http://localhost:5000/room").then(res =>{
if(res.data.success){
this.setState({
posts:res.data.existingRoom,



});

console.log(this.state.posts)
} 
});
}



filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.RoomTitle.toLowerCase().includes(searchKey)||
    //post.RoomNumber.includes(searchKey)||
    post.RoomShortCode.toLowerCase().includes(searchKey)||
    post.Description.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result})
    }
    
    handleSearchArea = (e) =>{
    
        const searchKey=e.currentTarget.value;
    
        axios.get(`http://localhost:5000/room`).then(res =>{
    if(res.data.success){
    
        this.filterData(res.data.existingRoom,searchKey)
    }
    });
    
    
    
    }


  


render() {
return (


<div className="container" style={{marginLeft:"100px", marginTop:"-900px",backgroundImage:"./images/logoco.png",maxWidth:"100%"}}>

<table className="table2" style={{width:"100%"}}>

<tr></tr>
<div style={{marginLeft:"80px", marginBottom:"200px"}}><img src={img1} alt="logo" style={{height:"70px",width:"70px", marginTop:"80px"}} /></div>
<div style={{marginLeft:"920px", marginTop:"-280px"}}>Amalya Reach Hotel,</div>
<div style={{marginLeft:"920px"}}>Moragahahena,</div>
<div style={{marginLeft:"920px"}}>Homagama</div>
<br></br>
<div style={{marginLeft:"80px"}}>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
<div style={{textAlign:"center"}}>Month Of August</div>


<br></br>

<table className="table1" style={{width:"70%", marginLeft:"150px", bordercollapse:"collapse"}}>
<tr>
    <th className="col1" colspan="9" style={{textAlign:"center"}}>Monthly Report For Room Management</th>
  </tr>
<tr className="row1" style={{}}>
<th className="col1" style={{textAlign:"center"}}>Room Title</th>
<th className="col1" style={{textAlign:"center"}}>Room Number</th>
<th className="col1" style={{textAlign:"center"}}>Bed Type</th>
<th className="col1" style={{textAlign:"center"}}>Extra Bed (1 bed only for request)</th>
<th className="col1" style={{textAlign:"center"}}>Base Price (Rs.)</th>
<th className="col1" style={{textAlign:"center"}}>Additional Person Price (Rs.)</th>
<th className="col1" style={{textAlign:"center"}}>Extra Bed Price (Rs.)</th>
<th className="col1"style={{textAlign:"center"}}>Discount</th>
<th className="col1"style={{textAlign:"center"}}>Total Base Price (Rs.)</th>
</tr>

{this.state.posts.map((posts,index) =>(
<tr className="row1" key={index} style={{}}>
<td className="col1" style={{textAlign:"center"}}>{posts.RoomTitle}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.RoomNumber}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.BedType}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.ExtraBed}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.BasePrice}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.AdditionalPersonPrice}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.ExtraBedPrice}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Discount}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.TotalBasePrice}</td>
</tr>
))}

</table>
<br></br>
<br></br>
<div style={{marginLeft:"60px"}}>.........................</div>
<div style={{marginLeft:"80px", marginBottom:"100px"}}>Date</div>
<div style={{marginLeft:"840px", marginTop:"-143px"}}>...........................................................................</div>
<div style={{marginLeft:"860px", marginBottom:"100px"}}>(Signature by room manager)</div>
</table>
<br/>
</div>
)
}
}
