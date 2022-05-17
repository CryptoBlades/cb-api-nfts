const utils = require('./cb-utils');

module.exports = (id, props) => {
  const properties = props[0];
  const stat1 = props[1];
  const stat2 = props[2];
  const stat3 = props[3];

  const stat1Value = +stat1;
  const stat2Value = +stat2;
  const stat3Value = +stat3;

  const statPattern = utils.getStatPatternFromProperties(+properties);
  const stat1Type = utils.statNumberToName(utils.getStat1Trait(statPattern));
  const stat2Type = utils.statNumberToName(utils.getStat2Trait(statPattern));
  const stat3Type = utils.statNumberToName(utils.getStat3Trait(statPattern));

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
  };
};
