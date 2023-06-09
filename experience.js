// import './style.css';
// import { renderNavbar } from './navbar.js';

// EXPERIENCE BODY
// const renderExperience = () => {
//   bodyOfHtml.innerHTML = `
//     // <div class="overlay hidden">
//     //   <div class="slideshow">
//     //     <span class="btn_close">X</span>
//     //     <div class="button prev">
//     //       <button>{</button>
//     //     </div>
//     //     <div class="button next">
//     //       <button>}</button>
//     //     </div>
//     //     <img src="" alt="" id="img_slideshow">
//     //   </div>
//     // </div>
//     // <div class="navbar"></div>
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

// // Abrir imagen clicada con overlay
// const clickImageListener = (ev) => {
//   const overlay = document.querySelector('.overlay');
//   const createImgInfo = document.createElement('h2');
//   createImgInfo.className = 'img_exp_text';
//   createImgInfo.textContent = 'Hola'; /// añadir texto
//   document.body.appendChild(createImgInfo);
//   const imgSlideshow = document.querySelector('#img_slideshow');
//   const clickedImage = ev.target;
//   const imageSource = clickedImage.getAttribute('src');
//   imgSlideshow.setAttribute('src', imageSource);
//   overlay.classList.remove('hidden');
// };

// // Evento de click para cada imagen, y cargo el evento de que hacer arriba
// const images = document.querySelectorAll('img');
// images.forEach((image) => {
//   image.addEventListener('click', clickImageListener);
// });

// // Cerrar ventana overlay e imagen
// const clickCloseListener = () => {
//   const overlay = document.querySelector('.overlay');
//   overlay.classList.add('hidden');
// };

// const closeButton = document.querySelector('.btn_close');
// closeButton.addEventListener('click', clickCloseListener);
