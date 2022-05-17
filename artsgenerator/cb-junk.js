const img1 = require('@/assets/junk/junk1.png');
const img2 = require('@/assets/junk/junk2.png');
const img3 = require('@/assets/junk/junk3.png');
const img4 = require('@/assets/junk/junk4.png');
const img5 = require('@/assets/junk/junk5.png');
const img6 = require('@/assets/junk/junk6.png');

const allImages = [img1, img2, img3, img4, img5, img6];

module.exports = (junk) => {
  if(!junk) return;
  
  return allImages[junk.id % allImages.length];
};
