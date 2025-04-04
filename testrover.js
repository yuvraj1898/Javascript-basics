


function createMarsLand(MaxX, MaxY){

    return {MaxX, MaxY};

}

function turnLeft(direction){
    const directions=['N','W','S','E']
    let index=directions.indexOf(direction)
    return directions[(index+1)%4];
}
function turnRight(direction){
    const directions=['N','E','S','W']
    let index=directions.indexOf(direction)
    return directions[(index+1)%4]
}

function move(x,y,direction,boundaries,backward=false)
{
    let newX = x;
    let newY = y;

    if (direction === "N") newY += 1;
    if (direction === "E") newX += 1;
    if (direction === "S") newY -= 1;
    if (direction === "W") newX -= 1;

    if (newX < 0 || newY < 0 || newX > boundaries.MaxX || newY > boundaries.MaxY) {
        throw new Error("Move out of bounds!");
      }
    
      return [newX, newY];
}

function executeCommands(x,y,direction,commands,boundaries){

    let currentX=x
    let currentY=y
    for(let command of commands)
    {
        if(command==='L')
        {
            direction = turnLeft(direction)
        }else if(command==='R')
        {
            direction=turnRight(direction)
        }
        else if(command==='M')
        {
            [currentX,currentY]=move(currentX,currentY,direction,boundaries)
        }
        else if(command==='B')
        {
            [currentX,currentY]=move(currentX,currentY,direction,boundaries,true)
        }
        else
        {
            throw new Error("Invalid command!");
        }
    }
    return `${currentX} ${currentY} ${direction}`;

}





let boundaries = createMarsLand(5,5)
let points=executeCommands(3, 3, 'E', "MMRMMRMRRM", boundaries)
console.log(points);


module.exports={createMarsLand,turnLeft,turnRight,move,executeCommands}