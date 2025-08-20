import LinkedList from "./linkedList.js";

console.log("main.js");

// const list1 = new LinkedList;
// list1.prepend("prepend empty list");
// list1.append("a");
// list1.append("b");
// // list1.prepend("prepend non-empty list");
// console.log(list1.toString());
// console.log(list1.size());
// console.log(list1.head());
// console.log(list1.tail());
// console.log(list1.at(1));
// list1.pop();
// console.log(list1.size(), list1.toString());
// list1.append("b");
// console.log(list1.size(), list1.toString());
// console.log("contains method");
// console.log(list1.contains("b"));
// console.log(list1.contains("c"));
// console.log("find method: ");
// console.log(list1.find("c"));
// list1.insertAt("z", 1);
// console.log(list1.size(), list1.toString());

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());