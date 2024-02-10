// template_u7h4a3h -- template id
// service_cj21lld  -- service id
// RRGoQFjdBVXElmRTD -- API key - Public key

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
      .sendForm(
          'service_cj21lld',
          'template_u7h4a3h',
          event.target,
          'RRGoQFjdBVXElmRTD'
  ).then(() => {
    // throw new Error('error');
    loading.classList.remove("modal__overlay--visible")
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--loading")
    alert("Email is temporarily unavailable.\nPlease contact me directly on limlinganangela@gmail.com");
  });

}

// this is a fake time out for fake data to not waste my emailjs email requests
// event.preventDefault()
// const loading = document.querySelector(".modal__overlay--loading")
// const success = document.querySelector('.modal__overlay--success')
// loading.classList += " modal__overlay--visible"

// setTimeout(() => {
//     loading.classList.remove("modal__overlay--visible")
//     success.classList += " modal__overlay--visible"
// }, 1000)

// "loading is visible once onsubmit after 1 second delay, loading is hidden and then success overlay is shown"

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }

  isModalOpen = true;
  document.body.classList += " modal--open"
}

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else { 
    document.body.classList.remove("dark-theme")
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const xAxis = event.clientX * scaleFactor;
  const yAxis = event.clientY * scaleFactor;

  for(let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${xAxis * boolInt}px, ${yAxis * boolInt}px)`;
  }
}