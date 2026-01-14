/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/rules-of-hooks */
/** @format */

import logo from "../../image/Pola/Ka.png";
import { useNavigate } from "react-router-dom";
import Sketch from "../../Component/Sketch";
function Latihan5() {
	let navigate = useNavigate();
	return (
		<div className="Latihan">
			<div className="container-xxl container-fluid">
				<div className="row gap-lg-0 gap-5">
					<div className="col-lg-6 col-5 my-auto">
						<h2 className="about-title text-4xl fw-bold color-palette-5 mb-30">
							Latihan Aksara Jawa
						</h2>
						<div className="subtitle mb-30">
							<p className="text-latihan text-lg fw-medium color-palette-5 mb-14 ">
								Ikutilah aksara jawa disamping ini dan isi jawaban dengan
								menulis tangan.
							</p>
						</div>
						<div className="col-lg-6 col-5 my-auto">
							<div className="main-content">
								<img src={logo} className="img-latihan" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 my-auto">
						<Sketch />
					</div>
					<button
						class="btn-latihan-back text-lg rounded-pill fw-bold"
						role="button"
						onClick={() => {
							navigate("/Latihan4");
						}}
					>
						Kembali
					</button>
					<button
						class="btn-latihan text-lg rounded-pill fw-bold"
						role="button"
						onClick={() => {
							navigate("/Latihan6");
						}}
					>
						Lanjutkan
					</button>
				</div>
			</div>
		</div>
	);
}

export default Latihan5;
