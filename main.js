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

console.log(body);
window.onload = function() {
  setTimeout(function() {
    logo.classList.add('translated');
    burger.classList.add('translated');
    mainTitle.classList.add('opacity');
  }, 1000);

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
  mainTitle.classList.remove('opacity');
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
  let scrollPos = window.pageYOffset;

  function animSecondTitle(a, b) {
    if (scrollPos + headerHeight >= a) {
      b.classList.add('opacity');
    } else {
      b.classList.remove('opacity');
    }
  }
  if (scrollPos > 0) {
    hr.classList.add('translated');
    hr.addEventListener('transitionend', function() {
      hr.classList.add('colored');
    });
  } else {
    hr.classList.remove('translated');
    hr.addEventListener('transitionend', function() {
      hr.classList.remove('colored');
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
}