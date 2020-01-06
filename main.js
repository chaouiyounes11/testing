const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const burger = document.getElementsByClassName('burger')[0];
const menu = document.getElementById('menu');
const linksMenu = document.getElementsByClassName('link-menu');
const logo = document.getElementById('logo');
const mainTitle = document.getElementsByTagName('h1')[0];
const header = document.getElementsByTagName('header')[0];
const secondTitle = document.getElementsByTagName('h2');
const headerHeight = header.clientHeight;
const hr = document.getElementsByTagName('hr')[0];
const section = document.getElementsByTagName('section');
const spanBurger = document.getElementsByClassName('span-burger');
const theLogo = document.getElementById('the-logo');
const body = document.getElementsByTagName('body')[0];
const smarties = document.getElementsByClassName('smarties');
const bgSmarties = document.getElementsByClassName('bg-smarties');
const number = document.getElementsByClassName('number');
var largeur = body.offsetWidth;
const left = document.getElementById('left');
const right = document.getElementById('right');
const mySlides = document.getElementsByClassName('slides');
const sliderContainer = document.getElementsByClassName('slider')[0];
var iteration = 0;
var clicks = 0;
const thread = document.getElementById('thread');
const animationSliding = () => {
  sliderContainer.style.marginLeft = '-' + (iteration * 100) + 'vw';

}

const heightSection7 = section[7].clientHeight;


right.onclick = () => {
  iteration++;
  if (iteration >= mySlides.length) {
    iteration = 0;
  }
  animationSliding();
}


left.onclick = () => {
  if (iteration < 1) {
    iteration = mySlides.length;
  }
  iteration = iteration - 1;
  animationSliding();
}

// for (var i = 0; i < mySlides.length; i++) {
//   var nextSlidesAcess = mySlides[i].innerText;
//   var spanNextSlides = document.getElementById('right-span').innerHTML = nextSlidesAcess;
//   var spanPrevSlides = document.getElementById('left-span');
// }
//





window.onload = () => {
  setTimeout(function() {
    logo.classList.add('translated');
    burger.classList.add('translated');
  }, 1000);
  for (var i = 0; i < smarties.length; i++) {
    smarties[i].style.width = largeur + 'px';
    smarties[i].style.borderRight = '8px solid black';
    smarties[i].style.backgroundColor = bgSmarties[i].innerHTML.toLowerCase();
    number[i].innerHTML = i + 1;
    var last = smarties.length - 1;
    if (last) {
      smarties[last].style.borderRight = '0px solid black';
      smarties[last].style.width = largeur + 8 + 'px';
    }
  }
}





function toggleMenu() {
  two.classList.toggle('none');
  burger.classList.toggle('center');
  one.classList.toggle('rotate-one');
  burger.classList.toggle('rotate-two');
  menu.classList.toggle('menu-go-down');
  mainTitle.classList.toggle('opacity');
  for (var i = 0; i < secondTitle.length; i++) {
    secondTitle[i].classList.toggle('opacity');
  }
  body.classList.toggle('overflow-hidden');
}

function closeMenu() {
  two.classList.remove('none');
  burger.classList.remove('center');
  one.classList.remove('rotate-one');
  burger.classList.remove('rotate-two');
  menu.classList.remove('menu-go-down');
  body.classList.remove('overflow-hidden');
}

burger.onclick = function() {
  toggleMenu();
};

for (i in linksMenu) {
  linksMenu[i].onclick = function() {
    closeMenu();
  }
}



window.onscroll = function() {
  const scrollPos = window.pageYOffset;
  const scrollPosX = window.pageXOffset;
  var height = document.documentElement.scrollHeight - heightSection7;

  var scrolled = (scrollPosX / height) * 100;

  function animSecondTitle(a, b) {
    if (scrollPos + (headerHeight / 2) >= a) {
      b.classList.add('opacity');
    } else {
      b.classList.remove('opacity');
    }
  }
  if (scrollPos > 0) {
    hr.classList.add('translated');
    hr.addEventListener('transitionend', function() {
      hr.classList.add('colored');
      mainTitle.classList.add('opacity');
    });
  } else {
    hr.classList.remove('translated');
    hr.addEventListener('transitionend', function() {
      hr.classList.remove('colored');
      mainTitle.classList.remove('opacity');
    });
  }

  for (var i = 1, j = 0; i < section.length, j < secondTitle.length; i++, j++) {
    const topSection = section[i].offsetTop;
    animSecondTitle(topSection, secondTitle[j]);
  }

  if (scrollPos + 75 >= section[4].offsetTop && scrollPos + 75 <= section[5].offsetTop) {
    theLogo.classList.add('white-title');
    hr.classList.add('white-span');

    for (var i = 0; i < spanBurger.length; i++) {
      spanBurger[i].classList.add('white-span');
    }
  } else {
    theLogo.classList.remove('white-title');
    hr.classList.remove('white-span');

    for (var i = 0; i < spanBurger.length; i++) {
      spanBurger[i].classList.remove('white-span');
    }
  }

  if (scrollPos + headerHeight >= heightSection7.offsetTop) {
    thread.style.height = scrolled + '%';
    console.log('helo');
  }
}