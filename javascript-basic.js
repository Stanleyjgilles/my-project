//alert(" hello world")
//prompt("how much do you want?")

// this is a comment 
/* this is another comment */ 

console.log("hello wolrd")
var hd = document.getElementById("heading")
hd.innerHTMl = "whoohoo! I changed the heading"

var numberofwidgets= 20 

var pr = document.getElementById("price")
var btn= document.getElementById("btn")
var total= document.getElementById("total")
var qty= document.getElementById("qty")


btn.onclick = function(){
	console.log(pr.innerHTML)
	console.log(qty.value)
	total.innerHTML =qty.value * pr.innerHTML

}

