import './Artis.css';

import Content from './views/content';
import Music from './views/music';
// import Upload from './views/upload';
import Archive from './views/archive';
import Poets from './views/poets';
import Disclaimer from './views/disclaimer';
import Contact from './views/contact';

export default class AppMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">htmlPoems by Poetrique</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1}>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem eventKey={2}>
                  <Link to="/music">Music</Link>
                </NavItem>
                {/* 
                <NavItem eventKey={3}>
                  <Link to="/upload">Upload</Link>
                </NavItem> 
                */}
                <NavDropdown eventKey={4} title="More" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>
                    <a href="https://usheninte.github.io/htmlPoems/">Archive</a>
                  </MenuItem>
                  <MenuItem eventKey={4.2}>
                    <Link to="/poets">Poets</Link>
                  </MenuItem>
                </NavDropdown>
                <NavItem eventKey={5}>
                  <Link to="/disclaimer">Disclaimer</Link>
                </NavItem>
                <NavItem eventKey={6}>
                  <Link to="/contact">Contact</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Content} />
          <Route path="/music" component={Music} />
          {/* <Route path="/upload" component={Upload} /> */}
          <Route path="/archive" component={Archive} />
          <Route path="/poets" component={Poets} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Features</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Pricing</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another Action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}