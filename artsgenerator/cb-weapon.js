const img1 = require('@/assets/weapons/weapon2.png');
const img2 = require('@/assets/weapons/weapon2.png');
const img3 = require('@/assets/weapons/weapon3.png');
const img4 = require('@/assets/weapons/weapon4.png');
const img5 = require('@/assets/weapons/weapon5.png');
const img6 = require('@/assets/weapons/weapon6.png');
const img7 = require('@/assets/weapons/weapon7.png');


const allImages = [img1, img2, img3, img4, img5, img6, img7];

module.exports = (weapon) => {
  if(!weapon) return;
  
  return allImages[weapon.id % allImages.length]; 
};
