document.addEventListener('DOMContentLoaded',()=>{

    const tabs = document.querySelectorAll('.tabheader__item'),
          content = document.querySelectorAll('.tabcontent'),
          parrentTabs = document.querySelector('.tabheader__items');

function hideContent() {
        content.forEach(item =>{
            // item.style.display ='none';
            item.classList.add('hide');
            item.classList.remove('show','fade');
            
        });

        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showContent(i=0) {
        // content[i].style.display='block';
        content[i].classList.add('show','fade');
        content[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideContent();
    showContent();

    parrentTabs.addEventListener('click', (e)=>{
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item,i)=>{
                if (item == target) {
                    hideContent();
                    showContent(i);
                }
            });
        }

    });

// TImer

const endTime = '2021-03-5';

function setDatasOn (endtime){
    
    let z = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((z / 1000) % 60),
    minutes = Math.floor((z / (1000 * 60)) % 60),
    hours = Math.floor((z / (1000 * 60 * 60)) % 24),
    days = Math.floor(z / (1000 * 60 * 60 * 24));
    
return {
    'total': z,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
};  

}

function twoDigits(num) {
    return ('0' + num).slice(-2);
  }

function getAndSetDTS (selector, endtime){
    const tmr = document.querySelector(selector),
          days = tmr.querySelector('#days'),
          hours = tmr.querySelector('#hours'),
          minutes = tmr.querySelector('#minutes'),
          seconds = tmr.querySelector('#seconds'),
          timerInterval = setInterval(setHtmL,1000);

   setHtmL();
    function setHtmL() {
        const t = setDatasOn (endtime);
        days.innerHTML = twoDigits(t.days);
        hours.innerHTML = twoDigits(t.hours);
        minutes.innerHTML =twoDigits(t.minutes);
        seconds.innerHTML = twoDigits(t.seconds);
        
        if (t.total<=0) {
            clearInterval(timerInterval); 
        }
        
    }      


}

getAndSetDTS('.timer',endTime);



//Модальное окно......................

const btnWhite = document.querySelectorAll('[data-modal]');

const modalX = document.querySelector('[data-close]');
const modal = document.querySelector('.modal');

function openModal() {
    // modal.classList.add('show');
         // modal.classList.remove('hide');
         modal.classList.toggle('show');
         document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);
 }

btnWhite.forEach(btn =>{
    btn.addEventListener('click',openModal);
});


function closeModal () {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
}

modalX.addEventListener('click', closeModal);

modal.addEventListener('click', (e)=>{
    if (e.target === modal) {
        closeModal ();
    }
});

document.addEventListener('keydown', (e) =>{
    if (e.code === 'Escape' && modal.classList.contains('show')){
        closeModal ();
    }
});

//const modalTimerId = setTimeout(openModal,5000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
       // openModal();
        window.removeEventListener('scroll',showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);


// cards 

class Card {
    constructor (srcbg,subtitle,descr,price,parent, ...clases){

        this.srcbg = srcbg;
        this.subtitle = subtitle;
        this.descr = descr;
        this.price = price;
        this.clases = clases;
        this.parent = document.querySelector(parent);
        this.tgPrice = 417;
        this.sayHi();
    }

    sayHi() {
        this.price = this.price * this.tgPrice;
    }

    render() {
        const div = document.createElement('div');
        if (this.clases.length ===0 ){
            div.classList.add('menu__item');
        } else {
         this.clases.forEach(elemtn => {div.classList.add(elemtn);
            });
        }

       
        div.innerHTML = `
        <img src=${this.srcbg} alt="vegy">
        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> тг/день</div>
        </div>`;

    this.parent.append(div);

    }

}

new Card('img/tabs/2.jpg','Пицца','Добро пожаловать к нам в пицерию.Самая вкусная пицца у нас!',
 26, '.menu .container',).render();

new Card('img/tabs/1.jpg','Пицца','Добро пожаловать к нам в пицерию.Самая вкусная пицца у нас!',
 26, '.menu .container','menu__item').render();

new Card('img/tabs/3.jpg','Пицца','Добро пожаловать к нам в пицерию.Самая вкусная пицца у нас!',
 26, '.menu .container','menu__item').render();




















// class MenuCard {
//     constructor(src, alt, title, descr, price, parentSelector) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.parent = document.querySelector(parentSelector);
//         this.transfer = 27;
//         this.changeToUAH(); 
//     }

//     changeToUAH() {
//         this.price = this.price * this.transfer; 
//     }

//     render() {
//         const element = document.createElement('div');
//         element.innerHTML = `
//             <div class="menu__item">
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             </div>
//         `;
//         this.parent.append(element);
//     }
// }

// new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     ".menu .container"
// ).render();

// new MenuCard(
//     "img/tabs/post.jpg",
//     "post",
//     'Меню "Постное"',
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     14,
//     ".menu .container"
// ).render();

// new MenuCard(
//     "img/tabs/elite.jpg",
//     "elite",
//     'Меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     21,
//     ".menu .container"
// ).render();








//Timer

// const deadLine = '2021-03-08';

// function getTimeRemaining(endtime){
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 *60 *24)),
//             hours = Math.floor((t / (1000 *60 *60) % 24)),
//             minutes = Math.floor((t / 1000 /60) % 60),
//             seconds = Math.floor((t / 1000 ) % 60);


//     return {
//      'total' : t,
//      'days' :days,
//      'hours': hours,
//      'minutes' : minutes,
//      'seconds': seconds           
//      };

//     }


//     function getZero(num) {
//         if (num>= 0 && num <10) {
//             return `0${num}`;
//         } else {
//             return num; 
//         }
//     }

//      function setClock(selector, endtime){
//         const timer = document.querySelector(selector),
//         days = timer.querySelector('#days'),
//         hours = timer.querySelector('#hours'),
//         minutes = timer.querySelector('#minutes'),
//         seconds = timer.querySelector('#seconds'),
//         timeInterval = setInterval(updateClock, 1000);

//         updateClock();

//         function updateClock() {
//             const t = getTimeRemaining(endtime);
//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);


//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//      }


//      setClock('.timer', deadLine);


});