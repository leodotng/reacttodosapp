import React, { Component } from "react";
import "./App.css";
import { Button, Card, Icon } from "semantic-ui-react";
import GitHubLogin from 'react-github-login';
import logo from './logo.png';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

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
        <img src={logo} /> 
        <h2>Welcome to the best Todos App!</h2>
        <Card color="green" centered="true">
          <p>Add New Todo</p>
          <Icon name="plus square" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Take out the Laundry</p>
          <Icon name="delete" size="large" />
          <Icon name="edit" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Take out the trash</p>
          <Icon name="delete" size="large" />
          <Icon name="edit" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Feed The Cats</p>
          <Icon name="delete" size="large" />
          <Icon name="edit" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Master Ruby on Rails rspec Testing</p>
          <Icon name="delete" size="large" />
          <Icon name="edit" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Learn Cypress Testing</p>
          <Icon name="delete" size="large" />
          <Icon name="edit" size="large" />
        </Card>
        
          <Button color="facebook">
            <Icon name="facebook" /> Facebook
          </Button>
          <GitHubLogin clientId="f7e5b645c9d29ecef0c9
"
    onSuccess={onSuccess}
    onFailure={onFailure}/>
        
      </div>
    );
  }
}

export default App;
