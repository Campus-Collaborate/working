import React from "react"

// import {app} from "./firebase"
// import SignupPage from "./pages/Signup"
// import LoginPage from "./pages/Login"
// import ProfilePage from "./pages/profilePage"
import Home from "./Pages/home"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
// import {FirebaseProvider} from "./Contexts/firebase"

import './App.css';

// const db = getDatabase(app)
// const auth = getAuth(app)

function App() {

  return (
    <div className="App">
       {/* <FirebaseProvider> */}
    <Router>
      <Routes>

          <Route path="" element={<Home />}/>
          {/* <Route path="/signup" element={<SignupPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path = "/profilePage" element = {<ProfilePage/>}/> */}
      </Routes>

    </Router>
       {/* </FirebaseProvider> */}
    </div>
  );
}

export default App;
