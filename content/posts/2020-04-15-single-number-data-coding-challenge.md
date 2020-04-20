---
date: 2020-04-15
title: "Single Number - Given a non-empty array of integers, every element appears twice except for one. Find that single one."
template: post
thumbnail: "../thumbnails/js.png"
slug: single-number-data-coding-challenge
categories:
  - Code
  - Popular
tags:
  - javascript
  - fundamentals
  - coding
  - data-structure
---

# LeetCode 30 Days coding solutions

## Single Number

#### Question:

**Given a non-empty array of integers, every element appears _twice_ except for one. Find that single one.**
**Note:** Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Example 1:**

```js
Input: [2, 2, 1];
Output: 1;
```

**Example 2:**

```js
Input: [4, 1, 2, 1, 2];
Output: 4;
```

## Solutions

##### Solution 1:

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // Validate the input
  if (!nums) {
    return;
  }
  // Sort the number
  nums = nums.sort((a, b) => a - b);
  //As we know the number can appear at most twice
  for (let i = 0; i < nums.length; i = i + 2) {
    //return current index value if the current index is not equal to next index
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};
```

##### Solution 2

This solution uses xor operation

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // Validate the input - This is the first thing we should always do while solving problems.
  if (!nums) {
    return;
  }

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};
```

To know more about javascript bit-wise operation follow this link <a href="https://www.w3schools.com/js/js_bitwise.asp" target="_blank">Javascript bit-wise operation</a>
