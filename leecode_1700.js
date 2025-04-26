/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

class Queue1 {
    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value) {
        this.data[this.tail++] = value;
    }

    dequeue() {
        return this.data[this.head++];
    }

    front() {
        return this.data[this.head];
    }

    size() {
        return this.tail - this.head;
    }

    isEmpty() {
        return this.size() === 0;
    }

    toArray() {
        return this.data.slice(this.head, this.tail);
    }
}
var countStudents = function(students, sandwiches) {
    const queue = new Queue();
    for (let s of students) queue.enqueue(s);

    let i = 0; 
    let pass = 0;

    while (!queue.isEmpty() && pass < queue.size()) {
        if (queue.front() === sandwiches[i]) {
            queue.dequeue();
            i++;
            pass = 0;
        } else {
            queue.enqueue(queue.dequeue());
            pass++;
        }
    }
    return queue.size();
};

/* 
Link:- https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/submissions/1617508014/

Time Complexity:- O(n)

for (let s of students) queue.enqueue(s); Runs O(n) time for n students.
Each student is processed at most twice: Once they are either dequeued to eat Or they get rotated back into the queue → So total iterations = O(n)
Space Complexity:- O(n)

The queue.data array holds up to n student values. → Space = O(n)
students and sandwiches are both size n. → Combined: O(n)

*/