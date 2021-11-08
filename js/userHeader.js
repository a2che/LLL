'use strict'

const userHeader = [{
    user_coins: '20', 
    user_level: 2, 
    user_level_experience: '24', 
    user_level_max_experience_per_level: 60, // добавил новое значение - максимальное кол-во опыта на этом уровне
    user_avatar: 'img/user_foto.png', 
    user_name: 'Владислав',
    recommendation: [{
        id: 2, 
        image: 'ssillkaa',
        online: true
    }],
    certificates: [{
        course_name: 'Название курса'
    }]
    
}]
/*


 */
const renderElement = (item) => `
        <div class="wrapper__top-nav">
            <div class="top-nav__logo">
                <a href="index.html"><img src="img/logo.png" alt=""></a>
            </div>
            <div class="top-nav__user-scill">
                <div class="nav__user__level">
                    <a href="level.html"><p class="ru">Уровень: <span class="user__level">${item.user_level} </span></p>
                        <p class="en">Level: <span class="user__level1">${item.user_level}</span></p></a>
                    <div class="line__user__scill">
                        <div class="line__user__scill-green"></div>
                        <p class="user-scill__num">${item.user_level_experience} / ${item.user_level_max_experience_per_level}</p>
                    </div>                   
                </div>
                <div class="nav__user__money">
                    <p class="ru">Монеты: <strong class="user__money">${item.user_coins}</strong></p>
                    <p class="en">Coins: <strong class="user__money1">${item.user_coins}</strong></p>
                    <a href="shop.html"><article class="ru">Получить награду</article><article class="en">Get a reward</article></a>
                </div>
            </div>
            <div class="top-nav__comand">
                <a href="comand.html"><p class="ru">Команда</p><p class="en">Team</p></a>
            </div>
            <div class="top-nav__user-name">
                <div class="nav__user-name__name">
                    <a href="login.html"><p class="user__name">${item.user_name}</p></a>
                </div>
                <div class="nav__user-name__img">
                    <a href="login.html"><img src="${item.user_avatar}" alt=""></a>
                </div>
                <div class="nav__language">
                    <p class="ru">RU</p>
                    <p class="en">EN</p>
                </div>
            </div>
        </div>
       `
const renderElements = (list) => {
    document.querySelector('.top-nav').insertAdjacentHTML('beforeend', list.map(item => renderElement(item)).join(''))
}
renderElements(userHeader)






/*



<script type="text/javascript">
    
'use strict'

const userHeader = [{
    user_coins: '20', 
    user_level: 2, 
    user_level_experience: 24, 
    user_level_max_experience_per_level: 60, // добавил новое значение - максимальное кол-во опыта на этом уровне
    user_avatar: 'img/user_foto.png', 
    user_name: 'Александр',
    recommendation: [{
        id: 2, 
        image: 'ssillkaa',
        online: true
    }],
    certificates: [{
        course_name: 'Название курса'
    }]
    
}]

<div class="top-nav__comand">
                <a href="comand.html"><p class="ru">Команда</p><p class="en">Team</p></a>
            </div>

const renderElement = (item) => `
        <div class="wrapper__top-nav">
            <div class="top-nav__logo">
                <a href="index.html"><img src="img/logo.png" alt=""></a>
            </div>
            <div class="top-nav__user-scill">
                <div class="nav__user__level">
                    <a href="level.html"><p class="ru">Уровень: <span class="user__level">${item.user_level} </span></p>
                        <p class="en">Level: <span class="user__level1">${item.user_level}</span></p></a>
                    <div class="line__user__scill">
                        <div class="line__user__scill-green"></div>
                        <p class="user-scill__num">${item.user_level_experience} / ${item.user_level_max_experience_per_level}</p>
                    </div>                   
                </div>
                <div class="nav__user__money">
                    <p class="ru">Монеты: <strong class="user__money">${item.user_coins}</strong></p>
                    <p class="en">Coins: <strong class="user__money1">${item.user_coins}</strong></p>
                    <a href="shop.html"><article class="ru">Получить награду</article><article class="en">Get a reward</article></a>
                </div>
            </div>
            
            <div class="top-nav__user-name">
                <div class="nav__user-name__name">
                    <a href="login.html"><p class="user__name">${item.user_name}</p></a>
                </div>
                <div class="nav__user-name__img">
                    <a href="login.html"><img src="${item.user_avatar}" alt=""></a>
                </div>
                <div class="nav__language">
                    <p class="ru">RU</p>
                    <p class="en">EN</p>
                </div>
            </div>
        </div>
       `
const renderElements = (list) => {
    document.querySelector('.top-nav').insertAdjacentHTML('beforeend', list.map(item => renderElement(item)).join(''))
}
renderElements(userHeader)




    
</script>



*/