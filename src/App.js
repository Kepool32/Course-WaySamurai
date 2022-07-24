import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import Navbar from "./Componets/Navbar";
import Profile from "./Componets/Profile";

const App=()=> {
  return (
    <div className='app-wrapper'>
      <Header/>
       <Navbar/>
       <Profile/>
    </div>
  );
}



export default App;
