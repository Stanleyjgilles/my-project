var para1 = document.querySelector('#para1')

para1.onclick = function(){
	para1.style.color ="red"
	para1.style.fontSize ="32px"
}
para1.ondblclick = function(){
	para1.style.color ="#dcdcdc"
}

var para2 = document.querySelector('#para2')

para2.onmouseover = function(){
	para2.style.backgroundColor ="orange"
}
box1.onmouseenter = function(){
    box1.style.backgroundColor ="red"
}
box1.onmouseleave = function(){
	box1.style.backgroundColor ="skyblue"
}
var box2 = document.querySelector('#box2')
box2.onmouseout = function(){
	box2.style.backgroundColor ="#ddd"
	heading.innerHTML = "Using Events"
	box2.style.borderRadius = "50%"
}