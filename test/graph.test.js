var Graph = require('../src/graph');

test('Graph', function () {
    var graph = new Graph();
    console.log(graph);
    var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    for (var i = 0; i < myVertices.length; i++) {
        graph.addVertex(myVertices[i]);
    }
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');

    expect(graph.getAdjList()).toEqual({
        'A': ['B', 'C', 'D'],
        'B': ['A', 'E', 'F'],
        'C': ['A', 'D', 'G'],
        'D': ['A', 'C', 'G', 'H'],
        'E': ['B', 'I'],
        'F': ['B'],
        'G': ['C', 'D'],
        'H': ['D'],
        'I': ['E']
    });

    var bfsList = [];
    graph.bfs(myVertices[0], function (u) {
        bfsList.push(u);
    });
    expect(bfsList).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);

    var dfsList = [];
    graph.dfs(myVertices[0], function (u) {
        dfsList.push(u);
    });
    expect(dfsList).toEqual(['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H']);

});

{
    function init(num) {
        init = num;
        return init;
    }
    init(20);
    console.log(typeof init);
}
console.log(typeof init);
