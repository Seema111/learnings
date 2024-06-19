// Minimum Number of Days to Make m Bouquets
// You are given an integer array bloomDay, an integer m and an integer k.

// You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

// The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

// Return the minimum number of days you need to wait to be able to make m bouquets from the garden. 
// If it is impossible to make m bouquets return -1.

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    const n = bloomDay.length;
    if (m * k > n) {
        return -1;
    }
    
    const canMakeBouquets = (day) => {
        let bouquets = 0;
        let flowers = 0;
        for (let i = 0; i < n; i++) {
            if (bloomDay[i] <= day) {
                flowers++;
                if (flowers === k) {
                    bouquets++;
                    flowers = 0;
                    if (bouquets === m) {
                        return true;
                    }
                }
            } else {
                flowers = 0;
            }
        }
        return false;
    };
    
    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (canMakeBouquets(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    
    return canMakeBouquets(low) ? low : -1;
};

// Reference for different approaches
// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/editorial/