/* ---- Déclaration de array ---- */
const array = [2, 3, 5, 5, 7];
//
//
//

/* ---- Réimplémentation de la method map ---- */
const mapArray = (array, callback) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(callback(element, index));
  }
  return newArray;
};
// Teste et appel de la fonction mapArray
console.log(`Test de la fonction mapArray : `);
console.log(mapArray(array, (item, index) => item * index));
//
//
//

/*---- Réimplémentation de la method filter ---- */
const filterArray = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callback(element, index);
  }
};
// Teste et appel de la fonction filterArray
console.log(`
Test de la fonction filterArray : `);
filterArray(array, (item, index) => console.log(`array[${index}] : ${item}`));
//
//
//

/* ---- Réimplémentation de la method some ---- */
const someArray = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callback(element, index)) {
      return true;
    }
  }
  return false;
};
// Teste et appel de la fonction someArray
console.log(`
Test de la fonction someArray : `);
console.log(someArray(array, (element) => element > 6));
console.log(someArray(array, (element) => element > 8));
//
//
//

/* ---- Réimplémentation de la method every ---- */
const everyArray = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (typeof callback(element, index) !== 'boolean') {
      return false;
    } else if (!callback(element, index)) {
      return false;
    }
  }
  return true;
};
// Teste et appel de la fonction everyArray
console.log(`
Test de la fonction everyArray : `);
console.log(everyArray(array, (element) => element < 10));
console.log(everyArray(array, (element) => element < 5));
//
//
//

/* ---- Réimplémentation de la method find ---- */
const findArray = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (typeof callback(element, index) !== 'boolean') {
      return undefined;
    } else if (callback(element, index)) {
      return element;
    }
  }
  return undefined;
};
// Teste et appel de la fonction findArray
console.log(`
Test de la fonction findArray : `);
console.log(findArray(array, (element) => element == 7));
console.log(findArray(array, (element) => element == 25));
