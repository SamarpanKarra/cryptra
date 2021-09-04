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
    document.getElementById(tabName).style.display="flex";
}



function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active","");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
