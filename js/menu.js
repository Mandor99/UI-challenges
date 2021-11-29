const logoSrc = 'https://production.haystack-assets.com/assets/avatars/defaults/hey-84b6169bf4060a76a94a072fe96b5fef7970b02d19507e2ab3952c042c21b154.svg'

const items = [
    '1mahmoudmandor65@gmail.com',
    '3twitter@mando',
    '4FB.com/mando',
    '5YT.com/mando',
    '6twitter@mando',
    '7IG/mando',
    '8mando.net',
]

const stack = document.getElementById('stack')

//generate boxes DOM
const generateBoxesDom = () => {
    for(let i = items.length - 1; i >= 0; i--) {
        const Box = document.createElement('div')
        Box.classList.add('box')
        Box.innerHTML=`
        <figure class="box__fig">
            <img src=${logoSrc} alt="logo" class="box__logo" />
        </figure>
        <div class="box__content">
            <h4 class="box__title">${items[i]}</h4>
            <p class="box__desc">description ...........</p>
        </div>
        `
        /* 
        scale(1- x*.03) => .03 as each card increase with .03 of his previous card 
        */
        Box.style.transform = `
            scale(${1 - i * .03}) translateY(${-i * .7}rem)
        `
        stack.append(Box);
    }
}

const moveBoxes = function(e) {
    e.stopPropagation()
    const boxes = document.querySelectorAll('.box')
        boxes.forEach((box, i) => {
            let reverseSort = boxes.length - 1 - i
            box.style.transform = `rotate(${reverseSort * 1}deg) translate(-${24-reverseSort*.4}px, -${reverseSort*4.5}rem)`
            box.style.boxShadow = `0 0 10px rgba(226, 221, 215,.4),0 10px 20px rgb(226,221,215)`
        })
}

const resetBoxes = () => {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box, i) => {
        const reverseSort = boxes.length - 1 - i
        box.style.transform = `scale(${1 - reverseSort * .03}) translateY(${-reverseSort * .7}rem)`
    })
}


document.addEventListener('DOMContentLoaded', (e) => {
    generateBoxesDom()
    stack.addEventListener('click', (e) => moveBoxes(e))
    document.addEventListener('click', resetBoxes)
    
})