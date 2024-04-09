import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class DribbblePage extends Component {
  render() {
    return (
      <div>
        fetch();
        <div className="d-main-container">
          <h1 className="d-heading">What brings you to Dribbble?</h1>
          <p>
            Select the option best describe you. Dont worry, you can explore
            other option later.
          </p>
        </div>

        <div className="d-dribbble-container">
          <div className="d-image-containers">
            <img
              src="https://i.ibb.co/k4xDGvm/3a947f9238d4d843959a216bbb83a614.jpg"
              alt="3a947f9238d4d843959a216bbb83a614"
            />
            <h2 className='d-heading-2'>Im a designer looking to share my work</h2>
            <input className='d-input' type="radio" />
          </div>
          <div className="d-image-containers">
            <img
              src="https://i.ibb.co/rm6C8Ld/5a6246e56604072b551ac01ad2ae675f.png"
              alt="5a6246e56604072b551ac01ad2ae675f"
            />
            <h2 className='d-heading-2'>Im looking to hire a designer</h2>
            <input className='d-input' type="radio" />
          </div>
          <div className="d-image-containers">
            <img
              src="https://i.ibb.co/DCnrrRz/81ebf0ef3aec49dde5657bd4b1f5a459.png"
              alt="81ebf0ef3aec49dde5657bd4b1f5a459"
            />
            <h2 className='d-heading-2'>Im looking for design inspiration</h2>
            <input className='d-input' type="radio" />
          </div>
        </div>
        <div className="d-button-container">
          <h1>Anything else? You can select multiple</h1>
          <Link className='d-finish-button' to="/email" type="submit">Finish</Link>
          <Link to="/avatar" className='d-return'>or Press RETURN </Link>
        </div>
      </div>
    )
  }
}
export default DribbblePage
