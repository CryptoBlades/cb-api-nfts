const utils = require('./cb-utils');

module.exports = (id, props) => {
  const xp = props[0];
  const level = parseInt(props[1], 10);
  const element = utils.traitNumberToName(+props[2]);
  const staminaTimestamp = props[3];
  const head = props[4];
  const arms = props[5];
  const torso = props[6];
  const legs = props[7];
  const boots = props[8];
  const race = props[9];

  return {
    id,
    xp,
    level,
    element,
    head,
    arms,
    torso,
    staminaTimestamp,
    legs,
    boots,
    race,
  };
};
