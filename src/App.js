import React, { Component } from "react";
import "./App.css";
import { Button, Card, Icon } from "semantic-ui-react";
import SocialButton from './components/SocialButton';


const handleSocialLogin = (user) => {
  console.log(user)
}
 
const handleSocialLoginFailure = (err) => {
  console.error(err)
}

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
        <Card color="green" centered="true">
          <p>Master Ruby on Rails rspec Testing</p>
          <Icon name="delete" size="large" />
        </Card>
        <Card color="green" centered="true">
          <p>Learn Cypress Testing</p>
          <Icon name="delete" size="large" />
        </Card>
        <SocialButton
      provider='facebook'
      appId='534596613592353'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
     
        <Button color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
       
    </SocialButton>
      </div>
    );
  }
}

export default App;
