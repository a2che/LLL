let iserCach = 47

let priceGood = document.querySelectorAll('.block__goods input')

for( let i = 0; i < priceGood.length; i++){ 
    if (priceGood[i].value > iserCach) {
        priceGood[i].parentNode.classList.add('active')
    }   
  }

  document.querySelector('.selekt__shop').onchange = () => {
      if(document.querySelector('.selekt__shop').value == 'yes') {
        for( let i = 0; i < priceGood.length; i++){ 
                priceGood[i].parentNode.style.display = 'block'
          }
      }
      if(document.querySelector('.selekt__shop').value == 'no') {
        for( let i = 0; i < priceGood.length; i++){ 
            if (priceGood[i].value > iserCach) {
                priceGood[i].parentNode.style.display = 'none'
            }   
          }
      }
  }
