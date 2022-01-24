import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import { NavbarBrand, Nav, NavItem, NavbarToggler, NavLink, Navbar, Collapse, Row } from "reactstrap";
import BreweriesList from './components/BreweriesList';
import BreweriesDetails from './components/BreweryDetails';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';


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
           | Home |
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/beers">
            | Domestic-Beers |
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/breweries">
           | Breweries by State |
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
      <Routes>
        <Route path ="/" element={<Header />} />
        <Route path ="/breweries" element={<Row><BreweriesList /></Row>} />
        <Route path ="/breweries/:id" element={<BreweriesDetails />} />
        <Route path ="/beers" element={<Row><BeerList /></Row>} />
        <Route path ="/beers/:beer" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
