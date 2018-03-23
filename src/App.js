import React, { Component } from "react";
import "./App.css";
import { Button, Card, Icon } from "semantic-ui-react";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="green"><Icon name="sign in" size="small" />Login</Button>
        <Button color="green"><Icon name="signup" size="small" />Signup</Button>

        <h1 className="App-title">Todos App</h1>
        <Card color="green" centered="true">
          <p>Add New Todo</p>
          <Icon name="plus square" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Take out the Laundry</p>
          <Icon name="delete" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Take out the trash</p>
          <Icon name="delete" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Feed The Cats</p>
          <Icon name="delete" size="large" />
        </Card>
      </div>
    );
  }
}

export default App;
