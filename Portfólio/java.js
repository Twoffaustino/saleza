let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);


res.innerHTML = ` <strong>${localStorage.getItem(`nome`)}:</strong> ${localStorage.getItem(`com`)}`

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle(`active`);
};



let sections = document.querySelectorAll(`section`);
let navLinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(`id`);

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
               links.classList.remove(`active`);
               document.querySelector(`header nav a[href*=` + id + `]`).classList.add(`active`);
            });

        };
    });

    let header = document.querySelector(`header`);

    header.classList.toggle(`sticky`, window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove(`active`);

};

ScrollReveal({
     reset: true,
     distance: `80px`,
     duration: 2000, 
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: `top`});
ScrollReveal().reveal('.personal, .Service-conteiner, .portfolio-box, .contact form', { origin: `botton`});
ScrollReveal().reveal('.home-content h1, .personal', { origin: `left`});
ScrollReveal().reveal('.home-content p, .about-content', { origin: `right`});



var typed = new Typed('.multiple-text', {
    strings: ['<i>Designer</i> Gráfico.', '&amp; Fotógrafo.','<i>Designer</i> Gráfico.',],
    typeSpeed: 50,
  });


  function clicar(){
    var nome = window.document.getElementById(`nome`);
    var com = window.document.getElementById(`comentario`);
    var res = window.document.getElementById(`res`);
        fnome = (nome.value)
        fcom = (com.value)
       
    res.innerHTML += ` <strong>${fnome}:</strong> ${fcom}`  

    localStorage.setItem(`nome`, fnome);
    localStorage.setItem(`com`, fcom);
};



