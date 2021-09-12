import React, { Component } from 'react';
import axios from 'axios';

export default class AddRoom extends Component {

constructor(props){
super(props);
this.state={
  RoomTitle:"",
  RoomNumber:"",
  RoomShortCode:"",
  BedType:"",
  Description:"",
  NumberOfMaximumPersons:"",
  ExtraBed:"",
  CleanningStatus:"",
  BasePrice:"",
  AdditionalPersonPrice:"",
  ExtraBedPrice:"",
  Discount:"",
  TotalBasePrice:"",

}
}

handleInputChange = (e) =>{
const {name,value} = e.target;

this.setState({
...this.state,
[name]:value
})
}

onSubmit = (e) =>{
e.preventDefault();

const {RoomTitle,RoomNumber,RoomShortCode,BedType,Description,NumberOfMaximumPersons,ExtraBed,CleanningStatus,BasePrice,AdditionalPersonPrice,ExtraBedPrice,Discount,TotalBasePrice} = this.state;

const data ={
  RoomTitle:RoomTitle,
  RoomNumber:RoomNumber,
  RoomShortCode:RoomShortCode,
  BedType:BedType,
  Description:Description,
  NumberOfMaximumPersons:NumberOfMaximumPersons,
  ExtraBed:ExtraBed,
  CleanningStatus:CleanningStatus,
  BasePrice:BasePrice,
  AdditionalPersonPrice:AdditionalPersonPrice,
  ExtraBedPrice:ExtraBedPrice,
  Discount:Discount,
  TotalBasePrice:TotalBasePrice,

}
console.log(data)

axios.post("http://localhost:5000/room/save",data).then((res) =>{
if(res.data.success){
this.setState(
{
  RoomTitle:"",
  RoomNumber:"",
  RoomShortCode:"",
  BedType:"",
  Description:"",
  NumberOfMaximumPersons:"",
  ExtraBed:"",
  CleanningStatus:"",
  BasePrice:"",
  AdditionalPersonPrice:"",
  ExtraBedPrice:"",
  Discount:"",
  TotalBasePrice:"",
 
}
)
}
})
}
/*
fup(ev){
this.setState({Dp:ev.traget.files[0]})



}

save(){
var fd=new FormData();
fd.append("name",this.state.name);
fd.append("name",this.state.email);
fd.append("name",this.state.Dp);


}
*/
render() {
return (



<div>






<div style={{marginLeft:"-100px", marginTop:"-900px"}}>

  
<div style={{marginLeft:"200px"}}>
    <h1 className="h3 mb-3 font-weight-normal">Add New Room Details</h1>
    <form className="needs-validation" noValidate style={{marginTop:"50px"}}>
    <div className="colum1">

 
<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>RoomTitle</label>
<input style={{marginLeft:'46px'}} type="text"
className="form-contorl"
name="RoomTitle"
placeholder="Enter Topic"
value={this.state.RoomTitle}
onChange={this.handleInputChange} required/>
</div>



<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>RoomNumber</label>
<input style={{marginLeft:'24px'}} type="text"
className="form-contorl"
name="RoomNumber"
placeholder="Enter Description"
value={this.state.RoomNumber}
onChange={this.handleInputChange} required/>
</div>

<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>RoomShortCode</label>
<input style={{marginLeft:'8px'}} type="text"
className="form-contorl"
name="RoomShortCode"
placeholder="Enter Post Category"
value={this.state.RoomShortCode}
onChange={this.handleInputChange} required/>
</div>

<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>Discount</label>
<input style={{marginLeft:'56px'}} type="text"
className="form-contorl"
name="Discount"
placeholder="Enter Post Category"
value={this.state.Discount}
onChange={this.handleInputChange} required/>
</div>
</div>


<div className="colum1" style={{marginLeft:"60px"}}>
<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>BedType</label>
<input style={{marginLeft:'38px'}} type="text"
className="form-contorl"
name="BedType"
placeholder="Enter Post Category"
value={this.state.BedType}
onChange={this.handleInputChange} required/>
</div>


<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px', marginRight:"40px"}}>ExtraBed</label>


<input type="checkbox" name="ExtraBed" value="Add" className="form-contorl" onChange={this.handleInputChange} required/>
  <label for="Add" style={{marginBottom:'5px', marginRight:"40px", marginLeft:"10px"}}> Add</label>
  <input type="checkbox" name="ExtraBed" value="None" className="form-contorl" onChange={this.handleInputChange} required/>
  <label for="None" style={{marginBottom:'5px', marginRight:"40px", marginLeft:"10px"}}> None</label>
</div>








<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>BasePrice</label>
<input style={{marginLeft:'31px'}} type="text"
className="form-contorl"
name="BasePrice"
placeholder="Enter Post Category"
value={this.state.BasePrice}
onChange={this.handleInputChange} required/>
</div>


<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>ExtraBedPrice</label>
<input style={{marginLeft:'4px'}} type="text"
className="form-contorl"
name="ExtraBedPrice"
placeholder="Enter Post Category"
value={this.state.ExtraBedPrice}
onChange={this.handleInputChange} required/>
</div>
</div>


<div className="colum1" style={{marginLeft:"-40px"}}>
<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>NoOfMaximumPersons
<input style={{marginLeft:'4px', marginTop:"-10px"}} type="text"
className="form-contorl"
name="NumberOfMaximumPersons"
placeholder="Enter Post Category"
value={this.state.NumberOfMaximumPersons}
onChange={this.handleInputChange} required/></label>
</div>



<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px',  marginRight:"53px"}}>CleanningStatus</label>


<input type="radio"  name="CleanningStatus" value="Clean" onChange={this.handleInputChange} required/>
  <label for="Clean" style={{marginBottom:'5px', marginRight:"8px", marginLeft:"4px"}}>Clean</label>
  <input type="radio" name="CleanningStatus" value="Dirty" onChange={this.handleInputChange} required/>
  <label for="Dirty">Dirty</label>


</div>






<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>AdditionalPersonPrice</label>
<input style={{marginLeft:'17px'}} type="text"
className="form-contorl"
name="AdditionalPersonPrice"
placeholder="Enter Post Category"
value={this.state.AdditionalPersonPrice}
onChange={this.handleInputChange} required/>
</div>

<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>TotalBasePrice</label>
<input style={{marginLeft:'64px'}} type="text"
className="form-contorl"
name="TotalBasePrice"
placeholder="Enter Post Category"
value={this.state.TotalBasePrice}
onChange={this.handleInputChange} required/>
</div>
</div>


<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'15px'}}>Description</label>
<textarea style={{marginLeft:'42px', width:"800px", height:"100px"}} type="text"
className="form-contorl"
name="Description"
placeholder="Enter Post Category"
value={this.state.Description}
onChange={this.handleInputChange} required/>
</div>



<button className="btn btn-success" type="submit" style={{marginTop:'15px', marginLeft:"200px", width:"100px"}} onClick={this.onSubmit}>
    <i className="far fa-click-square"></i>
&nbsp; Save
</button>

<button className="btn btn-success" type="submit" style={{marginTop:'15px', marginLeft:"200px", width:"100px"}} onClick={this.onSubmit}>
    <i className="far fa-click-square"></i>
&nbsp; Reset
</button>  

<button className="btn btn-success" type="submit" style={{marginTop:'15px', marginLeft:"200px", width:"100px"}} onClick={this.onSubmit}>
    <i className="far fa-click-square"></i>
&nbsp; Back
</button>



</form>
</div>
</div>
</div>
)
}
}
