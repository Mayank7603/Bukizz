import image1 from "/carousel/slide1.png";
import image2 from "/carousel/slide2.png";
import image3 from "/carousel/slide3.png";
import image4 from "/carousel/slide4.png";

export const images = [
  image1, image2, image3, image4
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
