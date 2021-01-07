import { Sorter } from './Sorter';
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([-1, 4, 5, -1000, 0, 23])
// numbersCollection.sort()
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("aabbsstzzy");
charactersCollection.sort();
console.log(charactersCollection.data);
