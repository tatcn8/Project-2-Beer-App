import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import FishList from './components/FishList';
import MammalList from './components/MammalList';import { NavbarBrand, Nav, NavItem, NavbarToggler, NavLink, Navbar, Collapse } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navbar
    color="light"
    expand="md"
    light>
    <NavbarBrand href="/">
        Wildlife App
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar>
        <NavItem>
          <NavLink href="/">
           Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/fish">
            Fish
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/mammals">
            Mammals
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
      <Routes>
        <Route path ="/" element={<Header />} />
        <Route path ="/fish" element={<FishList />} />
        <Route path ="/mammals" element={<MammalList />} />
      </Routes>
    </div>
  );
}

export default App;
