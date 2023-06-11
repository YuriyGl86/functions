// TODO: write your code here


const healthLevel = {
  health: {
    color: 'green',
    level: 50,
  },
  wounded: {
    color: 'yellow',
    level: 15,
  },
  critical: {
    color: 'red',
    level: 0,
  },
};

export default function showHealthColor(character) {
  if (character.health > healthLevel.health.level) {
    return healthLevel.health.color;
  }

  if (character.health > healthLevel.wounded.level) {
    return healthLevel.wounded.color;
  }

  if (character.health > healthLevel.critical.level) {
    return healthLevel.critical.color;
  }
  return undefined;
}
