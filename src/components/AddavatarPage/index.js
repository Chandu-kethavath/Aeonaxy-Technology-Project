import './index.css'
import {Link} from 'react-router-dom'

import {Component} from 'react'

class AddAvatarPage extends Component {
  render() {
    return (
      <div className="a-container">
        <h1 className='a-heading'>Welcome! Lets create your profile</h1>
        <p>Let others get to know your better! You can do these later</p>
        <div className="a-avatar-and-choose-image-container">
          <div className="a-image-container">
            <h2 className='a-heading-2'>Add an avatar</h2>
             <img
              className="a-camera-icon"
              src="https://i.ibb.co/b2r6KKX/360-F-107579101-QVl-TG43-Fwg9-Q6ggw-F436-MPIBTVpa-KKtb.webp"
              alt="360-F-107579101-QVl-TG43-Fwg9-Q6ggw-F436-MPIBTVpa-KKtb"
            /> 
          </div>

          <div className="a-choose-images">
            <button className="a-choose-image-button" type="button">
              Choose image
            </button>
            <div className="a-icon-container">
              <img
                className="a-icon"
                src="https://i.ibb.co/K5vc8bZ/images-1.png"
                alt="images-1"
              />
              <p className='a-one'>Or choose one of our defaults</p>
            </div>
          </div>
        </div>

        <div className="a-location-container">
          <label className='a-label' htmlFor="a-location">Add your location</label>
          <input className='a-input' placeholder="Enter a location" id="location" type="text" />
        </div>
        <Link className="a-next-button" to="/dribbble">
          Next
        </Link>
        <Link className="return" to="/">
          or Press RETURN
        </Link>
        
      </div>
    )
  }
}
export default AddAvatarPage
