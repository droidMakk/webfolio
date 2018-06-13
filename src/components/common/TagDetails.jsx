import React,{ Fragment } from 'react';
import Card from './Card';
import ShareContent from './ShareContent.jsx';
import GithubWhite from "../../assets/test/GithubWhite.svg";
import LinkedInWhite from "../../assets/test/LinkedinWhite.svg";
import TwitterWhite from "../../assets/test/TwitterWhite.svg";

const TagDetails = () => {
    return <div className="tagDetails">
        <Card>
          <h2 className="displayInline whiteText thinText">
            Afroze <span className="darkText">Kabeer</span>
          </h2>
          <h2 className="whiteText thinText">
            Khan. M
            <SocialIcons />
          </h2>
        </Card>
        <span>
          <Card>
            <Card>
              <a href="tel:+91-8939717211">
                <h5 className="thinText whiteText">
                  <span role="img" aria-label="contact-me">
                    📞
                  </span>
                  <span className="darkText">(+91) 89397</span>-17211
                </h5>
              </a>
            </Card>
            <Card>
              <a href="mailto:mafrozekk@gmail.com">
                <h5 className="thinText whiteText">
                  <span role="img" aria-label="mail-box">
                    📮
                  </span> mafrozekk@<span className="darkText">
                    gmail.com
                  </span>
                </h5>
              </a>
            </Card>
          </Card>
        </span>
        <ShareContent />
      </div>;
}

const SocialIcons = () => {
  return(
    <Fragment>
      <span><a href="https://github.com/droidmakk"><img className="social-con" src={GithubWhite} alt="GitHub"/></a></span>
      <span><a href="https://linkedin.com/in/droidmakk"><img className="social-con" src={LinkedInWhite} alt="LinkedIn"/></a></span>
      <span><a href="https://twitter.com/droidmakk"><img className="social-con" src={TwitterWhite} alt="Twitter"/></a></span>
    </Fragment>
  )
}

export default TagDetails;