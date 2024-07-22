const myHeading = document.querySelector("h2");
document.querySelector("button").addEventListener("click",()=>{
    myHeading.innerHTML = "Hello World"
})
const myName=prompt("Enter your name");
localStorage.setItem("name",myName);
alert(`Hi ${myName}`)
myHeading.innerHTML=`${myName}`