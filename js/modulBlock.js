let btnBlocks = document.querySelectorAll('.modul-block')

for (let item of btnBlocks) {
    item.onclick = () => {
        item.classList.toggle('active')
        console.log('yes')
    }
}