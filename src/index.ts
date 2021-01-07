import { Sorter } from './Sorter';
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([-1, 4, 5, 1000, 0, 23])

const sorter = new Sorter(numbersCollection);
sorter.sort()

console.log(numbersCollection.data);