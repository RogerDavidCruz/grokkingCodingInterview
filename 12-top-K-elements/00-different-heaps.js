//Option 1 - custom poor man's heap

class Heap {
    constructor (comparator) {
        this.comparator = comparator;
        this.values = [];
        this.length = 0;
    }

    peek() {
        return this.values[this.values.length - 1] || null;
    }

    pop() {
        let popped = this.values.pop()
        this.length--
        this.values.sort(this.comparator)
        return popped;
    }

    push(val) {
        this.values.push(val)
        this.length++
        this.values.sort(this.comparator)
    }
}

//Option 2 - custom heap from leetcode

 class Heap {
	constructor(comparator) {
		this.size = 0;
		this.values = [];
		this.comparator = comparator || Heap.minComparator;
	}

	add(val) {
		this.values.push(val);
		this.size ++;
		this.bubbleUp();
	}

	peek() {
		return this.values[0] || null;
	}

	poll() {
		const max = this.values[0];
		const end = this.values.pop();
		this.size --;
		if (this.values.length) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max;
	}

	bubbleUp() {
		let index = this.values.length - 1;
		let parent = Math.floor((index - 1) / 2);

		while (this.comparator(this.values[index], this.values[parent]) < 0) {
			[this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
			index = parent;
			parent = Math.floor((index - 1) / 2);
		}
	}

	bubbleDown() {
		let index = 0, length = this.values.length;

		while (true) {
			let left = null,
				right = null,
				swap = null,
				leftIndex = index * 2 + 1,
				rightIndex = index * 2 + 2;

			if (leftIndex < length) {
				left = this.values[leftIndex];
				if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
			}

			if (rightIndex < length) {
				right = this.values[rightIndex];
				if ((swap !== null && this.comparator(right, left) < 0) || (swap === null && this.comparator(right, this.values[index]))) {
					swap = rightIndex;
				}
			}
			if (swap === null) break;

			[this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
			index = swap;
		}
	}
}

//Option 3 - custom heap from grokking

class Heap {
    constructor(comparator) {
        this.data = [];
        this.comparator = comparator;
        this.length = 0;
    }

    root() {
        return this.data.length > 0 ? this.data[0] : undefined;
    }

    add(num) {
        if (!num) {
            throw new Error("Please insert a number");
        }

        this.data.push(num);
        this.length += 1;
        this._bubbleUp();
    }

    remove() {
        if (this.data.length === 0) {
            throw new Error("Nothing to remove");
        }

        const removedRoot = this.data[0];
        const end = this.data.pop();
        this.length -= 1;

        if (this.data.length > 0) {
            this.data[0] = end;
            this._bubbleDown();
        }

        return removedRoot;
    }

    _bubbleUp() {
        // bubble up the last element, i
        // if parent should be smallest, if parent smallest break
        let i = this.data.length - 1;
        while (i > 0) {
            if (
                this.comparator(this.data[this._parentIdx(i)], this.data[i]) <=
                0
            ) {
                break;
            }
            this.swap(i, this._parentIdx(i));
            i = this._parentIdx(i);
        }
    }

    _bubbleDown() {
        let i = 0;
        const element = this.data[0];

        while (true) {
            let swapIndex = null;
            let leftIndx = this._leftChildIdx(i);
            let rightIndx = this._rightChildIdx(i);

            if (
                leftIndx < this.data.length &&
                this.comparator(this.data[leftIndx], this.data[i]) < 0
            ) {
                swapIndex = leftIndx;
            }

            if (
                rightIndx < this.data.length &&
                this.comparator(
                    this.data[rightIndx],
                    this.data[swapIndex] || element
                ) < 0
            ) {
                swapIndex = rightIndx;
            }

            if (swapIndex === null) break;

            this.swap(swapIndex, i);
            i = swapIndex;
        }
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }

    _parentIdx(i) {
        return Math.floor((i + 1) / 2) - 1;
    }

    _leftChildIdx(i) {
        return i * 2 + 1;
    }

    _rightChildIdx(i) {
        return i * 2 + 2;
    }
}