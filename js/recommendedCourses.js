

const userRecommendedCourses = [{
    certificates: [{
        course_name: 'Название курса'
    }]
    
}]
/*
<div class="certificate-null">
                    <p>Вы ещё не получили сертификатов, как только получите, они появятся здесь</p>
                </div> 

 */
const renderRecommendedcourse = (item) => `
            <p class="ru">Рекомендуемые курсы</p>
                    <p class="en">Recommended courses</p>
                
                <div class="recomendation-block">
                    <img src="img/MaskGroup1.png" alt="">
                    <div class="recomendation-block__label">
                        <p>online</p>
                    </div>
                    <div class="recomendation-block__name">
                        <p class="ru">Координация защит низкого напряжения</p>
                        <p class="en">Coordination of low voltage protections</p>
                    </div>
                    <div class="recomendation-block-bottom"></div>
                </div>
                <div class="recomendation-block">
                    <img src="img/Pic_2-02 4.png" alt="">
                    <div class="recomendation-block__label active">
                        <p>online</p>
                    </div>
                    <div class="recomendation-block__name">
                        <p class="ru">Применение BIM инструментов для проектирования систем...</p>
                        <p class="en">BIM tools application for the power supply systems design</p>
                    </div>
                    <div class="recomendation-block-bottom"></div>
                </div>
                <div class="recomendation-block">
                    <img src="img/image 3.png" alt="">
                    <div class="recomendation-block__label">
                        <p>online</p>
                    </div>
                    <div class="recomendation-block__name">
                        <p class="ru">Гармоники — тайный враг проектировщика</p>
                        <p class="en">Harmonics – the designer's backfriend </p>
                    </div>
                    <div class="recomendation-block-bottom"></div>
                </div>
       `
const renderRecommendedcourses = (list) => {
    document.querySelector('.recomendation').insertAdjacentHTML('beforeend', list.map(item => renderRecommendedcourse(item)).join(''))
}
renderRecommendedcourses(userRecommendedCourses)
