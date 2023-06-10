const uniqid = require('uniqid')
const db = [
  {
    id: 'hg8igt8lipwlvdg',
    name: 'Classic rubic cube',
    description: 'Cool cube',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuFX_QLa5u3t0fn2S3bSlTqX-lSLvvbsZBw&usqp=CAU",
    difficultyLevel: 4,
  },
  {
    id: 'qtwncteh562kane',
    name: 'Pyramid',
    description: 'Cool pyramid',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIvpMVAWW5KnJX-kmM-qlIrFBUk5irC3G3TMt4HXTC1CUtBA4DUcTgucn9QPzS-1PRKI&usqp=CAU",
    difficultyLevel: 3,
  },
];

exports.getAll = (search, from, to) => {
  let result = db.slice()

  if(search) {
    result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(from) {
    result = result.filter(cube => cube.difficultyLevel >= Number(from))
  }

  if(to){
    result = result.filter(cube => cube.difficultyLevel <= Number(to))
  }

  return result
};

exports.getOne = (cubeId) => db.find(x => x.id == cubeId)

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  db.push(newCube);

  return newCube;
};

