document.querySelector('.select__nav2').onchange = () => {
    document.querySelector('.select__nav1').value = 'no'
    document.querySelector('.select__nav3').value = 'no'
    document.querySelector('.select__nav5').value = '1'
    if (document.querySelector('.select__nav2').value == 'no') {
        document.querySelector('.section__block__proffi').style.display = 'block'
        document.querySelector('.section__block__expert').style.display = 'block'
        document.querySelector('.section__block__expert_cof').style.display = 'block'
    } 
    if (document.querySelector('.select__nav2').value == 'pro') {
        document.querySelector('.section__block__proffi').style.display = 'block'
        document.querySelector('.section__block__expert').style.display = 'none'
        document.querySelector('.section__block__expert_cof').style.display = 'none'
    } 
    if (document.querySelector('.select__nav2').value == 'ex') {
        document.querySelector('.section__block__proffi').style.display = 'none'
        document.querySelector('.section__block__expert').style.display = 'block'
        document.querySelector('.section__block__expert_cof').style.display = 'none'
    } 
    if (document.querySelector('.select__nav2').value == 'cof') {
        document.querySelector('.section__block__proffi').style.display = 'none'
        document.querySelector('.section__block__expert').style.display = 'none'
        document.querySelector('.section__block__expert_cof').style.display = 'block'
    } 
}
let allBlock = document.querySelectorAll('.training__block')
let allRed = document.querySelectorAll('.training__block-red')
let allGreen = document.querySelectorAll('.training__block-green')
let allGrey = document.querySelectorAll('.training__block-grey')


document.querySelector('.select__nav3').onchange = () => {
    document.querySelector('.select__nav1').value = 'no'
    document.querySelector('.select__nav2').value = 'no'
    document.querySelector('.select__nav5').value = '1'
    if (document.querySelector('.select__nav3').value == 'no') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'block'
        }
    } 
    if (document.querySelector('.select__nav3').value == 'grey') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
        for( let i = 0; i < allGrey.length; i++) {
            allGrey[i].style.display = 'block'
        }
    } 
    if (document.querySelector('.select__nav3').value == 'red') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
        for( let i = 0; i < allRed.length; i++) {
            allRed[i].style.display = 'block'
        }
    } 
    if (document.querySelector('.select__nav3').value == 'green') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
        for( let i = 0; i < allGreen.length; i++) {
            allGreen[i].style.display = 'block'
        }
    } 
}


document.querySelector('.select__nav5').onchange = () => {
    document.querySelector('.select__nav1').value = 'no'
    document.querySelector('.select__nav3').value = 'no'
    document.querySelector('.select__nav2').value = 'no'
    if (document.querySelector('.select__nav5').value == '1') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'block'
        }
    }
    if (document.querySelector('.select__nav5').value == '0') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
    }
    if (document.querySelector('.select__nav5').value == '2') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
        document.querySelector('.block__dead-line1').style.display = 'block'
        document.querySelector('.block__dead-line2').style.display = 'block'
    }
}

document.querySelector('.select__nav1').onchange = () => {
    document.querySelector('.select__nav2').value = 'no'
    document.querySelector('.select__nav3').value = 'no'
    document.querySelector('.select__nav5').value = '1'
    if (document.querySelector('.select__nav2').value == 'no') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'block'
        }
    } 
    if (document.querySelector('.select__nav1').value == '1') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
        document.querySelector('.training__block1').style.display = 'block'
        document.querySelector('.training__block11').style.display = 'block'
        document.querySelector('.training__block111').style.display = 'block'
    } 
    if (document.querySelector('.select__nav1').value == '2') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
        document.querySelector('.training__block2').style.display = 'block'
        document.querySelector('.training__block22').style.display = 'block'
    } 
    if (document.querySelector('.select__nav1').value == '3') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
        document.querySelector('.training__block3').style.display = 'block'
    }
    if (document.querySelector('.select__nav1').value == '4') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
        document.querySelector('.training__block4').style.display = 'block'
    } 
    if (document.querySelector('.select__nav1').value == '5') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
            document.querySelector('.training__block5').style.display = 'block'
        }
    } 
    if (document.querySelector('.select__nav1').value == '6') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
    } 
    if (document.querySelector('.select__nav1').value == '7') {
        for( let i = 0; i < allBlock.length; i++) {
            allBlock[i].style.display = 'none'
        }
    } 
}