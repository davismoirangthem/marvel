import mcuHeroes from '../mockdata/mcuHeroes';

function getMcuHeroData(heroId){
  return mcuHeroes[heroId];
}

const mcuController = {
  getMcuHeroData
}

export default mcuController;
