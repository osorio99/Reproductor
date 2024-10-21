const audio = document.getElementById("audio")
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const forward = document.getElementById("forward")
const rewind = document.getElementById("rewind")
const stop = document.getElementById("stop")


play.addEventListener('click',() => audio.play())

pause.addEventListener('click',() => audio.pause())

rewind.addEventListener('click',() => audio.curruentTime -=10)

rewind.addEventListener('click',() => audio.curruentTime +=10)

stop.addEventListener('click', () => {
    audio.pause()
    audio.curruentTime= 0
})