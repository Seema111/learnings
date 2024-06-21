// Grumpy Bookstore Owner

// There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store.
// You are given an integer array customers of length n where customers[i] is the number of the customer that enters
//  the store at the start of the ith minute and all those customers leave after the end of that minute.

// On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 
// if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.

// When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.

// The bookstore owner knows a secret technique to keep themselves not grumpy for minutes consecutive minutes, but can only use it once.

// Return the maximum number of customers that can be satisfied throughout the day.

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    const n = customers.length;
    let satisfied = 0;
    let maxAdditionalSatisfied = 0;
    let currentAdditionalSatisfied = 0;

    // Calculate initial satisfied customers without using the technique
    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 0) {
            satisfied += customers[i];
        }
    }

    // Calculate additional satisfied customers by applying the technique
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            currentAdditionalSatisfied += customers[i];
        }
    }

    maxAdditionalSatisfied = currentAdditionalSatisfied;

    for (let i = minutes; i < n; i++) {
        if (grumpy[i] === 1) {
            currentAdditionalSatisfied += customers[i];
        }
        if (grumpy[i - minutes] === 1) {
            currentAdditionalSatisfied -= customers[i - minutes];
        }

        if (currentAdditionalSatisfied > maxAdditionalSatisfied) {
            maxAdditionalSatisfied = currentAdditionalSatisfied;
        }
    }

    return satisfied + maxAdditionalSatisfied;
};