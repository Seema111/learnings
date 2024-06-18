// Most Profit Assigning Work

// You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:

// difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
// worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).
// Every worker can be assigned at most one job, but one job can be completed multiple times.

// For example, if three workers attempt the same job that pays $1, then the total profit will be $3. If a worker cannot complete any job, their profit is $0.
// Return the maximum profit we can achieve after assigning the workers to the jobs.

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */

var maxProfitAssignment = function (difficulty, profit, worker) {
  const jobs = [];
  for (let i = 0; i < difficulty.length; i++) {
    jobs.push([difficulty[i], profit[i]]);
  }

  // Sort jobs by difficulty, and if equal, by profit descending
  jobs.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  worker.sort((a, b) => a - b);

  let maxProfit = 0;
  let totalProfit = 0;
  let i = 0;

  for (let ability of worker) {
    while (i < jobs.length && ability >= jobs[i][0]) {
      maxProfit = Math.max(maxProfit, jobs[i][1]);
      i++;
    }
    totalProfit += maxProfit;
  }

  return totalProfit;
};


// Solution Description

// Overview
// We are given some jobs that each have a difficulty level and an amount of profit that can be made from performing the job. We also have some workers.

// You can think of these jobs as roles within a company. Each worker can have only one role, and the role must not be too difficult for them. 
// However, just like in the real world, the assigned role can be easier than what the worker is capable of handling. 
// Our goal is to assign roles to workers in a way that maximizes the company's profit.

// Constraints on n and m are 1 <= n & m <= 10000, respectively. Therefore, we need to consider an approach with linear or log-linear time complexity.

// Approach 1: Binary Search and Greedy (Sort by Job Difficulty)

// Intuition
// When assigning a job to any worker, we disregard any jobs that are too difficult and then select the job with the highest profit. 
// An example is shown below:

// If we need to choose the most optimal job for the worker algorithmically, we could use a linear search to find the maximum profit among all jobs.
// However, this approach would result in a Time Limit Exceeded (TLE) verdict since each job assignment would take O(n)O(n)O(n) time, 
// where n is the size of the job list.

// Another approach is to use a binary search for every worker. 
// We can sort the difficulty array in increasing order to apply binary search and rearrange the profits array in the same order.

// For each worker, we will find the index where the difficulty value is just less than or equal to the worker's ability. 
// The worker can perform all jobs up to this index. Consequently, the worker will choose the job with the highest profit up to this index. 
// To do this, we can preprocess the array to store the maximum profit values up to each index.

// During the binary search process, we will add the value of the preprocessed maximum profit of the calculated job for each worker. 
// This sum will give us the total profit. Since the profit for each worker is maximized, the total profit will also be maximized.

// Algorithm
// 1. Initialize an array of pairs jobProfile with {0, 0}.
// 2. For i from 0 to n (where n is the size of the difficulty and profit arrays):
//    - Append {difficulty[i], profit[i]} to jobProfile.
// 3. Sort jobProfile by difficulty in ascending order.
// 4. For i from 0 to n-1:
//    - Update jobProfile[i].profit to be the maximum of its current value and the previous profit value.
// 5. Initialize netProfit to 0.
// 6. For each ability in the worker array:
//    - Set binary search parameters: l = 0, r = n-1, jobProfit = 0.
//    - While l <= r:
//        - Calculate mid = (l + r) / 2.
//        - If jobProfile[mid].difficulty <= ability:
//          - Update jobProfit to the maximum of jobProfit and jobProfile[mid].profit.
//            - Set l = mid + 1.
//        - Else:
//          - Set r = mid - 1.
//    - Add jobProfit to netProfit.
// 7. Return netProfit.


// Approach 2: Binary Search and Greedy (Sort by profit)

// Intuition
// Is it possible to use binary search on the profit array to maximize the profit for a worker?

// Suppose we sort the profit array in decreasing order while rearranging the difficulty array to preserve the original ordering of indices.
// For each worker, we will find the first index where the value of difficulty is less than or equal to the worker's ability. 
// This index will store the maximum profit possible for that worker's ability. 
// To efficiently apply binary search, we can preprocess the array to store the minimum difficulty up to the current index.

// Similar to the previous approach, we will return the sum of all individual job profits as the maximum total profit.


// Algorithm
// 1. Initialize an array of pairs jobProfile with {0, 0}.
// 2. For i from 0 to n (where n is the size of the difficulty and profit arrays):
//    - Append {difficulty[i], profit[i]} to jobProfile.
// 3. Sort jobProfile by profit in descending order.
// 4. For i from 0 to n-1:
//    - Update jobProfile[i].difficulty to be the minimum of its current value and the previous difficulty value.
// 5. Initialize netProfit to 0.
// 6. For each ability in the worker array:
//    - Set binary search parameters: l = 0, r = n-1, jobProfit = 0.
//    - While l <= r:
//      - Calculate mid = (l + r) / 2.
//      - If jobProfile[mid].difficulty <= ability:
//        - Update jobProfit to the maximum of jobProfit and jobProfile[mid].profit.
//        - Set r = mid - 1.
//      - Else:
//        - Set l = mid + 1. 
//    - Add jobProfit to netProfit.
// 7. Return netProfit.


// Approach 3: Greedy and Two-Pointers
// Approach 4: Memoization
