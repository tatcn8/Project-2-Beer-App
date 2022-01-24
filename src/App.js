import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import FishList from './components/FishList';
import { NavbarBrand, Nav, NavItem, NavbarToggler, NavLink, Navbar, Collapse } from "reactstrap";
import AnimalDetails from './components/AnimalDetails';
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
        The Beer App
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
        <NavItem>
          <NavLink href="/fish">
            Fish
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
      <Routes>
        <Route path ="/" element={<Header />} />
        <Route path ="/fish" element={<FishList />} />
        <Route path ="/fish/:id" element={<AnimalDetails />} />
        <Route path ="/breweries" element={<BreweriesList />} />
        <Route path ="/breweries/:id" element={<BreweriesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
