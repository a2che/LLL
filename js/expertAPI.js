const COFFEE_CONTAINER = document.querySelector(".wrapper-proffesional-course__block")





const USER_PROGRESS_TABLE = {"25":"raining__block__line-green",
							 "50":"training__block__line-red",
							 "75":"training__block__line-yellow",
							 "100":"training__block__line-blue"}

COFFEE_CONTAINER.innerHTML = ""

// /get/coffee/coffee
// *Получает все кофе с экспертом*

function getCoffees(){

}

function coffeGenerator(data){
	for(var c of data){
		var progress = ""
		if(c.user_percent)
			for(var p of Object.keys(USER_PROGRESS_TABLE))
				if(c.user_percent < parseInt(p)){
					progress = USER_PROGRESS_TABLE[p]
					break
				}

		COFFEE_CONTAINER.innerHTML += `
				<div class="training__block">
                    <img src="${c.coffee_image}" alt="">
                    <div class="training__block__line">
                        <div class="training__block__line-color">
                            <div class="${progress}"></div>
                        </div>
                    </div>
                    <div class="wrapper-info-training__block">
                        <div class="training__block__name">
                            <p class="ru">${c.coffee_name}</p>
                            <p class="en">${c.coffee_name}</p>
                        </div>
                        <div class="training__block__category">
                            <p class="ru">Кофе с экспертом</p>
                            <p class="en">Coffee with an expert</p>
                        </div>
                    </div>
                    <div class="block-label__red">
                        <img src="img/clock.svg" alt="">
                        <p>01/04/21</p>
                    </div>
                    <div class="block-label__yellow">
                        <p>зарегистрирован</p>
                    </div>
                    <div class="block-label__blue">
                        <p>назначен</p>
                    </div>
                </div>
		`
	}
}