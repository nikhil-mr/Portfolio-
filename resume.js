document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('screen');
    const apper = document.getElementById('screen2');
    const skillLink = document.getElementById('sk');
    const educationLink = document.getElementById('educ');
    const homeLinks = document.querySelectorAll('.home, #ho');
    const wrapper3 = document.getElementById('screen3'); // Fixed typo in variable name
    const projectLink = document.getElementById('wo');
    
    // Show Skills
    skillLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });
    
    // Show Education
    educationLink.addEventListener('click', () => {
        apper.classList.add('active');
    });
     
    projectLink.addEventListener('click', () => {
         wrapper3.classList.toggle('active');
    });
    
    
    // Show Home (works for all home links)
    homeLinks.forEach(link => {
        link.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });
    });
    
    // Contact toggle
    const contactBtn = document.getElementById('con');
    const contactInfo = document.getElementById('contact');
    
    contactBtn.addEventListener('click', () => {
        contactInfo.style.display = contactInfo.style.display === 'block' ? 'none' : 'block';
    });
    
    function home() {
        wrapper.classList.remove('active');
        apper.classList.remove('active');
        wrapper3.classList.remove('active');

    }
    
    function contact() {
        const contactDiv = document.getElementById('contact');
        contactDiv.style.display = contactDiv.style.opacity=1;
    }

    // function webtask() {
    //      const taskButton = document.getElementById('task_bar_button');
    //      taskButton.style.display = taskButton.style.opacity=1;
    // }
     
    const webLink = document.getElementById('websites');
const webBox = document.getElementById('web_box');
 const taskButton = document.getElementById('task_bar_button');

webLink.addEventListener('click', () => {
    // Toggle the active class instead of just adding it
    webBox.classList.toggle('active');
    taskButton.classList.toggle('active');
    
    
    
    // Optional: Close when clicking anywhere outside
    document.addEventListener('click', (e) => {
        if (!webBox.contains(e.target) && e.target !== webLink) {
            webBox.classList.remove('active');
            taskButton.classList.remove('active');
        }
    });
});


const posLink = document.getElementById('Posters');
const posBox = document.getElementById('post_box');

posLink.addEventListener('click', () => {
    // Toggle the active class instead of just adding it
    posBox.classList.toggle('active');
    
    // Optional: Close when clicking anywhere outside
    document.addEventListener('click', (e) => {
        if (!posBox.contains(e.target) && e.target !== posLink) {
            posBox.classList.remove('active');
        }
    });
});

const i =0;
for (let i = 0; i < 14; i++) {
   
}

  


    
    
    // Make functions available globally
    window.home = home;
    window.contact = contact;
});