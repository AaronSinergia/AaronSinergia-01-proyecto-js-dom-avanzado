import { renderNavbar } from './navbar.js';

// // HEAD PROJECTS
// const headProjects = () => {
//   const bodyOfHtml = document.querySelector('body');
//   const h1 = document.createElement('h1');
//   h1.className = 'title_name';
//   h1.textContent = '.../Proyectos';
//   bodyOfHtml.appendChild(h1);
//   const navbar = document.createElement('div');
//   navbar.className = 'navbar';
//   bodyOfHtml.appendChild(navbar);
//   document.body.appendChild(bodyOfHtml);
// };
// headProjects();

// PROJECTS BODY
export const renderProjects = () => {
  const bodyOfHtml = document.querySelector('body');
  bodyOfHtml.innerHTML = `
    <div class="navbar"></div>
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
    <h3 class="mail_contact"></h3>
    <article class="rrss"></article>
    <footer class="footer"></footer>
    `;
  renderNavbar();
  renderMailContact();
  renderRRSSIcons();
  renderFooter();
};

renderProjects();
