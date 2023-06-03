const db = [];

exports.getAll = () => db.slice();

exports.create = (cubeData) => {
  const newCube = {
    id: db.length + 1,
    ...cubeData,
  };

  db.push(newCube);

  return newCube;
};

