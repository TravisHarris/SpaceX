
const menuBtn = document.getElementById("menu-btn");
const menuBefore = document.getElementById("menu-icon-before");
const menuAfter = document.getElementById("menu-icon-after");
const menu = document.getElementById("secondary-nav");
const navPage = document.getElementById("nav-page");
const logo = document.getElementById("header-logo");
const footer = document.getElementById("main-footer");
const headline = document.getElementById("homepage-video-headline");

function checkMenu() {
	if(menuBtn.checked){
		menu.style.transform = "translateX(0)";
		menuBefore.style.display = "none";
		menuAfter.style.display = "inline-block";
		logo.style.zIndex = "-10";
		footer.style.zIndex = "-10";
		headline.style.zIndex = "-10";
		navPage.style.zIndex = "10"; 
	}
	else{
		menu.style.transform = "translateX(100%)";
		menuBefore.style.display = "inline-block";
		menuAfter.style.display = "none";
		logo.style.zIndex = "1";
		footer.style.zIndex = "1";
		headline.style.zIndex = "1";
		navPage.style.zIndex = "-1"; 
	}
}

// hide the mobile menu when screen is larger than 1020px wide

window.onresize = checkWindowSize;
window.onload = checkWindowSize;

function checkWindowSize() {
    if(window.innerWidth > 1020) {
    	menuBtn.checked = false;
    }
    checkMenu();
};

menuBtn.addEventListener("click", () => {
	checkMenu();
});