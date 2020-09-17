import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Header, Icon, List } from 'semantic-ui-react';

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount = () => {
    axios.get('http://localhost:5000/api/values').then((response) => {
      this.setState({ values: response.data });
    });
  };

  render() {
    const { values } = this.state;
    return (
      <div>
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
        <List>
          {values.map((value) => {
            return <List.Item key={value.id}>{value.name}</List.Item>;
          })}
        </List>

        <ul></ul>
      </div>
    );
  }
}

export default App;
