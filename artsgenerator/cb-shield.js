const img1 = require('@/assets/shields/shield-01.png');
const img2 = require('@/assets/shields/shield-02.png');

const allImages = [img1, img2];

module.exports = (shield) => {
  if(!shield) return;
  
  if(shield.shieldFlag === 1) {
    return allImages[0];
  }else{
    return allImages[1];
  }
};
