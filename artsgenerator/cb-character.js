const img1 = require('@/assets/characters/chara-0.png');
const img2 = require('@/assets/characters/chara-1.png');
const img3 = require('@/assets/characters/chara-2.png');
const img4 = require('@/assets/characters/chara-3.png');

const allImages = [img1, img2, img3, img4];

module.exports = (character) => {
  if(!character) return;
  
  return allImages[character.id % allImages.length];
};
