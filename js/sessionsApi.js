const SESSIONS_CONTAINER = document.querySelector(".page-contante")
SESSIONS_CONTAINER.innerHTML = ""

//*Получает все Экспертные сессии*
///get/sessions/sessions
function getSessions(catalogId){

}

//Генератор сессий в каталоге
function sessionsGenerator(data){
	for(var s of data.content){
		price = priceCalc(s.session_price,s.price_curency)
		SESSIONS_CONTAINER.innerHTML +=`<div class="modul-block">
                <div class="modul-block__icon">
                    <img src="img/block_icon6.svg" alt="">
                </div>
                <div class="modul-block__img">
                    <img src="${s.session_image}" alt="">
                </div>
                <div class="modul-block__name">
                    <p class="block__name ru">${s.session_name}</p>
                    <p class="block__name en">${s.session_name}</p>
                    <p class="block__name__label ru">${price[0]}</p>
                    <p class="block__name__label en">${price[1]}</p>
                    <div class="wrapper-text__drop"><div style="font-family:'Segoe UI', 'system-ui', 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;font-size:14px;font-style:normal;font-weight:400;letter-spacing:normal;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;">
                    ${s.session_desc}</div></div>
                </div>
                <div class="modul-block__bottom">
                    <img src="img/arrow_down.svg" alt="">
                </div>`
	}
}

function getHrefById(id){
	return `/session?id=${id}`
}



function priceCalc(price,curency){
	if(!price && !curency)
		return ["бесплатно","free"]
	return [`${price} ${curency}`,`${price} ${curency}`]
}

///set/sessions/user_registr
//*Регистрация на ссесиию*

function sessionUesrRegistr(session_id){
	//Тут код регистрации, ооч продуманый и красивый код
	//Включаем воображение
}