//console.log("Javascript");

//window.alert("hello");

//window.confirm("are you sure you want to exit ?");

//prompt dialog box
// let answer = window.prompt("What is the capital of Nepal?");
// if (answer="Kathmandu");{ 
// window.alert("you are correct");
// }
// console.log(answer);

//document
//window.document.body.style.backgroundColor="skyblue";
//document.body.style.fontFamily="sans-serif";

//document.body,innerHTML="<h1>CSS</h1>";

//selector
//let movies=document.getElelemntbtID("movies");
//movies.style.backgroundColor="cyan";
//console.log(movies);

//class selector
//let movies= document.getElementsByClassName("moviesList")
//console.log(movies);

//query selector
//let movies = document.querySelector(".moviesList")
//movies.classList.add("big-red");
//movies.classList.remove("big-red");
//movies.classList.toggle("big-red");

//query selectorall
//let movies1 = document.querySelectorAll(".moviesList")
//movies1[1].style.backgroundColor="blue";

//event listener
//document.addEventListener("click",function(){
  //  window.alert("You clicked");
//})

//let button= document.querySelector('.click');
//button.addEventListener("click",function(){
  //  window.alert("You clicked a button");
//})

let button= document.querySelector('.click');
button.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if (button.textContent=="Dark Mode"){
        button.textContent="Light Mode";
    }
    else{
        button.textContent="Dark Mode";
    }
});
