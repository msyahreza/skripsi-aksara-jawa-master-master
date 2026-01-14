/* eslint-disable jsx-a11y/no-redundant-roles */
/**
 * /* eslint-disable jsx-a11y/no-redundant-roles
 *
 * @format
 */

/**
 * /* eslint-disable jsx-a11y/no-redundant-roles
 *
 * @format
 */

/* eslint-disable jsx-a11y/alt-text */
/**
 * /* eslint-disable jsx-a11y/no-redundant-roles
 *
 * @format
 */

/** @format */
import logo from "../image/image-1.png";
import { useNavigate } from "react-router-dom";
function Home() {
	let navigate = useNavigate();
	return (
		<div>
			<div className="HomePage">
				<div className="container-xxl container-fluid">
					<div className="row gap-lg-0 gap-5">
						<div className="col-lg-6 col-5 my-auto">
							<img src={logo} className="img-fluid" />
						</div>
						<div className="col-lg-6 col-5 my-auto">
							<h1 className="header-title fw-bold">
								Selamat Datang di Aplikasi Pembelajaran Aksara Jawa
							</h1>
							<button
								class="btn-home text-lg rounded-pill fw-bold"
								role="button"
								onClick={() => {
									navigate("/about");
								}}
							>
								Lanjutkan
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
