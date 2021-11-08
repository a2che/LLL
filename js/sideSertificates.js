'use strict'

const userCertificates = [{
    certificates: [{
        course_name: 'Название курса'
    }]
    
}]
/*
<div class="certificate-null">
                    <p>Вы ещё не получили сертификатов, как только получите, они появятся здесь</p>
                </div> 

 */
const renderCertificate = (item) => `
        <p class="ru">Мои сертификаты</p>
                <p class="en">My certificates</p>
                 
                <div class="wrapper-my-certificate">
                    <div class="my-certificate__block">
                        <img src="img/sertif.png" alt="">
                        <p class="ru">Решения для предотвращения пожара в зданиях</p>
                        <p class="en">Solutions for fire prevention in buildings</p>
                    </div>
                    <div class="my-certificate__block">
                        <img src="img/sertif.png" alt="">
                        <p class="ru">АСУ Зданием на базе решения EcoStruxure. Проектирование (вводный семинар)</p>
                        <p class="en">The building automatic control system powered by EcoStruxure solution. Design (introductory workshop)</p>
                    </div>
                </div>
                <div class="btn btn-certificate">
                    <a href="sertificat.html">
                        <p class="ru">Все сертификаты</p>
                        <p class="en">All certificates</p>
                    </a>
                </div>
       `
const renderCertificates = (list) => {
    document.querySelector('.my-certificate').insertAdjacentHTML('beforeend', list.map(item => renderCertificate(item)).join(''))
}
renderCertificates(userCertificates)
