import React, { Component } from 'react';
import axios from 'axios';
import "./styles.css";




export default class AvailableRooms extends Component{
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

onDelete = (id) =>{
axios.delete(`http://localhost:5000/room/delete/${id}`).then((res) =>{
alert("Room Delete Successfully");
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





<div className="container" style={{marginLeft:"100px", marginTop:"-900px",backgroundImage:"./images/logoco.png",maxWidth:"100%"}}>
<h1>Room details in hotel</h1>

<div className="row">

    
<div className="col-lg-9 mt-2 mb-2">



      

<button className="btn btn-success" style={{marginTop:"0px"}}><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Room</a></button>
</div>
<div className="col-lg-3 mt-2 mb-2" >
    <input
    className="form-control"
    type="search"
    placeholder="Search"
    name="searchQuery"
    onChange={this.handleSearchArea}>
    </input>
    </div>
 </div>
<table className="table1">

<tbody>
<tr style={{border:"1px", width:"200px"}}>
<td className="td1" style={{background:"#ffb84d", textAlign:"center", width:"20px"}}>#</td>
<td className="td1" style={{background:"#ffe0b3", textAlign:"center"}}>Room Title</td>
<td className="td1" style={{background:"#ffb84d", textAlign:"center"}}>Room Number</td>
<td className="td1" style={{background:"#ffe0b3", textAlign:"center"}}>Room Short Code</td>
<td className="td1" style={{background:"#ffb84d", textAlign:"center"}}>BedType</td>
<td className="td1" style={{background:"#ffe0b3", textAlign:"center"}}>Description</td>
<td className="td1" style={{background:"#ffb84d", textAlign:"center"}}>No Of Maximum Persons</td>
<td className="td1" style={{background:"#ffe0b3", textAlign:"center"}}>Extra Bed</td>
<td className="td1" style={{background:"#ffb84d", textAlign:"center"}}>Cleanning Status</td>
<td className="td1" style={{background:"#ffe0b3", textAlign:"center"}}>Total Base Price</td>
</tr>

{this.state.posts.map((posts,index) =>(
  
<tr key={index} style={{}}>
    <th className="th1" style={{background:"#ffb84d", textAlign:"center", width:"20px"}}>{index+1}</th> 
<th className="th1" style={{background:"#ffe0b3", textAlign:"center"}}>
<a href={`/room/${posts._id}`}>
{posts.RoomTitle}
</a>
</th>
<th className="th1" style={{background:"#ffb84d", textAlign:"center"}}>{posts.RoomNumber}</th>
<th className="th1" style={{background:"#ffe0b3", textAlign:"center"}}>{posts.RoomShortCode}</th>
<th className="th1" style={{background:"#ffb84d", width:"100px", textAlign:"center"}}>{posts.BedType}</th>
<th className="th1" style={{background:"#ffe0b3", textAlign:"center"}}>{posts.Description}</th>
<th className="th1" style={{background:"#ffb84d", textAlign:"center"}}>{posts.NumberOfMaximumPersons}</th>
<th className="th1" style={{background:"#ffe0b3", textAlign:"center"}}>{posts.ExtraBed}</th>
<th className="th1" style={{background:"#ffb84d", textAlign:"center"}}>{posts.CleanningStatus}</th>
<th className="th1" style={{background:"#ffe0b3", textAlign:"center"}}>{posts.TotalBasePrice}</th>
<th className="th1">
<a className="btn btn-warning"  href={`/edit/${posts._id}`} style={{height:"30px",width:"100px", marginLeft:"10px", marginTop:"10px"}}>
<i className="fas fa-edit" style={{marginLeft:"0px"}}></i>&nbsp;Edit
</a>
&nbsp;
<a className="btn btn-danger" href="/a" onClick={() =>this.onDelete(posts._id)} style={{height:"30px",width:"100px",marginLeft:"12px", marginTop:"10px"}}>
<i className="fas fa-trash-alt" style={{}}></i>&nbsp;Delete
</a>
</th>
</tr>
))}
</tbody>
</table>
<br/>
<a href="/RoomMonthlyReport"><input type="button" value="Generate Monthly Report" style={{background:"yellow", width:"200px", height:"40px", borderRadius:"20px", align:"center"}}></input></a>


   
</div>
)
}
}
