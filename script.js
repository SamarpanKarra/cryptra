const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");



menuBtn.onclick = ()=>{
    menu.classList.add("active");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
}

const tabcontents = document.querySelectorAll(".event1");
const tabLinks = document.querySelectorAll(".tabs a");

function openTab(event , tabName){
    tabcontents.forEach((event1) => (event1.style.display = "none"));
    tabLinks.forEach((tabLink) => tabLink.classList.remove("active"));
    event.currentTarget.classList.add("active");
    document.getElementById(tabName).style.display="block";
}
