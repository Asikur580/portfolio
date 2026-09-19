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
            2+ years of hands-on experience building scalable, enterprise-level web applications with Laravel, REST APIs, and well-designed databases.
          </p>
          <ul>
            <li>
              <h6>May 2025 - Present</h6>
              <h5>Executive, Software Engineer (Backend)</h5>
              <p>Tizaraa</p>
              <ul class="exp_points">
                <li>Developed a complete HRM system (Employee, Attendance, Leave, Payroll)</li>
                <li>Built backend for Daiki CRM (Agreement, Quotation, Supply Management)</li>
                <li>Worked on Approval Workflow System (Expense, Travel, Payment Requests)</li>
                <li>Updated APIs for multi-country support in STP project</li>
                <li>Contributed to eCommerce admin panel modules</li>
                <li>Currently working on QC project backend APIs</li>
              </ul>
              <small>Tech: Laravel, MySQL, Git, REST API, Server Management</small>
            </li>
            <li>
              <h6>Oct 2024 - Apr 2025</h6>
              <h5>Laravel Backend Developer</h5>
              <p>Soft Deal IT</p>
              <ul class="exp_points">
                <li>Designed and developed REST APIs</li>
                <li>Built authentication systems</li>
                <li>Optimized database structure and performance</li>
                <li>Delivered client projects with new features and bug fixes</li>
              </ul>
              <small>Tech: Laravel, MySQL, Git, Postman</small>
            </li>
          </ul>`

const experienceBtn = document.querySelector('.experience_btn');
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = "resume_right experience";
    experienceBtn.classList.add('primary');
    //remove classes from other buttons
    aboutBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
})
// set experience content as the default content for resume right when page loads
resumeRight.innerHTML = experienceContent;
resumeRight.className = "resume_right experience";


// education

const educationBtn = document.querySelector('.education_btn');
const educationContent = `<h4>Education</h4>
                <p>Diploma in Computer Technology, backed by professional training in software quality assurance.</p>
                <ul>
                    <li>
                        <h5>Diploma in Computer Technology</h5>
                        <p>
                            Bangladesh Polytechnic Institute &mdash; CGPA 3.81 out of 4.00.
                        </p>
                    </li>
                    <li>
                        <h5>HSC (Humanities)</h5>
                        <p>
                            Rajabari Degree College &mdash; GPA 4.58 out of 5.00.
                        </p>
                    </li>
                    <li>
                        <h5>SQA Training</h5>
                        <p>
                            Completed SQA (Manual &amp; Automation Testing) training, with experience in API testing and automation using Python.
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
                <p>Backend-focused, with strong experience in REST API development, database design, and authentication systems.</p>
                <ul class="skills_groups">
                    <li>
                        <h6>Programming</h6>
                        <h5>PHP, JavaScript, Python</h5>
                    </li>
                    <li>
                        <h6>Backend</h6>
                        <h5>Laravel, NestJS, Express.js, FastAPI</h5>
                    </li>
                    <li>
                        <h6>Frontend</h6>
                        <h5>React.js, Next.js, Vue.js</h5>
                    </li>
                    <li>
                        <h6>Databases</h6>
                        <h5>MySQL, PostgreSQL, MongoDB</h5>
                    </li>
                    <li>
                        <h6>Tools</h6>
                        <h5>Git, GitHub, Postman, Copilot, Cursor, Claude</h5>
                    </li>
                    <li>
                        <h6>Others</h6>
                        <h5>REST API, Sanctum, RBAC, System Design &amp; Debugging</h5>
                    </li>
                </ul>
                <ul class="skills_logos">
                    <li><img src="assets/php.png" alt="PHP logo"></li>
                    <li><img src="assets/javascript.png" alt="JavaScript logo"></li>
                    <li><img src="assets/laravel.png" alt="Laravel logo"></li>
                    <li><img src="assets/react.webp" alt="ReactJS logo"></li>
                    <li><img src="assets/nextjs.png" alt="NextJS logo"></li>
                    <li><img src="assets/vuejs.png" alt="VueJs logo"></li>
                    <li><img src="assets/github.png" alt="GitHub logo"></li>
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
                <p>I am a Backend-focused Software Engineer with 2+ years of hands-on experience in building scalable web applications. I specialize in Laravel-based systems, REST API development, and database design. Currently at Tizaraa, I have contributed to enterprise-level HRM, CRM, approval workflow, and eCommerce platforms. I am passionate about clean, efficient code and keep learning modern technologies like NestJS, FastAPI, and the React ecosystem.</p>
                <ul>
                    <li>
                        <h6>Name:</h6>
                        <h5>Asikur Rahman</h5>
                    </li>
                    <li>
                        <h6>Experience:</h6>
                        <h5>2+ years</h5>
                    </li>
                    <li>
                        <h6>Company:</h6>
                        <h5>Tizaraa</h5>
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
                        <h5>@asikur-rahman-webdeveloper</h5>
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

