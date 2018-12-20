var students = ["Mike", "Jim","Mary", "Linda"]

console.log(students[0]) 
console.log(students[2]) 

var teachers= ["jane", "James", "Alex" , "Sharon"] 
console.log(teachers[3]) 

var school = [students, teachers]
console.log(school[1][2])
console.log(school[0][3])

var person = {name: "Tony" , age: 4, hair: "blonde"}
console.log(person['name'])
console.log(person['age'])
console.log(person.name) 

var num1 = 5
var num2 =10
var num3 =7
var result = num1 + num2 + num3
console.log(result)

var fname = "Mike"
var lname = "Smith"
var fullname = fname + " " + lname
console.log(fullname)

var user ={firstname: "Lucy",
           lastname:"Doe",
            birthday: "june4", 
            interest: ["reading","cooking", "dancing", "coding"]}
 console.log(user.firstname + user.lastname )
 console.log(user.interest[3])   
 var fn = document.getElementById('fn')
 fn.innerHTML = user.firstname + " " + user.lastname
 fn.style.color ="red"
 document.body.style.backgroundColor = "skyblue"
 var a = 3
 var b = 7 
 if (a> b){
 	console.log("condition is TRUE")
 }else{
 	console.log("condotion is FALSE")
 }

 if (a< b){
 	console.log("a is a nut case")
 }else if(a === b){
 	console.log("a is a equal giver")
 }else{
 	console.log("a is more dominant")
 }

 function addNUMBERS(bigHead, samllHead){
 	return bigHead + samllHead
 }
 console.log(addNUMBERS(6,3))

for (var i = 0; i<= 100; i+=10){
	console.log(i)
}

