# Pattern: Two Pointers

> In problems where we deal with sorted arrays (or LinkedLists) and need to find a set of elements that fulfill certain constraints, the Two Pointers approach becomes quite useful. Time complexity usually O(N). Increment the start and end pointers accordingly based on the problem constraints.

## Table of Contents

- [x] 1. [Pair with Target Sum (easy)](#Pair-with-Target-Sum-(easy))
- [x] 2. [Remove Duplicates (easy)](#Remove-Duplicates-(easy))
- [x] 3. [Squaring a Sorted Array (easy)](#Squaring-a-Sorted-Array-(easy))
- [x] 4. [Triplet Sum to Zero (medium)](#Triplet-Sum-to-Zero-(medium))
- [x] 5. [Triplet Sum Close to Target (medium)](#Triplet-Sum-Close-to-Target-(medium))
- [x] 6. [Triplets with Smaller Sum (medium)](#Triplets-with-Smaller-Sum-(medium))
- [x] 7. [Subarrays with Product Less than a Target (medium)](#Subarrays-with-Product-Less-than-a-Target-(medium))
- [x] 8. [Dutch National Flag Problem (medium)](#Dutch-National-Flag-Problem-(medium))
- [x] 9. [Problem Challenge 1](#Problem-Challenge-1)
- [ ] 10. [Problem Challenge 2](#Problem-Challenge-2)
- [ ] 11. [Problem Challenge 3](#Problem-Challenge-3)

## Pair with Target Sum (easy)

>Given an array of sorted numbers and a target sum, find a pair in the array whose sum is
equal to the given target.
>Write a function to return the indices of the two numbers (i.e. the pair) such that they add
up to the given target.

```
Example 1:
    Input: [1,2,3,4,6], target = 6
    Output: [1,3]
    Explanation: The numbers at index 1 and 3 add up to 6: 2+4 = 6

Example 2:
    Input: [2,5,9,11], target = 11
    Output: [0,2]
    Explnation: The numbers at index 0 and 2 add up to 11: 2+9 = 11
```

```javascript
const pairTargetSum = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) return [left, right];

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
};
```
> ### Time: O(N)
> ### Space: O(1)

---

## Remove Duplicates (easy)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## Squaring a Sorted Array (easy)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## Triplet Sum to Zero (medium)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## Triplet Sum Close to Target (medium)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## Triplets with Smaller Sum (medium)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## Subarrays with Product Less than a Target (medium)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## Dutch National Flag Problem (medium)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## PC 1 - Quadruple Sum to Target

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## PC 2 - Comparing Strings containing Backspaces

>

```
```

```javascript
```

> ### Time:
> ### Space:

---

## PC 3 - Minimum Window Sort

>

```
```

```javascript
```

> ### Time:
> ### Space:

---