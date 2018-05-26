import React,{ Component, Fragment } from 'react';
import sharenetwork from '../../assets/network.svg';
import pdficon from '../../assets/pdf.svg';
import './ShareContent.css';

class ShareContent extends Component {

    shareMe(){
        console.log('Sharing content');
        if (navigator.share) {
            navigator.share({
                title: 'Droid Makk\' Site',
                text: 'Full Stack Dev ✊!',
                url: 'https://droidmakk.ml'
            })
                .catch(() => {  });
        }else{
            alert('🤔 I Think... \nMaybe its not \nSupported!');
        }
    }

    downloadPdf(){
        window.location = "https://tinyurl.com/droidmakk";
    }

    render(){
        return <Fragment>
            <div className="exportAll">
              <div className="exportPdf">
                <div className="pdfText marginAuto" onClick={this.downloadPdf}>
                  <h3 className="thinText">Download as PDF</h3>
                </div>
                <div className="pdfIcon marginAuto" onClick={this.downloadPdf}>
                  <img className="pdfImage" src={pdficon} alt="PDF Icon" />
                </div>
              </div>
              <div className="shareHolder">
                <img className="shareIcon" onClick={this.shareMe.bind(this)} src={sharenetwork} alt="share" />
                <span
                  style={{
                    fontSize: 20,
                    verticalAlign: "-webkit-baseline-middle",
                    paddingLeft: 5
                  }}
                >
                  Share
                </span>
              </div>
            </div>
          </Fragment>;
    }
}


export default ShareContent;