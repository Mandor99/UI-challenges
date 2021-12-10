//fake users data
const users = [
        {
        name: 'Helen Coppola',
        avatar: 'https://www.w3schools.com/w3images/avatar5.png',
        },
        {
        name: 'Nick Robins',
        avatar: '',
        },
        {
        name: 'Chris Harris',
        avatar: '',
        },
        {
        name: 'Sandra Osborne',
        avatar: '',
        },
        {
        name: 'Tim Johnson',
        avatar: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
        },
        {
        name: 'Antonette Martinez',
        avatar: 'https://www.w3schools.com/w3images/avatar5.png',
        },
    ];

//to get random colors as background in non avatar
// color is hexadecimal ( [0-9 + a-f] => (16 indexes) ) and color contains is 6 indexes '#00ffee' 
//color[math.floor(math.random() * 16)] => 16 is n.of [0-9, a-f] to choose from these
const getRandomColor = () => {
    const random = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += random[Math.floor(Math.random() * 16)];
    }
    return color;
}

//implement get avatar photo || img
const getAvatar = (name, src) => {
    const avatarWrapper = document.createElement('div')
    avatarWrapper.className = 'avatar__img--wrapper'
    avatarWrapper.style.background = getRandomColor()
    if(src) {
            const imgSrc = document.createElement('img')
            imgSrc.classList.add('img-responsive', 'img-rounded', 'avatar__img')
            imgSrc.src = src
            avatarWrapper.appendChild(imgSrc)
        } else {
            const avatarTxt = document.createElement('span')
            avatarTxt.classList.add('avatar__txt')
            // avatarTxt.style.background = getRandomColor()
            const avatarName = name.split(' ').map((word) => word[0].toUpperCase()).join('')
            avatarTxt.innerText = avatarName
            avatarWrapper.append(avatarTxt)
        }
        return avatarWrapper
}


// generate dynamic avatars
const wrapper = document.getElementById('avatar__wrapper')

const generateAvatars = () => {
    users.forEach((user) => {
        const avatar = document.createElement('figure')
        avatar.className = 'avatar'
        const avatarCaption = document.createElement('figcaption')
        avatarCaption.className = 'avatar__name'
        avatarCaption.innerText = user.name
        avatar.prepend(getAvatar(user.name, user.avatar))
        avatar.appendChild(avatarCaption)
        wrapper.append(avatar)
    })
}


document.addEventListener('DOMContentLoaded', () => {
    generateAvatars()
})