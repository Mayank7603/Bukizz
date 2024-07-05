import image1 from "/feature/one.svg"
import image2 from "/feature/two.svg"
import image3 from "/feature/three.svg"
import image4 from "/feature/four.svg"
import image5 from "/feature/five.svg"

export const images = [image1, image2, image3, image4, image5];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
