import {Component} from 'react'

import './index.css'

import {Link} from 'react-router-dom'

class MailVerifyPage extends Component {
  render() {
    return (
      <div>
        <div className="bar">
          <div className="menu-bar">
            <p className="name">Inspiration</p>
            <p className="name">Find Work</p>
            <p className="name">Learn Design</p>
            <p className="name"> Go Po</p>
            <p className="name">Hire Designers</p>
          </div>

          <div className="e-icon-container">
            <img
              src="https://i.ibb.co/kGGnDSf/images.png"
              alt="images"
              className="search-image"
            />
            <input placeholder="Search" type="search" className='search-email' />
            <button type="submit">Upload</button>
          </div>
        </div>

        <div className="email-container">
          <h1>Please verify your email...</h1>
          <img
            className="email-img"
            src="https://i.ibb.co/hgPX5PY/838461.png"
            alt="838461"
          />
          <p>
            Please verify your mail address.we sent a confirmation email to:
          </p>
          <h2 className="account">account@refrro.design</h2>
          <p>Click the confirmation link in email to begin using Dribbble.</p>
          <p>
            Dont receive the email? Check your Spam folder,it may have been
            caught by a filter.if <br /> you still dont see it, you can
            <span>resend the confirmation email.</span>
          </p>
          <p>
            Wrong email address? <span>Change it.</span>
          </p>
          <div className='l-link'> 
            <Link to="/" className='click'>
              Click Here</Link>
              </div>
        </div>

        <div className="dribble-container">
          <div className="dribble-sub-container">
            <p className="dribble">dribbble</p>
            <p>
              Dribbble is the worlds leading <br /> community for creatives to
              share grow <br /> and get hired.
            </p>
            <div className="icon-image-container">
              <img
                className="img-logo"
                src="https://i.ibb.co/ZLx60Sh/images-4.png"
                alt="images-4"
              />
              <img
                className="img-logo"
                src="https://i.ibb.co/Wk2zNvg/1051309.png"
                alt="1051309"
              />
              <img
                className="img-logo"
                src="https://i.ibb.co/qWVxGhr/images-1.jpg"
                alt="images-1"
              />
              <img
                className="img-logo"
                src="https://i.ibb.co/JpLGR8R/picsart-icon.jpg"
                alt="picsart-icon"
              />
            </div>
          </div>
          <div className="for-designer">
            <p className='email-name'>For designer</p>
            <p>Go Pro!</p>
            <p>Explore design work</p>
            <p>Design blog</p>
            <p> Overtime podcast</p>
            <p> Playoffs</p>
            <p>Weekly Warm-Up</p>
            <p>Refer a Friend</p>
            <p> Code of conduct</p>
          </div>
          <div className="hire-designer">
            <p className="email-name">Hire designer</p>
            <p>Post a job opening</p>
            <p>
              Post a freelance <br /> project
            </p>
            <p>Search for designers</p>
            <p className="email-name">Brands</p>
            <p>Advertise with us</p>
          </div>

          <div className="company">
            <p className="email-name">Company</p>
            <p>About</p>
            <p>Careers</p>
            <p>Support</p>
            <p>Media kit</p>
            <p>Testimonials</p>
            <p>API</p>
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
          </div>
          <div className="direction">
            <p className="email-name">Direction</p>
            <p>Design job</p>
            <p>Design for hire</p>
            <p>
              Freelance designers <br /> for hire
            </p>
            <p>Tags</p>
            <p>Places</p>
            <p className="email-name">Design assets</p>
            <p>Dribbble Marketplace</p>
            <p>Creative market</p>
            <p> Fontspring</p>
            <p>Font Squiree!</p>
          </div>
          <div className="design-resources">
            <p className="email-name">Design Resources</p>
            <p>Freelancing</p>
            <p>Design hiring</p>
            <p>Design portfolio</p>
            <p>Design education</p>
            <p>Creative process</p>
            <p>Design Industry </p>
            <p>Trends</p>
            </div>
          </div>
          
      </div>
    )
  }
}

export default MailVerifyPage
