const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about');
const projectsSection = document.querySelector('.projects');
const skillsSection = document.querySelector('.skills');
const contactSection = document.querySelector('.contact');
const project_full = document.querySelector('.project_full');
const tic_project_full = document.querySelector('.tic_project_full');



// document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    console.log("hii sachin");


    // Hide all sections
    homeSection.style.display = 'block';
    aboutSection.style.display = 'none';
    projectsSection.style.display = 'none';
    skillsSection.style.display = 'none';
    contactSection.style.display = 'none';
    project_full.style.display = 'none';
    tic_project_full.style.display = 'none';

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to the clicked item
            this.classList.add('active');

            // Hide all sections
            homeSection.style.display = 'none';
            aboutSection.style.display = 'none';
            projectsSection.style.display = 'none';
            skillsSection.style.display = 'none';
            contactSection.style.display = 'none';
            project_full.style.display = 'none';
            tic_project_full.style.display = 'none';

            switch (this.id) {
                case 'home':
                    homeSection.style.display = 'block';
                    break;
                case 'about':
                    aboutSection.style.display = 'block';
                    break;
                case 'projects':
                    projectsSection.style.display = 'block';
                    break;
                case 'skills':
                    skillsSection.style.display = 'block';
                    launchConfetti();
                    break;
                case 'contact':
                    contactSection.style.display = 'block';
                    break;
            }
        });
    });



const cardsSection = document.querySelectorAll('.cards');


cardsSection.forEach(item => {
    item.addEventListener('click', function () {

            // Hide all sections
            homeSection.style.display = 'none';
            aboutSection.style.display = 'none';
            projectsSection.style.display = 'none';
            skillsSection.style.display = 'none';
            contactSection.style.display = 'none';
            project_full.style.display = 'none';
            tic_project_full.style.display = 'none';


            switch (this.id) {
                case 'rng_pro':
                    project_full.style.display = 'block';
                    break;
                case 'tic_pro':
                    tic_project_full.style.display = 'block';
                    break;
            }

           

        

    })

});


const button = document.getElementById('rng_preview');

button.addEventListener('click', function() {
    const pagePath = './rng.html';
    window.open(pagePath, '_blank');
});

function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${amPm}`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);

    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

function launchConfetti() {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}



// Array of skill objects containing logo paths and tags
const skills = [
    { logo: './assets/images/logos/java.png', tag: 'Java' },
    { logo: './assets/images/logos/html-5.png', tag: 'HTML' },
    { logo: './assets/images/logos/css-3.png', tag: 'CSS' },
    { logo: './assets/images/logos/js.png', tag: 'JavaScript' },
    { logo: './assets/images/logos/sboot.png', tag: 'Spring Boot' },
    { logo: './assets/images/logos/mule.webp', tag: 'Mulesoft' },
    { logo: './assets/images/logos/azure.png', tag: 'Azure Devops' },
    { logo: './assets/images/logos/figma.png', tag: 'Figma' },
    { logo: './assets/images/logos/social.png', tag: 'AWS Cloud' },
    { logo: './assets/images/logos/android.png', tag: 'Android Development' },
    { logo: './assets/images/logos/apple.png', tag: 'IOS Developement' },
    { logo: './assets/images/logos/dbms.png', tag: 'DBMS' },
    { logo: './assets/images/logos/apple.png', tag: 'IOS Developement' },
    { logo: './assets/images/logos/google.png', tag: 'Google Cloud' }
];

const skillContainer = document.getElementById('skill-container');

skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');
    const img = document.createElement('img');
    img.src = skill.logo;
    img.alt = skill.tag;
    img.classList.add('skill-logo');
    const span = document.createElement('span');
    span.textContent = skill.tag;
    span.classList.add('skill-tag');
    skillCard.appendChild(img);
    skillCard.appendChild(span);
    skillContainer.appendChild(skillCard);
});
