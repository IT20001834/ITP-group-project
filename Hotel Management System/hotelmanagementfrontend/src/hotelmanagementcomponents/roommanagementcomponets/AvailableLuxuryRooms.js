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


<div style={{marginLeft:"100px",marginTop:"-950px", backgroundImage:"./images/logoco.png",maxWidth:"100%",height:"auto"}}>



{this.state.posts.map((posts,index) =>(
<div className="c1" style={{float:"left",width:"31%"}}>
<div class="card" style={{marginLeft:"100px",marginTop:"20px", backgroundImage:"./images/logoco.png",width:"300px" ,height:"420px"}}>


  <img src={img7} alt="Avatar" style={{width:"auto",height:"auto"}}/>
  <div class="container">
    
<a href={`/room/${posts._id}`} style={{textDecoration:'none'}}>


  <p style={{color:"yellow"}}>{posts.RoomTitle}</p>



</a>
<p style={{width:"auto", height:"auto", marginBottom:"10px", textAlign:"justify", color:"orange"}}> {posts.Description}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"orange"}}>Bed Type: {posts.BedType}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"orange"}}>Number Of Maximum Persons: {posts.NumberOfMaximumPersons}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"orange"}}>Base Price(Rs.): {posts.BasePrice}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"orange"}}>Discount: {posts.Discount}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"orange"}}>Total Base Price(Rs.): {posts.TotalBasePrice}</p>
<a href=""><input type="button" style={{width:"160px", marginLeft:"80px", background:"green"}} value="BOOKING NOW"></input></a>
<br></br>
</div>
</div>
</div>


))}

</div>

)
}
}
