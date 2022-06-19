import './App.css'
import { Footer } from './Components/Footer/Footer'

import { Navbar } from './Components/Navbar/nav'
import { Home } from './pages/Homepage/Home'
import { Store } from './pages/Store/Store'
import {Route,Routes} from "react-router-dom"
import { Channel } from './pages/ChannelPage/Channel'
import { Signup } from './pages/Signup/Signup'
import { Login } from './pages/Login/Login'





function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Store' element={<Store/>}></Route>
        <Route path='Channel' element={<Channel/>}></Route>
        <Route path='Signup' element={<Signup/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
      </Routes>
      
      
      
      <Footer></Footer>
      
    </div>
  )
}

export default App
