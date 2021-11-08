'use strict'

const userHeader = [{
    user_avatar: 'img/user_foto.png', 

    
}]
/*

user_foto.png
${item.user_level_experience}
 */
const renderElement = (item) => `
        <a href="login.html"><img src="img/${item.user_avatar}" alt=""></a>
       `
const renderElements = (list) => {
    document.querySelector('.nav__user-name__img').insertAdjacentHTML('beforeend', list.map(item => renderElement(item)).join(''))
}
renderElements(userHeader)





*/