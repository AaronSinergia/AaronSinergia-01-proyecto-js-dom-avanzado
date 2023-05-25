import './style.css';

// Con esto en JS puedo crear secciones dentro de mi HTML

const homeCreate = () => {
  const bodyOfHtml = document.querySelector('body');
  bodyOfHtml.innerHTML = `
  <h1 class="title_name">.../Aaron_Carrasco</h1>
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
    <article class="rrss">
    <img class="github" src="./img/GitHubLogo.png" alt="github_logo" />
    <img class="linkedin" src="./img/1384014.png" alt="linkedin_logo" />
    <img class="netlify" src="./img/netlify_logo_icon_169924.png" alt="netlify_logo" />
    </article>
    <footer>© Todos los derechos reservados - 2023</footer>
    `;
};

homeCreate();
