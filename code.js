var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 1; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab indicator")[0];
let tabBody = document.getElementsByClassName("tab body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function() {
        tabHeader.getElementsByClassName("active")[0].classList.remove("activate");
        tabsPane[i].classList.add("activate");
        tabBody.getElementsByClassName("active")[0].classList.remove("activate");
        tabBody.getElementsByTagName("div")[i].classList.add("activate");

        tabIndicator.style.left = 'calc(calc(100% /6)*$ {i})';
    });
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}