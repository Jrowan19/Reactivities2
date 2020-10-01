import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { Link } from '@reach/router';

const Navbar = ({ openCreateForm }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Link to="/">
          <Menu.Item header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: '10px' }}
            />
            Reactivities
          </Menu.Item>
        </Link>
        <Link to="/activities">
          <Menu.Item name="Actvities" />
        </Link>
        <Link to="/createActivity">
          <Menu.Item>
            <Button
              onClick={openCreateForm}
              positive
              content="Create Activity"
            />
          </Menu.Item>
        </Link>
        <Menu.Item />
      </Container>
    </Menu>
  );
};

export default Navbar;
