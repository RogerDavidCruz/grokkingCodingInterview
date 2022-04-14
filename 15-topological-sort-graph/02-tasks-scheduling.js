/* Tasks Scheduling (medium)

There are 'N' tasks, labeled from '0' to 'N-1'. Each task can have some prerequisite tasks 
which need to be completed before it can be scheduled. Given the number of tasks and a list 
of prerequisite pairs, find out if it is possible to schedule all the tasks.

Example 1:
    Input: tasks = 3, prerequisites = [[0,1], [1,2]]        //Hint: tasks are vertices, prereqs are edges
    Output: True
    Explanation: To execite task '1', task '0' needs to finish first. Similarly task '1' 
    needs to finish before '2' can be scheduled. One possible scheduling of tasks is: [0,1,2].

Example 2:
    Input: tasks = 3, prerequisites = [[0,1], [1,2], [2,0]]
    Output: False
    Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.

Example 3: 
    Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
    Output: true
    Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5] 

Time: O(V + E) each vertice is a source only once, accessed and removed
Space: O(V + E) sort each edge in adjancency list
*/

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


/*
  Questions
  what is the prerequisite?
    It's each element which is an edge representation as an array [#, #] from the input prerequisites array

    [[ ], [ ], [ ], [ ], [ ], [ ]] initilized graph (Adjacency List)
    [0, 0, 0, 0, 0, 0]             initilized indegrees (count of incoming edges in array)

               parent
               | child  parent
               | |      | child   parent
    prereq is [2,5]     | |       | child
       |     prereq is [0,5]      | |
       |       |       prereq is [0,4]
       |       |        |
    [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]] prerequisites array


    (part B - building graph) 1st iteration follow through 

               parent
               | child  
               | |
    prereq is [2,5]

              child
                |
              value
                |
                5
    [[ ], [ ], [5], [ ], [ ], [ ]] graph
      0    1    2    3    4    5
                |
               idx
                |
              parent


    [0, 0, 0, 0, 0, 1] indegrees
     0  1  2  3  4  5
                    |
                   idx
                    |
                  child 

   part c - find all sources

   [ ] sources
   [ 0, 0, 1, 1, 2, 0 ] 'inDegree'
     |
     i = 0 
     |
    push i into sources
     |
    [0, 1, 5] sources

   part D - for each source, 1) add to sortedOrder array, 
                             2) subtract 1 from all of its children's indegree
                             3) if child's indegree reach zero, add it to sources queue.

   sources [0, 1, 5]
            |
          shift()
            |
            0

   vertex = 0

   sortedOrder [0]
                |
            push(vertex)
                |
                0 

    [ [ 4 ], [ 4, 3 ], [], [ 2 ], [], [] ] 'graph'  find node's children to decrement indegrees (remove layer)
        |
    graph[vertex]
        |
    graph[0]    
        |
       [4]  
        |
        4
        |
      child    
      
    [ 0, 0, 1, 1, 2, 0 ] 'inDegree'
                  |
            inDegree[child]         
                  |
             inDegree[4]      
                  |
                  2
                  |
                -= 1 
                  |
                  1

    [ 0, 0, 1, 1, 1, 0 ] 'inDegree'
                  |
                 = 0 ?
                  |
                false 
                  |
               otherwise
                  |
             sources.push(0)  
                 
   Continue while loop iteration of sources length - because sources queue still contains sources

   sources [1,5]
            |
          shift()
            |
          vertex

        newly sources [5]  

   vertex = 1

   sortedOrder = [0, 1]

   graph = [ [ 4 ], [ 4, 3 ], [], [ 2 ], [], [] ] 
   graph[1] = [4, 3]

   forEach
        [4, 3]
         |
       child 
         |
         4

    [ 0, 0, 1, 1, 1, 0 ] 'inDegree'     
                  |
            inDegree[child] 
                  |
              inDegree[4]      
                  |
                  1
                  |
                 -= 1
                  |
                  0
                  |
                 = 0 ?
                  |
                 True              

    sources [5]     
             |
         push(child)              
             |
           [5, 4] 

    newly sources [5, 4]           

    continue While loop itertions on sources queue
*/


//Leetcode Version - 207 - Course Schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 const canFinish = (numCourses, prerequisites) => {
    const sortedOrder = [];
    if (numCourses <= 0) return false;
    
    // a. initilize the graph
    const inDegree = Array(numCourses).fill(0); // count of incoming edges array
    const graph = Array(numCourses).fill(0).map(() => Array()) //adjencency list
    
    // b. build the graph
    prerequisites.forEach((prereq) => {
        let parent = prereq[0],
            child = prereq[1];
        graph[parent].push(child) ;
        inDegree[child]++
    })
    
    // c. find all sources
    const sources = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) sources.push(i)
    }
    
    //d. for each source - 1) add it to sortedOrderArray, 2) subtract 1 from all of its children's indegrees
    //                     3) if child's indegree becomes zero, add it to sources queue
    while (sources.length > 0) {
        const vertex = sources.shift();
        sortedOrder.push(vertex);        
        graph[vertex].forEach((child) => {
            inDegree[child] -= 1;
            if (inDegree[child] === 0) sources.push(child)
        });
    }
    
    return sortedOrder.length === numCourses;
};