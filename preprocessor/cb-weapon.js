const utils = require('./cb-utils');

module.exports = (id, props) => {
  const properties = props[0];
  const stat1 = props[1];
  const stat2 = props[2];
  const stat3 = props[3];
  const cosmetics = +props[5];
  const blade = (cosmetics & 0xff).toString();
  const crossguard = ((cosmetics >> 8) & 0xff).toString();
  const grip = ((cosmetics >> 16) & 0xff).toString();
  const pommel = ((cosmetics >> 24) & 0xff).toString();
  const burnPoints = +props[6];
  const bonusPower = +props[7];
  const weaponType = +props[8];

  const stat1Value = +stat1;
  const stat2Value = +stat2;
  const stat3Value = +stat3;

  const statPattern = utils.getStatPatternFromProperties(+properties);
  const stat1Type = utils.statNumberToName(utils.getStat1Trait(statPattern));
  const stat2Type = utils.statNumberToName(utils.getStat2Trait(statPattern));
  const stat3Type = utils.statNumberToName(utils.getStat3Trait(statPattern));

  const lowStarBurnPoints = burnPoints & 0xff;
  const fourStarBurnPoints = (burnPoints >> 8) & 0xff;
  const fiveStarBurnPoints = (burnPoints >> 16) & 0xff;

  const element = utils.traitNumberToName(
    utils.getElementFromProperties(+properties),
  );
  const stars = utils.getStarsFromProperties(+properties);

  return {
    id,
    stars,
    element,
    stat1Type,
    stat2Type,
    stat3Type,
    stat1Value,
    stat2Value,
    stat3Value,
    blade,
    crossguard,
    grip,
    pommel,
    lowStarBurnPoints,
    fourStarBurnPoints,
    fiveStarBurnPoints,
    bonusPower,
    weaponType,
  };
};
