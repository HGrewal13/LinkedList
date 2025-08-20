import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if(this.listHead == null) {
            let tmp = new Node(value);
            this.listHead = tmp;
        } else {
            let tmp = this.listHead;
            while(tmp.next != null) {
                tmp = tmp.next;
            }
            tmp.next = new Node(value);
        }
    }

    prepend(value) {
        if(this.listHead == null) {
            this.append(value);
        } else {
            let tmp = new Node(value);
            tmp.next = this.listHead;
            this.listHead = tmp;
        }
    }

    size() {
        let size = 0;
        let tmp = this.listHead;
        while(tmp != null) {
            size += 1;
            tmp = tmp.next;
        }
        return size;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let tmp = this.listHead;
        while(tmp.next != null) {
            tmp = tmp.next;
        }
        return tmp;
    }

    at(index) {
        if(index > this.size()) {
            console.error("Error: Given value exceeds list size");
            return;
        }
        else {
            let count = 0;
            let tmp = this.listHead;
            while(count != index) {
                tmp = tmp.next;
                count ++;
            }
            return tmp;
        }
    }

    pop() {
        let tmp = this.listHead;
        while(tmp.next.next != null) {
            tmp = tmp.next;
        }
        tmp.next = null;
        return;
    }

    contains(value) {
        let tmp = this.listHead;
        while(tmp != null && tmp.value != value) {
            tmp = tmp.next;
        }
        return tmp != null;
    }

    find(value) {
        let index = 0;
        let tmp = this.listHead;
        while(tmp != null && tmp.value != value) {
            tmp = tmp.next;
            index ++;
        }
        if(tmp != null) {
            return index;
        } else {
            return "Error: no node contains input value";
        }
    }

    toString() {
        let tmp = this.listHead;
        let stringList = "";
        while(tmp != null) {
            stringList += `(${tmp.value}) -> `;
            tmp = tmp.next;
        }
        return stringList + "null";
    }

    // Extra Methods
    insertAt(value, index) {
        if(index > this.size()) {
            console.error("Error: Given index exceeds list size");
            return;
        } else if(index == 0) {
            this.prepend("z");
        } else {
            let tmp = this.listHead;
            for(let i = 0; i < index-1; i++) {
                console.log("tmp: ", tmp);
                tmp = tmp.next;
            }
            let placeholderTmp = tmp.next;
            tmp.next = new Node(value);
            tmp.next.next = placeholderTmp;
            return;
        }
    }
}
