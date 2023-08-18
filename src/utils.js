
function findDogByName(dogsArray, targetName) {
    console.log('dogsArray', dogsArray);
    console.log('targetName', targetName);
    for (const dog of dogsArray) {
      if (dog.name.toLowerCase() === targetName.toLowerCase()) {
        return dog; // Return the matching dog object
      }
    }
    return null; // If no match is found
  }

  export default findDogByName;