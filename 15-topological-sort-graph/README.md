# Pattern: Topological Sort

> Topological Sort 4-Steps
> 1. Initilize Graph
> 2. Build Graph
> 3. Find all sources
> 4. For each source, add to sortedOrder array, subtract 1 from all child indegrees, if indegrees reach 0, add it to sources queue

> What is a source?
> - is a vertex (node) with no edges coming into it (indegree 0)

> What are vertices?
> - it's a node in the graph

> What are edges?
> - it's the link, one of the connections between nodes (vertices) of the network

> What is indegree?
> - number count of incoming edges coming into the vertex

> What is an adjancency list?
> - represents a graph as an array of Linked Lists. The index represent a vertex and each element in its linked list represent the other vertices that form an edge with vertex

> What is a sink?
> - vertex with outdegree 0

> General Hint:
> ** prerequisites = [[0,1], [1,2]] prerequisites are all the possible edges, and [0,1] is one edge where 0 is the parent vertex and 1 is the child vertex for the edge between 0 and 1 vertices (nodes)**

---

## Table of Contents

- [x] 1. [Topological Sort (medium)](#topological-sort-medium)
- [x] 2. [Tasks Scheduling (medium)](#tasks-scheduling-medium)
- [x] 3. [Tasks Scheduling Order (medium)](#tasks-scheduling-order-medium)
- [x] 4. [All Tasks Scheduling Orders (hard)](#all-tasks-scheduling-orders-hard)
- [x] 5. [Alien Dictionary (hard)](#alien-dictionary-hard)
- [x] 6. [PC 1 - Reconstructing a Sequence (hard)](#PC-1-reconstructing-a-sequence-hard)
- [x] 7. [PC 2 - Minimum Height Tree (hard)](#PC-2-minimum-height-tree-hard)

---

## Topological Sort (medium)

>Topological sort of a directed graph (a graph with unidirectional edges) is a liner ordering of
its vertices such that for every directed edge (U,V) from vertex U to vertex V, U comes before V
in the ordering. Given a directed graph, find the topological ordering of its vertices.

```
Example 1:
    Input: Vertices 4, Edges = [3,2], [3,0], [2,0], [2,1]
    Output: Following are the two valid topological sorts for the given graph
            1) 3,2,0,1
            2) 3,2,1,0
```

```javascript
const topologicalSort = (vertices, edges) => {
    const sortedOrder = []
    if (vertices <= 0) return sortedOrder;

    // Initilize Graph
    const inDegree = Array(vertices).fill(0); // count of incoming edges
    const graph = Array(vertices).fill(0).map(() => Array()); // adjancency list graph

    // build the graph
    edges.forEach((edge) => {
        let parent = edge[0],
            child = edge[1];
        graph[parent].push(child);
        inDegree[child]++;
    });

    // find all sources i.e. , all vertices with 0 in degrees
    const sources = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i);
        }
    }

    /*  for each source, add it to the sorted order and subtract one from all
        of its children's indegree, if a child's in-degree become zero,
        add it to sources queue. */
    while (sources.length > 0) {
        const vertex = sources.shift();
        sortedOrder.push(vertex);
        graph[vertex].forEach((child) => { // get child's indegree to decrement their indegrees
            inDegree[child] -= 1
            if (inDegree[child] === 0) sources.push(child)
        });
    };
    
    // topological not possible if graph has a cycle

    if (sortedOrder.length !== vertices) return []

    return sortedOrder;
}
```

> ### Time: O(V + E) each vertex become source only once, each edge access/removed only once
> ### Space: O(V + E) since storing all edges for each vertex in adjancency list

---


## Tasks Scheduling (medium)

> There are 'N' tasks, labeled from '0' to 'N-1'. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, find out if it is possible to schedule all the tasks.

```
Example 1:
    Input: tasks = 3, prerequisites = [[0,1], [1,2]]        //Hint: tasks are vertices, prereqs are edges
    Output: True
    Explanation: To execite task '1', task '0' needs to finish first. Similarly task '1' needs to finish before '2' can be scheduled. One possible scheduling of tasks is: [0,1,2].

Example 2:
    Input: tasks = 3, prerequisites = [[0,1], [1,2], [2,0]]
    Output: False
    Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.
```

```javascript
const isSechedulingPossible = (tasks, prerequisites) => {
    const sortedOrder = [];
    if (tasks <= 0) return false;

    //a. initilize the graph
    const inDegree = Array(tasks).fill(0); //count of incoming edges
    const graph = Array(tasks).map(() => Array()); //adjencency list

    //b. build the graph
    prerequisites.forEach((prerequisite) => {
        let parent = prerequisite[0],
            child = prerequisite[1];
        graph[parent].push(child); //put child in parent's list in graph
        inDegree[child]++ //increment child's indegree as we remove the top layer (BFS)
    })

    //c. find all sources [vertices with 0 in-degrees (incoming edges)]
    const sources = []; //queue for sources
    for (let i = 0; i < inDegree.length; i++) {
        //if an indegree count reaches zero, the vertice becomes a source node so we push it into the sources queue
        if (inDegree[i] === 0) sources.push(i) 
    }

    //d. for each source node, add it to the sortedOrder array and subtract one from all of its children's indegree,
    //   if a child's in-degree become zero, add it to the sources queue. 
    //   removing the indegree edge is like removing the top layer of the graph as BFS approach happens*
    while (sources.length > 0) {
        const vertex = source.shift();
        sortedOrder.push(vertex);
        graph[vertex].forEach((child) => {
            inDegree[child] -= 1;
            if (inDegree[child] === 0) sources.push(child) //if the vertex has a child with zero incoming indegree, it's source, push into the queue.
        })
    }

    return sortedOrder.length === tasks;
}
```

> ### Time: O(V + E) each vertice is a source only once, accessed and removed
> ### Space: O(V + E) sort each edge in adjancency list

---

## Task Scheduling Order

> There are 'N' tasks, labeled from '0' to 'N-1'. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, write a method to find the ordering of tasks we should pick to finish all tasks.

```
Example 1:
    Input: tasks = 3, prerequisites = [[0,1], [1,2]]        
    Output: True
    Explanation: To execite task '1', task '0' needs to finish first. Similarly task '1' needs to finish before '2' can be scheduled. One possible scheduling of tasks is: [0,1,2].

Example 2:
    Input: tasks = 3, prerequisites = [[0,1], [1,2], [2,0]]
    Output: False
    Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.

** Hint: prerequisites = [[0,1], [1,2]] prerequisites are all the possible edges, and [0,1] is one edge where 0 is the parent vertex and 1 is the child vertex of the edge between 0 and 1 vertices**
```

```javascript

```

> ### Time: O(V + E)
> ### Space: O(V + E)

---


## Longest Substring with Same Letters after Replacement (hard)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---


## Longest Substring with Same Letters after Replacement (hard)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---


## Longest Substring with Same Letters after Replacement (hard)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---


## Longest Substring with Same Letters after Replacement (hard)

>

```
```

```javascript
```

> ### Time:
> ### Space:

---