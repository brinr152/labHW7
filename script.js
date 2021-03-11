document.body.style.backgroundColor = "#d2f8d2";



function clickDance(){
	item1.classList.add("clear")
	item2.classList.remove("clear")
	item3.classList.remove("clear")
	item4.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "I love listening and dancing to music, especially if I get to dress up!"
}

let dance = document.querySelector("#item1");
dance.addEventListener("click", clickDance);





function clickRoof(){
	item2.classList.add("clear")
	item1.classList.remove("clear")
	item3.classList.remove("clear")
	item4.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "Getting to spend time outside , especially in nice NY weather, is a my favorite kind of day."
}

let roof = document.querySelector("#item2");
roof.addEventListener("click", clickRoof);





function clickDrink(){
	item3.classList.add("clear")
	item1.classList.remove("clear")
	item2.classList.remove("clear")
	item4.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "Living in NYC was always a dream of mine, and I adore everything about it."
}

let drink = document.querySelector("#item3");
drink.addEventListener("click", clickDrink);




function clickPizza(){
	item4.classList.add("clear")
	item1.classList.remove("clear")
	item2.classList.remove("clear")
	item3.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "Good pizza is definitely one of the best things about the city, especially when I get to share it with my roommates and friends."
}

let pizza = document.querySelector("#item4");
pizza.addEventListener("click", clickPizza);




function clickBack(){
	let p = document.querySelector("#bio");
	p.innerHTML = "Hello, my name is Reece Brind'Amour"
}

let back = document.querySelector("#bio");
back.addEventListener("click", clickBack);



