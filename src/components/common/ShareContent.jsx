import React,{ Component } from 'react';
import sharenetwork from '../../assets/network.svg';
import pdficon from '../../assets/pdf.svg';
import download from '../../assets/download.svg';
import './ShareContent.css';

class ShareContent extends Component {

    shareMe(){
        console.log('Sharing content');
        if (navigator.share) {
            navigator.share({
                title: 'Droid Makk\' Site',
                text: 'Dev Rocks ✊!',
                url: 'https://droidmakk.github.io'
            })
                .catch(() => alert('That\' Rude 🤨'));
        }else{
            alert('🤔 I Think... \nMaybe its not \nSupported!');
        }
    }

    render(){
        return (
            <div className="shareContent">
                <div className="shareHolder" onClick={this.shareMe.bind(this)}>
                    <img className="shareIcon" src={sharenetwork} alt="share" />    
                </div>
                <div className="exportPdf">
                    <div className="pdfText marginAuto"><h3 className="thinText">Download as PDF</h3></div>
                    <div className="pdfIcon marginAuto" ><img className="" src={pdficon} alt="PDF Icon"/></div>
                    <div className="pdfIcon marginAuto" ><img className="downloadSvg" src={download} alt="Download Icon"/></div>                    
                </div>
            </div>
        );
    }
}


export default ShareContent;