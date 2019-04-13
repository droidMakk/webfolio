import React from "react";
import { AnimationComponent } from "../components/common";
import { articlelist } from "../articles";
import { ArticleCard } from "../components";

export class ListBlogs extends React.Component {
	render() {
		return (
			<AnimationComponent>
				<div className="displaydetailcard">
					<p className="displaydetailTitle">
						{`So i write...`}
						<span role="img" aria-label="">
							✍🏼
						</span>{" "}
					</p>
					<hr/>
					<div className="bloglistholder" >
						{articlelist.map(article => (
							<ArticleCard key={article.title+article.description} {...article} />
						))}
					</div>
				</div>
			</AnimationComponent>
		);
	}
}
