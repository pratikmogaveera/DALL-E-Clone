import { surpriseMePrompts } from '../constants'
import FileSaver from 'file-saver'
import { logo, logoInverted } from '../assets'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if (randomPrompt === prompt)
        return getRandomPrompt(prompt)

    return randomPrompt
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}

export function handleTheme(mode) {
    const button = document.body.querySelector('.theme-button')
    const lightButton = document.body.querySelector('#theme-light')
    const darkButton = document.body.querySelector('#theme-light')

    if (!mode) {
        darkMode()
    } else {
        lightMode()
    }
}

const darkMode = () => {
    const root = document.querySelector(":root")
    root.style.setProperty('--label-heading', '#ededed')
    root.style.setProperty('--h1', '#e9e9e9')
    root.style.setProperty('--header-bg', '#191919')
    root.style.setProperty('--header-border', '#494949')
    root.style.setProperty('--theme-button-bg', '#494949')
    root.style.setProperty('--input-bg', '#191919')
    root.style.setProperty('--input-text', 'white')
    root.style.setProperty('--input-border', '#494949')
    root.style.setProperty('--body-bg', '#1a1a1a')
    const svgLogo = document.body.querySelector("#logo")
}

const lightMode = () => {
    const root = document.querySelector(":root")
    root.style.setProperty('--label-heading', 'rgb(17, 24, 39)')
    root.style.setProperty('--h1', '#222328')
    root.style.setProperty('--header-bg', 'white')
    root.style.setProperty('--header-border', '#e6ebf4')
    root.style.setProperty('--theme-button-bg', 'white')
    root.style.setProperty('--input-bg', 'rgb(209 213 219)')
    root.style.setProperty('--input-text', 'black')
    root.style.setProperty('--input-border', 'rgb(209 213 219)')
    root.style.setProperty('--body-bg', '#f9fafe')
    const svgLogo = document.body.querySelector("#logo")
}
