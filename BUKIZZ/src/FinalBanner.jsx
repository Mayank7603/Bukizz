import "./FinalBanner.css";

export default function FinalBanner() {
  return (
    <>
      <div className="finalBannerMainBox">
        <div className="textArea">
          <h2 className="bannerText">Imagine a Streamlined School.</h2>
          <h2 className="bannerText">
            Talk to Bukizz Experts and Make it Real
          </h2>
          <div className="bannerButtonBox">
            <button className="bannerButton">Book Free Demo</button>
          </div>
        </div>
        <div>
          <img src="finalBannerRect.png" className="bannerImage"></img>
        </div>
      </div>
    </>
  );
}
