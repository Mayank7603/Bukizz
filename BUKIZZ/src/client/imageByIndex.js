import image1 from "/carousel/Property2.svg";
import image2 from "/carousel/Property1.svg";
import image3 from "/carousel/Property3.svg";

export const images = [
  image1, image2, image3
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
