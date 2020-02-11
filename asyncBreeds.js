// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function(breed, functionAfterData) {
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    if (!error) {
      functionAfterData(data);
    } else {
      functionAfterData(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;
