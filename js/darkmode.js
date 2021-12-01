const toggleBtn = document.getElementById('toggle-mode')
const lightIcon = document.querySelector('.light-icon')
const darkIcon = document.querySelector('.dark-icon')
let localTheme = localStorage.getItem('theme')

const enableDarkMode = () => {
    //1. toggle icons
    lightIcon.style.display = 'initial'
    darkIcon.style.display = 'none'
    //2. set localStorage
    localStorage.setItem('theme', 'dark')
    //3. add class for body
    document.body.classList.add('dark-mode')
    // document.body.classList.remove('default-mode')

}

const disableDarkMode = () => {
        lightIcon.style.display = 'none'
        darkIcon.style.display = 'initial'
        localStorage.setItem('theme', 'light')
        document.body.classList.remove('dark-mode')
}

const toggleStorage = () => {
    //if click when it dark toggle theme
    // redefine localTheme to continue in listening the changes on ot with this function
    localTheme = localStorage.getItem('theme')
    localTheme === 'dark' ? disableDarkMode() : enableDarkMode()
}


document.addEventListener('DOMContentLoaded', () => {

    toggleStorage()
    window.matchMedia('(prefers-color-scheme: dark)')?.addEventListener('change', e => e?.matches ? enableDarkMode() : disableDarkMode())
    toggleBtn.addEventListener('click', (e) => toggleStorage())
})