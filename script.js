//Burger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//Red messaging

    //select HTML elements
    const name=document.querySelector('.name')
    console.log("name=",name)
    const email=document.querySelector('.email')
    console.log("email =", email)
    const number=document.querySelector('.number')
    console.log("phone number=",number)
    const message=document.querySelector('.message')
    console.log("message=",message)
    const submit=document.querySelector('.submit-btn')
    console.log("button=",submit)
    const redMessage=document.querySelector('.red-message')
    console.log("error message=",redMessage)
    const submitText=document.querySelector('.submit-text')
    const check=document.querySelector('#check-icon')
    console.log("check icon =",check)

    //Displaying the error message
    submit.addEventListener("click",submitClick)
    function submitClick(){
        if(email.value==="" && name.value==="" && number.value==="" && message.value===""){
            redMessage.style.display="block"
        }
        else{
            redMessage.style.display="none"
            submitText.textContent="Submitted";
            submit.style.width="120px";
            check.style.display="block";
        }}
    