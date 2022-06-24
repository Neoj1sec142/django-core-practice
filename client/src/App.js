import React, {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginContext from './LoginContext'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <LoginContext.Provider value={{loginStatus, setLoginStatus, user, setUser}}>
      <header className="App-header">
        
      </header>
      <Routes>
        {/* <Route path='/' element={<Land loginStatus={loginStatus}/>}/> */}
        {/* <Route path='/register' element={ <Register loginStatus={loginStatus}/> } /> */}
        {/* <Route path='/login' element={ <Login loginStatus={loginStatus}/> } /> */}
        {/* <Route path='/logout' element={ <Logout /> } /> */}
      </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
