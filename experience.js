import './style.css';
import './experience_style.css';
import { renderNavbar } from './navbar.js';

// EMAIL
const mailContact = () => {
  const h3Mail = document.createElement('h3');
  const linkMail = document.createElement('a');
  h3Mail.className = 'mail_contact';
  linkMail.className = 'mail_link';
  linkMail.href = 'mailto:a.carrasco9@me.com';
  linkMail.textContent = 'Abierto a nuevos proyectos';
  h3Mail.appendChild(linkMail);
  document.body.appendChild(h3Mail);
};

// RRSS ICONS
const renderRRSSIcons = () => {
  const articleRRSS = document.createElement('article');
  const githubLink = document.createElement('a');
  const githubIMG = document.createElement('img');
  articleRRSS.className = 'rrss';
  githubLink.className = 'github_link';
  githubLink.href = 'https://github.com/AaronSinergia?tab=repositories';
  githubIMG.className = 'github';
  githubIMG.src = './img/GitHubLogo.png';
  githubIMG.alt = 'github_logo';
  githubLink.appendChild(githubIMG);
  articleRRSS.appendChild(githubLink);
  const linkedinLink = document.createElement('a');
  const linkedinIMG = document.createElement('img');
  linkedinLink.className = 'linkedin_link';
  linkedinLink.href = 'https://www.linkedin.com/in/aaron-carrasco-romero/';
  linkedinIMG.className = 'linkedin';
  linkedinIMG.src = './img/1384014.png';
  linkedinIMG.alt = 'linkedin_logo';
  linkedinLink.appendChild(linkedinIMG);
  articleRRSS.appendChild(linkedinLink);
  const netlifyLink = document.createElement('a');
  const netlifyIMG = document.createElement('img');
  netlifyLink.className = 'netlify_link';
  netlifyLink.href = 'https://app.netlify.com/teams/aaronsinergia/sites';
  netlifyIMG.className = 'netlify';
  netlifyIMG.src = './img/netlify_logo_icon_169924.png';
  netlifyIMG.alt = 'netlify_logo';
  netlifyLink.appendChild(netlifyIMG);
  articleRRSS.appendChild(netlifyLink);
  document.body.appendChild(articleRRSS);
};

// FOOTER
const renderFooter = () => {
  const createFooter = document.createElement('footer');
  createFooter.className = 'footer';
  createFooter.textContent = `© Todos los derechos reservados - 2023`;
  document.body.appendChild(createFooter);
};

// OVERLAY EFFECT
const overlayPhoto = () => {
  const createOverlay = document.createElement('div');
  createOverlay.className = 'overlay hidden';
  const createSlideshow = document.createElement('div');
  createSlideshow.className = 'slideshow';
  const createCloseButton = document.createElement('span');
  createCloseButton.className = 'btn_close';
  createCloseButton.textContent = 'X';
  const prevButton = document.createElement('div');
  const createLeftButton = document.createElement('button');
  prevButton.className = 'button prev';
  createLeftButton.textContent = '{';
  const nextButton = document.createElement('div');
  const createRigthButton = document.createElement('button');
  nextButton.className = 'button next';
  createRigthButton.textContent = '}';
  const imgSlideShow = document.createElement('img');
  imgSlideShow.src = '';
  imgSlideShow.alt = '';
  imgSlideShow.id = 'img_slideshow';
  createSlideshow.appendChild(imgSlideShow);
  nextButton.appendChild(createRigthButton);
  createSlideshow.appendChild(nextButton);
  prevButton.appendChild(createLeftButton);
  createSlideshow.appendChild(prevButton);
  createSlideshow.appendChild(createCloseButton);
  createOverlay.appendChild(createSlideshow);
  document.body.appendChild(createOverlay);
};

// GALLERY EXPERIENCE IMAGES
const workGallery = () => {
  const sectionGallery = document.createElement('section');
  sectionGallery.className = 'gallery';
  const divGalleryColumn = document.createElement('div');
  divGalleryColumn.className = 'column';
  const rnovaImg = document.createElement('img');
  rnovaImg.className = 'rnovaimg';
  rnovaImg.src = './img/rnova-sll_li1.png';
  rnovaImg.alt = 'rnova_logo';
  rnovaImg.dataset.imgShow = '0';
  const emergiaImg = document.createElement('img');
  emergiaImg.src = './img/emergia.jpg';
  emergiaImg.alt = 'emergia_logo';
  emergiaImg.dataset.imgShow = '1';
  const vodafoneImg = document.createElement('img');
  vodafoneImg.src = './img/vodafone.png';
  vodafoneImg.alt = 'vodafone_logo';
  vodafoneImg.dataset.imgShow = '2';
  const argomImg = document.createElement('img');
  argomImg.src = './img/argom.jpeg';
  argomImg.alt = 'argom_logo';
  argomImg.dataset.imgShow = '3';
  const dxcImg = document.createElement('img');
  dxcImg.src = './img/dxc.png';
  dxcImg.alt = 'dxc_logo';
  dxcImg.dataset.imgShow = '4';
  divGalleryColumn.appendChild(rnovaImg);
  divGalleryColumn.appendChild(emergiaImg);
  divGalleryColumn.appendChild(vodafoneImg);
  divGalleryColumn.appendChild(argomImg);
  divGalleryColumn.appendChild(dxcImg);
  sectionGallery.appendChild(divGalleryColumn);
  document.body.appendChild(sectionGallery);
};

// RENDER EXPERIENCE
export const renderExperience = () => {
  const bodyOfHtml = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.className = 'title_name';
  h1.textContent = '.../Experiencia';
  bodyOfHtml.appendChild(h1);
  renderNavbar();
  overlayPhoto();
  workGallery();
  mailContact();
  renderRRSSIcons();
  renderFooter();
};
renderExperience();

// Abrir imagen clicada con overlay
const clickImageListener = (ev) => {
  const overlay = document.querySelector('.overlay');
  const createImgInfo = document.createElement('h2');
  createImgInfo.className = 'img_exp_text';
  createImgInfo.textContent = 'Hola'; /// añadir texto
  document.body.appendChild(createImgInfo);
  const imgSlideshow = document.querySelector('#img_slideshow');
  const clickedImage = ev.target;
  const imageSource = clickedImage.getAttribute('src');
  imgSlideshow.setAttribute('src', imageSource);
  overlay.classList.remove('hidden');
};

// Evento de click para cada imagen, y cargo el evento de que hacer arriba
const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('click', clickImageListener);
});

// Cerrar ventana overlay e imagen
const clickCloseListener = () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('hidden');
};

const closeButton = document.querySelector('.btn_close');
closeButton.addEventListener('click', clickCloseListener);

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
