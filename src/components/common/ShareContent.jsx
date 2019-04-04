import React, { Component, Fragment } from "react";
import sharenetwork from "../../assets/network.svg";
import pdficon from "../../assets/pdf.svg";
import "./ShareContent.css";

export const ShareContent = () => {
	const shareMe = () => {
		if (navigator.share) {
			navigator
				.share({
					title: "Droid Makk' Site",
					text: "Full Stack Dev ✊!",
					url: "https://droidmakk.ml"
				})
				.catch(() => {});
		} else {
			alert("🤔 I Think... \nMaybe its not \nSupported!");
		}
	};
      const downloadPdf = () => {
        window.location = "https://tinyurl.com/droidmakk";
      };

	return (
		<React.Fragment>
			<div className="exportAll">
				<div className="exportPdf">
					<div
						className="pdfText marginAuto"
						onClick={downloadPdf}
					>
						<h3 className="thinText">Download as PDF</h3>
					</div>
					<div
						className="pdfIcon marginAuto"
						onClick={downloadPdf}
					>
						<img
							className="pdfImage"
							src={pdficon}
							alt="PDF Icon"
						/>
					</div>
				</div>
				<div className="shareHolder">
					<img
						className="shareIcon"
						onClick={shareMe}
						src={sharenetwork}
						alt="share"
					/>
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
		</React.Fragment>
	);
};
