// console.log(document)



const upFunc=function(){
    const ball = document.getElementById("ball")
    let top = parseInt(ball.style.top) || 0
    top -= 15
    ball.style.top = top + "px"
}

const rightFunc=function(){
    const ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    left += 15
    ball.style.left = left + "px"
}

const leftFunc=function(){
    const ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    left -= 15
    ball.style.left = left + "px"
}

const downFunc=function(){
    const ball = document.getElementById("ball")
    let top = parseInt(ball.style.top) || 0
    top += 15
    ball.style.top = top + "px"
}


