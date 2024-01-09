import "./InstallBanner.css";
function InstallBanner() {
  return (
    <>
      <div className="installBannerMainBox">
        <div className="rectBox">
          <img className="rect1" src="rect1.png"></img>
          <img className="rect2" src="rect2.png"></img>
        </div>
        <img className="img1" src="img1.png"></img>
        <img className="img2" src="img2.png"></img>
        <div className="textArea">
          <h2 className="headline">One App for all your Student’s Need</h2>
          <div className="buttons">
            <button className="playstoreButton"></button>
            <button className="appstoreButton"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstallBanner;
