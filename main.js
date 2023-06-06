import './style.css';
import './experience_style.css';

// Con esto en JS puedo crear secciones dentro de mi HTML

const homeCreate = () => {
  const bodyOfHtml = document.querySelector('body');
  bodyOfHtml.innerHTML = `
  <h1 class="title_name">.../AARON_CARRASCO</h1>
      <div class="navbar">
      <a class="principal_links_bar" href="/home">./Página_Principal</a>
      <a class="principal_links_bar" href="/experience">./Experiencia</a>
      <a class="principal_links_bar" href="/projects">./Proyectos_en_Producción</a>
      </div>
      <div class="data_box_1">
      <h3 class="datos_personales">./RESIDENCIA/BCN.html
      ./EDAD/32_AÑOS.css
      ./ACTUALMENTE/DXC/HelpDeskIt.js</h3>
      <h3 class="frase">"Los peces muertos son los únicos que siguen la corriente"</h3>
      </div>
      <div class="curly_and_aaronphoto">
      <h2 class="curlybracket">{</h2>
      <img class="aaron_photo" src="./img/aaron.png" alt="aaron_photo" />
      <h2 class="curlybracket">}</h2>
    </div>
    <div class="data_box_2">
      <h3 class="my_aspirations">Mis aspiraciones son entrar en el mundo de la programación como web developer y mejorar día a día como frontend dónde creo que tengo mucho que decir y aportar.</h3>
      <h3 class="my_work_valors">Actualmente trabajo para una empresa IT la cual ofrece servicios a un importante banco a nivel mundial. A demás, soy músico y trabajo en ocasiones como músico de sesión, y grabando música para otros artistas.</h3>
    </div>
    <h3><a class="mail_link" href="mailto:a.carrasco9@me.com">Abierto a nuevos proyectos</a></h3>
    <article class="rrss">
    <a class="github_link" href="https://github.com/AaronSinergia?tab=repositories">
    <img class="github" src="./img/GitHubLogo.png" alt="github_logo" />
    </a>
    <a class="linkedin_link" href="https://www.linkedin.com/in/aaron-carrasco-romero/">
    <img class="linkedin" src="./img/1384014.png" alt="linkedin_logo" />
    </a>
    <a class="netlify_link" href="https://app.netlify.com/teams/aaronsinergia/sites">
    <img class="netlify" src="./img/netlify_logo_icon_169924.png" alt="netlify_logo" />
    </a>
    </article>
    <footer class="footer1">© Todos los derechos reservados - 2023</footer>
    `;
};
homeCreate();

const renderProjects = () => {
  const bodyOfHtml = document.querySelector('body');
  bodyOfHtml.innerHTML = `
    <h1 class="title_name">.../Proyectos</h1>
    <div class="navbar">
    <a class="principal_links_bar" href="/home">./Página_Principal</a>
    <a class="principal_links_bar" href="/experience ">./Experiencia</a>
    <a class="principal_links_bar" href="/projects">./Proyectos_en_Producción</a>
    </div>
    <div class="data_box_1">
    <h3 class="datos_personales">./RESIDENCIA/BCN.html
    ./EDAD/32_AÑOS.css
    ./ACTUALMENTE/DXC/HelpDeskIt.js</h3>
    <h3 class="frase">"Los peces muertos son los únicos que siguen la corriente"</h3>
    </div>
    <div class="curly_and_aaronphoto">
    <h2 class="curlybracket">{</h2>
    <img class="aaron_photo" src="./img/aaron.png" alt="aaron_photo" />
    <h2 class="curlybracket">}</h2>
    </div>
    <div class="data_box_2">
    <h3 class="my_aspirations">Mis aspiraciones son entrar en el mundo de la programación como web developer y mejorar día a día como frontend dónde creo que tengo mucho que decir y aportar.</h3>
    <h3 class="my_work_valors">Actualmente trabajo para una empresa IT la cual ofrece servicios a un importante banco a nivel mundial. A demás, soy músico y trabajo en ocasiones como músico de sesión, y grabando música para otros artistas.</h3>
    </div>
    <h3><a class="mail_link" href="mailto:a.carrasco9@me.com">Abierto a nuevos proyectos</a></h3>
    <article class="rrss">
    <a class="github_link" href="https://github.com/AaronSinergia?tab=repositories">
    <img class="github" src="./img/GitHubLogo.png" alt="github_logo" />
    </a>
    <a class="linkedin_link" href="https://www.linkedin.com/in/aaron-carrasco-romero/">
    <img class="linkedin" src="./img/1384014.png" alt="linkedin_logo" />
    </a>
    <a class="netlify_link" href="https://app.netlify.com/teams/aaronsinergia/sites">
    <img class="netlify" src="./img/netlify_logo_icon_169924.png" alt="netlify_logo" />
    </a>
    </article>
    <footer class="footer3">© Todos los derechos reservados - 2023</footer>`;
};

const clickListener = (ev) => {
  ev.preventDefault();
  const hrefSelect = ev.target.getAttribute('href');
  if (hrefSelect === '/projects') {
    renderProjects();
  } else if (hrefSelect === '/home') {
    homeCreate();
  } else {
    renderExperience();
  }
};

// const bodyOfHtml = document.querySelector('body');

const renderExperience = () => {
  const bodyOfHtml = document.querySelector('body');
  bodyOfHtml.innerHTML = `
    <div class="overlay hidden">
      <div class="slideshow">
        <span class="btn_close">X</span>
        <div class="button prev">
          <button>{</button>
        </div>
        <div class="button next">
          <button>}</button>
        </div>
        <img src="" alt="" id="img_slideshow">
      </div>
    </div>
    <h1 class="title_name">.../Experiencia</h1>
    <div class="navbar">
      <a class="principal_links_bar" href="/home">./Página_Principal</a>
      <a class="principal_links_bar" href="/experience">./Experiencia</a>
      <a class="principal_links_bar" href="/projects">./Proyectos_en_Producción</a>
    </div>
    <section class="gallery">
      <div class="column">
        <img class="rnovaimg" src="./img/rnova-sll_li1.png" alt="rnova_logo" data-img-show="0">
        <img src="./img/emergia.jpg" alt="emergia_logo" data-img-show="1">
        <img src="./img/vodafone.png" alt="vodafone_logo" data-img-show="2">
        <img src="./img/argom.jpeg" alt="argom_logo" data-img-show="3">
        <img src="./img/dxc.png" alt="dxc_logo" data-img-show="4">
      </div>
    </section>
  `;

  const galleryImages = document.querySelectorAll('.gallery img');
  const overlayImage = document.querySelector('#img_slideshow');
  const overlayHiddenOff = document.querySelector('.hidden');

  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      const imagePath = image.getAttribute('src');
      overlayImage.setAttribute('src', imagePath);
      if (image.getAttribute('alt')) {
        overlayHiddenOff.classList.remove = 'hidden';
      }
    });
  });
};

const bodyOfHtml = document.querySelector('body');
bodyOfHtml.addEventListener('click', clickListener);
