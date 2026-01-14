/* eslint-disable jsx-a11y/alt-text */
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
/** @format */
import { useNavigate } from "react-router-dom";
import logo from "../image/image-aksara.png";

function About() {
	let navigate = useNavigate();
	return (
		<div className="AboutPage">
			<div className="ps-lg-0">
				<h2 className="about-title text-4xl fw-bold color-palette-5 mb-30">
					Pengenalan Aksara Jawa
				</h2>
				<p className="about-content text-lg fw-medium color-palette-5 mb-14 ">
					Aksara Jawa adalah salah satu aksara tradisional Indonesia yang
					berkembang di pulau Jawa. Aksara Jawa aktif digunakan dalam sastra
					maupun tulisan sehari-hari masyarakat Jawa sejak pertengahan abad
					ke-15 hingga pertengahan abad ke-20 sebelum fungsinya berangsur-angsur
					tergantikan dengan huruf Latin. Aksara Jawa terdiri dari 20 aksara
					seperti dibawah ini
				</p>
				<div className="main-content">
					<img src={logo} className="img-about" />
				</div>
				<div className="d-flex flex-lg-row flex-column gap-4">
					<button
						class="btn-about text-lg rounded-pill fw-bold"
						role="button"
						onClick={() => {
							navigate("/Latihan1");
						}}
					>
						Lanjutkan
					</button>
				</div>
			</div>
		</div>
	);
}

export default About;
