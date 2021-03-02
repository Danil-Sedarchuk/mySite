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
         clearInterval(modalTimerId);
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

const modalTimerId = setTimeout(openModal,5000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll',showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);











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