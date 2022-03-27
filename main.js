/*Check if the navigation is open or closed, and add a value to the variable. It doesn't matter if you call it true or false. You will switch them later on*/
let toggleNavStatus = false;

/*Function that opens and closes the menu once we click on it. We cretae an anonymous function in order to not hoist anything*/
let toggleNav = function() {
  /*We want to manipulate CSS, so we need to grab the elements we want to manipulate. It is common practice when we are going to grab something, to name it "get", and when we want to change something, we "set" something. QuerySelector is used to grab HTML items.*/
  let getSidebar = document.querySelector(".nav-sidebar"); //We want to change the width of the sidebar
  let getSidebarUl = document.querySelector(".nav-sidebar ul"); //Right now the ul is hidden. So we need to make it visible.
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); /*
  Only 1 anchor tag would be selected, so we need to use querySelectorAll. It puts the a tags in an array.*/

  //Now we check if the toggleNavStatus is equal to true or false:
  if (toggleNavStatus === false) {
    /*What do we want to change first? JS is read from top to bottom*/
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "270px";
    getSidebarTitle.style.opacity = "0.5";

    /*We create a variable let to see how many times we want to run the loop inside the code*/
    let arrayLength = getSidebarLinks.length;
    /*for loop:*/
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

  /*We need to create an onclick="toggleNav()" in the html btn-toggle-nav*/


    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    /*Change it to false once we're done running the else if statement*/
    toggleNavStatus = false;
}
}
