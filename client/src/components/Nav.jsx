import { useNavigate, Link } from 'react-router-dom'
import React from "react";
import Logout from './Logout'
// import "../styles/App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavDrop = ({ loginStatus, user }) => {
  const navigate = useNavigate()
  let authenticatedOptions
  if (loginStatus) {
    authenticatedOptions = (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{justifyContent: 'space-evenly'}}>
  <Navbar.Brand onClick={() => navigate('/')}>Dashboard In</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'space-between'}}>
        <Nav className="mr-auto" >
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href="/ref">References</Nav.Link>
          <Nav.Link href='time'>Timer</Nav.Link>
          <Nav.Link href="/todo">Todo</Nav.Link>
          <Nav.Link href="/sand">Sandbox</Nav.Link>
          {/* <Nav.Link href={`/profile/${user.id}`}>Profile</Nav.Link> */}
          {/* <NavDropdown title="Toolbelt" id="collasible-nav-dropdown" >
            <NavDropdown.Item id='d-item' href="/python">~ Python / Django ~</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='d-item' href="/js">~ JavaScript ~</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='d-item' href="/react">~ React ~</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='d-item' href="/redux">~ Redux ~</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='d-item' href="/sql">~ SQL / Sequelize / Express ~</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='d-item' href="/bootstrap">~ Bootstrap / React-Bootstrap ~</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='d-item' href="/other">~ Other ~</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          {/* <Nav.Link href="/about">About</Nav.Link> */}
          <Link to="/logout">Log Out</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Sign In</Link>
    </nav>
    
  )

  // console.log(user, "LOGIN")
  return (
    <header className='master-header'>
      {/* <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://avatars.dicebear.com/api/jdenticon/app.svg"
            alt="welcome banner"
          />
        </div>
      </Link> */}
      {/* <div className="Mere-header" onClick={() => {
          (authenticated && user ? navigate('/home') : navigate('/signin'))}}>
           
        </div> */}
        {/* {publicOptions} */}
      {loginStatus ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default NavDrop