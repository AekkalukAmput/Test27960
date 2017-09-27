import React, { Component } from 'react';
import './App.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavDropdown,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import routes from './routing-config'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const styles = {
    font:{
      fontFamily: 'supermarket',
      fontSize:18

    }

};
class App extends Component {


  render(){
      return(
        <BrowserRouter>
          <div>
            <div>
              <Navbar inverse collapseOnSelect style={styles.font}>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="/">Earthworm Farm</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                      <NavDropdown eventKey={1} title="ดูสถิติ" id="basic-nav-dropdown">
                        <LinkContainer to="/dtemp">
                          <MenuItem eventKey={1.1}>ดูสถิติรายวัน</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/wtemp">
                          <MenuItem eventKey={1.2}>ดูสถิติรายสัปดาห์</MenuItem>
                        </LinkContainer>
                        <LinkContainer  to="/mtemp">
                          <MenuItem eventKey={1.3}>ดูสถิติรายเดือน</MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                      <LinkContainer to="/circle">
                        <NavItem eventKey={2} href="#">กราฟแสดงความชื้น</NavItem>
                      </LinkContainer>
                      <NavDropdown eventKey={3} title="สถานะบ่อ" id="basic-nav-dropdown">
                        <LinkContainer to="/statebor1">
                          <MenuItem eventKey={3.1}>บ่อที่ 1</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/statebor2">
                          <MenuItem eventKey={3.2}>บ่อที่ 2</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/statebor3">
                          <MenuItem eventKey={3.3}>บ่อที่ 3</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/statebor4">
                          <MenuItem eventKey={3.4}>บ่อที่ 4</MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                      <NavItem eventKey={1} href="#">Link Right</NavItem>
                      <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            <div className="App-into">
              <Switch>
                {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
