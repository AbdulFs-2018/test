import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavDropdown, NavLink, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, MenuItem, MenuItemProps} from 'react-bootstrap';


export class NavbarFeatures extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#brand">React-Nav</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavItem href="#">Link</NavItem>
                        <NavItem href="#">Link</NavItem>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem >Action</MenuItem>
                            <MenuItem >Another action</MenuItem>
                            <MenuItem divider />
                            <MenuItem>Separated link</MenuItem>
                        </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                        <NavItem href="#">Link Right</NavItem>
                        <NavItem href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>;

                
            </div>
        );
    }
}

export default { NavbarFeatures };
