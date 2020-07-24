//Objective is to update all empty rooms in a matrix, marked by 'Infinity', with its
//distance from the nearest gate, marked by a '0'. A '-1' marks an obstacle

let inf = 2147483647

let board = 
[[inf, -1, 0, inf],
 [inf, inf, inf, -1],
 [inf, -1, inf, -1],
 [0, -1, inf, inf]]


//O(m*n) solution where m and n are the rows and columns sizes of the matrix respectively
//We use a BFS solution starting from the gates

let queue = []
let directions = [[1,0], [-1,0], [0,1], [0,-1]]

//Add all gate coordinates to queue
for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
        if (rooms[i][j] == 0) {
            queue.push([i, j])
        }
    }
}

while (queue.length > 0) {
    let curr = queue.shift()
    let currRow = curr[0]
    let currCol = curr[1]
    
    for (let [dx,dy] of directions) {
        let nextX = currRow + dx
        let nextY = currCol + dy
        
        //If out of bounds or is not an empty room
        if (nextX < 0 || nextX >= rooms.length || nextY < 0 || nextY >= rooms[0].length || rooms[nextX][nextY] != 2147483647) {
            continue
        }
        
        //Update the current length of the path
        rooms[nextX][nextY] = rooms[currRow][currCol] + 1
        queue.push([nextX, nextY])
    }
}