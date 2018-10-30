import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';

class Navs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: [false, false],
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Navs Tabs</strong>
          </CardHeader>
          <CardBody>
            <Nav tabs>
              <NavItem>
                <NavLink href="#" active>File</NavLink>

              </NavItem>
              <NavItem>
                <NavLink  href="#">Record</NavLink>
              </NavItem>
            </Nav>
          </CardBody>
        </Card>
        

      </div>
    );
  }
}

export default Navs;
