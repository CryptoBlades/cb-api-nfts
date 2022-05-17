const utils = {
  WeaponElement: {
    Fire: 0,
    Earth: 1,
    Lightning: 2,
    Water: 3,
  },

  WeaponTrait: {
    STR: 0,
    DEX: 1,
    CHA: 2,
    INT: 3,
    PWR: 4,
  },

  traitNumberToName: (traitNum) => {
    switch (traitNum) {
    case utils.WeaponElement.Fire:
      return 'Fire';
    case utils.WeaponElement.Earth:
      return 'Earth';
    case utils.WeaponElement.Lightning:
      return 'Lightning';
    case utils.WeaponElement.Water:
      return 'Water';
    default:
      return '';
    }
  },

  statNumberToName: (statNum) => {
    switch (statNum) {
    case utils.WeaponTrait.CHA:
      return 'CHA';
    case utils.WeaponTrait.DEX:
      return 'DEX';
    case utils.WeaponTrait.INT:
      return 'INT';
    case utils.WeaponTrait.PWR:
      return 'PWR';
    case utils.WeaponTrait.STR:
      return 'STR';
    default:
      return '';
    }
  },

  getStatPatternFromProperties: (properties) => (properties >> 5) & 0x7f,
  getElementFromProperties: (properties) => (properties >> 3) & 0x3,
  getStarsFromProperties: (properties) => properties & 0x7,
  getStat1Trait: (statPattern) => statPattern % 5,
  getStat2Trait: (statPattern) => Math.floor(statPattern / 5) % 5,
  getStat3Trait: (statPattern) =>
    Math.floor(Math.floor(statPattern / 5) / 5) % 5,
};

module.exports = utils;
