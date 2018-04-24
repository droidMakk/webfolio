import React from 'react';
import Card from './Card';
import ShareContent from './ShareContent.jsx';

const TagDetails = () => {
    return <div className="tagDetails">
        <span itemptype="">
        <Card>
          <Card>
            <h2 className="displayInline whiteText thinText">
              Afroze <span className="darkText">Kabeer</span>
            </h2>
          </Card>
          <Card>
            <h2 className="whiteText thinText">Khan. M</h2>
          </Card>
        </Card>
        </span>
        <span  itemScope itemType="http://schema.org/ContactPoint">
        <Card>
          <Card>
            <a href="tel:+91-8939717211">
              <h5 className="thinText whiteText">
                <span role="img" aria-label="contact-me">
                  📞
                </span>
                <span className="darkText" itemProp="telephone">
                  (+91) 89397
                </span>-17211
              </h5>
            </a>
          </Card>
          <Card>
            <a href="mailto:mafrozekk@gmail.com">
              <h5 className="thinText whiteText" itemProp="email">
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