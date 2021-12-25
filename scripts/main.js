let myImage=document.querySelector('img');

myImage.onclick=function(){
	let mySrc=myImage.getAttribute('src');
	if(mySrc==='images/20211220151200.png'){
		myImage.setAttribute('src','images/20211220145719.png');
	}else {
		myImage.setAttribute('src','images/20211220151200.png');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
	let myName=prompt('请输入你的名字');
	if(!myName || myName===null){
		setUserName();
	}else{
	localStorage.setItem('name',myName);
	myHeading.innerHTML='旅行者：'+myName;}
}
if(!localStorage.getItem('name')){
	setUserName();
}else {
	let storedName=localStorage.getItem('name');
	myHeading.textContent='旅行者：'+storedName;
}
myButton.onclick=function(){
	setUserName();
}