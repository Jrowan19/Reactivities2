import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const Navbar = ({ openCreateForm }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Actvities" />
        <Menu.Item>
          <Button onClick={openCreateForm} positive content="Create Activity" />
        </Menu.Item>
        <Menu.Item />
      </Container>
    </Menu>
  );
};

export default Navbar;
