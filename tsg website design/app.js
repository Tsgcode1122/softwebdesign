// script.js
console.log("hello");
function smoothScroll(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    console.log("hyjhgk");
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const toggleNav = document.getElementById("navbarToggle");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const closeNav = document.getElementById("navbar-close");

  toggleNav.addEventListener("click", () => {
    sidebarOverlay.classList.add("show");
  });
  closeNav.addEventListener("click", () => {
    sidebarOverlay.classList.remove("show");
  });
});
// JavaScript to add animations when the elements are in viewport

// Select all elements with the class "containers"
const containers = document.querySelectorAll(".containerss");

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // Margin around the root
  threshold: [0.1], // 50% of the element visible
};

// Callback function to be executed when an element is in view
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log("hello you are the point");
      entry.target.classList.add("animate");
    } else {
      // console.log("hello you left point");
      entry.target.classList.remove("animate");
    }
  });
}

// Create an Intersection Observer for each container element
containers.forEach((container) => {
  const observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(container);
});

// sdf@@@@@@@@@@@@@@@@@@@@@@
// another animatation

const animatedElements = document.querySelectorAll(".Useranimate");
function checkifVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function updateContentVisibility() {
  animatedElements.forEach((animatedElement) => {
    if (checkifVisible(animatedElement)) {
      animatedElement.classList.add("Useranimate");
    } else {
      animatedElement.classList.remove("Useranimate");
    }
  });
}

window.addEventListener("scroll", updateContentVisibility);
window.addEventListener("resize", updateContentVisibility);
updateContentVisibility();
// @@@@@@@@ js for bottom totop
const animatedElementsI = document.querySelectorAll(".Useranimate2");
function checkifSeen(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}
function updateContentVisible() {
  animatedElementsI.forEach((animatedElements) => {
    if (checkifSeen(animatedElements)) {
      animatedElements.classList.add("Useranimate2");
      console.log("you there!!");
    } else {
      animatedElements.classList.remove("Useranimate2");
      console.log("you left there!!");
    }
  });
}
window.addEventListener("scroll", updateContentVisible);
window.addEventListener("resize", updateContentVisible);
updateContentVisible();

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// slider@@@@@@

var form = document.getElementById("my-form");
var submissionStatus = document.getElementById("submission-status");
async function handleSubmit(event) {
  event.preventDefault();

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        submissionStatus.innerHTML = "Thanks for your submission! Tsg cares";
        form.reset(); // Reset the form inputs
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// contact shi
// function validateForm() {
//   var name = document.forms["contactForm"]["name"].value;
//   var email = document.forms["contactForm"]["email"].value;
//   var mobile = document.forms["contactForm"]["mobile"].value;
//   var message = document.forms["contactForm"]["message"].value;

//   if (name === "" || email === "" || mobile === "" || message === "") {
//     alert("Please fill out all fields.");
//     return false;
//   }
// }
// validateForm();
