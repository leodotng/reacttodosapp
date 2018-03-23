import React, { Component } from "react";
import "./App.css";
import { Button, Card, Icon } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Button color="green" size="large">
          <Icon name="sign in" size="small" />Login
        </Button>
        <Button color="green" size="large">
          <Icon name="signup" size="small" />Signup
        </Button>
        <br />

        <h1 className="App-title">Todos App</h1>
        <h2>Welcome to the best Todos App!</h2>
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
        <Button color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
      </div>
    );
  }
}

export default App;
