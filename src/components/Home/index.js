// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {message: 'Please Login', loginText: 'Login', logoutText: null}

  loginButtonClick = () => {
    this.setState(prevName => ({
      message: 'Welcome User',
      loginText: null,
      logoutText: 'Logout',
    }))
  }

  logoutButtonClick = () => {
    this.setState(prevName => ({
      message: 'Please Login',
      loginText: 'Login',
      logoutText: null,
    }))
  }

  render() {
    const {message, loginText, logoutText} = this.state
    return (
      <div className="Container">
        <div className="bgContainer">
          <Message message={message} />
          <Login onClick={this.loginButtonClick} text={loginText} />
          <Logout onClick={this.logoutButtonClick} text={logoutText} />
        </div>
      </div>
    )
  }
}

export default Home
