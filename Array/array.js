// will create an array class from scratch , will not use any js array methods
// will make all the methods from scratch

const DEFAULT_CAPACITY = 10;

class CustomArray {
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.array = new Array(capacity);
    // if we don,t define length then to calculate it everytime we will need to iterate through the array everytime .
    //  This will be a problem , so we will define it as a property,and we will update it everytime we push or pop .
    // Now this may take extra space , but it will be worth it , because we will be able to use it in all the methods. and will reduce the time complexity.
    this.length = 0;
  }

  #checkIndex(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Invalid index");
    }
  }

  //constant time complexity O(1) + constant space complexity O(1)
  push(value) {
    this.array[this.length++] = value;
  }

  pop() {
    if (this.length === 0) {
      throw new Error("Array is empty");
    }
    this.array[this.length - 1] = null;
    this.length--;
  }

  insert(index, value) {
    this.#checkIndex(index);

    //Entering at the end of the array
    // whithout this the loop will trigger and do one unnecessary shift
    if (index === this.length) {
      this.array[index] = value;
      this.length++;
      return;
    }

    //linear time complexity as it will depend on the length of the array
    // linear time complexity O(n) + constant space complexity O(n)
    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }

    this.array[index] = value;
    this.length++;
  }

  remove(index) {
    this.#checkIndex(index);

    const element = this.array[index];

    if (index === this.length - 1) {
      this.array[index] = null;
      this.length--;
      return element;
    }

    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i - 1];
    }
    this.length--;

    return element;
  }

  // linear time complexity as it will depend on the length of the array
  // linear time complexity O(n) +  space complexity O(n) , space complexity can be constant if the size is fixed and it can be linear if the size is dynamic.
  copy() {
    const copyArray = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      copyArray[i] = this.array[i];
    }
    return copyArray;
  }
}

const myCustomArray = new CustomArray();

myCustomArray.insert(0, 1);
myCustomArray.insert(1, 2);
myCustomArray.insert(2, 3);

console.log(myCustomArray.array);

myCustomArray.insert(3, 5);
console.log(myCustomArray.array);

myCustomArray.pop();
myCustomArray.pop();

console.log(myCustomArray.array);
