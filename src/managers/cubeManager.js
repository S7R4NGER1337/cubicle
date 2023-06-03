const uniqid = require('uniqid')
const db = [];

exports.getAll = () => db.slice();

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  db.push(newCube);

  return newCube;
};

