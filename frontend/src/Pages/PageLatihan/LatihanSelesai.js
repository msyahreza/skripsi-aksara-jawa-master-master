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

import { useNavigate } from "react-router-dom";
function Latihan21() {
	let navigate = useNavigate();
	return (
		<div className="Latihan">
			<div className="container-xxl container-fluid">
				<div className="row gap-lg-0 gap-5">
					<div className="col-lg-6 col-5 my-auto">
						<h2 className="about-title text-4xl fw-bold color-palette-5 mb-30">
							Latihan Selesai
						</h2>
					</div>
					<button
						class="btn-latihan-back text-lg rounded-pill fw-bold"
						role="button"
						onClick={() => {
							navigate("/Latihan20");
						}}
					>
						Kembali
					</button>
					<button
						class="btn-latihan text-lg rounded-pill fw-bold"
						role="button"
						onClick={() => {
							navigate("../Home");
						}}
					>
						Halaman Utama
					</button>
				</div>
			</div>
		</div>
	);
}

export default Latihan21;
