
import './App.css';
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import{signOut}from'firebase/auth';
import{auth} from'./firebase-con';




function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };


return  (
  <Router>
    <nav>
      <h1 className='name'>SidBlog</h1>
      <Link to="/"> Home </Link>
      <Link to="/createpost"> Create Post </Link>
      
      
      {isAuth ? (
        <>
             

        <button  onClick={signUserOut} className="log-in-button">log-out</button>
        </>
    ):(
      <>
    <Link to="/login">loginnn</Link>
    </>
    )}
    </nav>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth} />} />
      <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
    </Routes>
  </Router>
);
}



//  return ( <Router>
//   <nav className='navbar'>
//   <Link to="/">Home</Link>
  
//     {!isAuth ? (<Link to="/login">loginnn</Link>
//     ):(
//       <>
//       <Link to="/createpost">createpost</Link>
//     <button className='log-out' onClick={logoutuser}>log-out</button>
//     </>
//     )}

  
//   {/* <input type="text" placeholder="Search.."></input>
//   <button>Search</button> */}
//   </nav>


//   <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/createpost" element={<CreatePost/>}/>
//     <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
//     </Routes>
//  </Router>
// );
// }

export default App;
