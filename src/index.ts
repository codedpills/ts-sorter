class Sorter {
    constructor(public collection: number[] | string) {
    }

    sort = (): void => {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

                // only works if collection is number[]
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        let leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }

                // only works if collection is string
                if (typeof this.collection === 'string') {
                    
                }
            }
        }
    }
}

const sorter = new Sorter([-1, 4, 5, 0, 23]);
sorter.sort()

console.log(sorter.collection);