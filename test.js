class Vertex {
    constructor(x, y, id) {
        this.x = x
        this.y = y
        this.id = id
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getID() {
        return this.id
    }
}

let vertexes = [new Vertex(0,0,0)]

console.log(vertexes[0].getID())
