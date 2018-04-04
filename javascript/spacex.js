
const menuBtn = document.getElementById("menu-btn");
const menuBefore = document.getElementById("menu-icon-before");
const menuAfter = document.getElementById("menu-icon-after");
const menu = document.getElementById("secondary-nav");

function checkMenu() {
	if(menuBtn.checked){
		menu.style.transform = "translateX(0)";
		menuBefore.style.display = "none";
		menuAfter.style.display = "inline-block";
	}
	else{
		menu.style.transform = "translateX(100%)";
		menuBefore.style.display = "inline-block";
		menuAfter.style.display = "none";
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