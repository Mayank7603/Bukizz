import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="heroSectionMainBox">
        <div className="heroTextSection">
          <div className="heroHeadline">
            <h2 className="heroHeadlineUpper">Take Your School Digital</h2>
            <h2 className="heroHeadlineLower">Manage. Automate. Engage</h2>
            <svg
              width="86"
              height="6"
              viewBox="0 0 86 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H83"
                stroke="url(#paint0_linear_509_3365)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_509_3365"
                  x1="5.50001"
                  y1="-0.50012"
                  x2="83"
                  y2="3.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#49108B" />
                  <stop offset="1" stopColor="#39A7FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="heroText">
            From books to fees, parents to progress, Bukizz puts everything at
            your fingertips.
          </div>
          <div className="heroButtonBox">
            <button className="heroButton">
              Book Free Demo{" "}
              <div className="arrowLeftSVG">
                <svg
                  width="42"
                  height="43"
                  className="arrowLeftSVGElement"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_676_205"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="42"
                    height="43"
                  >
                    <rect y="0.5" width="42" height="42" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_676_205)">
                    <path
                      d="M24.5 32L22.05 29.4625L28.2625 23.25H7V19.75H28.2625L22.05 13.5375L24.5 11L35 21.5L24.5 32Z"
                      fill="#F3F8FF"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="promotionalVideo"></div>
      </div>
    </>
  );
}

export default HeroSection;
