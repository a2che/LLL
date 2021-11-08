
let activeVideo = 1
let numVideo = 'video'
let numVideoDel = 'video'

document.querySelector('.btn-next__video').onclick = () => {
    activeVideo++
    if (activeVideo == 9) {
        activeVideo = 8
    }
    numVideo = '.video'+activeVideo
    numVideoDel = '.video'+(activeVideo-1)
    document.querySelector(numVideo).style.display = 'block'
    document.querySelector(numVideoDel).style.display = 'none'
    document.querySelector(`.video__block__name${activeVideo-1}`).classList.remove('active')
    document.querySelector(`.video__block__name${activeVideo}`).classList.add('active')
    let showEl = document.querySelector(`.video__block__name${activeVideo}`)
    showEl.scrollIntoView()
    window.scrollTo(0,0)
    
}



document.querySelector('.btn-prev__video').onclick = () => {
    activeVideo--
    if (activeVideo == 0) {
        activeVideo = 1
    }
    numVideo = '.video'+activeVideo
    numVideoDel = '.video'+(activeVideo+1)
    document.querySelector(numVideo).style.display = 'block'
    document.querySelector(numVideoDel).style.display = 'none'
    document.querySelector(`.video__block__name${activeVideo+1}`).classList.remove('active')
    document.querySelector(`.video__block__name${activeVideo}`).classList.add('active')
    let showEl = document.querySelector(`.video__block__name${activeVideo}`)
    showEl.scrollIntoView()
    window.scrollTo(0,0)
}

document.querySelector('.video__block__name1').onclick = () => {showVideo(1)} 
document.querySelector('.video__block__name2').onclick = () => {showVideo(2)} 
document.querySelector('.video__block__name3').onclick = () => {showVideo(3)} 
document.querySelector('.video__block__name4').onclick = () => {showVideo(4)} 
document.querySelector('.video__block__name5').onclick = () => {showVideo(5)} 
document.querySelector('.video__block__name6').onclick = () => {showVideo(6)} 
document.querySelector('.video__block__name7').onclick = () => {showVideo(7)} 
document.querySelector('.video__block__name8').onclick = () => {showVideo(8)} 

function showVideo(num) {
    let allBtn = document.querySelectorAll('.video__block__name')
    for( let i = 0; i < allBtn.length; i++) {
        allBtn[i].classList.remove('active')
    }
    document.querySelector(`.video__block__name${num}`).classList.add('active')
    activeVideo = num

    let allVideo = document.querySelectorAll('.video')
    for( let i = 0; i < allVideo.length; i++) {
        allVideo[i].style.display = 'none'
    }
    document.querySelector(`.video${num}`).style.display = 'block'
}