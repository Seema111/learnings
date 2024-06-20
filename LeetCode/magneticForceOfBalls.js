// Magnetic Force Between Two Balls

// In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket.
// Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such
// that the minimum magnetic force between any two balls is maximum.

// Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

// Given the integer array position and the integer m. Return the required force.

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */

function maxDistance(position, m) {
    // Helper function to determine if we can place m balls with at least minForce distance
 function canPlaceBalls(minForce) {
     let count = 1; // We place the first ball in the first basket
     let lastPosition = position[0]; // The position of the last placed ball

     for (let i = 1; i < position.length; i++) {
         if (position[i] - lastPosition >= minForce) {
             count++;
             lastPosition = position[i];
             if (count === m) {
                 return true;
             }
         }
     }
     return false;
 }

 // Sort the positions
 position.sort((a, b) => a - b);

 // Binary search setup
 let left = 1;
 let right = position[position.length - 1] - position[0];
 let result = 0;

 while (left <= right) {
     let mid = Math.floor((left + right) / 2);

     if (canPlaceBalls(mid)) {
         result = mid;
         left = mid + 1; // Try for a larger distance
     } else {
         right = mid - 1; // Try for a smaller distance
     }
 }

 return result;
}

// Solution Editorial Explanation Link:
// https://leetcode.com/problems/magnetic-force-between-two-balls/editorial/?envType=daily-question&envId=2024-06-20