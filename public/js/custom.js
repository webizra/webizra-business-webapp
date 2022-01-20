/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLists = document.querySelectorAll(".nav__list");
const backDrop = document.querySelector('.backdrop');


navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('show-menu');
    navLists.forEach(link => {
        link.classList.toggle('close-menu')
    })
    navToggle.classList.toggle('toggle');
})

function backDropClicker(){
    backDrop.style.display = 'none';
    navMenu.classList.remove('show-menu');
    navToggle.classList.toggle('toggle');
}

function menuClicker(){
    backDrop.style.display = 'block';
    navMenu.classList.add('show-menu');
}
backDrop.addEventListener('click', backDropClicker);
navToggle.addEventListener('click', menuClicker);

/*=============== DIGITAL CLOCK & QUOTE OF THE DAY ===============*/
const App = {
    init: function() {
                this.datetime(),  setInterval("App.datetime();", 1e3)
    },
    datetime: function() {
                const endTime = ["Sunday", "Monday", "Tuesday", 
                    "Wednesday", "Thursday", "Friday", "Saturday"]
                const startQuotes = [
                    "Be grateful for life, Happy Sunday Y'all",
                    "Its a new week, What re you creating today?",
                    "Be Deliberate about your happiness", 
                    "Dreams are just not enough",
                    "Heey! its Thursday already, What are you thankful for?",
                    "No Man is your friend, No Man is your enemy,\nbut every Man is your teacher",
                    "Sometimes its not the despair, it's the hope that kills you"
                ]
                const newMonth = ["January", "February", "March", "April", "May", 
                    "June", "July", "August", "September", "October", "November", "December"]
                let newDate = new Date
                let newYear = newDate.getYear();

                1e3 > newYear && (newYear += 1900);

                let startDay = newDate.getDay()
                let startMonth = newDate.getMonth()
                let startDate = newDate.getDate();

                10 > startDate && (startDate = "0" + startDate);

                let startHours = newDate.getHours()
                let startMinutes = newDate.getMinutes()
                let startSeconds = newDate.getSeconds()
                let startPeriods = "AM";

                startHours >= 12 && (startPeriods = "PM"), 
                startHours > 12 && (startHours -= 12),
                 0 == startHours && (startHours = 12), 
                 9 >= startMinutes && (startMinutes = "0" + startMinutes), 
                 9 >= startSeconds && (startSeconds = "0" + startSeconds), 

                $(".welcome .datetime .day").text(endTime[startDay]),
                $(".welcome .datetime .quote").text(startQuotes[startDay]),
                $(".welcome .datetime .date").text(newMonth[startMonth] + " " + startDate + ", " + newYear), 
                $(".welcome .datetime .time").text(startHours + ":" + startMinutes + ":" + startSeconds + " " + startPeriods)

    }
}
$(function() {
    App.init()
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* function pageClicker(){
    const navLink = document.querySelectorAll('.nav__link')
    // when the club page is clicked 
    if(this.location.href = '/club/club') navLink.style.color = 'white'
}
window.addEventListener('click', pageClicker) */


/*=============== SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)







