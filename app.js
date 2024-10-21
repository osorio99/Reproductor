import { playList } from "./js/app2.js";

const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stops = document.getElementById('stop')
const playimg = document.getElementById('playimg')
const nameArtist = document.getElementById('nameArtist')
const nameSong = document.getElementById('nameSong')
const audioSource = document.getElementById('audioSource')
const nextSong = document.getElementById('nextSong')
const backSong = document.getElementById('backSong')
let count = 0

    Songs(playList, count)

    play.addEventListener('click', () => audio.play())
    pause.addEventListener('click', () => audio.pause())
    rewind.addEventListener('click', () => audio.currentTime -= 10)
    forward.addEventListener('click', () => audio.currentTime += 10)
    stops.addEventListener('click', () => {
        audio.pause()
        audio.currentTime = 0
    })
    backSong.addEventListener('click', () => {
        count =  (count - 1) % playList.length
        Songs(playList, count)
    })
    nextSong.addEventListener('click', () => {
        count =  (count + 1) % playList.length
        Songs(playList, count)
    })

 function Songs(song, count) {
    playimg.src = song[count].img 
    nameArtist.textContent = song[count].artist
    nameSong.textContent = song[count].title
    audioSource.src = song[count].song

    audio.load()
    audio.play()
 }
