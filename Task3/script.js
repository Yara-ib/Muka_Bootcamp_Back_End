// Updating About Me
const updatingAboutMeSection = () => {
  document.getElementById('aboutMebtn').addEventListener('click', () => {
    const element = document.getElementById('about_me');
    element.innerHTML +=
      '<p> Welcome to the other World, you just got through the portal to another new World! </p>';
  });
};

// Check Validations
// Email validation been checked automatically through the input type in HTML file
const validationForm = () => {
  document.getElementById('submitBtn').addEventListener('click', () => {
    if (
      !document.getElementById('name').value ||
      !document.getElementById('email').value ||
      !document.getElementById('message').value
    ) {
      console.error('Please fill all required fields!');
    } else {
      console.log(
        'Thank you, We received your message & will get back to you soon'
      );
    }
  });
};

// Dark/light Mode
const switchMode = () => {
  document.getElementById('modeBtn').addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
  });
};

// Smooth Scrolling along with CSS property
const scrollTopSmooth = () => {
  document.getElementById('topBtn').addEventListener('click', () => {
    scrollTo({ top: 0, behavior: 'smooth' });
  });
};

// Scroll to Top button
const scrollTop = () => {
  window.addEventListener('scroll', () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('topBtn').style.display = 'block';
    } else {
      document.getElementById('topBtn').style.display = 'none';
    }
  });
};

// Running all after loading
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is working!');
  switchMode();
  updatingAboutMeSection();
  validationForm();
  scrollTopSmooth();
  scrollTop();
});
