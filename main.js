// =========floatingNavs
const floatingNavs = document.querySelectorAll('.floating_nav a');

const removeActiveClass = () => {
    floatingNavs.forEach(nav => {
        nav.classList.remove('active');
    })
}

floatingNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        removeActiveClass();
        nav.classList.add('active');
    })
})

// resume

const resumeRight = document.querySelector('.resume_right');
const experienceContent = `<h4>Experience</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem veniam doloribus ab sed similique reprehenderit ea voluptatum.
          </p>
          <ul>
            <li>
              <h6>2018 - 2019</h6>
              <h5>Intern</h5>
              <p>Web Developer Laravel</p>
            </li>
            <li>
              <h6>2019 - 2021</h6>
              <h5>Freelance Wev Development</h5>
              <p>Fiverr and Upwork</p>
            </li>
            <li>
              <h6>2021 - 2022</h6>
              <h5>Frontend Developer</h5>
              <p>ARLS Dev</p>
            </li>
            <li>
              <h6>2022 - 2024</h6>
              <h5>Fullstack Freelancer</h5>
              <p>ARLS Dev</p>
            </li>
          </ul>`

const experienceBtn = document.querySelector('.experience_btn');
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = "resume_right";
    experienceBtn.classList.add('primary');
    //remove classes from other buttons
    aboutBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
})
// set experience content as the default content for resume right when page loads
resumeRight.innerHTML = experienceContent;


// education

const educationBtn = document.querySelector('.education_btn');
const educationContent = `<h4>Education</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores.</p>
                <ul>
                    <li>
                        <h5>College Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                    <li>
                        <h5>Frontend Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                    <li>
                        <h5>Backend Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                </ul>`

educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.className = "resume_right education";
    resumeRight.classList.add('education');
    educationBtn.classList.add('primary');
    //remove classes from other buttons
    aboutBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})

// skills

const skillsBtn = document.querySelector('.skills_btn');
const skillsContent = `<h4>Skills</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <ul>
                    <li><img src="assets/react.webp" alt="ReactJS logo"></li>
                    <li><img src="assets/next.png" alt="NextJS logo"></li>
                    <li><img src="assets/tailwind.png" alt="Tailwind logo"></li>
                    <li><img src="assets/prisma.png" alt="Prisma logo"></li>
                    <li><img src="assets/mongo.jpg" alt="MongoDB logo"></li>
                    <li><img src="assets/jwt.png" alt="JWT logo"></li>
                    <li><img src="assets/node.png" alt="NodeJS logo"></li>
                </ul>`

skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className = 'resume_right skills';
    skillsBtn.classList.add('primary');
    //remove classes from other buttons
    aboutBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})

// about me

const aboutBtn = document.querySelector('.about_btn');
const aboutContent = `<h4>About me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis excepturi quibusdam.</p>
                <ul>
                    <li>
                        <h6>Name:</h6>
                        <h5>Ernest Achiever</h5>
                    </li>
                    <li>
                        <h6>Experience:</h6>
                        <h5>6+ years</h5>
                    </li>
                    <li>
                        <h6>Email:</h6>
                        <h5>youremail@gmail.com</h5>
                    </li>
                    <li>
                        <h6>Nationality:</h6>
                        <h5>Ghanaian</h5>
                    </li>
                    <li>
                        <h6>Freelance & collabs:</h6>
                        <h5>Available</h5>
                    </li>
                    <li>
                        <h6>Language:</h6>
                        <h5>English</h5>
                    </li>
                    <li>
                        <h6>Phone:</h6>
                        <h5>+233557097546</h5>
                    </li>
                    <li>
                        <h6>LinkedIn:</h6>
                        <h5>@yourhandle</h5>
                    </li>
                </ul>`
aboutBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = "resume_right about";
    aboutBtn.classList.add('primary');
    //remove classes from other buttons
    skillsBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})


// ================== mixitup (projects section)

const contianerE1 = document.querySelector('.projects_container');
let mixer = mixitup(contianerE1, {
    animation: {
        enable: false
    }
})

mixer.filter('*')

// ==================== swiper js

var swiper = new Swiper(".swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // when window width is >= 600px
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});


// =================== faqs

const faqs = document.querySelectorAll('.faqs_item');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        const p = faq.querySelector('p');
        const icon = faq.querySelector('.faq_icon');
        if (p.classList.contains('show')) {
            p.classList.remove('show')
            icon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
        } else {
            p.classList.add('show')
            icon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
        }
    })
})


// =============== theme 

const themeToggler = document.querySelector('.nav_theme-btn');
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    if (document.body.classList == '') {
        themeToggler.innerHTML = `<i class="fa-solid fa-moon"></i>`
        window.localStorage.setItem('portfolio-theme', '')
    } else {
        themeToggler.innerHTML = `<i class="fa-solid fa-sun"></i>`
        window.localStorage.setItem('portfolio-theme', 'dark-theme-variables')

    }
})

// use theme from local storage on page load

const bodyClass = window.localStorage.getItem('portfolio-theme');
document.body.className = bodyClass;

