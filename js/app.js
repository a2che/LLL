
selectLanguage()

document.querySelector('.nav__language').onclick = local


function local() {
    if (localStorage.getItem('language') == null) {
        localStorage.setItem('language',1)
        selectLanguage()
    }
    else {
        localStorage.removeItem('language')
        selectLanguage()
    }
     

}


function selectLanguage() {
    if (localStorage.getItem('language') !== null) {
        let langEn = document.querySelectorAll('.en')
        let langRu = document.querySelectorAll('.ru')
        for (let item of langEn) {
            if(item.classList.contains('coin__price')) {
                item.style.display = 'inline'
            } else{
                item.style.display = 'block'
            }
               
        } 
        for (let item1 of langRu) {
            item1.style.display = 'none'
        }
    } else {
        let langEn = document.querySelectorAll('.en')
        let langRu = document.querySelectorAll('.ru')
        for (let item of langEn) {
            item.style.display = 'none'
        }
        for (let item1 of langRu) {
            if(item1.classList.contains('coin__price')) {
                item1.style.display = 'inline'
            }else{
                item1.style.display = 'block'
            }
        }
    }
}

// user Level

// let userLevel = 3
// document.querySelector('.user__level').innerHTML = userLevel
// document.querySelector('.user__level1').innerHTML = userLevel

// // user Skill

// let userSkill = 60
// document.querySelector('.line__user__scill-green').style.width = userSkill + '%'

// // user Skill Num

// let userSkillNum1 = 45
// let userSkillNum2 = 60
// document.querySelector('.user-scill__num').innerHTML = userSkillNum1 + '/' + userSkillNum2

// user Money

// let userMoney = 47
// document.querySelector('.user__money').innerHTML = userMoney
// document.querySelector('.user__money1').innerHTML = userMoney

// user Name

// let userName = 'Владислав'
// document.querySelector('.user__name').innerHTML = userName


// nav links

// let linksNav = document.querySelectorAll('.nav-links')

// for (let item of linksNav) {
//     item.onmousemove = () => {
//         item.childNodes[1].src = 'img/arrow_green.svg'
//     }
//     item.onmouseout = () => {
//         if (item.classList.contains('active')) {
//             return
//         }
//         item.childNodes[1].src = 'img/arrow.svg'
//     }
// }

// // window.addEventListener('scroll', function() {
// //     if (pageYOffset < 60) {
// //         document.querySelector('#nav').style.top = '120px'
// //         document.querySelector('.mobile-nav').style.top = '100px'
// //     } if (pageYOffset > 60) {
// //         document.querySelector('#nav').style.top = '0px'
// //         document.querySelector('.mobile-nav').style.top = '0px'
// //     }
    
// // })

// document.querySelector('.ham').onclick = () => {
//     document.querySelector('.ham').classList.toggle('active')
//     document.querySelector('nav').classList.toggle('active')
// }


