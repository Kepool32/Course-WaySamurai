import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header/Header';
import Navbar from "./Componets/Navbar/Navbar";
import Profile from "./Componets/Profile/Profile";
import Dialogs from "./Componets/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import dialogsReducer from "./redax/dialogs-reducer";
import DialogsContener from "./Componets/Profile/MyPosts/DialogsContener";

import UserContener from "./User/UserContener";
import ProfileContener from "./Componets/Profile/ProfileContener";
import HeaderContener from "./Componets/Header/HeaderContener";
import Login from "./Componets/Login/Login";




const App=(props)=> {


  return (


            <div className='app-wrapper'>

                <HeaderContener/>
                 <Navbar/>
                 <div className='app-wrapper-content'>
                     <Routes >
                     <Route path='/dialogs' element={<DialogsContener/>}  />
                     <Route path='/profile/:userid' element={<ProfileContener/>} />
                         <Route path='/user' element={<UserContener/>} />
                         <Route path='/login' element={<Login/>}></Route>
                 </Routes>
                </div>


            </div>

  );
}



export default App;
