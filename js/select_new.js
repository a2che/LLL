const selects = document.querySelectorAll(".new_select")

console.log(selects)
selects.forEach(function(select){
	select.addEventListener("click",openSelect)
	select.addEventListener("mouseleave",function(){
		if(this.classList.contains("on")){
			this.click()
		}
	})
	select.querySelector(".body_select").querySelectorAll("p").forEach(item=>{
		item.addEventListener("click",function(){
			this.parentElement.parentElement.querySelector("input").value = item.innerHTML
			this.parentElement.parentElement.style.backgroundColor = "#626469"
			this.parentElement.parentElement.style.color = "white"
		})
	select.dataset.title=select.querySelector(".title_select").innerHTML
	})
})



function openSelect(){
	if(!this.classList.contains("on")){
		selects.forEach(function(select){
			if(select.classList.contains("on") && this != select)
				select.click()
		})

		// this.querySelector(".body_select").querySelectorAll("p").forEach(item=>{
		// 	if(item.innerHTML == this.querySelector("input").value)
		// 		item.style.fontWeight = "bold"
		// 	else
		// 		item.style.fontWeight = null
		// })

		this.querySelector(".title_select").innerHTML = this.dataset.title

		this.classList.add("on")
		this.style.maxWidth = "1000px"
		this.style.maxHeight = "1000px"
			
	}else{
		const value = this.querySelector("input").value
		if(value !=""){
			this.querySelector(".title_select").innerHTML = value
			this.classList.add("selected")
		}
		this.classList.remove("on")
		this.style.maxWidth = null
		this.style.maxHeight = null
	}
	
}