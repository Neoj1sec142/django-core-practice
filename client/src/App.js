import React, {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginContext from './LoginContext'
import Client from './services/Axios'
import './styles/App.css';
// Login / Register Imports
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Home from './pages/Home'
import NavDrop from './components/Nav';
// Page Imports
import Sandbox from './pages/Sandbox'
import Ref from './pages/Ref'
import Timer from './pages/Timer'
import Todo from './pages/Todo'
import NotesDash from './pages/NotesDash'
import NoteStyle from './components/NotesStyle';
import CreateTo from './components/CreateTo';

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false)
  const [user, setUser] = useState({})
  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    const username = localStorage.getItem('username')
    setUser(user_id, username)
    if(user_id && username){
      if(loginTest(username)) setLoginStatus(true)
    }else setLoginStatus(false)
  }, [loginStatus])

  const loginTest = async (username) => {
    await Client.get(`users/${username}`)
    .then(res => {
      if (res.status === 200){
        setLoginStatus(true)
        return true
      }else{
        setLoginStatus(false)
        return false
      }
    })
    .catch(err => {
      setLoginStatus(false)
      console.log(err, "ERROR HERE")
    })
  }
  return (
    <div className="App">
      <LoginContext.Provider value={{loginStatus, setLoginStatus, user, setUser}}>
      <header className="App-header">
      <NavDrop loginStatus={loginStatus} user={user}/>
      </header>
      <Routes>
        <Route path='/' element={<Home loginStatus={loginStatus} user={user}/>}/>
        <Route path='/register' element={ <Register loginStatus={loginStatus}/> } />
        <Route path='/login' element={ <Login loginStatus={loginStatus}/> } />
        <Route path='/logout' element={ <Logout /> } />
        <Route path='/ref' element={ <Ref loginStatus={loginStatus}/> } />
        <Route path='/time' element={ <Timer loginStatus={loginStatus}/> } />
        <Route path='/create' element={ <CreateTo loginStatus={loginStatus}/> } />
        <Route path='/todo' element={ <Todo loginStatus={loginStatus} user={user}/> } />
        <Route path='/sand' element={ <Sandbox loginStatus={loginStatus}/> } />
        <Route path='/notes' element={ <NotesDash loginStatus={loginStatus}/> } />
        <Route path='/notes/:style' element={ <NoteStyle loginStatus={loginStatus}/> } />
      </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
