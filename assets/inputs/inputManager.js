const { writeFile } = require('fs');
const { locations } = require('./inputs.js');

function stringToObjects(list) {
  const newList = [];

  list.map((item) => {
    const entry = {
      value: item,
      label: item,
    };

    newList.push(entry);
  });

  writeFile('./new-locations.js', JSON.stringify(newList), 'utf8', () => { console.log('complete!'); });
}

stringToObjects(locations);