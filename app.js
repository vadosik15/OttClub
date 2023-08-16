const imgDesctop = document.querySelector('#imgForDesctop');
const imgPhone = document.querySelector('#imgForPhone');

console.dir(imgPhone)

function resetImages () {
  imgDesctop.classList.remove('active');
  imgDesctop.classList.remove('disabled');
  imgPhone.classList.remove('active');
  imgPhone.classList.remove('disabled');

  littleEvro.classList.remove('disabled');
  littleEvro.classList.remove('active');
  bigEvro.classList.remove('disabled');
  bigEvro.classList.remove('active');
}


const littleEvro = document.querySelector('#littleEvro'); 
const bigEvro = document.querySelector('#bigEvro'); 

const onSmallPhone = document.querySelector('#onSmallPhone');
const onPhone = document.querySelector('#onPhone');
const onPad = document.querySelector('#onPad');
const onSmallDesctop = document.querySelector('#onSmallDesctop');
const onDesctop = document.querySelector('#onDesctop');
const onBigDesctop = document.querySelector('#onBigDesctop');

console.log(onSmallPhone);

function clearSVG () {
  onSmallPhone.classList.remove('active');
  onSmallPhone.classList.remove('disabled');
  onPhone.classList.remove('active');
  onPhone.classList.remove('disabled');
  onPad.classList.remove('active');
  onPad.classList.remove('disabled');
  onSmallDesctop.classList.remove('active');
  onSmallDesctop.classList.remove('disabled');
  onDesctop.classList.remove('active');
  onDesctop.classList.remove('disabled');
  onBigDesctop.classList.remove('active');
  onBigDesctop.classList.remove('disabled');

  onSmallPhone.classList.add('disabled')
  onPhone.classList.add('disabled')
  onPad.classList.add('disabled')
  onSmallDesctop.classList.add('disabled')
  onDesctop.classList.add('disabled')
  onBigDesctop.classList.add('disabled')
}

function handleResize() {
  // Отримуємо ширину екрану
  const screenWidth = window.innerWidth;

  // Поріг, при якому ми вирішуємо додати/прибрати клас
  const thresholdWidth = 768; // Наприклад, використовуємо 768px як поріг

  if (screenWidth < thresholdWidth) {
    resetImages();
    imgPhone.classList.add('active')
    imgDesctop.classList.add('disabled')
  } else {
    resetImages();
    imgPhone.classList.add('disabled')
    imgDesctop.classList.add('active')
  }
  if (screenWidth < 1920) {
    clearSVG();
    littleEvro.classList.add('active');
    bigEvro.classList.add('disabled')
  } else {
    clearSVG();
    bigEvro.classList.add('active');
    littleEvro.classList.add('disabled')
  }


  if(375 >= screenWidth >= 320) {
    clearSVG();
    onSmallPhone.classList.add('active');
  } else if (768 >= screenWidth >= 375 ) {
    clearSVG();
    onPhone.classList.add('active');
  } else if (990 >= screenWidth >= 768 ) {
    clearSVG();
    onPad.classList.add('active');
  } else if (1440 >= screenWidth >= 990 ) {
    clearSVG();
    onSmallDesctop.classList.add('active');
  } else if (1920 >= screenWidth >= 1440 ) {
    clearSVG();
    onDesctop.classList.add('active');
  } else if ( screenWidth >= 1920 ) {
    clearSVG();
    onBigDesctop.classList.add('active');
  }
}
window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);
