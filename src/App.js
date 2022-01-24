import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import { NavbarBrand, Nav, NavItem, NavbarToggler, NavLink, Navbar, Collapse, Row } from "reactstrap";
import BreweriesList from './components/BreweriesList';
import BreweriesDetails from './components/BreweryDetails';


function App() {
  return (
    <div className="App">
      <Navbar
    color="light"
    expand="md"
    light>
    <NavbarBrand href="/">
    🍺  The Beer App 🍺 
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
        {/* <NavItem>
          <NavLink href="/beers">
            Beers
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink href="/breweries">
            Breweries
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
      <Routes>
        <Route path ="/" element={<Header />} />
        <Route path ="/breweries" element={<Row><BreweriesList /></Row>} />
        <Route path ="/breweries/:id" element={<BreweriesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
