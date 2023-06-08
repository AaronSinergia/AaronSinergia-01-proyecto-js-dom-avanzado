import './experience_style.css';

// // HEAD EXPERIENCE
// const headExperience = () => {
//   const bodyOfHtml = document.querySelector('body');
//   const h1 = document.createElement('h1');
//   h1.className = 'title_name';
//   h1.textContent = '.../Experiencia';
//   bodyOfHtml.appendChild(h1);
//   const navbar = document.createElement('div');
//   navbar.className = 'navbar';
//   bodyOfHtml.appendChild(navbar);
//   document.body.appendChild(bodyOfHtml);
// };
// headExperience();

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

// // PROJECTS BODY
// const renderProjects = () => {
//   const bodyOfHtml = document.querySelector('body');
//   bodyOfHtml.innerHTML = `
//     <div class="navbar"></div>
//     <div class="data_box_1">
//     <h3 class="datos_personales">./RESIDENCIA/BCN.html
//     ./EDAD/32_AÑOS.css
//     ./ACTUALMENTE/DXC/HelpDeskIt.js</h3>
//     <h3 class="frase">"Los peces muertos son los únicos que siguen la corriente"</h3>
//     </div>
//     <div class="curly_and_aaronphoto">
//     <h2 class="curlybracket">{</h2>
//     <img class="aaron_photo" src="./img/aaron.png" alt="aaron_photo" />
//     <h2 class="curlybracket">}</h2>
//     </div>
//     <div class="data_box_2">
//     <h3 class="my_aspirations">Mis aspiraciones son entrar en el mundo de la programación como web developer y mejorar día a día como frontend dónde creo que tengo mucho que decir y aportar.</h3>
//     <h3 class="my_work_valors">Actualmente trabajo para una empresa IT la cual ofrece servicios a un importante banco a nivel mundial. A demás, soy músico y trabajo en ocasiones como músico de sesión, y grabando música para otros artistas.</h3>
//     </div>
//     <h3 class="mail_contact"></h3>
//     <article class="rrss"></article>
//     <footer class="footer"></footer>
//     `;
//   renderNavbar();
//   renderMailContact();
//   renderRRSSIcons();
//   renderFooter();
// };

// // EXPERIENCE BODY
// const renderExperience = () => {
//   const bodyOfHtml = document.querySelector('body');
//   bodyOfHtml.innerHTML = `
//     <div class="overlay hidden">
//       <div class="slideshow">
//         <span class="btn_close">X</span>
//         <div class="button prev">
//           <button>{</button>
//         </div>
//         <div class="button next">
//           <button>}</button>
//         </div>
//         <img src="" alt="" id="img_slideshow">
//       </div>
//     </div>
//     <div class="navbar"></div>
//     <section class="gallery">
//       <div class="column">
//         <img class="rnovaimg" src="./img/rnova-sll_li1.png" alt="rnova_logo" data-img-show="0">
//         <img src="./img/emergia.jpg" alt="emergia_logo" data-img-show="1">
//         <img src="./img/vodafone.png" alt="vodafone_logo" data-img-show="2">
//         <img src="./img/argom.jpeg" alt="argom_logo" data-img-show="3">
//         <img src="./img/dxc.png" alt="dxc_logo" data-img-show="4">
//       </div>
//     </section>
//     <h3 class="mail_contact"></h3>
//     <article class="rrss"></article>
//     <footer class="footer"></footer>
//     `;
//   renderNavbar();
//   renderMailContact();
//   renderRRSSIcons();
//   renderFooter();

//   // Abrir imagen clicada con overlay
//   const clickImageListener = (ev) => {
//     const overlay = document.querySelector('.overlay');
//     const createImgInfo = document.createElement('h2');
//     createImgInfo.className = 'img_exp_text';
//     createImgInfo.textContent = 'Hola'; /// añadir texto
//     document.body.appendChild(createImgInfo);
//     const imgSlideshow = document.querySelector('#img_slideshow');
//     const clickedImage = ev.target;
//     const imageSource = clickedImage.getAttribute('src');
//     imgSlideshow.setAttribute('src', imageSource);
//     overlay.classList.remove('hidden');
//   };

//   // Evento de click para cada imagen, y cargo el evento de que hacer arriba
//   const images = document.querySelectorAll('img');
//   images.forEach((image) => {
//     image.addEventListener('click', clickImageListener);
//   });

//   // Cerrar ventana overlay e imagen
//   const clickCloseListener = () => {
//     const overlay = document.querySelector('.overlay');
//     overlay.classList.add('hidden');
//   };

//   const closeButton = document.querySelector('.btn_close');
//   closeButton.addEventListener('click', clickCloseListener);
// };
