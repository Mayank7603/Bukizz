import image1 from "/carousel/Mobile.svg";
import image2 from "/carousel/Mobile_1.svg";
import image3 from "/carousel/Mobile_2.svg";
import image4 from "/carousel/Mobile_3.svg";

export const images = [
    image1, image2, image3, image4
];

const imagebyMobile = (index) => images[index % images.length];

export default imagebyMobile;
