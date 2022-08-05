const MyGraph = require("./customGraph");

const checkPath = (graph) => {
    for(let element in graph){
        if(graph[element].size<2) return false;
    }
    return true;
};
try {
  const graph = new MyGraph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "D");
  graph.addEdge("D", "E");
  graph.addEdge("E", "A");
  let list = graph.log;
  const validatedGraph = checkPath(list);
  console.log(validatedGraph)
} catch (e) {
  console.warn(e);
}
