const ticket = document.getElementById('ticket')

const getRotatingDegree = () => {
    //1. certain center point of ticket
    const {x, y, width, height} = ticket.getBoundingClientRect()
    const centerPoint = {
        x: x+width/2,
        y: y+height/2
    }
    console.log(centerPoint)

    //2. calc rotate degrees => [mouse point - center point] *.008 to get small number
    window.addEventListener('mousemove', (e) => {
        degX = (e.clientY - centerPoint.y) * .02 //degX depends on Y to rotate on Y
        degY = (e.clientX - centerPoint.x) * -.009 //degY depends on X to rotate on X
        // console.log(ticket)
        
        ticket.style.transform = `perspective(1000px) rotateX(${degX}deg) rotateY(${degY}deg)`
    })
}

document.addEventListener('DOMContentLoaded', () => {
    getRotatingDegree()
})