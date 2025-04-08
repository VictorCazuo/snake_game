const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 20 

const snake = [
    {x: 180, y:180 }
]

let direction, loopId

const drawSknake = () => {
    ctx.fillStyle = "#666"

    snake.forEach((position, index) => {

        if (index == snake.length - 1){
            ctx.fillStyle = "#ddd"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })

}

const moveSnake = () => {
    if (!direction) return

    const head = snake[snake.length - 1]

    snake.shift()

    let newHead = {x: head.x, y: head.y}

    if (direction == "right") {
        newHead.x += size
    }

    if (direction == "left") {
        newHead.x -= size
    }

    if (direction == "down") {
        newHead.y += size
    }

    if (direction == "up") {
        newHead.y -= size
    }

    if (newHead.x >= canvas.width) newHead.x = 0
    if (newHead.x < 0) newHead.x = canvas.width - size
    if (newHead.y >= canvas.height) newHead.y = 0
    if (newHead.y < 0) newHead.y = canvas.height - size

    snake.push(newHead)
}

const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

    for (let i = 20; i < canvas.width; i += 20) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 400)
        ctx.stroke( )

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(400, i)
        ctx.stroke( )
    }

    
}



const gameLoop = () => {
    clearInterval(loopId)

    ctx.clearRect(0, 0, 400, 400)
    drawGrid()
    moveSnake()
    drawSknake()

    loopId = setTimeout(() => {
        gameLoop()
    }, 250)
}

gameLoop()

document.addEventListener("keydown", ({key}) => {
    if (key == "ArrowRight" && direction != "left") {
        direction = "right"
    }

    if (key == "ArrowLeft" && direction != "right") {
        direction = "left"
    }

    if (key == "ArrowDown" && direction != "up") {
        direction = "down"
    }

    if (key == "ArrowUp" && direction != "down") {
        direction = "up"
    }
})




