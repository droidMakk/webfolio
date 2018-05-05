import React from 'react';
import Card from './Card';
import ShareContent from './ShareContent.jsx';

const TagDetails = () => {
    return <div className="tagDetails">
        <span>
          <Card>
            <h2 className="displayInline whiteText thinText">
              Afroze <span className="darkText">Kabeer</span>
            </h2>
            <h2 className="whiteText thinText">Khan. M</h2>
          </Card>
        </span>
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

export default TagDetails;