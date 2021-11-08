const ARCHIVES_CONTAINER = document.querySelector(".wrapper-proffesional-course__block")

ARCHIVES_CONTAINER.innerHTML = ""



const GLUSH = [{archive_id     : 1,      
    			archive_name   : "1",   
			     sessions_count : 1,      
			     archive_price  : 2,   
			     price_curency  : "String(?"},
			     {archive_id     : 2,      
    			archive_name   : "121",   
			     sessions_count : 1,},
			     {archive_id     : 2,      
    			archive_name   : "scsdfdf",   
			     sessions_count : 1}]

//** Получает архивы сессий (каталоги)**
//get/sessions/archives
function getSessionsArchives(){

}

//Генератор сессий
function sessionsArchivesGenerator(data){
	for(var a of data){
		var price = priceCalc(a.archive_price,a.price_curency)
		ARCHIVES_CONTAINER.innerHTML += `
			<a href="${getHrefById(a.archive_id)}"><div class="proffesional-course__block">
                    <img src="img/pic1.png" alt="">
                    <div class="proffesional-course__name">
                        <p class="proffesional-course__title ru">${a.archive_name}е</p>
                        <p class="proffesional-course__title en">${a.archive_name}</p>
                        <p class="proffesional-course__subtitle ru">${a.sessions_count} сессии | ${price[0]}</p>
                        <p class="proffesional-course__subtitle en">${a.sessions_count} sessions | ${price[0]}</p>
                    </div>
                    <div class="proffesional-course__bottom"></div>
                </div>
            </a>
		`
	}
}


function getHrefById(id){
	return `/session/?id=${id}`
}

function priceCalc(price,curency){
	if(!price && !curency)
		return ["бесплатно","free"]
	return [`${price} ${curency}`,`${price} ${curency}`]
}



sessionsArchivesGenerator(GLUSH)