import "./InstallBanner.css";

function InstallBanner() {
  return (
    <>
      <div className="z-10 h-40 relative">
        <div className="rectBox bg-gradient-to-l from-blue-600 to-sky-400 h-56 flex mx-28 rounded-3xl flex-row-reverse relative">
          <div className="flex">
            <img className="img2 h-[225px] rounded-3xl relative" src="img2.png"></img>
            <img className="img1 h-[200px] z-10 absolute right-24" src="img1.png"></img>
          </div>
          
          <img className="rect2 absolute left-28 h-[225px]" src="rect2.png"></img>
          <img className="rect1  absolute left-0 h-[224px] rounded-3xl" src="rect1.png"></img>
          
          <h2 className="text-white text-4xl font-semibold absolute left-12 top-7 text-left leading-[50px]">One App for all your Student's <br/> Need</h2>
            <button className="playstoreButton absolute left-12 top-36">
              <img src="playstore.png" className="h-[58px]"/>
            </button>
            <button className="appstoreButton  absolute left-[270px] top-36">
              <img src="appstore.png" className="h-[58px]"/>
            </button>
        </div>
      </div>
    </>
  );
}

export default InstallBanner;
