function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150; // Distance from bottom of screen before appearing

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Run once on load in case the user starts mid-page
reveal();

const form = document.querySelector(".contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector(".submit-btn");
  const data = new FormData(event.target);
  
  status.textContent = "Sending...";
  
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.textContent = "Thanks for reaching out! ✓";
      status.style.backgroundColor = "#27c93f"; // Success Green
      form.reset();
    } else {
      status.textContent = "Oops! There was a problem.";
      status.style.backgroundColor = "#ff5f56"; // Error Red
    }
  }).catch(error => {
    status.textContent = "Oops! There was a problem.";
  });
}

form.addEventListener("submit", handleSubmit);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});