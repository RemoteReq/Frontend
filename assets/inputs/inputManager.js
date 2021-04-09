const { writeFile } = require('fs');
const { keySkills } = require('./inputs.js');

function stringToObjects(list) {
  const newList = [];

  list.map((item) => {
    const entry = {
      value: item,
      label: item,
    };

    newList.push(entry);
  });

  writeFile('./new-keySkills.js', JSON.stringify(newList), 'utf8', () => { console.log('complete!'); });
}

stringToObjects(keySkills);