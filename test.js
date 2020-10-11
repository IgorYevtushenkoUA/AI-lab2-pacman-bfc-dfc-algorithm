class Vertex {
    constructor(name, x, y, id) {
        this._name = name
        this._x = x
        this._y = y
        this._id = id
    }

    getName() {
        return this._name
    }

    getX() {
        return this._x
    }

    getY() {
        return this._y
    }

    getID() {
        return this._id
    }

    toString() {
        return `Name ~ ${this.getName()}\tX ~ ${this.getX()}\tY ~ ${this.getY()}\tID ~ ${this.getID()} `
    }
}

class VertexInfo {
    /**
     *
     * @param {Vertex} parent
     * @param {Vertex} currentV
     * @param {number} f
     * @param {number} g
     * @param {number} h
     */
    constructor(parent, currentV, f, g, h) {
        this._parent = parent;
        this._currentV = currentV;
        this._f = f;
        this._g = g;
        this._h = h;
    }

    getParent() {
        return this._parent;
    }

    setParent(parent) {
        this._parent = parent;
    }

    getCurrentV() {
        return this._currentV;
    }

    setCurrentV(currentV) {
        this._currentV = currentV;
    }

    getF() {
        return this._f;
    }

    setF(f) {
        this._f = f;
    }

    getG() {
        return this._g;
    }

    setG(g) {
        return this._g = g
    }

    getH() {
        return this._h
    }

    setH() {
        return this._h
    }

    toString() {
        return "Parent :: " + this.getParent() + "\tCurrent :: " + this.getCurrentV() + "\tF :: " + this.getF() + "\tG :: " + this.getG() + "\tH :: " + this.getH() + "\n"
    }
}

let vertexes = [
    //A
    new Vertex("A0", 0, 0, 0),
    new Vertex("A1", 0, 4, 1),
    new Vertex("A2", 4, 4, 2),
    new Vertex("A3", 4, 0, 3),
    new Vertex("A4", 14, 0, 4),
    new Vertex("A5", 14, 3, 5),
    new Vertex("A6", 14, 4, 6),
    new Vertex("A7", 8, 4, 7),
    new Vertex("A8", 8, 7, 8),
    new Vertex("A9", 10, 7, 9),
    //B
    new Vertex("B0", 30, 0, 10),
    new Vertex("B1", 30, 3, 11),
    new Vertex("B2", 22, 3, 12),
    new Vertex("B3", 22, 11, 13),
    new Vertex("B4", 19, 11, 14),
    new Vertex("B5", 16, 11, 15),
    new Vertex("B6", 14, 11, 16),
    new Vertex("B7", 5, 11, 17),
    new Vertex("B8", 4, 11, 18),
    new Vertex("B9", 0, 11, 19),
    //C
    new Vertex("C0", 0, 14, 20),
    new Vertex("C1", 5, 14, 21),
    new Vertex("C2", 16, 14, 22),
    new Vertex("C3", 19, 14, 23),
    new Vertex("C4", 30, 14, 24),
    new Vertex("C5", 30, 12, 25),
    new Vertex("C6", 30, 11, 26),
    new Vertex("C7", 33, 12, 27),
    new Vertex("C8", 33, 14, 28),
    new Vertex("C9", 36, 14, 29),
    //D
    new Vertex("D0", 36, 12, 30),
    new Vertex("D1", 39, 12, 31),
    new Vertex("D2", 39, 11, 32),
    new Vertex("D3", 39, 14, 33),
    new Vertex("D4", 49, 14, 34),
    new Vertex("D5", 55, 14, 35),
    new Vertex("D6", 55, 11, 36),
    new Vertex("D7", 51, 11, 37),
    new Vertex("D8", 49, 11, 38),
    new Vertex("D9", 43, 11, 39),
    //E
    new Vertex("E0", 43, 3, 40),
    new Vertex("E1", 43, 3, 41),
    new Vertex("E2", 49, 0, 42),
    new Vertex("E3", 55, 0, 43),
    new Vertex("E4", 55, 3, 44),
    new Vertex("E5", 51, 3, 45),
    new Vertex("E6", 49, 3, 46),
    new Vertex("E7", 51, 8, 47),
    new Vertex("E8", 47, 8, 48),
    new Vertex("E9", 39, 0, 49),
    //F
    new Vertex("F0", 39, 3, 50),
    new Vertex("F1", 39, 9, 51),
    new Vertex("F2", 30, 9, 52),
]

function generateRandomPosition() {
    return Math.ceil(Math.random() * vertexes.length)
}

function tiePosition() {
    let heroPosition = generateRandomPosition()
    let randPos = generateRandomPosition()
    while (randPos === heroPosition)
        randPos = generateRandomPosition()
    let cherryPosition = randPos
}

generateRandomPosition()

function main() {
    let adj = []
    let v = 53

    for (let i = 0; i < v; i++)
        adj.push([])

    addEdge(adj, vertexes[0], vertexes[1])
    addEdge(adj, vertexes[0], vertexes[3])
    addEdge(adj, vertexes[1], vertexes[2])
    addEdge(adj, vertexes[3], vertexes[4])
    addEdge(adj, vertexes[3], vertexes[2])
    addEdge(adj, vertexes[4], vertexes[5])
    addEdge(adj, vertexes[4], vertexes[10])
    addEdge(adj, vertexes[2], vertexes[18])
    addEdge(adj, vertexes[18], vertexes[17])
    addEdge(adj, vertexes[18], vertexes[19])
    addEdge(adj, vertexes[19], vertexes[20])
    addEdge(adj, vertexes[20], vertexes[21])
    addEdge(adj, vertexes[21], vertexes[17])
    addEdge(adj, vertexes[17], vertexes[16])
    addEdge(adj, vertexes[16], vertexes[15])
    addEdge(adj, vertexes[16], vertexes[6])
    addEdge(adj, vertexes[5], vertexes[6])
    addEdge(adj, vertexes[6], vertexes[7])
    addEdge(adj, vertexes[7], vertexes[8])
    addEdge(adj, vertexes[8], vertexes[9])
    addEdge(adj, vertexes[15], vertexes[14])
    addEdge(adj, vertexes[14], vertexes[23])
    addEdge(adj, vertexes[14], vertexes[13])
    addEdge(adj, vertexes[21], vertexes[22])
    addEdge(adj, vertexes[22], vertexes[15])
    addEdge(adj, vertexes[10], vertexes[49])
    addEdge(adj, vertexes[10], vertexes[11])
    addEdge(adj, vertexes[11], vertexes[12])
    addEdge(adj, vertexes[12], vertexes[15])
    addEdge(adj, vertexes[12], vertexes[13])
    addEdge(adj, vertexes[13], vertexes[26])
    addEdge(adj, vertexes[23], vertexes[24])
    addEdge(adj, vertexes[24], vertexes[25])
    addEdge(adj, vertexes[25], vertexes[26])
    addEdge(adj, vertexes[25], vertexes[27])
    addEdge(adj, vertexes[27], vertexes[28])
    addEdge(adj, vertexes[28], vertexes[29])
    addEdge(adj, vertexes[29], vertexes[30])
    addEdge(adj, vertexes[30], vertexes[31])
    addEdge(adj, vertexes[32], vertexes[31])
    addEdge(adj, vertexes[31], vertexes[33])
    addEdge(adj, vertexes[33], vertexes[34])
    addEdge(adj, vertexes[34], vertexes[35])
    addEdge(adj, vertexes[35], vertexes[38])
    addEdge(adj, vertexes[35], vertexes[36])
    addEdge(adj, vertexes[36], vertexes[37])
    addEdge(adj, vertexes[37], vertexes[38])
    addEdge(adj, vertexes[37], vertexes[47])
    addEdge(adj, vertexes[47], vertexes[48])
    addEdge(adj, vertexes[47], vertexes[45])
    addEdge(adj, vertexes[45], vertexes[44])
    addEdge(adj, vertexes[45], vertexes[46])
    addEdge(adj, vertexes[44], vertexes[43])
    addEdge(adj, vertexes[43], vertexes[42])
    addEdge(adj, vertexes[42], vertexes[46])
    addEdge(adj, vertexes[41], vertexes[42])
    addEdge(adj, vertexes[49], vertexes[41])
    addEdge(adj, vertexes[41], vertexes[40])
    addEdge(adj, vertexes[40], vertexes[46])
    addEdge(adj, vertexes[40], vertexes[39])
    addEdge(adj, vertexes[39], vertexes[38])
    addEdge(adj, vertexes[39], vertexes[32])
    addEdge(adj, vertexes[11], vertexes[50])
    addEdge(adj, vertexes[50], vertexes[49])
    addEdge(adj, vertexes[11], vertexes[52])
    addEdge(adj, vertexes[52], vertexes[26])
    addEdge(adj, vertexes[52], vertexes[51])
    addEdge(adj, vertexes[51], vertexes[32])
    addEdge(adj, vertexes[50], vertexes[51])

    let source = vertexes[0]
    let dest = vertexes[9]
    // console.log(findDist_DFS(adj, source, dest));
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    // console.log(findShortestDist_BFS(adj, source, dest, v))
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    // console.log(search_a_algorithm(adj, source, dest))
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log(dijkstra_algorithm(adj,source));
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

}

main()

function addEdge(adj, a, b) {
    adj[a.getID()].push(b)
    adj[b.getID()].push(a)
}

function findShortestDist_BFS(adj, s, dest, v) {
    let pred = []
    let dist = []
    if (BFS_Algorithm(adj, s, dest, v, pred, dist) === false) {
        return "can not find the path"
    }
    let path = []
    // ползать
    let crawl = dest
    path.push(crawl)
    while (pred[crawl.getID()] !== -1) {
        path.push(pred[crawl.getID()])
        crawl = pred[crawl.getID()]
    }
    let answer = "Shorted path length is " + dist[dest]
    answer += "\n Path is :: "

    for (let i = path.length - 1; i >= 0; i--)
        answer += Object.values(path[i]) + " ~ "
    return answer
}

function BFS_Algorithm(adj, edgeSource, edgeDestination, v, pred, dist) {
    let queue = []
    let visited = []

    for (let i = 0; i < v; i++) {
        visited[i] = false
        dist[i] = Number.MAX_SAFE_INTEGER
        pred[i] = -1
    }

    visited[edgeSource.getID()] = true
    dist[edgeSource.getID()] = 0
    queue.push(edgeSource)


    while (queue.length > 0) {
        let u = queue.shift()
        for (let i = 0; i < adj[u.getID()].length; i++) {
            if (visited[adj[u.getID()][i].getID()] === false) {
                visited[adj[u.getID()][i].getID()] = true
                dist[adj[u.getID()][i].getID()] = dist[u.getID()] + 1

                pred[adj[u.getID()][i].getID()] = u
                queue.push(adj[u.getID()][i])
                if (adj[u.getID()][i] == edgeDestination) {
                    return true
                }
            }
        }
    }
    return false
}

function findDist_DFS(adj, source, final) {
    let visited = []
    let prior = []
    for (let i = 0; i < 53; i++) {
        visited[i] = false
        prior[i] = -1
    }
    DFS_Algorithm(adj, source, final, source, prior, visited)
    return getPath(source, final, prior);
}

function DFS_Algorithm(adj, source, dist, from, prior, visited) {
    if (visited[source.getID()] === true) {

        return
    }
    visited[source.getID()] = true
    prior[source.getID()] = from

    if (source === dist) {
        return
    }
    for (let i = 0; i < adj[source.getID()].length; i++) {
        DFS_Algorithm(adj, adj[source.getID()][i], dist, source, prior, visited)
    }
}

function getPath(start, finish, prior) {
    let ans = []

    for (let v = finish; v != start; v = prior[v.getID()]) {
        ans.push(v)
    }
    ans.push(start)
    ans = ans.reverse()
    return ans
}

/**
 * g(n) = cost so far to reach node nn
 * @returns {number}
 */
function g() {
    return 1
}

/**
 * h(n) = estimated cost from nn to goal. This is the heuristic part of the cost function, so it is like a guess.
 * sqrt( (x1-x2)^2 + (y1-y2)^2 )
 * @param {Vertex} vertexA
 * @param {Vertex} vertexB
 * @returns {number}
 */
function heuristic(vertexA, vertexB) {
    return Math.sqrt(Math.pow(vertexA.getX() - vertexB.getX(), 2) + Math.pow(vertexA.getY() - vertexB.getY(), 2))
}

/**
 * total estimated cost of path through node n
 * @param {Vertex} vertexA
 * @param {Vertex} vertexB
 * @returns {number}
 */
function pathValueF(vertexA, vertexB) {
    return heuristic(vertexA, vertexB) + g()
}

/**
 * @param {[]} adj
 * @param {Vertex} startV
 * @param {Vertex} endV
 */
function search_a_algorithm(adj, startV, endV) {

    let openList = [],
        closedList = [],
        vertexesInfo = [] // todo change name to cameFrom

    for (let i = 0; i < adj.length; i++) {
        vertexesInfo[i] = new VertexInfo(null, null, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
    }

    vertexesInfo[startV.getID()].setF(0)
    vertexesInfo[startV.getID()].setG(0)
    vertexesInfo[startV.getID()].setH(0)
    vertexesInfo[startV.getID()].setParent(startV)
    vertexesInfo[startV.getID()].setCurrentV(startV)

    openList.push(startV)

    while (openList.length !== 0) {
        let lowest = 0
        for (let i = 0; i < openList.length; i++) {
            if (vertexesInfo[openList[i].getID()].getF() === vertexesInfo[lowest].getF()) {
                lowest = i
            }
        }
        let currentVertex = openList[lowest]
        if (currentVertex.getID() === endV.getID()) {
            let curr = vertexesInfo[currentVertex.getID()]
            let comeFrom = []
            console.log(vertexesInfo)
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            while (vertexesInfo[currentVertex.getID()].getCurrentV().getID() !== startV.getID()) {
                comeFrom.push(vertexesInfo[currentVertex.getID()])
                currentVertex = vertexesInfo[currentVertex.getID()].getParent()
            }
            return comeFrom.reverse()
        }
        openList = openList.splice(0, lowest).concat(openList.splice(1, openList.length))
        closedList.push(currentVertex)
        let neighborsV = adj[currentVertex.getID()]

        for (let i = 0; i < neighborsV.length; i++) {
            let neighborV = neighborsV[i]
            if (closedList.includes(neighborV))
                continue

            let gScore = vertexesInfo[currentVertex.getID()].getG() + 1
            let gScoreIsBest = false

            if (!(openList.includes(neighborV))) {
                gScoreIsBest = true
                vertexesInfo[neighborV.getID()].setH(heuristic(neighborV, endV))
                openList.push(neighborV)
            } else if (gScore < vertexesInfo[neighborV.getID()].getG()) {
                gScoreIsBest = true
            }

            if (gScoreIsBest) {

                vertexesInfo[neighborV.getID()].setParent(currentVertex)
                vertexesInfo[neighborV.getID()].setCurrentV(neighborV)
                vertexesInfo[neighborV.getID()].setG(gScore)
                vertexesInfo[neighborV.getID()].setF(vertexesInfo[neighborV.getID()].getG() + vertexesInfo[neighborV.getID()].getH())
            }
        }
    }
    return []
}

//dijkstra
/**
 *
 * @param {[]} adj
 * @param {Vertex} startV
 */
function  dijkstra_algorithm(adj, startV) {
    let solutions = []
    solutions[startV.getID()] = []
    solutions[startV.getID()].dist = 0

    while(true) {
        let parent = null
        let nearest = null
        let dist = Infinity

        for (let n in solutions) {
            if (!solutions[n])
                continue
            let vDist = solutions[n].dist
            let neighbors = adj[n]
            console.log(`neighbors :: ${neighbors}\n~~~~~~~~~~~~~\n`)
            for (let a of neighbors) {
                if (solutions[a.getID()])
                    continue

                let d = heuristic(vertexes[n], a) + vDist
                if (d < dist){
                    parent = solutions[n]
                    nearest = a.getID()
                    dist = d
                }
            }
        }
        if (dist === Infinity){
            console.log("break")
            break;
        }
        solutions[nearest] = parent.concat(nearest)
        solutions[nearest].dist = dist
    }
    return solutions
}
