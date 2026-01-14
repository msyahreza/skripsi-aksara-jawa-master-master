/** @format */

import React from "react";

class Label extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			classID: -1,
			className: "",
		};
	}

	getClassified = () => {
		if (this.state.classID === -1) {
			return "";
		}
		return `./classification_orig/${this.state.className}.png`;
	};

	changeState = (id, name) => {
		this.setState({
			classID: id,
			className: name,
		});
	};

	render() {
		const imgUrl = this.getClassified();
		return (
			<div className="Label">
				<div className="col-lg-6 col-5 my-auto">
					<h2 className="about-label text-4xl fw-bold mb-30">
						Hasil Jawaban
					</h2>
					<p>{this.state.className}</p>
					<img src={imgUrl} alt={this.state.className}></img>
				</div>
			</div>
		);
	}
}

export default Label;
