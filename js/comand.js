let aroundComand = document.querySelectorAll('.comand__block__top__around');
let nameComand = document.querySelectorAll('.comand__block__top__name');
let comand__block = document.querySelectorAll('.comand__block');
const comand__btn1 = document.querySelector(".comand_btn1");
const comand__btn2 = document.querySelector(".comand_btn2");
const comand__btn3 = document.querySelector(".comand_btn3");

for (let item of comand__block) {
    item.onclick = () => {
        item.classList.toggle('active')
        var active = false
        for(var c of comand__block){
            if(c.classList.contains('active')){
                active = true
                break
            }
        }
        if(active){
            document.querySelector('.comand__btn1').classList.add('active')
            document.querySelector('.comand__btn2').classList.add('active')
            document.querySelector('.comand__btn3').classList.add('active')
        }else{
            document.querySelector('.comand__btn1').classList.remove("active")
            document.querySelector('.comand__btn2').classList.remove("active")
            document.querySelector('.comand__btn3').classList.remove("active")
        }

    }
}

             







// for (let item of aroundComand) {
//     item.onclick = () => {
//         item.parentNode.classList.toggle('active')
//         document.querySelector('.comand__btn1').classList.add('active')
//         document.querySelector('.comand__btn2').classList.add('active')
//     }
// }

// for (let item of nameComand) {
//     item.onclick = () => {
//         item.parentNode.classList.toggle('active')
//         document.querySelector('.comand__btn1').classList.toggle('active')
//         document.querySelector('.comand__btn2').classList.toggle('active')
//     } 
// }

let greenBg = document.querySelectorAll('.comand__block__top')

document.querySelector('.comand__btn2').onclick = () => {
    for( let i = 0; i < greenBg.length; i++) {
        greenBg[i].classList.remove('active')
    }
    document.querySelector('.comand__btn1').classList.remove('active')
    document.querySelector('.comand__btn2').classList.remove('active')
}

document.querySelector('.select-curs__select').onclick = () => {
    document.querySelector('.select-curs__select').classList.toggle('active')
}
document.querySelector('.select-curs__select-proces').onclick = () => {
    document.querySelector('.select-curs__select-proces').classList.toggle('active')
}
document.querySelector('.comand__btn1').onclick = () => {
    if (document.querySelector('.comand__btn1').classList.contains('active')) {
        document.querySelector('.modal-black-windows').style.display = 'block'
        document.querySelector('.modal-block1').style.display = 'block'
    }
}

let btn1 = document.querySelectorAll('.modal__select-block1')

for (let item of btn1) {
    item.onclick = () => {
        document.querySelector('.modal-block1').style.display = 'none'
        document.querySelector('.modal-block2').style.display = 'block'
    }
}

let btn2 = document.querySelectorAll('.modal__select-block2')

for (let item of btn2) {
    item.onclick = () => {
        document.querySelector('.modal-block2').style.display = 'none'
        document.querySelector('.modal-block3').style.display = 'block'
    }
}

document.querySelector('.block3__btn').onclick = () => {
    document.querySelector('.modal-block3').style.display = 'none'
    document.querySelector('.modal-block4').style.display = 'block'
}

document.querySelector('.block4__btn').onclick = () => {
    document.querySelector('.modal-block4').style.display = 'none'
    document.querySelector('.modal-black-windows').style.display = 'none'
}

document.querySelector('.btn-modal__back1').onclick = () => {
    document.querySelector('.modal-block2').style.display = 'none'
    document.querySelector('.modal-block1').style.display = 'block'
}

document.querySelector('.btn-modal__back2').onclick = () => {
    document.querySelector('.modal-block2').style.display = 'block'
    document.querySelector('.modal-block3').style.display = 'none'
}

// let usersAll = document.querySelectorAll('.comand__block')

// document.querySelector('.comand-rules').onchange = () => {
//     if (document.querySelector('.comand-rules').value == 'all') {
//         for( let i = 0; i < usersAll.length; i++) {
//             usersAll[i].style.display = 'block'
//         }
//     }
//     if (document.querySelector('.comand-rules').value == 'red') {
//         for( let i = 0; i < usersAll.length; i++) {
//             usersAll[i].style.display = 'none'
//         }
//         document.querySelector('.comand__block2').style.display = 'block'
//         document.querySelector('.comand__block6').style.display = 'block'
//     }
//     if (document.querySelector('.comand-rules').value == 'grey') {
//         for( let i = 0; i < usersAll.length; i++) {
//             usersAll[i].style.display = 'block'
//         }
//         document.querySelector('.comand__block1').style.display = 'none'
//         document.querySelector('.comand__block2').style.display = 'none'
//         document.querySelector('.comand__block6').style.display = 'none'
//     }
// }