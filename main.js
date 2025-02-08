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
            Experienced Laravel full-stack developer skilled in building custom web applications, eCommerce platforms, APIs, SaaS solutions, optimizing performance, and ensuring security, scalability, and seamless user experiences for diverse business needs.
          </p>
          <ul>
            <li>
              <h6>2023/9 - 2024/4</h6>
              <h5>Traning</h5>
              <p>Full Stack Laravel</p>
            </li>
            <li>
              <h6>2024/5 - 2024/10</h6>
              <h5>Intern</h5>
              <p>Web Development Laravel</p>
            </li>
            <li>
              <h6>2024/11 - Present</h6>
              <h5>Fullstack Developer</h5>
              <p>Soft Deal IT</p>
            </li>
            <li>
              <h6>2024/6 - Present</h6>
              <h5>Fullstack Freelancer</h5>
              <p>Out of Marketplace</p>
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
                <p>Completed Diploma in Engineering (Computer) with expertise in web development, Laravel, and software solutions.</p>
                <ul>
                    <li>
                        <h5>Diploma Education</h5>
                        <p>
                            Completed Diploma in Computer Engineering from Bangladesh Polytechnic Institute (BTEB) with a CGPA of 3.80 out of 4.00 in 2024.
                        </p>
                    </li>
                    <li>
                        <h5>Higher Secondary Education</h5>
                        <p>
                            Completed Higher Secondary Education (HSC) in Humanities from Rajabari Degree College, Rajshahi Board, with a CGPA of 4.58 out of 5.00 in 2020.
                        </p>
                    </li>
                    <li>
                        <h5>Secondary School Education</h5>
                        <p>
                            Completed Secondary School Certificate (SSC) in Science from Muraripur High School, Rajshahi Board, with a CGPA of 4.22 out of 5.00 in 2018.
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
                <p>Proficient in PHP, JavaScript, Laravel, Vue.js, Bootstrap, Tailwind CSS, MySQL, SQL Server, with expertise in RESTful APIs, MVC Architecture, Git, GitHub, Trello, and SDLC concepts.</p>
                <ul>
                    <li><img src="assets/php.png" alt="PHP logo"></li>
                    <li><img src="assets/javascript.png" alt="JavaScript logo"></li>
                    <li><img src="assets/laravel.png" alt="Laravel logo"></li>
                    <li><img src="assets/vuejs.png" alt="VueJs logo"></li>
                    <li><img src="assets/react.webp" alt="ReactJS logo"></li>
                    <li><img src="assets/nextjs.png" alt="NextJS logo"></li>
                    <li><img src="assets/bootstrap.png" alt="Bootstrap logo"></li>
                    <li><img src="assets/tailwind.png" alt="Tailwind logo"></li>
                    <li><img src="assets/github.png" alt="GitHub logo"></li>
                    <li><img src="assets/jwt.png" alt="JWT logo"></li>
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
                <p>I am a skilled Laravel full-stack developer with expertise in PHP, MySQL, web development, digital marketing, and project management. I specialize in creating efficient web applications and driving business growth through technology.</p>
                <ul>
                    <li>
                        <h6>Name:</h6>
                        <h5>Asikur Rahman</h5>
                    </li>
                    <li>
                        <h6>Experience:</h6>
                        <h5>1+ years</h5>
                    </li>
                    <li>
                        <h6>Email:</h6>
                        <h5>asikur58039@gmail.com</h5>
                    </li>
                    <li>
                        <h6>Nationality:</h6>
                        <h5>Bangladeshi</h5>
                    </li>
                    <li>
                        <h6>Freelance & collabs:</h6>
                        <h5>Available</h5>
                    </li>
                    <li>
                        <h6>Language:</h6>
                        <h5>Bangla & English</h5>
                    </li>
                    <li>
                        <h6>Phone:</h6>
                        <h5>01824580580</h5>
                    </li>
                    <li>
                        <h6>LinkedIn:</h6>
                        <h5>@sr-asikur-rahman</h5>
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

