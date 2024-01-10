// import image1 from ".\\public\\slide-1.png";
// import image2 from ".\\public\\slide-1.png";
// import image3 from ".\\public\\slide-1.png";
// import image4 from ".\\public\\slide-1.png";

export const images = [
  "public/slide-1.png",
  "public/slide-1.png",
  "public/slide-1.png",
  "public/slide-1.png",
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
