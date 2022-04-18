# Pattern: K-way Merge


> **K-way Merge** pattern helps us solve problems that involve a list of sorted arrays.

> Whenever given ‘K’ sorted arrays, we can use a Heap to efficiently perform a sorted traversal of all the elements of all arrays. 

>We can push the smallest (first) element of each sorted array in a Min Heap to get the overall minimum. While inserting elements to the Min Heap we keep track of which array the element came from. We can, then, remove the top element from the heap to get the smallest element and push the next element from the same array, to which this smallest element belonged, to the heap. We can repeat this process to make a sorted traversal of all elements.

1. Push the smallest (first) element of each sorted array in a Min Heap to get overall minimum
2. Keep track of which array the element came from when inserting (pushing) elements into Min Heap.
3. Remove top element from heap to get smallest element
4. Push the next element from same array to the heap
5. Repeat process to make sorted traversal of all elements