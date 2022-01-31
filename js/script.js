/* toggle navbar */

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* close nav when clicking on a nav item*/

document.addEventListener("click", function(e) {
    if (e.target.closest(".nav-item")) {
        toggleNav();
    }
});

/* sticky header */

window.addEventListener("scroll", function() {
    if (this.pageYOffset > 60) {
        document.querySelector(".header").classList.add("sticky");

    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
});

/* menu tabs */

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e) {
    if (e.target.getAttribute("data-target")) {
        if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
            const target = e.target.getAttribute("data-target");
            menuTabs.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const menuSection = document.querySelector(".menu-section");
            menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
            menuSection.querySelector(target).classList.add("active");
        }
    }
    if (e.target.getAttribute("data-button")) {
        // document.getElementById("myDropdown").classList.toggle("show");
        const target = e.target.getAttribute("data-button");
        if (target === "dinner-content") {
            document.getElementById("dinnerDrop").classList.toggle("show");
        } else if (target === "combo-content") {
            document.getElementById("comboDrop").classList.toggle("show");
        }
    }

    if (!e.target.matches('.dropbtn')) {
        //   var dropdowns = document.getElementsByClassName("dinner-content");
        var dropdowns = document.querySelectorAll(".dinner-content, .combo-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    } else if (e.target.matches('.dropbtn')) {
        const target = e.target.getAttribute("data-button");
        if (target === "dinner-content") {
            document.getElementById("comboDrop").classList.remove("show");
        } else if (target === "combo-content") {
            document.getElementById("dinnerDrop").classList.remove("show");
        }
    }
});

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//     const menuSection = document.querySelector(".menu-section");
//     const target = e.target.getAttribute("data-target");
//     console.log(target);
//   }


// Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }