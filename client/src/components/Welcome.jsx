import { Logo, WelcomePicture } from "../config/assets-config"
import './Welcome.css'


const Welcome = () => {
  return (
    <div className="welcome-container">
        <div>
            <div className="welcome-title">
              <h1>Welcome to</h1>
            </div> 
            <div className="welcome-logo">
              <img src={Logo}/>
            </div>
        </div>
        <div className="welcome-img">
           <img src={WelcomePicture}/>
        </div>
    </div>
  )
}

export default Welcome