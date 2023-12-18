let root = document.documentElement;
let navToggle = document.querySelector('.header__toggler');
let navList = document.querySelector('.header__nav');


// Resume download button
let downloadButton = document.querySelector("#resume__download__button");
if (downloadButton) {
  let downloadLink =document.getElementById("download__link");
  downloadButton.addEventListener("click", function () {
    downloadLink.click();
});
}

// Header drop down
navToggle.addEventListener('click', function() {
  navList.classList.toggle('header__nav--visible');
})


// Testimonial slider
const testimonial  = document.querySelector(".testimonials");
if (testimonial){
let people = [
  {
    name: "Dawit Getachew",
    title: "Software Engineer",
    text: "Lemi is a very talented and hardworking person. He is a very good team player and a leader. He is very passionate about his work and always strives to do his best. He is a very good problem solver and a quick learner. He is also a very good mentor and a friend. I have worked with him for more than 2 years and I can say that he is one of the best people I have ever worked with. I wish him all the best in his future endeavors."
  },
    {
      name: "Meron Tadesse",
      title: "UX Designer",
      text: "Lemi is a highly creative and detail-oriented individual. His contributions to our design projects have been invaluable. He has a keen eye for user experience and is always eager to explore innovative solutions. Working with him has been a pleasure, and I highly recommend him for any software engineering endeavor."
    },
    {
      name: "Yared Alemayehu",
      title: "Data Scientist",
      text: "Lemi has a deep understanding of data science and analytics. His analytical skills and problem-solving abilities have significantly impacted our projects. He is not only a skilled software engineer but also an excellent communicator. Lemi is a valuable asset to any team, and I look forward to working with him on future projects."
    },
    {
      name: "Eleni Aberra",
      title: "Frontend Developer",
      text: "Working alongside Lemi has been an inspiring experience. His dedication to writing clean and efficient code is commendable. Lemi's ellaborative spirit and positive attitude create a motivating work environment. As a frontend developer, Lemi brings creativity and technical expertise to the team, making him a standout colleague."
    },
    {
      name: "Tesfaye Negash",
      title: "Cybersecurity Analyst",
      text: "I've had the pleasure of collaborating with Lemi on several cybersecurity initiatives. His commitment to ensuring the security of our systems is outstanding. Tesfaye is not only a skilled software engineer but also an advocate for best security practices. It's evident that he prioritizes the integrity and confidentiality of our digital assets."
    }
  
];

let ind = 0
const toLeft = document.querySelector("#testimonial__slider__left");
const toRight = document.querySelector("#testimonial__slider__right");

toLeft.addEventListener("click", function () {
  ind = (ind + people.length - 1) % people.length;
  updatePerson(ind);
});
toRight.addEventListener("click", function () {
  ind = (ind + 1) % people.length;
  updatePerson(ind);

});

updatePerson = () => {
  const person = people[ind];
  document.querySelector("#testimonial__slider__name").textContent = person.name;
  document.querySelector("#testimonial__slider__title").textContent = person.title;
  document.querySelector("#testimonial__slider__text").textContent = person.text;
}
}



// for contact form
const contact_form = document.getElementById("contact-form__form");
if (contact_form) {
    contact_form.addEventListener("submit", function(e){
        e.preventDefault();
        let first_name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let comment = document.getElementById("message").value;
        let mailtoLink =  `mailto:lemi.dinku@aait.edu.et?subject= &body=Name: ${first_name}%0D%0AEmail: ${email}%0D%0AMessage: ${comment}`;
        window.location.href = mailtoLink;
    })

}

  const sections = document.querySelectorAll('.fade-in');
if (sections){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }


  const lefties = document.querySelectorAll('.left-entry');
  if (lefties){
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
  
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      lefties.forEach(leftie => {
        observer.observe(leftie);
      });
    }


    const righties = document.querySelectorAll('.right-entry');
    if (righties){
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
    
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, options);
    
        righties.forEach(rightie => {
          observer.observe(rightie);
        });
      }










      const textElement = document.querySelector(".home__intro__desc__SW");
      if(textElement){
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    const phrases = ["Software Engineer", "Full-Stack Developer", "Competitive Programmer", "Tech Enthusiast"];
    textElement.innerText = phrases[0];
    
    const typingSpeed = 100;
    const pauseBetweenWords = typingSpeed * 10;
    const backspaceSpeed = typingSpeed;
    const pauseBetweenPhrases = typingSpeed * 5;
    
    let currentPhraseIndex = 0;
    
    const typeAndDeleteLoop = async () => {
      while (true) {
        let currentWord = phrases[currentPhraseIndex];
    
        for (let i = 0; i < currentWord.length; i++) {
          textElement.innerText = currentWord.substring(0, i + 1);
          await sleep(typingSpeed);
        }
    
        await sleep(pauseBetweenWords);
    
        for (let i = currentWord.length; i > 0; i--) {
          textElement.innerText = currentWord.substring(0, i - 1);
          await sleep(backspaceSpeed);
        }
    
        await sleep(pauseBetweenPhrases);
    
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
    };
    
     typeAndDeleteLoop();
  }