// GO!
//TASK 1
var answerBox = document.querySelector('#hide-nav .answer-box') //select the outer node
var navMenu = document.querySelector('.nav-menu')

var navState = { //creating an object that has teh default state of the navMenu
	isShowing: true,
}

var toggleButton = document.createElement('button') //creating the button
answerBox.appendChild(toggleButton) //appending the toggleButtong to the answerbox
toggleButton.innerHTML = 'Hide Nav' //innerHTML starts with the option to hide

toggleButton.addEventListener('click', function(){
	if (navState.isShowing === true){
		navState.isShowing = false
		navMenu.style.opacity = 0
		toggleButton.innerHTML = 'Show Nav'
	}
	else{
		navState.isShowing = true
		navMenu.style.opacity = 1
		toggleButton.innerHTML = 'Hide Nav'
	}
})

//TASK 2

var answerBox = document.querySelector('#inputBox')
var ulNode = document.querySelector('.guest-list')

answerBox.addEventListener('keydown', function(eventObj){
	if (eventObj.keyCode === 13){// if the ENTER key is pressed
		var liNode = document.createElement('li') // create an liNode variable
		liNode.className = 'guest' //proper css class is applied
		ulNode.appendChild(liNode) //append the li node
		liNode.innerHTML= eventObj.target.value // set the content to be equal to string entered
		eventObj.target.value = '' //clear input 
	}
})

//TASK 3

var answerBox2 = document.querySelector('#inputBox2')
var ulNode2 = document.querySelector('.guest-list2')

answerBox2.addEventListener('keydown', function(eventObj){
	if (eventObj.keyCode === 13){
		var liNode = document.createElement('li') // create an liNode variable
		liNode.className = 'guest' //proper css class is applied
		ulNode2.appendChild(liNode) //append the li node
		liNode.innerHTML= eventObj.target.value // set the content to be equal to string entered
		eventObj.target.value = '' //clear input

		var removeButton = document.createElement('button') //create button
		removeButton.innerHTML = 'X' // innerHTML
		liNode.appendChild(removeButton) // append button to each li that is added
		removeButton.addEventListener('click', function(){
			ulNode2.removeChild(liNode) //remove linode where the click occurs
		})
	}
})