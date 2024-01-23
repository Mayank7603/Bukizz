import "./Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbarMainBox h-20 w-full mx-12">
      <div className="navbarTextSection">
        <div className="logoBox">
          <div className="logo">
            <svg
              width="19"
              height="31"
              viewBox="0 0 19 31"
              fill="none"
              className="logoSVG"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4468 2.64864C18.4468 0.88833 16.3368 -0.013426 15.0646 1.20314L0.617795 15.0174C0.223203 15.3948 1.21207e-05 15.917 1.20252e-05 16.4629L9.94658e-06 28.3513C9.6388e-06 30.1116 2.10996 31.0133 3.38223 29.7968L17.829 15.9825C18.2236 15.6052 18.4468 15.0829 18.4468 14.537L18.4468 2.64864Z"
                fill="#49108B"
              />
            </svg>
            <svg
              width="19"
              height="31"
              viewBox="0 0 19 31"
              fill="none"
              className="logoSVG"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7319 2.64864C18.7319 0.88833 16.622 -0.013426 15.3497 1.20314L0.902951 15.0174C0.508359 15.3948 0.285168 15.917 0.285168 16.4629L0.285166 28.3513C0.285166 30.1116 2.39512 31.0133 3.66738 29.7968L18.1141 15.9825C18.5087 15.6052 18.7319 15.0829 18.7319 14.537L18.7319 2.64864Z"
                fill="#39A7FF"
              />
            </svg>
          </div>
          <div>
            <h1 className="logoHeading">Bukizz</h1>
          </div>
        </div>
        <div className="navHeadingBox">
          <div className="navHeadingSolutions">
            <p>Solutions</p>
            <button className="expandMoreSVG">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="expandMoreSVGElement"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99951 7.8751L-0.000488281 1.8751L1.39951 0.475098L5.99951 5.0751L10.5995 0.475098L11.9995 1.8751L5.99951 7.8751Z"
                  fill="#3D3B40"
                  fillOpacity="0.8"
                />
              </svg>
            </button>
          </div>
          <div className="navHeadingContactUs">
            <Link to={"/contact"}><p>Contact Us</p></Link>
          </div>
          <div className="navHeadingAboutUs">
            <p>About us</p>
          </div>
        </div>
      </div>
      <button className="navbarButton">Book Free Demo</button>
    </nav>
  );
}
