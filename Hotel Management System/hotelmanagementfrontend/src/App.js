import { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'

import Header from './hotelmanagementcomponents/Header'

import Register from './hotelmanagementcomponents/auth/Register'
import Login from './hotelmanagementcomponents/auth/Login'
import Profile from './hotelmanagementcomponents/auth/Profile'
import Dashboard from './hotelmanagementcomponents/Dashboard';

import AddRoom from './hotelmanagementcomponents/roommanagementcomponets/AddRoom';
import EditRoom from './hotelmanagementcomponents/roommanagementcomponets/EditRoom';
import AvailableRooms from './hotelmanagementcomponents/roommanagementcomponets/AvailableRooms';
import RoomsForBooking from './hotelmanagementcomponents/roommanagementcomponets/RoomsForBooking';
//import backgroundimage from './hotelmanagementcomponents/roommanagementcomponets/backgroundimage';
import PostRoomDetails from './hotelmanagementcomponents/roommanagementcomponets/PostRoomDetails';
import RoomsCategory from './hotelmanagementcomponents/roommanagementcomponets/RoomsCategory';
import AvailableLuxuryRooms from './hotelmanagementcomponents/roommanagementcomponets/AvailableLuxuryRooms';

import RoomMonthlyReport from './hotelmanagementcomponents/roommanagementcomponets/RoomMonthlyReport';

export const UserContext = createContext()

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const isLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if (token == null){
        localStorage.setItem("auth-token", "")
        token = ""
      }

      const tokenResponse = await axios.post(
        '/api/users/tokenIsValid', 
        null, 
        {headers: {"auth-token": token}}
      )

      console.log(tokenResponse.data)
      if(tokenResponse.data){
        const userResponse = await axios.get('/api/users/profile',
          {headers: {'auth-token': token}}
        )
        setUserData({
          token: token,
          user: userResponse.data
        })
      }
    }
    isLoggedIn()
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Header />
        <Container>        
        <Route path="/" exact component={Dashboard}></Route>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />   

            <Route path="/a" exact component={AvailableRooms}></Route>
<Route path="/c" exact component={RoomsForBooking}></Route>
<Route path="/add" exact component={AddRoom}></Route>
<Route path="/edit/:id" exact component={EditRoom}></Route>
  <Route path="/room/:id" exact component={PostRoomDetails}></Route>
  <Route path="/category" exact component={RoomsCategory}></Route>
    <Route path="/AvailableLuxuryRooms" exact component={AvailableLuxuryRooms}></Route>
    <Route path="/RoomMonthlyReport" exact component={RoomMonthlyReport}></Route> 
        </Container>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
