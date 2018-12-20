var h = document.getElementById('heading')
h.innerHTML ="Today is Thursday"

var sh3 = document.getElementsByClassName('subheading')
console.log(sh3)

sh3[0].style.color = "#dcdcdc"
sh3[1].style.color = "blue"

var para = document.getElementsByTagName('p')
para[0].style.backgroundColor = "orange"

var ht = document.querySelector('#heading')
ht.style.backgroundColor = "yellow"

var h3all = document.querySelectorAll('h3')
h3all[1].style.backgroundColor = "lime"

alert(sh3[1].innerHTML)

btn.onclick = function(){
	var fn = document.querySelector("#fn")
	alert(fn.value)

}
document.body.style.backgroundColor ="blue"