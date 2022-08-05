class MyGraph {
    constructor(){
        this.list = {};
    }
    addVertex(vertex){
        if(this.list[vertex]) return 'Vertex is already exist';
        this.list[vertex] = new Set();
    }
    addEdge(firstVertex, secondVertex){
        if(!this.list[firstVertex]) return `${firstVertex} not found`;
        if(!this.list[secondVertex]) return `${secondVertex} not found`;
        this.list[firstVertex].add(secondVertex);
        this.list[secondVertex].add(firstVertex);
    }
    removeEdge(){
        if(!this.list[firstVertex]) return `${firstVertex} not found`;
        if(!this.list[secondVertex]) return `${secondVertex} not found`;
        this.list[firstVertex].delete(secondVertex);
        this.list[secondVertex].delete(firstVertex);
    }
    removeVertex(vertex){
        if(!this.list[vertex]) return "Vertex doesn't exist";
        let getSet = this.list[vertex];
        for (let element of getSet){
            this.removeEdge(element,vertex);
        }
        delete this.list[vertex];
    }
    toArray(){
    }
    get log(){
        let getList = this.list;
        for(let element in getList) console.log(element,[...getList[element]])
        return getList;
    }

    
}
module.exports = MyGraph;