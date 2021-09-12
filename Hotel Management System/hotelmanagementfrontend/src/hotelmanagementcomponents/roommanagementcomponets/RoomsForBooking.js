import React, { Component } from 'react';
import axios from 'axios';
import img7 from '../images/room1.jpg';


export default class RoomsForBooking extends Component{
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
posts:res.data.existingRoom
});
console.log(this.state.posts)
} 
});
}

onDelete = (id) =>{
axios.delete(`http://localhost:5000/room/delete/${id}`).then((res) =>{
alert("Delete Successfully");
this.retrievePosts();
})
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


<div style={{marginLeft:"100px",marginTop:"-900px", backgroundImage:"./images/logoco.png",maxWidth:"100%",height:"100px"}}>



{this.state.posts.map((posts,index) =>(
<div className="c1" style={{float:"left",width:"40%"}}>
<div class="card" style={{marginLeft:"100px",marginTop:"100px", backgroundImage:"./images/logoco.png",width:"300px" ,height:"430px"}}>

  
  <img src={img7} alt="Avatar" style={{width:"100%",height:"200px"}}/>
  <div class="container">
    
<a href={`/room/${posts._id}`} style={{textDecoration:'none'}}>
<p># {index+1}</p>
<p>Room Title {posts.RoomTitle}</p>

</a>

<p>Room Number {posts.RoomNumber}</p>
<p>Description {posts.RoomShortCode}</p>
<p>Base Occupancy {posts.BaseOccupancy}</p>
<p>Higher Occupancy {posts.HigherOccupancy}</p>
</div>
</div>
</div>


))}

</div>

)
}
}
