import React, { useContext } from "react";
import img1 from './images/logoco.png';
import { UserContext } from "../App";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const { userData, setUserData } = useContext(UserContext);

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div>
     
     
<title>CSS GRID DASHBOARD</title>
  <tbody id="body">
    <div class="container1">
      <nav class="navbar">
        <div class="nav_icon" onclick="toggleSidebar()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="navbar__left" style={{marginTop:"-10px"}}>
          <a href="/AvailableLuxuryRooms"  style={{fontSize:"20px"}}>Room Booking</a>
          <a href="#/" style={{fontSize:"20px"}}>Event Booking</a>
          
          <a href="#/"  style={{fontSize:"20px"}}>Food Order</a>

          {/* <a class="active_link" href="#/"  style={{}}>Food Order</a> */}
        </div>
      
          {userData.user ? (
              <Nav>
                <LinkContainer to="/profile">
                 <Nav.Link ><p style={{color:"#a5aaad", fontSize:"20px"}}>WELCOME {userData.user.name}</p></Nav.Link>
             </LinkContainer>
                 <LinkContainer to="/profile" className="profile">
                 <Nav.Link><li class="w3-xxlarge" style={{marginTop:"-10px", color:"#a5aaad"}}><i class="fa fa-user-circle" aria-hidden="true"></i></li></Nav.Link>
             </LinkContainer>
                <LinkContainer to="/login" className="profile">
                  <Nav.Link onClick={logOut}><p style={{color:"#a5aaad", fontSize:"20px"}}>Log Out</p></Nav.Link>
                </LinkContainer>
              </Nav>
            ) : (
              <Nav>
                <LinkContainer to="/register" className="profile">
                  <Nav.Link><p style={{color:"#a5aaad", fontSize:"20px"}}>Register</p></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login" className="profile">
                  <Nav.Link><p style={{color:"#a5aaad", fontSize:"20px"}}>Log In</p></Nav.Link>
                </LinkContainer>
              </Nav>
            )}
         
      </nav>
  
      
       
           
          
         
   
      <div id="sidebar">
        <div class="sidebar__title">
          <div class="sidebar__img">
            { <img src={img1} alt="logo" style={{height:"150px",width:"150px"}} />}
          </div>
          <i
            onclick="closeSidebar()"
            class="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div class="sidebar__menu">
          <div class="sidebar__link" style={{background:"#ffc266"}}>
            {/* <div class="sidebar__link active_menu_link"> */}
            <i class="fa fa-home"></i>
            <a href="/">Dashboard</a>
          </div>
          <h2>System Management</h2>
          <div class="sidebar__link" style={{background:"#ffe0b3", fontSize:"15px"}}>
            <i class="	fas fa-bed" aria-hidden="true"></i>
            <a href="/a">Room Management</a>
          </div>
          <div class="sidebar__link" style={{background:"#ffe0b3"}}>
            <i class="	fas fa-door-open"></i>
            <a href="#/">Event Management</a>
          </div>
          <div class="sidebar__link" style={{background:"#ffe0b3"}}>
            <i class="fas fa-hand-holding-usd"></i>
            <a href="#/">Financial Management</a>
          </div>
          <div class="sidebar__link" style={{background:"#ffe0b3"}}>
            <i class="fas fa-car"></i>
            <a href="#/">Transport Management</a>
          </div>
          <div class="sidebar__link" style={{background:"#ffe0b3"}}>
            <i class="fas fa-suitcase-rolling"></i>
            <a href="/a">Reservation Management</a>
          </div>
          <div class="sidebar__link" style={{background:"#ffe0b3"}}>
            <i class="fa fa-archive"></i>
            <a href="#/">Inventory Management</a>
          </div>
          <div class="sidebar__link" style={{background:"#ffe0b3"}}>
            <i class="fas fa-utensils"></i>
            <a href="#/">Restuarant Management</a>
          </div>
          <div class="sidebar__link" style={{background:"#ffe0b3"}}>
            <i class="fa fa-handshake-o"></i>
            <a href="#/">Employee Management</a>
          </div>
          <h2>LEAVE</h2>
          <div class="sidebar__link" style={{background:"yellow"}}>
            <i class="fa fa-files-o"></i>
            <a href="#/">Apply for leave</a>
          </div>
          {/* <div class="sidebar__logout" style={{background:"yellow"}}>
            <i class="fa fa-power-off"></i>
            <a href="#/">LogOut</a>
          </div>    */}
        </div>
      </div>
    </div>
    

    
    <footer style={{background:"black", width:"auto", height:"60px", marginBottom:"-10px", marginRight:"-1000px"}}>
      <div><h4 style={{color:"white", marginLeft:"600px", fontSize:"20px"}}><br/>CREATED BY ITP2021_S2_B02_G11</h4></div>
      </footer>


 </tbody>
 

</div>

)


}

export default Header;


