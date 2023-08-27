// Write your code here
import './index.css'

const Logout = props => {
  const {onClick, text} = props
  if (text !== null) {
    return (
      <button className="logoutButton" onClick={onClick}>
        {text}
      </button>
    )
  }
}

export default Logout
