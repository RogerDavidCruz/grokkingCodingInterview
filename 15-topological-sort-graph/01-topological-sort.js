/*
Topological Sort

Topological sort of a directed graph (a graph with unidirectional edges) is a liner ordering of
its vertices such that for every directed edge (U,V) from vertex U to vertex V, U comes before V
in the ordering. Given a directed graph, find the topological ordering of its vertices.

Example 1:
    Input: Vertices 4, Edges = [3,2], [3,0], [2,0], [2,1]
    Output: Following are the two valid topological sorts for the given graph
            1) 3,2,0,1
            2) 3,2,1,0
*/

/*
Algorithm (inline comments)

Time: O(V + E) each vertex become source only once, each edge access/removed only once
Space: O(V + E) since storing all edges for each vertex in adjancency list
*/

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

console.log(topologicalSort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])) //1) [3, 2, 0, 1] 2) [3, 2, 1, 0]
